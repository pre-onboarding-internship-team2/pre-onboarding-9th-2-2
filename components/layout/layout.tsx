import { Stack } from "@chakra-ui/react";
import NavigationBar from "./navigation-bar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavigationBar />
      <Stack pt={20}>{children}</Stack>
    </>
  );
};

export default Layout;
