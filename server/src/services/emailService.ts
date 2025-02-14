import { SESClient, SendEmailCommand, SendRawEmailCommand } from "@aws-sdk/client-ses";

const sesClient = new SESClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY || "",
    secretAccessKey: process.env.AWS_SECRET_KEY || "",
  },
});

interface EmailParams {
  to: string[];
  cc?: string[];
  bcc?: string[];
  subject: string;
  body: string;
  htmlBody?: string;
  attachments?: { name: string; content: Buffer; mimeType: string }[];
}

export const sendEmail = async ({
  to,
  cc = [],
  bcc = [],
  subject,
  body,
  htmlBody,
  attachments = [],
}: EmailParams): Promise<void> => {
  try {
    const params = {
      Source: process.env.SENDER_EMAIL || "your-email@example.com",
      Destination: {
        ToAddresses: to,
        CcAddresses: cc,
        BccAddresses: bcc,
      },
      Message: {
        Subject: { Data: subject },
        Body: {
          Text: { Data: body },
          ...(htmlBody ? { Html: { Data: htmlBody } } : {}),
        },
      },
    };

    if (attachments.length > 0) {
      const rawParams = {
        Source: params.Source,
        Destinations: to,
        RawMessage: {
          Data: buildRawEmail(to, subject, body, htmlBody, attachments),
        },
      };
      await sesClient.send(new SendRawEmailCommand(rawParams));
    } else {
      await sesClient.send(new SendEmailCommand(params));
    }

    console.log(`Email sent to ${to.join(", ")}`);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

const buildRawEmail = (
  to: string[],
  subject: string,
  body: string,
  htmlBody: string | undefined,
  attachments: { name: string; content: Buffer; mimeType: string }[]
): Buffer => {
  const boundary = `NextPart_${Date.now()}`;
  let rawMessage = `From: ${process.env.SENDER_EMAIL}\n`;
  rawMessage += `To: ${to.join(", ")}\n`;
  rawMessage += `Subject: ${subject}\n`;
  rawMessage += `MIME-Version: 1.0\n`;
  rawMessage += `Content-Type: multipart/mixed; boundary="${boundary}"\n\n`;

  rawMessage += `--${boundary}\n`;
  rawMessage += `Content-Type: text/plain; charset="UTF-8"\n\n`;
  rawMessage += `${body}\n\n`;

  if (htmlBody) {
    rawMessage += `--${boundary}\n`;
    rawMessage += `Content-Type: text/html; charset="UTF-8"\n\n`;
    rawMessage += `${htmlBody}\n\n`;
  }

  for (const attachment of attachments) {
    rawMessage += `--${boundary}\n`;
    rawMessage += `Content-Type: ${attachment.mimeType}; name="${attachment.name}"\n`;
    rawMessage += `Content-Disposition: attachment; filename="${attachment.name}"\n`;
    rawMessage += `Content-Transfer-Encoding: base64\n\n`;
    rawMessage += `${attachment.content.toString("base64")}\n\n`;
  }

  rawMessage += `--${boundary}--`;

  return Buffer.from(rawMessage);
};

