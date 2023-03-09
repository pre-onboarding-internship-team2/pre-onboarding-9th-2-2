import { Stack } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import NavigationBar from "./navigation-bar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [inView, setInView] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      setInView(entries[0].isIntersecting);
    });

    if (targetRef.current) {
      io.observe(targetRef.current);
    }

    return () => io.disconnect();
  }, []);

  return (
    <>
      <NavigationBar inView={inView} />
      <div ref={targetRef} />
      <Stack pt={20}>{children}</Stack>
    </>
  );
};

export default Layout;
