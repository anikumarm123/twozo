import React, { useState } from "react";
import logo from "../assets/images/twozo.png";
import Deals from "../assets/icons/deals";
import Contact from "../assets/icons/contact";
import Company from "../assets/icons/company";
import Product from "../assets/icons/product";
import Settings from "../assets/icons/settings";
import profile from "../assets/images/PROFILE.png";
import {
  Paper,
  Box,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";

export const NavigationBar = () => {
  const ListButtons = [Deals, Contact, Company, Product, Settings];
  const [selectedModulesIndex, setSelectedModulesIndex] = useState(0);

  return (
      <Paper
        sx={{ backgroundColor: "#272937", width: "60px", height: "100vh" }}
      >
        <Toolbar disableGutters>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <img src={logo} alt="logo" width="85px" />
          </Box>
        </Toolbar>
        <Box>
          <List>
            {ListButtons.map((navButton, index) => (
              <ListItem disablePadding key={index}>
                <ListItemButton
                  sx={{
                    height: "52px",
                    margin: "5px",
                    borderRadius: "8px",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor:
                      index === selectedModulesIndex
                        ? "#33BC7E"
                        : "transparent",
                    color: "#fff",
                  }}
                  onClick={() => {
                    setSelectedModulesIndex(index);
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    {navButton("22", "22", "#fff")}
                  </Box>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
        <Toolbar
          sx={{
            height: "200px",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <Box>
            <img
              src={profile}
              style={{ width: "30px", borderRadius: "50%" }}
              alt="profile"
            />
          </Box>
        </Toolbar>
      </Paper>
  );
};
