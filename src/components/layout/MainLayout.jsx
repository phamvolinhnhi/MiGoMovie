import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";
import Topbar from "../common/Topbar";


      
const MainLayout = () => {
  const dispatch = useDispatch();
  
  return (
    <>
      <Box display="flex" minHeight="100vh">

        {/* header */}
        <Topbar />
        {/* header */}

        {/* main */}
        <Box
          component="main"
          flexGrow={1}
          overflow="hidden"
          minHeight="100vh"
        >
          <Outlet />
        </Box>
        {/* main */}
      </Box>

      {/* footer */}
      <Footer />
      {/* footer */}

    </>
  );
};

export default MainLayout;