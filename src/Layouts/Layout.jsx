import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import { useUserStates } from "../Context/Context";

const Layout = () => {
  const { state } = useUserStates();
  return (
    <>
      <Navbar data-bs-theme={state.theme} />
      <Outlet data-bs-theme={state.theme} />
      <Footer data-bs-theme={state.theme} />
    </>
  );
};

export default Layout;
