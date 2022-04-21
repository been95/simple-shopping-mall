// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

// 2. Add your color mode config
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// 3. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  // config
  config,

  // styles
  styles: {
    global: (props) => ({
      body: {
        color: mode("gray.900", "gray.100")(props),
        background: mode("gray.100", "gray.900")(props),
      },
      // body { color: #000, background: red }
    }),
  },

  // foundations
  colors: {
    primary: "red",
    secondary: "olive",
    // gray: {
    //   100: "#f1f1f1",
    //   900: "#222222",
    // },
  },
  fontSize: {},
  fontWeight: {},
  radii: {},
});

export default theme;
