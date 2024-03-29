import { useState } from 'react';
import {
  Box,
  CssBaseline,
  Paper,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { Counter } from '../features/counter/Counter';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

function About() {
  const {solo50} = useSelector((state: RootState) => state.counter)
  const {name} = useSelector((state: RootState) => state.formulario)

  const [count, setCount] = useState(0);

  // define theme
  const theme = createTheme({
    palette: {
      primary: {
        light: "#63b8ff",
        main: "#0989e3",
        dark: "#005db0",
        contrastText: "#000",
      },
      secondary: {
        main: "#4db6ac",
        light: "#82e9de",
        dark: "#00867d",
        contrastText: "#000",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        height="60vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Paper
          elevation={3}
          sx={{ padding: "1rem", backgroundColor: "secondary.light" }}
        >
          <Typography color="primary.dark" variant="h1">
            About Page
          </Typography>
          <h1>This is the About Page</h1>
          <div className="card">
          <h1 style={{fontSize:60}}>valor de 50 : {solo50} </h1>
        <h1 style={{fontSize:60}}>mi nombre es {name} </h1>

          </div>
        </Paper>
      </Box>
    </ThemeProvider>
  )
}
export default About;
