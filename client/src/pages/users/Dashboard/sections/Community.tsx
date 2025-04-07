import { Box, Grid2, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
const membersData = [
  { city: "Mumbai", percentage: 15 },
  { city: "Chennai", percentage: 13 },
  { city: "Bangalore", percentage: 5 },
  { city: "Delhi NCR", percentage: 9 },
  { city: "Kolkata", percentage: 11 },
  { city: "Chandigarh", percentage: 12 },
  { city: "Pune", percentage: 8 },
  { city: "Ahmedabad", percentage: 10 },
  { city: "Surat", percentage: 7 },
  { city: "Indore", percentage: 6 },
  { city: "Coimbatore", percentage: 4 },
];

const Community = () => {
  const theme = useTheme();
  return (
    <Box>
      <Typography
        sx={{
          fontWeight: "600",
          fontSize: "20px",
        }}
      >
        Community
      </Typography>

      <Box
        marginTop={"10px"}
        sx={{
          padding: "22px 23px",
          bgcolor: theme.palette.lmsprimary.greyLight,
        }}
      >
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "25px",
          }}
        >
          <span style={{ fontWeight: 700 }}>1,450</span> Members
        </Typography>

        {/* Members List */}
        <Stack marginTop={"40px"} gap="10px">
          {membersData.map((member, index) => (
            <Grid2 key={index} container>
              {/* City Name */}
              <Grid2 size={4}>
                <Typography fontSize={"12px"} fontWeight="400">
                  {member.city}
                </Typography>
              </Grid2>

              {/* Graph Bar & Percentage Container */}
              <Grid2
                size={8}
                sx={{ display: "flex", alignItems: "center", gap: "4px" }}
              >
                {/* Progress Bar */}
                <Box
                  sx={{
                    width: `${member.percentage}%`, // Bar width dynamically adjusted
                    height: "16px",
                    backgroundColor: theme.palette.lmsprimary.main,
                  }}
                />

                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 400,
                  }}
                >
                  {member.percentage}%
                </Typography>
              </Grid2>
            </Grid2>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default Community;
