import { AccountCircleOutlined, ArticleOutlined, HomeOutlined, LiveHelpOutlined, Menu } from "@mui/icons-material";
import {
  Box,
  IconButton,
  Stack,
  SxProps,
  Theme,
  Typography,
  useTheme,
  Backdrop,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useTheme();
  const navigate = useNavigate();

  const IconProps: SxProps<Theme> = { color: "#ffffff", fontSize: "32px" };

  const navigations = [
    {
      icon: <HomeOutlined sx={IconProps} />,
      name: "Home",
      path: "/onboaridng/1",
    },
    { icon: <LiveHelpOutlined sx={IconProps} />, name: "FAQs", path: "/faqs" },
    {
      icon: <ArticleOutlined sx={IconProps} />,
      name: "Program",
      path: "/onboarding/3",
    },
    { icon: <AccountCircleOutlined sx={IconProps} />, name: "Sign up", path: "/login" },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <>
      <IconButton onClick={() => setMenuOpen(true)}>
        <Menu sx={{ color: "#fff" }} />
      </IconButton>

      <Backdrop
        sx={{
          zIndex: 8,
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(2px)",
        }}
        open={menuOpen}
        onClick={() => setMenuOpen(false)}
      />

      <Stack
        sx={{
          bgcolor: theme.palette.primary.main,
          padding: "40px 24px",
          borderRadius: "5px 0 0 5px",
          alignItems: "center",
          gap: "28px",
          position: "fixed",
          zIndex: 10,
          right: menuOpen ? 0 : "-100%",
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "right 0.3s ease-in-out",
          width: "fit-content",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {navigations.map((item, index) => (
          <Box
            key={index}
            sx={{
              cursor: "pointer",
              "&:hover": {
                opacity: 0.8,
              },
            }}
            onClick={() => handleNavigation(item.path)}
          >
            <IconButton sx={{ padding: 0 }}>{item.icon}</IconButton>
            <Typography textAlign="center" color="#fff" fontSize="10px">
              {item.name}
            </Typography>
          </Box>
        ))}
      </Stack>
    </>
  );
};

export default HamburgerMenu;
