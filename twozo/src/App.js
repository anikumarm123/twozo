import "./App.css";
import { NavigationBar } from "./NavigationBar";
import { Box } from "@mui/material";
import { Header } from "./Header";


function App() {
  return (
    <Box sx={{display:'flex'}}>
      <NavigationBar />
      <Header/>
    </Box>
  );
}

export default App;
