import React from "react";
import { Flex } from "theme-ui";

const Side = ({ children, ...props }) => {
  return (
    <Flex
      {...props}
      sx={{
        bg: "rgba(218,218,213,0.8)",
        flexDirection: "column",
        borderRadius: "20px",
        pt: "50px",
        ...props.sx,
      }}
    >
      {children}
    </Flex>
  );
};

export default Side;
