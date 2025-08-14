import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import Logo from "../assets/Logo.jpeg";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isLaptop = useMediaQuery(theme.breakpoints.up("md"));
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollOrNavigate = (id) => {
    const scrollToSection = () => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };

    if (id === "home") {
      if (location.pathname !== "/") {
        navigate("/");
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scrollToSection, 300); // wait for DOM to mount
    } else {
      scrollToSection();
    }
  };

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about-us" },
    { label: "Our Products", id: "products-section" },
    { label: "Contact Us", id: "contact-us" },
  ];

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {navLinks.map((link) => (
          <ListItem
            component="button"
            key={link.label}
            onClick={() => {
              handleScrollOrNavigate(link.id);
              setDrawerOpen(false);
            }}
            // Forcefully removing the bottom border using !important
            sx={{ borderBottom: 'none !important' }}
          >
            <ListItemText primary={link.label} />
          </ListItem>
        ))}
        <ListItem
          component="button"
          onClick={() => {
            navigate("/login");
            setDrawerOpen(false);
          }}
          sx={{ borderBottom: 'none !important' }}
        >
          <ListItemText primary="Login" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(0,0,0,0.1)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
          color: "#1A237E",
          zIndex: theme.zIndex.appBar,
          // Increased header height for desktop to prevent logo overflow
          height: { xs: '64px', md: '120px' }, 
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 4 } }}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Box
              component="img"
              src={Logo}
              alt="logo"
              sx={{
                height: { xs: 40, sm: 80, md: 100 },
                width: { xs: 80, sm: 160, md: 200 },
                objectFit: "contain",
                mt: 1,
                ml: -2,
                cursor: "pointer",
              }}
              onClick={() => handleScrollOrNavigate("home")}
            />
          </motion.div>

          {isLaptop ? (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              {navLinks.map((link) => (
                <motion.div
                  key={link.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={() => handleScrollOrNavigate(link.id)}
                    sx={{
                      color: "#1A237E",
                      fontWeight: 600,
                      fontSize: "1rem",
                      textTransform: "none",
                      "&:hover": {
                        color: "#ff66b2",
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    {link.label}
                  </Button>
                </motion.div>
              ))}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => navigate("/login")}
                  variant="outlined"
                  sx={{
                    fontWeight: 600,
                    fontSize: "1rem",
                    textTransform: "none",
                    color: "#1A237E",
                    borderColor: "#1A237E",
                    "&:hover": {
                      borderColor: "#ff66b2",
                      color: "#ff66b2",
                      backgroundColor: "rgba(255, 102, 178, 0.1)",
                    },
                  }}
                >
                  Login
                </Button>
              </motion.div>
            </Box>
          ) : (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
        <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          {drawer}
        </Drawer>
      </AppBar>
    </motion.div>
  );
};

export default Header;





/*import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import Logo from "../assets/Logo.jpeg";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isLaptop = useMediaQuery(theme.breakpoints.up("md"));
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollOrNavigate = (id) => {
    const scrollToSection = () => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };

    if (id === "home") {
      if (location.pathname !== "/") {
        navigate("/");
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scrollToSection, 300); // wait for DOM to mount
    } else {
      scrollToSection();
    }
  };

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about-us" },
    { label: "Our Products", id: "products-section" },
    { label: "Contact Us", id: "contact-us" },
  ];

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {navLinks.map((link) => (
          <ListItem
            component="button" // Fix for the console error
            key={link.label}
            onClick={() => {
              handleScrollOrNavigate(link.id);
              setDrawerOpen(false);
            }}
          >
            <ListItemText primary={link.label} />
          </ListItem>
        ))}
        <ListItem
          component="button" // Fix for the console error
          onClick={() => {
            navigate("/login");
            setDrawerOpen(false);
          }}
        >
          <ListItemText primary="Login" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: "rgba(255, 255, 255, 0.7)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(0,0,0,0.1)",
          color: "#1A237E",
          zIndex: 1301,
          minHeight: { xs: '64px', md: '80px' }, // Made header more compact on mobile
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 4 } }}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Box
              component="img"
              src={Logo}
              alt="logo"
              sx={{
                height: { xs: 40, sm: 80, md: 100 }, // Adjusted logo size for mobile
                width: { xs: 80, sm: 160, md: 200 },
                objectFit: "contain",
                mt: 1,
                ml: -2,
                cursor: "pointer",
              }}
              onClick={() => handleScrollOrNavigate("home")}
            />
          </motion.div>

          {isLaptop ? (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              {navLinks.map((link) => (
                <motion.div
                  key={link.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={() => handleScrollOrNavigate(link.id)}
                    sx={{
                      color: "#1A237E",
                      fontWeight: 600,
                      fontSize: "1rem",
                      textTransform: "none",
                      "&:hover": {
                        color: "#ff66b2",
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    {link.label}
                  </Button>
                </motion.div>
              ))}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => navigate("/login")}
                  variant="outlined"
                  sx={{
                    fontWeight: 600,
                    fontSize: "1rem",
                    textTransform: "none",
                    color: "#1A237E",
                    borderColor: "#1A237E",
                    "&:hover": {
                      borderColor: "#ff66b2",
                      color: "#ff66b2",
                      backgroundColor: "rgba(255, 102, 178, 0.1)",
                    },
                  }}
                >
                  Login
                </Button>
              </motion.div>
            </Box>
          ) : (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>

        <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          {drawer}
        </Drawer>
      </AppBar>
    </motion.div>
  );
};

export default Header;
*/

/*import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Logo from "../assets/Logo.jpeg";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isLaptop = useMediaQuery(theme.breakpoints.up("md"));
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollOrNavigate = (id) => {
  const scrollToSection = () => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (id === "home") {
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return;
  }

  if (location.pathname !== "/") {
    navigate("/");
    setTimeout(scrollToSection, 300); // wait for DOM to mount
  } else {
    scrollToSection();
  }
};


  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about-us" },
    { label: "Blogs", id: "blogs" },
    { label: "Contact Us", id: "contact-us" },
  ];

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {navLinks.map((link) => (
          <ListItem
            button
            key={link.label}
            onClick={() => {
              handleScrollOrNavigate(link.id);
              setDrawerOpen(false);
            }}
          >
            <ListItemText primary={link.label} />
          </ListItem>
        ))}
        <ListItem
          button
          onClick={() => {
            navigate("/login");
            setDrawerOpen(false);
          }}
        >
          <ListItemText primary="Login" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar
      position="static"
      elevation={4}
      sx={{
        bgcolor: "white",
        color: "#1A237E",
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        zIndex: 1301,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 4 } }}>
        <Box
          component="img"
          src={Logo}
          alt="logo"
          sx={{
            height: { xs: 70, sm: 80, md: 100 },
            width: { xs: 140, sm: 160, md: 200 },
            objectFit: "contain",
            mt: 1,
            ml: -2,
            cursor: "pointer",
          }}
          onClick={() => handleScrollOrNavigate("home")}
        />

        {isLaptop ? (
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {navLinks.map((link) => (
              <Button
                key={link.label}
                onClick={() => handleScrollOrNavigate(link.id)}
                sx={{
                  color: "#1A237E",
                  fontWeight: 600,
                  fontSize: "1rem",
                  textTransform: "none",
                  "&:hover": {
                    color: "#ff66b2",
                    backgroundColor: "transparent",
                  },
                }}
              >
                {link.label}
              </Button>
            ))}
            <Button
              onClick={() => navigate("/login")}
              variant="outlined"
              sx={{
                fontWeight: 600,
                fontSize: "1rem",
                textTransform: "none",
                color: "#1A237E",
                borderColor: "#1A237E",
                "&:hover": {
                  borderColor: "#ff66b2",
                  color: "#ff66b2",
                  backgroundColor: "transparent",
                },
              }}
            >
              Login
            </Button>
          </Box>
        ) : (
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Header;*/
