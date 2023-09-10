import React from "react";
import { Flex } from "theme-ui";

const TableContainer = ({ children, ...props }) => {
  return (
    <Flex
      {...props}
      sx={{
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        ...props.sx,
      }}
    >
      {children}
    </Flex>
  );
};

export default TableContainer;
