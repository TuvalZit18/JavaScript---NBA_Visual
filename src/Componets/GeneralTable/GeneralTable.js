import React from "react";
import { Flex, Text } from "theme-ui";
import { alltimeStats, perGameStats, playoffStats } from "../../Data/stats.js";
import { MyIcon } from "../icons/index.js";

const GeneralTable = ({ col, row, setCategory, topFiveRef, ...props }) => {
  return (
    <Flex
      {...props}
      {...props.sx}
      id="General_Table"
      sx={{
        position: "relative",
        gridColumn: { col },
        gridRow: { row },
        flexDirection: "column",
        height: "80%",
        width: "1000px",
        mx: "20px",
        borderRadius: "20px",
        bg: "rgba(245,245,245,0.8)",
        ...props.sx,
      }}
    >
      <Text
        sx={{
          textAlign: "center",
          width: "100%",
          fontSize: "40px",
          fontWeight: "bold",
        }}
      >
        All-Time Stats
      </Text>
      {alltimeStats.map((stats, index) => {
        return (
          <GeneralRow
            stat1={stats.jordanStat}
            category={stats.category}
            stat2={stats.lebronStat}
            winner={stats.winner}
            setCategory={setCategory}
            topFiveRef={topFiveRef}
          />
        );
      })}
      <Flex
        sx={{
          height: "1px",
          width: "50%",
          bg: "rgba(0,0,0,0.4)",
          alignSelf: "center",
        }}
      />
      <Text
        sx={{
          textAlign: "center",
          width: "100%",
          fontSize: "40px",
          fontWeight: "bold",
        }}
      >
        Per-Game Stats
      </Text>
      {perGameStats.map((stats, index) => {
        return (
          <GeneralRow
            stat1={stats.jordanStat}
            category={stats.category}
            stat2={stats.lebronStat}
            winner={stats.winner}
            setCategory={setCategory}
            topFiveRef={topFiveRef}
          />
        );
      })}

      <MyIcon
        name="comparasion"
        sx={{
          position: "absolute",
          borderBottomRightRadius: "20px",
          borderBottomLeftRadius: "20px",
          left: "0",
          bottom: "0",
          justifySelf: "flex-end",
        }}
      />
    </Flex>
  );
};
export const GeneralRow = ({
  stat1,
  category,
  stat2,
  winner,
  setCategory,
  last = false,
  topFiveRef,
  props,
}) => {
  const onClickHandler = () => {
    setCategory(category);
    // window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    topFiveRef?.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Flex
      onClick={() => onClickHandler()}
      sx={{
        backgroundColor: "rgb(255,255,255)",
        width: "100%",
        alignSelf: "center",
        height: "50px",
        justifyContent: "space-between",
        mb: last ? "0px" : "10px",
        px: "30px",
        opacity: "1",
        ":hover": {
          cursor: "pointer",
          bg:
            winner === "lbj"
              ? "rgb(253, 185, 39)"
              : winner === "mj"
              ? "rgb(206, 17, 65)"
              : "none",
          backgroundImage:
            winner === "tie" &&
            "linear-gradient(90deg, rgb(206, 17, 65) 0%, rgb(253, 185, 39) 100%)",
        },
        borderRadius: "5px",
      }}
    >
      <Text sx={{ fontSize: "30px", alignSelf: "center" }}>{stat1}</Text>
      <Text sx={{ fontSize: "30px", alignSelf: "center" }}>{category}</Text>
      <Text sx={{ fontSize: "30px", alignSelf: "center" }}>{stat2}</Text>
    </Flex>
  );
};

export default GeneralTable;
