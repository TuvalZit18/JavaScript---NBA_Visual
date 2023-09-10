import { Flex, Text } from "theme-ui";
import GeneralTable from "./Componets/GeneralTable/GeneralTable";
import TableContainer from "./Componets/TableContainer/TableContainer";
import TableHeader from "./Componets/TableHeader/TableHeader";
import TrophyGrid from "./Componets/TrophyGrid";
import Layout from "./layouts/Layout";
import Side from "./Componets/Side/Side";
import Career from "./Componets/Career/Career";
import TopFive from "./Componets/TopFive/TopFive";
import { useEffect, useState, useRef } from "react";
import RaceBarChart from "./Componets/RaceBarChart/RaceBarChart";
import Intro from "./Componets/Intro/Intro";
import Goat from "./Componets/Goat/Goat";
import { MyIcon } from "./Componets/icons";
function App() {
  const [category, setCategory] = useState(null);
  const topFiveRef = useRef(null);
  const preventZoom = (event) => {
    // Prevent zooming on Ctrl + / Ctrl + + / Ctrl + -
    if (
      event.ctrlKey &&
      (event.key === "0" || event.key === "+" || event.key === "-")
    ) {
      event.preventDefault();
    }
  };
  const preventCtrlScrollZoom = (event) => {
    // Prevent zooming from mouse scroll while Ctrl is pressed
    if (event.ctrlKey || event.metaKey) {
      event.preventDefault();
    }
  };
  useEffect(() => {
    // Add the event listener when the component mounts
    document.addEventListener("keydown", preventZoom);
    document.addEventListener("gesturestart", preventZoom);
    document.addEventListener("wheel", preventCtrlScrollZoom, {
      passive: false,
    }); // Use passive: false to prevent scrolling

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("keydown", preventZoom);
      document.removeEventListener("gesturestart", preventZoom);
      document.removeEventListener("wheel", preventCtrlScrollZoom);
    };
  }, []);
  return (
    <Layout>
      <Goat />
      <TableContainer sx={{ gridColumn: "2" }}>
        <TableHeader />
      </TableContainer>
      <Flex>
        <Side>
          <Text
            sx={{ textAlign: "center", fontSize: "40px", fontWeight: "bold" }}
          >
            MJ
          </Text>
          <MyIcon
            sx={{
              width: "200px",
              height: "200px",
              alignSelf: "center",
              ":hover": {
                filter: "drop-shadow(0px -20px 20px rgba(206, 17, 65))",
              },
            }}
            name="jordanLogo"
          />
          <TrophyGrid player="jordan" category="Titles" />
          <TrophyGrid player="jordan" category="Final MVP's" />
          <TrophyGrid player="jordan" category="MVP's" />
          <TrophyGrid player="jordan" category="AllStarsMVP's" />
          <Career player={"mj"} />
        </Side>
        <TableContainer>
          <GeneralTable setCategory={setCategory} topFiveRef={topFiveRef} />
        </TableContainer>
        <Side>
          <Text
            sx={{ textAlign: "center", fontSize: "40px", fontWeight: "bold" }}
          >
            King James
          </Text>
          <MyIcon
            sx={{
              width: "200px",
              height: "200px",
              alignSelf: "center",
              ":hover": {
                filter: "drop-shadow(0px -20px 20px rgba(253, 185, 39,1))",
              },
            }}
            name="lebronLogo"
          />
          <TrophyGrid player="lebron" category="Titles" />
          <TrophyGrid player="lebron" category="Final MVP's" />
          <TrophyGrid player="lebron" category="MVP's" />
          <TrophyGrid player="lebron" category="AllStarsMVP's" />
          {/* <TrophyGrid player="lebron" category="AllStars Appearences" /> */}
          <Career player={"lbj"} />
        </Side>
      </Flex>
      <TopFive category={category} ref={topFiveRef} />
      <RaceBarChart category={category} />
    </Layout>
  );
}

export default App;
