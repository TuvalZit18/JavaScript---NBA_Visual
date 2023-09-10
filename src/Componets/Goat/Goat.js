import React from "react";
import { Text } from "theme-ui";

const Goat = () => {
  return (
    <Text
      sx={{
        position: "absolute",
        top: "12%",
        left: "50%",
        fontWeight: "bold",
        transform: "translate(-50%, -10%)",
        fontSize: "100px",
        color: "whitesmoke",
        textAlign: "center",
      }}
    >
      Who is the <br /> G.O.A.T
      <br />?
    </Text>
  );
};

export default Goat;
