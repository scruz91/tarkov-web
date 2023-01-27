import React, { useState } from "react";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { blue, yellow } from "@mui/material/colors";
import { NotificationProvider } from "../context/notification";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function SwitchTheme() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "right",
      }}
    >
      <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Box>
  );
}

const getPalette = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          text: {
            secondary: {
              main: blue[700],
            },
          },
        }
      : {
          text: {
            secondary: {
              main: yellow[700],
            },
          },
        }),
  },
});

export default function ToggleColorMode({ Component, pageProps }) {
  const [mode, setMode] = useState("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(() => createTheme(getPalette(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SwitchTheme />
        <NotificationProvider>
          <Component {...pageProps} />
        </NotificationProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
