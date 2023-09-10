import React from "react";
import { Flex, Text } from "theme-ui";

const Title = () => {
  return (
    <Flex sx={{ flexDirection: "column" }}>
      <Text sx={{ fontSize: "52px", textAlign: "center", color:"whiteSmoke" }}>
        Who Is The Goat?
      </Text>
    </Flex>
  );
};

export default Title;
