import { createTheme} from "@mui/material";

 const theme = createTheme({
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            boxShadow: "none",
            borderRadius: 0,
          },
        }
      }, 
      MuiListItemButton:{
         styleOverrides:{
          root:{
            '&:hover':{
              background:'none'
            }
          }
          }  
      },
      MuiToolbar:{
        styleOverrides:{
          root:{
            height:'64px'
          }
        } 
      }, 
    },
  palette:{
    primary:{
      main:'#ECEEEE'
    }
  }  
  });

export default theme  