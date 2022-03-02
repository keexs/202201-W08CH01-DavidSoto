import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar></NavBar>
      {children}
    </>
  );
};

export default Layout;
