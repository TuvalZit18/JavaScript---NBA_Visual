const Theme = {
  config: {
    useColorSchemeMediaQuery: (window._env_ && window._env_.darkMode) ?? false,
    initialColorModeName: "light",
  },
  // considering 3 resolutions: phone, tablet, browser
  breakpoints: ["40em", "64.1em", "90.1em"],

  fontWeights: {
    thin: 100,
    extralight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    black: 900,
  },

  fontSizes: [
    "0.625rem", //  10px : 0  subnote
    "0.875rem", //  14px : 1  note
    "1rem", //      16px : 2  default
    "1.125rem", //  18px : 3  secondary
    "1.25rem", //   20px : 4  primary
    "1.375rem", //  22px : 5  tableItem
    "1.5rem", //    24px : 6  tableAmount
    "1.625rem", //  26px : 7  subTitle/amountTitle
    "1.875rem", //  30px : 8  title
    "2.0625rem", // 33px : 9
    "3.75rem", //   60px : 10 presentationTitle
    "2.25rem", // 36px : 11
  ],

  borders: [0, "1px solid", "2px solid", "4px solid", "8px solid", "16px solid", "32px solid"],

  space: {
    tiny: "0.25rem", // 4px
    small: "0.5rem", // 8px
    smallish: "0.8125rem", //13px
    default: "1rem", // 16px
    medium: "1.25rem", // 20px
    largeish: "1.875rem", //30px
    large: "2rem", // 32px
    larger: "2.5rem", // 40px
    huge: "4rem", // 64px
    mobileNavigationMenuOffset: "4.5rem", // 72px
    tooltipLeft: "-5rem",
    tooltipTop: "-2.25rem",
    spaceBetweenButtons: "0.625rem", // 10px
    mobileModalExtraOffset: "6.5rem", //104px
  },
  sizes: {
    iconMedium: "1.5rem", //20px
    inputHeightSmall: "2rem", // 32px
    inputHeightMedium: "2.1875rem", //35px
    inputHeightDefault: "2.5rem", //40px
    iconLarge: "3.375rem", // 54px
    headerContentMaxWidth: "120rem", // 1920px
    footerContentMaxWidth: "120rem", // 1920px
    layoutContentMaxWidth: "65rem", // 1040px
    mobileNavigationMenuHeight: "4.375rem", // 70px
  },
  lineHeights: {
    solid: 1,
    title: 1.25,
    normal: 1.5,
    relaxed: 1.625,
  },
  fonts: {
    body: "'Work Sans', sans-serif",
    heading: "'Museo Sans', sans-serif",
  },
  radii: {
    default: 0,
    card: 10,
    circle: 99999,
    spinner: 12,
  },
  shadows: {
    light: "rgba(161, 161, 161, 0.16) 0px 5px 6px",
    dark: "rgba(2, 37, 117, 0.28) 0px 5px 6px",
    tooltip: "rgba(2, 37, 117, 0.28) 0px 0px 6px",
    chatWithUs: "0 3px 6px lightgrey",
    default: "0 1px 3px 0 rgba(0, 0, 0, 0.07), 0 1px 5px 0 rgba(0, 0, 0, 0.06)",
  },
  colors: {
    primary: "#332a86", //0c3865
    navMenuFocusedBg: "#332a86",
    phone: "#332a86",
    search: "#332a86",
    headerBg: "#332a86",
    username: "#332a86",
    navItemBg: "#332a86",
    navItemStrokeFocused: "#332a86",
    input: "#242222",
    inputSecundary: "#332a86",
    svgStrokePrimary: "#48c0b6",
    disabledColor: "#8c8c8c",

    footerBg: "#e9e9e9",

    primaryLight: "#8994c9",

    secondary: "#e81849",
    menuText: "#e81849",
    payButton: "#e81849",

    headerHome: "#fff",
    contentBg: "#FFFFFF",
    textLight: "#FFFFFF",
    navItemBgFocused: "#fff",
    navItemStroke: "#fff",
    searchBarBorder: "#FFF",
    footerText: "#FFF",

    navMenuBg: "#f3f3f3",
    searchBarBg: "#f3f3f3",

    windowBg: "#f9f9f9",
    modalBg: "#f9f9f9",

    deviceDetailsMainLable: "#8e8d8d",
    disabled: "#8e8d8d",

    sunshine: "#ffb511",
    navMenuFont: "#656faf",
    textDark: "#000",
    tableDate: "#7392bb",
    note: "#B5B5B5",
    inactive: "#ededed",
    error: "#be1e2d",
    textError: "#9f1e1e",
    unpaidSum: "#FC508B",
    greyBorderInput: "#E6E6E6",
    inputOutlineError: "#DF4D7F",
    darkBg: "#1F1B24",
    darkSecondary: "#332940",
    darkPrimary: "#121212",
    lightBlue: "#d5eeff",
    border: "#e5e5e7",
    modalCloseBg: "#e2e2e2",
    goodStatusBg: "#11ab4f",
    viewEyeBg: "#a1b7d1",
    progressBg: "#D3D3D3",
    userMenu: "#fff",
    darkenHome: "rgba(0,0,0,0.2)",
    highlight: "#F9F9F9",
    modes: {
      dark: {
        primary: "#f3f3f3",
        navMenuFocusedBg: "#222222",
        phone: "#c2c2c2",
        search: "#e5e5e7",
        headerBg: "#333333",
        username: "#d5eeff",
        navItemBg: "#ededed",
        navItemStrokeFocused: "#fff",
        input: "#242222",
        inputSecundary: "#332a86",
        footerBg: "#e9e9e9",
        svgStrokePrimary: "#48c0b6",
        disabledColor: "#8c8c8c",

        secondary: "#a3affe",
        menuText: "#cbffe5",
        payButton: "#656faf",

        contentBg: "#444444",
        textLight: "#444",
        navItemBgFocused: "#656faf",
        navItemStroke: "#332a86",
        searchBarBorder: "#8e8d8d",
        footerText: "#FFF",

        navMenuBg: "#333333",
        searchBarBg: "#444444",

        windowBg: "#333333",
        modalBg: "#555",

        textDark: "#c2c2c2",
        note: "#B5B5B5",
        inactive: "#333",
        textError: "#ff2400",
        error: "#be1e2d",
        unpaidSum: "#FC508B",
        greyBorderInput: "#E6E6E6",
        inputOutlineError: "#DF4D7F",
        darkBg: "#1F1B24",
        darkSecondary: "#332940",
        darkPrimary: "#121212",
        disabled: "#AAAAAA",
        tableDate: "#d5eeff",
        lightBlue: "#555",
        border: "#e5e5e7",
        modalCloseBg: "#333333",
        goodStatusBg: "#11ab4f",
        viewEyeBg: "#a1b7d1",
        deviceDetailsMainLable: "#fff",
        progressBg: "#D3D3D3",
      },
    },
  },
  layout: {
    card: {
      flexDirection: "column",
      height: "15.625rem",
      width: ["100%", "100%", "22rem", "24.25rem"],
      border: "solid 1px",
      borderRadius: "card",
      borderColor: "border",
      padding: "largeish",
      boxShadow: "default",
    },
    section: {
      flexDirection: "column",
      width: ["100%", "100%", "72rem", "78.75rem"],
      border: "1px solid",
      borderColor: "border",
      padding: "large",
      borderRadius: "card",
      boxShadow: "default",
    },
    grid: {
      display: "grid",
      gridGap: "large",
      gridTemplateColumns: ["1fr", "0.5fr 0.5fr"],
      flex: 1,
    },
    serviceCard: {
      border: "1px solid",
      borderColor: "border",
      bg: "contentBg",
      px: "2rem",
      py: "1.75rem",
      boxShadow: "light",
      borderRadius: "card",
      my: "large",
    },
  },
  buttons: {
    primary: {
      letterSpacing: "0.36px",
      fontFamily: "body",
      fontWeight: "medium",
      fontSize: 3,
      borderRadius: "circle",
      width: "8rem",
      height: "3rem",
      color: "textLight",
      bg: "secondary",
      ":hover": {
        cursor: "pointer",
        opacity: 0.9,
      },
      ":disabled": {
        cursor: "default",
        bg: "disabled",
        opacity: "75%",
      },
    },
    secondary: {
      letterSpacing: "0.36px",
      fontWeight: "medium",
      fontSize: 3,
      borderRadius: "circle",
      width: "8rem",
      height: "3rem",
      color: "primary",
      bg: "inactive",
      "&:hover": {
        cursor: "pointer",
        opacity: 0.9,
      },
      "&:disabled": {
        cursor: "default",
        opacity: "75%",
        color: "note",
      },
    },
    nPrimary: {
      outline: "none !important",
      textAlign: "center",
      cursor: "pointer",
      fontSize: "primary",
      fontWeight: "solid",
      color: "secondary",

      borderRadius: "circle",

      "&:hover": {
        opacity: "90%",
      },
      "&:disabled": {
        cursor: "default",
        opacity: "75%",
        color: "note",
      },
    },
    nSecondary: {
      outline: "none !important",
      textAlign: "center",
      cursor: "pointer",
      fontSize: "primary",
      fontWeight: "solid",
      color: "disabled",
      bg: "greyBorderInput",
      borderRadius: "circle",

      "&:hover": {
        opacity: "90%",
      },
      "&:disabled": {
        cursor: "default",
        opacity: "75%",
        color: "note",
      },
    },
    default: {
      outline: "none !important",
      textAlign: "center",
      cursor: "pointer",
      fontSize: "primary",
      fontWeight: "solid",
      color: "textLight",
      bg: "secondary",
      borderRadius: "default",
      width: "6.25rem",
      height: "inputHeightMedium",
      "&:hover": {
        opacity: "90%",
      },
      "&:disabled": {
        cursor: "default",
        opacity: "75%",
        color: "note",
      },
    },
    "default-inverted": {
      outline: "none !important",
      textAlign: "center",
      cursor: "pointer",
      fontSize: "primary",
      fontWeight: "solid",
      color: "secondary",
      border: "1px solid",
      borderColor: "secondary",
      bg: "contentBg",
      borderRadius: "default",
      width: "6.25rem",
      height: "inputHeightMedium",
      "&:hover": {
        opacity: "90%",
      },
      "&:disabled": {
        cursor: "default",
        opacity: "75%",
        color: "note",
      },
    },

    secondarySmall: {
      outline: "none !important",
      textAlign: "center",
      cursor: "pointer",
      fontSize: "primary",
      fontWeight: 3,
      color: "textLight",
      bg: "secondary",
      borderRadius: "default",
      boxShadow: "dark",
      width: "10.56rem",
      height: "inputHeightDefault",
      "&:disabled": {
        cursor: "default",
        opacity: "75%",
        color: "note",
      },
    },
    secondarySmallInverted: {
      outline: "none !important",
      textAlign: "center",
      cursor: "pointer",
      fontSize: "primary",
      fontWeight: 3,
      border: "1px solid",
      borderColor: "secondary",
      color: "secondary",
      bg: "textLight",
      borderRadius: "default",
      boxShadow: "dark",
      width: "10.56rem",
      height: "inputHeightMedium",
      "&:disabled": {
        cursor: "default",
        opacity: "75%",
        color: "note",
      },
    },
    tertiary: {
      outline: "none !important",
      textAlign: "center",
      cursor: "pointer",
      fontSize: "primary",
      fontWeight: "solid",
      color: "textLight",
      bg: "secondary",
      borderRadius: "default",
      width: ["13rem", "9rem"],
      height: "inputHeightMedium",
      "&:hover": {
        opacity: "90%",
      },
      "&:disabled": {
        cursor: "default",
        "&:hover": {
          opacity: "100%",
        },
        bg: "inactive",
        color: "note",
      },
    },
    tertiaryWhite: {
      outline: "none !important",
      textAlign: "center",
      cursor: "pointer",
      fontSize: "primary",
      fontWeight: "solid",
      color: "secondary",
      border: "1px solid",
      borderColor: "secondary",
      bg: "contentBg",
      borderRadius: "default",
      width: ["13rem", "9rem"],
      height: "inputHeightMedium",
      "&:hover": {
        opacity: "90%",
      },
      "&:disabled": {
        cursor: "default",
        "&:hover": {
          opacity: "100%",
        },
        bg: "inactive",
        color: "note",
      },
    },
    tertiaryNoWidth: {
      outline: "none !important",
      textAlign: "center",
      cursor: "pointer",
      letterSpacing: "0.36px",
      fontFamily: "body",
      fontWeight: "medium",
      fontSize: 3,
      borderRadius: 0,
      color: "textLight",
      bg: "primary",
      height: "2.75rem",
      "&:hover": {
        opacity: "90%",
      },
      "&:disabled": {
        cursor: "default",
        "&:hover": {
          opacity: "100%",
        },
        bg: "inactive",
        color: "note",
      },
    },
    tertiaryWhiteNoWidth: {
      outline: "none !important",
      textAlign: "center",
      cursor: "pointer",
      fontFamily: "body",
      fontWeight: "medium",
      fontSize: 3,
      color: "primary",
      borderTop: "1px solid",
      borderBottom: "1px solid",
      borderColor: "primary",
      borderRadius: 0,
      bg: "contentBg",
      height: "2.75rem",
      "&:hover": {
        opacity: "90%",
      },
      "&:disabled": {
        cursor: "default",
        "&:hover": {
          opacity: "100%",
        },
        bg: "inactive",
        color: "note",
      },
    },
    "autocomplete-btn": {
      bg: "white",
      color: "textDark",
      fontFamily: "body",
      fontSize: 3,
      textAlign: "left",
      px: "small",
      pt: "tiny",
      "&:focus": {
        borderColor: "primary",
        outlineColor: "primary",
        bg: "primary",
        color: "white",
      },
      "&:hover": {
        bg: "primary",
        borderRadius: 0,
        color: "white",
      },
    },
    addressValidationAction: {
      bg: "white",
      width: "17rem",
      height: "2.5rem",
      borderRadius: "circle",
      boxShadow: "default",
      cursor: "pointer",
      fontFamily: "inherit",
      fontSize: "default",
      fontStretch: "normal",
      fontStyle: "normal",
      fontWeight: "bold",
      letterSpacing: "normal",
      outline: "none !important",
      textAlign: "center",
      "&:hover:enabled": {
        bg: "contentBg",
      },
      "&:active:enabled": {
        boxShadow: "0 7px 14px rgb(50 50 93 / 10%), 0 3px 6px rgb(0 0 0 / 5%)",
      },
    },
  },
  forms: {
    primaryError: {
      border: "solid 1px",
      borderColor: "inputOutlineError",
      background: "#FBECF2",
      height: "3.125rem",
      paddingY: "small",
      paddingX: "default",
      fontSize: 6,
      color: "textDark",
      "::-ms-clear": {
        display: "none",
      },
      "::-ms-reveal": {
        display: "none",
      },
    },
    text: {
      ":disabled": {
        color: "note",
      },
      attribute: {
        color: "navLink",
        fontSize: "1.875rem",
        fontWeight: "normal",
        textAlign: "center",
      },
    },

    input: {
      height: "2.75rem",
      borderColor: "border",
      borderRadius: "card",
      p: "small",
      color: "input",
      fontFamily: "inherit",
      fontSize: 2,
      ":focus": {
        outline: "none",
        borderColor: "inputSecundary",
        borderWidth: "2px",
      },
      ":disabled": {
        backgroundColor: "navMenuBg",
        borderColor: "inactive",
      },
      "::-ms-clear": {
        display: "none",
      },
      "::-ms-reveal": {
        display: "none",
      },
    },

    inputError: {
      height: "2.75rem",
      borderColor: "error",
      borderRadius: "card",
      p: "small",
      color: "input",
      fontFamily: "inherit",
      fontSize: 2,
      ":focus": {
        outline: "solid",
        borderColor: "error",
        outlineColor: "error",
        outlineWidth: "1px",
      },
      "::-ms-clear": {
        display: "none",
      },
      "::-ms-reveal": {
        display: "none",
      },
    },

    inputCalendar: {
      height: "2.75rem",
      borderColor: "border",
      borderRadius: "card",
      p: "small",
      textAlign: "center",
      fontSize: [3, 5, 5],
      color: "deviceDetailsMainLable",
      fontFamily: "inherit",
      ":focus": {
        outline: "none",
        borderColor: "inputSecundary",
        borderWidth: "2px",
      },
      ":disabled": {
        backgroundColor: "navMenuBg",
        borderColor: "inactive",
      },
      "::-ms-clear": {
        display: "none",
      },
      "::-ms-reveal": {
        display: "none",
      },
    },

    inputCalendarError: {
      height: "2.75rem",
      borderColor: "inputOutlineError",
      borderRadius: "card",
      p: "small",
      textAlign: "center",
      fontSize: [3, 5, 5],
      color: "inputOutlineError",
      fontFamily: "inherit",
      ":focus": {
        outline: "none",
        borderColor: "inputOutlineError",
        borderWidth: "2px",
      },
      ":disabled": {
        backgroundColor: "navMenuBg",
        borderColor: "inactive",
      },
      "::-ms-clear": {
        display: "none",
      },
      "::-ms-reveal": {
        display: "none",
      },
    },

    greyInput: {
      borerRadius: "card",
      height: "inputHeightSmall",
      border: "solid 1px",
      borderColor: "border",
      paddingX: "small",
      color: "secondary",
      fontSize: "secondary", // secondary, primary
      paddingLeft: "small",
      flex: 1,
      ":focus": { outline: "2px solid", outlineColor: "transparent", border: 0 },
      ":disabled": {
        backgroundColor: "contentBg",
        borderColor: "windowBg",
        opacity: "1",
      },
      "::-ms-clear": {
        display: "none",
      },
      "::-ms-reveal": {
        display: "none",
      },
    },
    greyInputError: {
      height: "inputHeightSmall",
      background: "#FBECF2",
      paddingX: "small",
      color: "inputOutlineError",
      fontSize: "secondary",
      border: "1px solid",
      borderColor: "inputOutlineError",
      paddingLeft: "small",
      flex: 1,
      ":focus": { outline: "2px solid", outlineColor: "inputOutlineError", border: 0 },
      "::-ms-clear": {
        display: "none",
      },
      "::-ms-reveal": {
        display: "none",
      },
    },
    roundGrayInput: {
      borderRadius: 9,
      border: 0,
      height: "2.5rem",
      fontSize: 3,
      paddingX: "tiny",
      backgroundColor: "#EEEEEE",
      color: "primary",
      ":focus": { outline: "2px solid", outlineColor: "primary" },
      ":disabled": {
        backgroundColor: "contentBg",
        borderColor: "windowBg",
        paddingX: "tiny",
        opacity: "1",
        fontSize: 4,
        fontWeight: "3",
      },
    },
    roundGrayErrorInput: {
      borderRadius: 9,
      border: "1px solid",
      borderColor: "inputOutlineError",
      height: "2.5rem",
      fontSize: 3,
      paddingX: "tiny",
      backgroundColor: "#F9EFF3",
      color: "inputOutlineError",
      ":focus": { outline: "2px solid", outlineColor: "inputOutlineError" },
    },
    select: {
      p: "small",
      appearance: "none",
      fontSize: 2,
      border: 1,
      borderRadius: "card",
      color: "input",
      bg: "transparent",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      justifyContent: "flex-end",
      height: "2.75rem",
      borderColor: "border",
      ":disabled": {
        backgroundColor: "windowBg",
        borderColor: "windowBg",
      },
      "::-ms-clear": {
        display: "none",
      },
      "::-ms-reveal": {
        display: "none",
      },
      "&:focus": {
        outline: "none",
        borderColor: "inputSecundary",
        borderWidth: "2px",
      },
    },
    selectError: {
      bg: "transparent",
      height: "2.75rem",
      borderColor: "error",
      borderRadius: "card",
      p: "small",
      color: "error",
      fontFamily: "body",
      fontSize: 2,
      "::-ms-clear": {
        display: "none",
      },
      "::-ms-reveal": {
        display: "none",
      },
      width: "100%",
      "&:focus": {
        outline: "solid",
        borderColor: "error",
        outlineColor: "error",
        outlineWidth: "1px",
      },
    },
    search: {
      bg: "transparent",
      height: "2.75rem",
      borderColor: "border",
      borderRadius: "card",
      color: "textDark",
      fontFamily: "inherit",
      fontSize: "sm",
      ":focus": {
        outline: "solid",
        borderColor: "primary",
        outlineColor: "primary",
        outlineWidth: "1px",
      },
      ":disabled": {
        backgroundColor: "inactive",
        borderColor: "inactive",
      },
      "::-ms-clear": {
        display: "none",
      },
      "::-ms-reveal": {
        display: "none",
      },
    },
  },

  variants: {
    link: {
      textDecoration: "none",
      ":hover": {
        textDecoration: "underline",
      },
    },
  },

  links: {
    nav: {
      color: "primary",
      textDecoration: "none",
      cursor: "pointer",
      ":hover": { textDecoration: "underline" },
    },
    support: {
      color: "primary",
      cursor: "pointer",
      fontSize: 3,
      fontWeight: "medium",
      py: "small",
      textDecoration: "none",
      ":hover": { textDecoration: "underline" },
    },
  },

  styles: {
    progress: {
      color: "primary",
      height: "100%",
      width: "100%",
      backgroundColor: "progressBg",
      borderRadius: 10,
    },
  },

  text: {
    default: {
      color: "textDark",
      fontWeight: "regular",
      fontSize: [2, 2, 3, 3],
    },
    link: {
      color: "primary",
      fontSize: [1, 1, 2, 2],
      cursor: "pointer",
      fontWeight: "medium",
      whiteSpace: "pre",
      "&:hover": {
        color: "secondary",
      },
    },
    tablelink: {
      color: "primary",
      fontSize: [2, 2, 3, 3],
      cursor: "pointer",
      fontWeight: "regular",
      whiteSpace: "pre",
      "&:hover": {
        color: "secondary",
      },
    },
    inputlabel: {
      color: "textDark",
      fontSize: [1, 1, 2, 2],
      fontWeight: "regular",
      textAlign: "left",
    },
    note: {
      color: "primary",
      fontSize: [1, 1, 2, 2],
      fontWeight: "regular",
    },
    navigationMenu: {
      fontSize: [2, 2, 3, 3],
      fontWeight: "regular",
      whiteSpace: "pre",
    },
    headline: {
      color: "primary",
      fontWeight: "medium",
      fontSize: [6, 6, 8, 8],
    },
    subheadline: {
      color: "primary",
      fontWeight: "medium",
      fontSize: [4, 4, 6, 6],
      whiteSpace: "pre",
    },
    heading: {
      fontFamily: "heading",
      color: "primary",
      fontWeight: "medium",
      fontSize: [6, 6, 8, 8],
    },
    heading2: {
      fontFamily: "body",
      color: "primary",
      fontWeight: "semiBold",
      fontSize: [5, 5, 7, 7],
    },
    heading3: {
      fontFamily: "body",
      color: "textDark",
      fontWeight: "regular",
      fontSize: [4, 4, 5],
    },
    cardtitle: {
      color: "primary",
      fontWeight: "medium",
      fontSize: [3, 3, 4, 4],
    },
    heading3normal: {
      fontFamily: "body",
      color: "primary",
      fontWeight: "medium",
      fontSize: [3, 3, 4, 4],
    },
    copyright: {
      fontFamily: "body",
      fontWeight: "regular",
      fontSize: 2,
      color: "#696969",
    },
    description: {
      color: "textDark",
      fontWeight: "regular",
      fontSize: [2, 2, 3, 3],
      whiteSpace: "pre-line",
      textAlign: "justify",
      textJustify: "inter-word",
    },
  },
};

export default Theme;
