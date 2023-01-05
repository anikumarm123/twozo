import { Paper, Box,TextField, InputAdornment } from "@mui/material";
import React from "react";
import SearchIcon from "../assets/icons/searchIcon";
import NotificationIcon from "../assets/icons/notificationIcon";

export const Header = () => {

  return (
    <Paper
      sx={{
        display: "flex",
        height: "48px",
        width: "100%",
        backgroundColor: "#F4F5F5",
        padding: "8px",
        alignItems: "center",
        justifyContent:'space-between'
      }}
    >
        <Box >
          <TextField 
           color="primary"
           InputProps={{
            startAdornment:(
              <InputAdornment position="start" sx={{padding:'0px 8px'}}>
                {SearchIcon('18','18','#000000de')}
              </InputAdornment>
              ),
            style:{
              borderRadius:'6px',
              backgroundColor:'#ECEEEE',
              height:'42px',
              width:'500px'
            } 
           }}
           focused
           placeholder="Search"
          />
        </Box>
        <Box sx={{padding:'0px 20px'}}>
         {NotificationIcon('20','20','#000000de')}
        </Box>
    </Paper>
  );
};
