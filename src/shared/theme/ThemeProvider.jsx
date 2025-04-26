"use client"

import { createTheme, ThemeProvider } from "@mui/material/styles"

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1440,
            xl: 1536,
        },
    },
    palette: {
        primary: {
            main: "#3330E4",
            dark: "#3330E4",
            light: "#0CA960",
            lightOpacity: "#0CA96033",
            text:"rgb(128, 167, 211)",
        },
        secondary: {
            main: "#1E1E1E",
            light: "#989898",
        },
        light: {
            main: "#ffffff",
        },
        yellow: {
            main: "#EAAD1F",
            light: "#EAAD1F33",
        },
        red: {
            main: "#EC3030",
            light: "#EC30301A",
        },
    },
})
export const Provider = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

