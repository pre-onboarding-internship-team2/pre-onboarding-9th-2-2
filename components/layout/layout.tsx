import NavigationBar from "./navigation-bar";
import classes from "./layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavigationBar />
      <main className={classes.layout}>{children}</main>
    </>
  );
};

export default Layout;
