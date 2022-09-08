import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import { theme, cacheRtl } from "../../HomePageComponents/Style/SearchStyleRTL";

export default function ThemeStyleRTL({ children }) {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CacheProvider>
  );
}
