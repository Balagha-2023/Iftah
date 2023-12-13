import React from "react";
import { AppBar, Toolbar, Tabs, Box, Tab } from "@mui/material";
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
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ApiIcon sx={{ color: "black" }} />
          <Box>
            <Tabs>
              {links.map((link, index) => (
                <Tab key={index} label={link} />
              ))}
            </Tabs>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
