import {AppBar, Box, Button, Container, Grid, IconButton, ThemeProvider, Toolbar, Typography,} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {theme} from "./theme";
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';

export function Menu(){
    return(
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Grid container justifyContent={"right"}>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                MovieApp
                            </Typography>
                            <Button color={"navMenu"} sx={ {':hover': {bgcolor: '#FF1818'}} }>Movies</Button>
                            <Button color={"navMenu"} sx={ {':hover': {bgcolor: '#FF1818'}} }>Create</Button>
                            <Button color={"navMenu"} sx={ {':hover': {bgcolor: '#FF1818'}} }>Update</Button>
                            <Button color={"navMenu"} sx={ {':hover': {bgcolor: '#FF1818'}} }>Delete</Button>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
}