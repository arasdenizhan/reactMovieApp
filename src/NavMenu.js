import {AppBar, Box, Button, Grid, ThemeProvider, Toolbar, Typography,} from "@mui/material";
import {theme} from "./theme";
import {NavLink} from "react-router-dom";
import './index.css'

export function Menu(){
    return(
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Grid container justifyContent={"right"}>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 , fontFamily: "JetBrains Mono", fontWeight: "bolder"}}>
                                Movie App
                            </Typography>
                            <Button sx={ {':hover': {bgcolor: '#ffa84d'}}}>
                                <NavLink to="/" className={"link"} activeClassName={"link-active"} exact>Movies</NavLink>
                            </Button>
                            <Button sx={ {':hover': {bgcolor: '#ffa84d'}}}>
                                <NavLink to="/create" className={"link"} activeClassName={"link-active"}>Create</NavLink>
                            </Button>
                            <Button sx={ {':hover': {bgcolor: '#ffa84d'}}}>
                                <NavLink to="/update" className={"link"} activeClassName={"link-active"}>Update</NavLink>
                            </Button>
                            <Button sx={ {':hover': {bgcolor: '#ffa84d'}}}>
                                <NavLink to="/delete" className={"link"} activeClassName={"link-active"}>Delete</NavLink>
                            </Button>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
}