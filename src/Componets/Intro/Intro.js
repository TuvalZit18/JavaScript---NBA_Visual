import React from "react";
import { Text } from "theme-ui";

const Intro = () => {
  return (
    <Text
      sx={{
        position: "absolute",
        top: "0",
        left: "50%",
        fontSize: "28px",
        color: "whitesmoke",
        transform: "translate(-50%, 0%)",
        textAlign: "center",
      }}
    >
      This is infografic that present the comparasion between arguably the best
      players that played the game of basketball.
      <br />
      You can hover each one of the trophies to see when and with which team the
      player won this trophy.
      <br />
      Each row in the table is <b>clickable</b> to see wider prespective. Yellow
      row means LeBron won, red row mean Jordan
    </Text>
  );
};

export default Intro;
