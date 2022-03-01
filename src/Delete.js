import React from "react";
import axios from "axios";
import {
    Box,
    Button, Divider,
    Grid, List, ListItem, ListItemText,
    TextField
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export class Delete extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            movieId: null,
            movies: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/api/movies`)
            .then(res => {
                const movies = res.data;
                this.setState({ movies });
            })
    }

    onChangeIdField(value){
        let prevState = Object.assign({}, this.state)
        prevState.movieId = value;
        this.setState(prevState)
    }


    async createRequest () {
        return (
            axios.delete('http://localhost:8080/api/movies',
                { headers:{'Content-Type': 'application/json'}, data: { movieId: this.state.movieId } })
                .then(function (response) {
                    if(response.status===200){
                        alert("Movie deleted!")
                    } else {
                        alert("Movie delete failed!")
                    }
                })
        );
    }

    render() {
        return(
            <Grid container alignItems={"center"} padding={5} direction={"column"} spacing={2}>
                <Box bgcolor={"whitesmoke"} padding={5} borderRadius={5} >
                    <List component="nav" aria-label="moviesList" sx={{paddingBottom: 3}}>
                        {this.prepareMovieList(this.state.movies)}
                    </List>
                    <Grid item paddingBottom={2}>
                        <TextField id="movie-id" label="Movie Id" variant="filled" type={"number"} InputProps={{ inputProps: { min: 0 } }} onChange={ event => {this.onChangeIdField(event.target.value)} } />
                    </Grid>
                    <Grid item paddingTop={4} textAlign={"center"}>
                        <Button onClick={ () => {this.createRequest()} } variant="contained" component="label" startIcon={<DeleteIcon/>}>
                            Delete Movie
                        </Button>
                    </Grid>
                </Box>
            </Grid>
        );
    }
    prepareMovieList(movies){
        const movieListItems = Array(movies.length).fill(null)
        movies.forEach(item => {
            {
                movieListItems.push(
                    prepareMovieListItem({movieName: item.movieName, movieId: item.id})
                )
            }
        })
        return movieListItems;
    }
}



function prepareMovieListItem(props){
    return (
        <div>
            <Divider/>
            <ListItem>
                <ListItemText primary={ props.movieId + " | " + props.movieName  }/>
            </ListItem>
            <Divider/>
        </div>
    );
}