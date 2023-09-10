import React from "react";
import { Flex, Image, Text } from "theme-ui";
import NBA_logo from "../../Componets/icons/nbaLogo.png";
const TableHeader = ({ ...props }) => {
  return (
    <Flex
      {...props}
      id="Table_Header"
      sx={{
        width: "100%",
        justifyContent: "space-between",
        height: "250px",
      }}
    >
      <Flex
        sx={{
          flexDirection: "column",

          gridColumn: "1",
          textAlign: "center",
          color: "whitesmoke",
          fontSize: "40px",
          background: "rgba(255,255,255,0.3)",
        }}
      >
        <Text
          sx={{
            textAlign: "center",
            py: "20px",
            ":hover": {
              filter: "drop-shadow(0px 0px 10px rgb(206, 17, 65))",
            },
          }}
        >
          Michael Jordan
        </Text>
      </Flex>
      <Flex
        sx={{
          flexDirection: "column",
          gridColumn: "2",
          textAlign: "center",
          color: "whitesmoke",
          fontSize: "40px",
          alignItems: "center",
          background: "rgba(255,255,255,0.3)",
          width: "100%",
          height: "100%",
        }}
      >
        <Flex sx={{ flexDirection: "column" }}>
          <Text>NBA</Text>
          <Image sx={{ height: "100px", width: "100px" }} src={NBA_logo} />
        </Flex>
        <Text sx={{}}>Comparasion</Text>
        <Flex
          sx={{
            bg: "rgba(245,245,245,0.8)",
            height: "1px",
            width: "100%",
          }}
        />
      </Flex>
      <Flex
        sx={{
          flexDirection: "column",
          gridColumn: "3",
          color: "whitesmoke",
          fontSize: "40px",
          background: "rgba(255,255,255,0.3)",
          height: "100%",
        }}
      >
        <Text
          sx={{
            textAlign: "center",
            py: "20px",
            ":hover": {
              filter: "drop-shadow(0px 0px 10px rgb(253, 185, 39))",
            },
          }}
        >
          LeBron James
        </Text>{" "}
      </Flex>
    </Flex>
  );
};

export default TableHeader;
