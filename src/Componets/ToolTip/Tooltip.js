import React, { useState } from "react";
import { Flex } from "theme-ui";
import { MyIcon } from "../icons";

const Tooltip = ({ children, title, team, ...props }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <Flex
      className="tooltip-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
      {...props.sx}
      sx={{
        position: "relative",
        display: "flex",
        ...props.sx,
      }}
    >
      <Flex sx={{ cursor: "pointer" }}>{children}</Flex>
      {showTooltip && (
        <Flex
          sx={{
            position: "absolute",
            top: "-50%",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "rgba(245,245,245,1)",
            color: "#282828",
            padding: "5px 10px",
            borderRadius: "4px",
            fontSize: "14px",
            opacity: showTooltip ? 1 : 0,
            whiteSpace: "nowrap",
            transition: "opacity 0.5s ease",
            flexDirection: "column",
            weight: "200px",
            transform: "scale(1.5)",
          }}
          className="tooltip"
        >
          <Flex>{title}</Flex>
          <MyIcon name={team} />
        </Flex>
      )}
    </Flex>
  );
};

export default Tooltip;
