import React from "react";
import { Flex } from "@theme-ui/components";
import backgroundImage from "../../Componets/icons/lebron_jordan.png";
const Layout = ({ children }) => {
  return (
    <Flex
      id="Layout"
      sx={{
        flexDirection: "column",
        minHeight: "100vh",
        overflowX: "hidden",
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "repeat-y",
        backgroundSize: "contain",
        backgroundPositionY: "-300px",
      }}
    >
      <Flex
        sx={{
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
          pt: "500px",
        }}
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default Layout;
