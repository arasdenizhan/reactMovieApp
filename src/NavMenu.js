import {Button, ButtonGroup, Paper, SvgIcon, ThemeProvider} from "@mui/material";
import {theme} from "./theme";
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';

export function Menu(){
    return(
        <div className={"header"}>
            <div className={"nav-menu"}>
                <ThemeProvider theme={theme}>
                    <p className={"logo"}><SvgIcon component={LocalMoviesIcon}/> MovieApp</p>
                    <p className={"github-link"}>by <a href={"https://github.com/arasdenizhan"} target={"_blank"}>Denizhan Aras</a></p>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Button>MOVIES</Button>
                        <Button>CAST</Button>
                    </ButtonGroup>
                </ThemeProvider>
            </div>
        </div>
    );
}