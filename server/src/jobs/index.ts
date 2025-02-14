import cron from "node-cron";
import { exportUserResponsesAndSendEmail } from "./functions/emailUserReports";



// 11 PM
cron.schedule("0 23 * * *", async () => {
  console.log("Running scheduled task: Exporting user responses...");
  try {
    await exportUserResponsesAndSendEmail();
    console.log("User responses exported and email sent successfully!");
  } catch (error) {
    console.error("Error executing scheduled task:", error);
  }
});

// exportUserResponsesAndSendEmail()