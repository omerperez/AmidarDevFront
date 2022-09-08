import createCache from "@emotion/cache";
import { createTheme } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";

const theme = createTheme({
  direction: "rtl",
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});

export { theme, cacheRtl };
