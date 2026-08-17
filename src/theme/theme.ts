import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#f4a261",
            contrastText: "#fff",
        },
        secondary: {
            main: "#e76f51",
        },
        background: {
            default: "#fffbf5",
            paper: "#f0e9e9",
        },
        text: {
            primary: "#5a4a42",
            secondary: "#8a7a72",
        },
    },
    typography: {
        fontFamily: "Merriweather, serif",
        h1: {
            fontFamily: "Baloo 2 Variable, serif",
            fontWeight: 700,
        },
        body: {
            fontFamily: "Merriweather, serif",
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                contained: {
                    borderRadius: "8px",
                    fontSize: "1rem",
                    textTransform: "none",
                    fontWeight: 600,
                    boxShadow: "0 4px 8px rgba(230, 111, 81, 0.2)",
                    "&:hover": {
                        boxShadow: "0 6px 16px rgba(230, 111, 81, 0.3)",
                    },
                },
                outlined: {
                    borderRadius: "8px",
                    fontSize: "1rem",
                    fontWeight: 600,
                    border: "2px solid #e76f51",
                    "&:hover": {
                        boxShadow: "0 6px 16px rgba(230, 111, 81, 0.3)",
                    },
                },
            },
        },
    },
});
