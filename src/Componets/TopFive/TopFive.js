import React from "react";
import { Flex, Text } from "theme-ui";
import teamColors from "../../Data/colors.json";
import {
  topAssists,
  topBlocks,
  topFieldGoal,
  topGames,
  topRebounds,
  topScorers,
  topSteals,
  topTurnovers,
  topPPG,
  topAPG,
  topBPG,
  topRPG,
  topSPG,
  topTOV,
} from "../../Data/stats";
import { MyIcon } from "../icons";
import { forwardRef } from "react";
const TopFive = forwardRef(({ category }, ref) => {
  let max, data;
  if (category)
    switch (category) {
      case "Games":
        max = "Games Played";
        data = topGames;
        break;
      case "Points":
        max = "Scorers";
        data = topScorers;
        break;
      case "Rebounds":
        max = "Rebounders";
        data = topRebounds;
        break;
      case "Assists":
        max = "Passers";
        data = topAssists;
        break;
      case "Steals":
        max = "Stealers";
        data = topSteals;
        break;
      case "Blocks":
        max = "Blockers";
        data = topBlocks;
        break;
      case "Field Goal %":
        max = "Field Goal %";
        data = topFieldGoal;
        break;
      case "Turnovers":
        max = "Turnovers";
        data = topTurnovers;
        break;
      case "PPG":
        max = "PPG";
        data = topPPG;
        break;
      case "RPG":
        max = "RPG";
        data = topRPG;
        break;
      case "APG":
        max = "APG";
        data = topAPG;
        break;
      case "SPG":
        max = "SPG";
        data = topSPG;
        break;
      case "BPG":
        max = "BPG";
        data = topBPG;
        break;
      case "TOV":
        max = "TOV";
        data = topTOV;
        break;
    }
  return (
    <Flex
      ref={ref}
      sx={{
        flexDirection: "column",
        bg: "rgba(245,245,245,0.8)",
        width: "1540px",
        borderRadius: "20px",
        mt: "20px",
      }}
    >
      {category && (
        <Text
          sx={{
            color: "Black",
            fontSize: "40px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >{`All-Time Top Five ${max} of the NBA`}</Text>
      )}
      <Flex sx={{ justifyContent: "space-between" }}>
        {data?.map((player, index) => {
          const color = teamColors.find(
            (team) => team.team === player.team
          ).Color;
          return (
            <Flex
              key={index}
              sx={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flex: "1",
              }}
            >
              <MyIcon sx={{ height: "400px" }} name={player.name} />
              <Text>{index + 1}</Text>
              <Text>{player.name}</Text>
              <Flex
                sx={{
                  borderRadius: "9999px",
                  width: "100px",
                  height: "100px",
                  bg: color ?? "black",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: "5px",
                }}
              >
                <Text sx={{ fontWeight: "bold", color: "white" }}>
                  {player.stats}
                </Text>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
});

export default TopFive;
