import React, { useEffect, useState } from "react";
import { Flex, Text } from "theme-ui";
import Tooltip from "../ToolTip";
import { MyIcon } from "../icons";
import lebronData from "../../Data/lebron.json";
import jordanData from "../../Data/jordan.json";

const TrophyGrid = ({ player, category, divider = true }) => {
  const [categoryObjects, setCategoryObjects] = useState(null);
  const [size, setSize] = useState(null);
  const data = player == "lebron" ? lebronData : jordanData;
  useEffect(() => {
    switch (category) {
      case "Titles":
        setCategoryObjects(data?.titles);
        setSize(Object.values(data?.titles).length);
        break;
      case "Final MVP's":
        setCategoryObjects(data?.final_mvps);
        setSize(Object.values(data?.final_mvps).length);
        break;
      case "MVP's":
        setCategoryObjects(data?.mvps);
        setSize(Object.values(data?.mvps).length);
        break;
      case "AllStarsMVP's":
        setCategoryObjects(data?.allstars_mvps);
        setSize(Object.values(data?.allstars_mvps).length);
        break;
      case "AllStars Appearences":
        setCategoryObjects(data?.AllStars);
        setSize(Object.values(data?.AllStars).length);
        break;
    }
  }, [category]);

  if (categoryObjects && size > 0)
    return (
      <Flex
        id="trophy_grid"
        sx={{
          flexDirection: "column",
          width: "250px",
          alignItems: "center",
          mb: "20px",
        }}
      >
        <Text
          sx={{
            textAlign: "center",
            my: "10px",
            fontSize: "20px",
            color: "black",
            fontWeight: "bold",
            alignSelf: "center",
          }}
        >{`${size} ${category}`}</Text>
        <Flex
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gridTemplateRows:
              size % 3 === 0
                ? `repeat(${size / 3},1fr)`
                : `repeat(${parseInt(size / 3) + 1},1fr)`,
            gap: "0px",
            width: "100%",
            mb: "10px",
          }}
        >
          {Object.values(categoryObjects).map((obj, index) => {
            return (
              <Tooltip
                sx={{
                  gridRow: `${parseInt(index / 3, 10) + 1}`,
                  gridColumn:
                    size % 3 == 1 && index == size - 1
                      ? "2"
                      : `${(index % 3) + 1}`,
                }}
                key={index}
                title={obj.year}
                team={obj.team}
              >
                <MyIcon
                  sx={{
                    ":hover": {
                      filter: "drop-shadow(0px 0px 10px rgba(0, 0, 0,1))",
                    },
                  }}
                  name={category}
                />
              </Tooltip>
            );
          })}
        </Flex>
        {divider && (
          <Flex
            sx={{
              height: "1px",
              bg: "black",
              width: "75%",
            }}
          ></Flex>
        )}
      </Flex>
    );
};

export default TrophyGrid;
