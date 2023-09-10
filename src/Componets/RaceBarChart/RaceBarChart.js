import React from "react";
import { Flex } from "theme-ui";

const RaceBarChart = ({ category, ...props }) => {
  let source;
  if (category) {
    switch (category) {
      case "Games":
        source = "14523287";
        break;
      case "Points":
        source = "14123527";
        break;
      case "Assists":
        source = "14524661";
        break;
      case "Rebounds":
        source = "14526537";
        break;
      case "Steals":
        source = "14526711";
        break;
      case "Blocks":
        source = "14535273";
        break;
      case "Turnovers":
        source = "14535691";
        break;
      default:
        source = null;
        break;
    }
  }
  if (source)
    return (
      <Flex sx={{ width: "1540px", mt: "20px" }}>
        <iframe
          src={`https://flo.uri.sh/visualisation/${source}/embed`}
          title="Interactive or visual content"
          class="flourish-embed-iframe"
          frameborder="0"
          style={{ width: "100%", height: "800px", borderRadius: "20px" }}
          sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
        ></iframe>
      </Flex>
    );
};

export default RaceBarChart;
