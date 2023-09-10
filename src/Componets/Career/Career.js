import React from "react";
import { lebronCareer, jordanCareer } from "../../Data/stats";
import { Flex, Text } from "theme-ui";
import { MyIcon } from "../icons";
const Career = ({ player }) => {
  let data = player === "lbj" ? lebronCareer : jordanCareer;
  return (
    <Flex sx={{ flexDirection: "column" }}>
      {data.map((period, index) => {
        return (
          <Flex
            key={index}
            sx={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MyIcon
              sx={{
                height: "100px",
                ":hover": {
                  filter: "drop-shadow(0px 0px 10px rgba(0, 0, 0,1))",
                },
              }}
              name={period.team}
            />
            <Text>{period.team}</Text>
            <Text>{period.years}</Text>
            {period.comments.length > 0 && <Text>{period.comments}</Text>}
          </Flex>
        );
      })}
    </Flex>
  );
};

export default Career;
