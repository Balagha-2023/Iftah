import React from "react";
import { AppBar, Toolbar, Tabs, Box, Tab, Button, Link } from "@mui/material";
import ApiIcon from "@mui/icons-material/Api";

const links = ["Iftah", "Product", "Solution", "Pricing", "Enterprice"];

const Header = () => {
  return (
    <AppBar sx={{ bgcolor: "transparent", boxShadow: 0 }}>
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            // justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ApiIcon sx={{ color: "black" }} />
          <Box>
            <Tabs component={Link} sx={{ textDecoration: "none" }}>
              {links.map((link, index) => (
                <Tab
                  sx={{
                    fontWaight: "bold",
                    textDecoration: "none",
                    ":hover": {
                      textDecoration: "underline",
                      textUnderLineOffset: "5px",
                    },
                  }}
                  key={index}
                  label={link}
                />
              ))}
            </Tabs>
          </Box>
          <Box display="flex" marginLeft={"auto"}>
            <Button sx={{ mr: 2 }} variant="outlined" color="primary">
              Contact Us
            </Button>

            <Button sx={{ ml: 2 }} variant="contained" color="primary">
              Try for free
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
