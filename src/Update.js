import React from "react";
import axios from "axios";
import {
    Box,
    Button, Checkbox, Divider,
    Grid, List, ListItem, ListItemText,
    TextField
} from "@mui/material";
import UpgradeIcon from '@mui/icons-material/Upgrade';

export class Update extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            newName: null,
            newDescription: null,
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

    onChangeNameField(value){
        let prevState = Object.assign({}, this.state)
        prevState.newName = value;
        this.setState(prevState)
    }

    onChangeDescriptionField(value){
        let prevState = Object.assign({}, this.state)
        prevState.newDescription = value;
        this.setState(prevState)
    }

    async createRequest () {
        const movieDto = JSON.stringify({
            movieName: this.state.name, /* TODO: handle this in according to the checkboxes. */
            newName: this.state.newName,
            newDescription: this.state.newDescription
        });
        return (
            axios.put('http://localhost:8080/api/movies', movieDto, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (response) {
                if(response.status===200){
                    alert("Movie created!")
                } else {
                    alert("Movie creation failed!")
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
                        <TextField id="movie-name" label="New Name" variant="filled" onChange={ event => {this.onChangeNameField(event.target.value)} } />
                    </Grid>
                    <Grid item paddingBottom={2}>
                        <TextField id="movie-description" label="New Description" variant="filled" onChange={ event => {this.onChangeDescriptionField(event.target.value)} }/>
                    </Grid>
                    <Grid item paddingTop={4} textAlign={"center"}>
                        <Button onClick={ () => {this.createRequest()} } variant="contained" component="label" startIcon={<UpgradeIcon/>}>
                            Update Movie
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
                        prepareMovieListItem({movieName: item.movieName})
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
                <Checkbox /> <ListItemText primary={props.movieName}/>
            </ListItem>
            <Divider/>
        </div>
    );
}