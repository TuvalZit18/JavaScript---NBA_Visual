import React from "react";
//import { useThemeUI } from "@theme-ui/core";
import { Image } from "@theme-ui/components";
import lebronImage from "./lebronMid.png";
import nbaTrophy from "./nbaTrophy.png";
import lakers from "./lakers.png";
import bulls from "./bulls.png";
import heat from "./miami.png";
import cleveland from "./cleveland.png";
import wizards from "./WashingtonWizards.png";
import finalMVP from "./finalMVP.png";
import kareem from "./skyhook.png";
import mvp from "./mvp.png";
import mailman from "./Karl Malone.png";
import kobe from "./mamba.png";
import jordanShooting from "./jordan.png";
import parish from "./parish.png";
import carter from "./carter.png";
import dirk from "./dirkpng.png";
import kidd from "./Jasonkidd.png";
import stockton from "./stockton.png";
import lebronLogo from "./LeBron-James-logo.png";
import jordanLogo from "./jordanLogo.png";
import cp3 from "./cp3.png";
import glove from "./theGlove.png";
import deAndre from "./deAndreJordan.png";
import rudy from "./rudy.png";
import capela from "./capela.png";
import harrell from "./harrell.png";
import dikembe from "./nonono.png";
import artisGilmore from "./artis.png";
import markEaton from "./Mark_Eaton.png";
import hakeem from "./hakeem.png";
import deandreAyton from "./deandreAyton.png";
import steveNash from "./steve-nash.png";
import wilt from "./wilt.png";
import bill from "./bill.png";
import mosesMalone from "./mosesMalone.png";
import westbrook from "./westbrook.png";
import comparasion from "./Jordan_VS_Lebron.jpg";
import allstarsMVP from "./allStarMVP.png";
import ElginBaylor from "./baylor.png";
import durant from "./durant.png";
import joel from "./embiid.png";
import pettit from "./pettit.png";
import lucas from "./JerryLucas.png";
import nate from "./Nate.png";
import magic from "./Magic Johnson.png";
import oscar from "./Oscar Robertson.png";
import thomas from "./Isiah Tomas.png";
import alvin from "./Alvin Robertson.png";
import micheal from "./Micheal Ray Richardson.png";
import fatty from "./Fatty Taylor.png";
import mookie from "./mookie Blaylock.png";
import bol from "./Manute Bol.png";
import david from "./David Robinson.png";
import elmore from "./Elmore Smith.png";
import wall from "./John Wall.png";
import harden from "./James Harden.png";
const MyIcon = ({ name, ...props }) => {
  //const { theme } = useThemeUI();
  switch (name) {
    case "LeBron James":
      return (
        <Image
          src={lebronImage}
          {...props}
          sx={{ objectFit: "fill", ...props.sx }}
        />
      );
    case "Kareem Abdul-Jabbar":
      return (
        <Image
          src={kareem}
          {...props}
          sx={{ objectFit: "fill", ...props.sx }}
        />
      );
    case "Kobe Bryant":
      return (
        <Image src={kobe} {...props} sx={{ objectFit: "fill", ...props.sx }} />
      );

    case "Karl Malone":
      return (
        <Image
          src={mailman}
          {...props}
          sx={{ objectFit: "fill", ...props.sx }}
        />
      );
    case "Michael Jordan":
      return (
        <Image
          src={jordanShooting}
          {...props}
          sx={{ objectFit: "fill", ...props.sx }}
        />
      );
    case "Robert Parish":
      return (
        <Image
          src={parish}
          {...props}
          sx={{ objectFit: "fill", ...props.sx }}
        />
      );
    case "Vince Carter":
      return (
        <Image
          src={carter}
          {...props}
          sx={{ objectFit: "fill", ...props.sx }}
        />
      );
    case "Dirk Nowitzki":
      return (
        <Image src={dirk} {...props} sx={{ objectFit: "fill", ...props.sx }} />
      );
    case "John Stockton":
      return (
        <Image
          src={stockton}
          {...props}
          sx={{ objectFit: "fill", ...props.sx }}
        />
      );
    case "Jason Kidd":
      return (
        <Image src={kidd} {...props} sx={{ objectFit: "fill", ...props.sx }} />
      );
    case "Chris Paul":
      return (
        <Image src={cp3} {...props} sx={{ objectFit: "fill", ...props.sx }} />
      );
    case "Gary Payton":
      return (
        <Image src={glove} {...props} sx={{ objectFit: "fill", ...props.sx }} />
      );
    case "DeAndre Jordan":
      return (
        <Image
          src={deAndre}
          {...props}
          sx={{ objectFit: "fill", ...props.sx }}
        />
      );
    case "Rudy Gobert":
      return (
        <Image src={rudy} {...props} sx={{ objectFit: "fill", ...props.sx }} />
      );
    case "Clint Capela":
      return (
        <Image
          src={capela}
          {...props}
          sx={{ objectFit: "fill", ...props.sx }}
        />
      );
    case "Montrezl Harrell":
      return (
        <Image
          src={harrell}
          {...props}
          sx={{ objectFit: "fill", ...props.sx }}
        />
      );
    case "Hakeem Olajuwon":
      return (
        <Image
          src={hakeem}
          {...props}
          sx={{ objectFit: "fill", ...props.sx }}
        />
      );
    case "Dikembe Mutombo":
      return (
        <Image
          src={dikembe}
          {...props}
          sx={{ objectFit: "fill", ...props.sx }}
        />
      );
    case "Mark Eaton":
      return (
        <Image
          src={markEaton}
          {...props}
          sx={{ objectFit: "fill", ...props.sx }}
        />
      );
    case "Artis Gilmore":
      return (
        <Image
          src={artisGilmore}
          {...props}
          sx={{ objectFit: "fill", ...props.sx }}
        />
      );
    case "Deandre Ayton":
      return (
        <Image
          src={deandreAyton}
          {...props}
          sx={{ objectFit: "fill", ...props.sx }}
        />
      );
    case "Steve Nash":
      return (
        <Image
          src={steveNash}
          {...props}
          sx={{ objectFit: "fill", ...props.sx }}
        />
      );
    case "Wilt Chamberlain":
      return (
        <Image src={wilt} {...props} sx={{ objectFit: "fill", ...props.sx }} />
      );
    case "Bill Russell":
      return (
        <Image src={bill} {...props} sx={{ objectFit: "fill", ...props.sx }} />
      );
    case "Moses Malone":
      return (
        <Image
          src={mosesMalone}
          {...props}
          sx={{ objectFit: "fill", ...props.sx }}
        />
      );
    case "Russell Westbrook":
      return (
        <Image
          src={westbrook}
          {...props}
          sx={{ objectFit: "fill", ...props.sx }}
        />
      );
    case "comparasion":
      return (
        <Image
          src={comparasion}
          {...props}
          sx={{ objectFit: "fill", ...props.sx }}
        />
      );
    case "Titles":
      return (
        <Image
          src={nbaTrophy}
          {...props}
          sx={{
            ...props.sx,
          }}
        />
      );
    case "Los Angeles Lakers":
      return <Image src={lakers} {...props} sx={{ ...props.sx }} />;
    case "Washington Wizards":
      return <Image src={wizards} {...props} sx={{ ...props.sx }} />;
    case "Chicago Bulls":
      return <Image src={bulls} {...props} sx={{ ...props.sx }} />;
    case "Cleveland Cavaliers":
      return <Image src={cleveland} {...props} sx={{ ...props.sx }} />;
    case "Miami Heat":
      return <Image src={heat} {...props} sx={{ ...props.sx }} />;
    case "Final MVP's":
      return <Image src={finalMVP} {...props} />;
    case "MVP's":
      return <Image src={mvp} {...props} />;
    case "lebronLogo":
      return <Image src={lebronLogo} {...props} sx={{ ...props.sx }} />;
    case "jordanLogo":
      return <Image src={jordanLogo} {...props} sx={{ ...props.sx }} />;
    case "AllStarsMVP's":
      return <Image src={allstarsMVP} {...props} sx={{ ...props.sx }} />;
    case "Elgin Baylor":
      return <Image src={ElginBaylor} {...props} sx={{ ...props.sx }} />;
    case "Kevin Durant":
      return <Image src={durant} {...props} sx={{ ...props.sx }} />;
    case "Joel Embiid":
      return <Image src={joel} {...props} sx={{ ...props.sx }} />;
    case "Bob Pettit":
      return <Image src={pettit} {...props} sx={{ ...props.sx }} />;
    case "Jerry Lucas":
      return <Image src={lucas} {...props} sx={{ ...props.sx }} />;
    case "Nate Thurmond":
      return <Image src={nate} {...props} sx={{ ...props.sx }} />;
    case "Magic Johnson":
      return <Image src={magic} {...props} sx={{ ...props.sx }} />;
    case "Oscar Robertson":
      return <Image src={oscar} {...props} sx={{ ...props.sx }} />;
    case "Isiah Thomas":
      return <Image src={thomas} {...props} sx={{ ...props.sx }} />;
    case "Alvin Robertson":
      return <Image src={alvin} {...props} sx={{ ...props.sx }} />;
    case "Micheal Ray Richardson":
      return <Image src={micheal} {...props} sx={{ ...props.sx }} />;
    case "Fatty Taylor":
      return <Image src={fatty} {...props} sx={{ ...props.sx }} />;
    case "Mookie Blaylock":
      return <Image src={mookie} {...props} sx={{ ...props.sx }} />;
    case "Manute Bol":
      return <Image src={bol} {...props} sx={{ ...props.sx }} />;
    case "David Robinson":
      return <Image src={david} {...props} sx={{ ...props.sx }} />;
    case "Elmore Smith":
      return <Image src={elmore} {...props} sx={{ ...props.sx }} />;
    case "James Harden":
      return <Image src={harden} {...props} sx={{ ...props.sx }} />;
    case "John Wall":
      return <Image src={wall} {...props} sx={{ ...props.sx }} />;
    default:
      return;
  }
};

export { MyIcon };
