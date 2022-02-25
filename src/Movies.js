import {Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import React from "react";
import axios from "axios";

function prepareMovieCard(props){
    return (
        <Grid item xs={3}>
            <Card sx={{ maxWidth: 300 , minWidth: 150}}>
                <CardMedia
                    component="img"
                    height="140"
                    src={"data:image/jpeg;base64,"+ props.moviePicture}
                    alt="img"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.movieName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.movieDescription}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default class Movies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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

    prepareAllMovieCards(movies){
        const movieCards = Array(movies.length).fill(null)
        movies.forEach(item => {
            {
                movieCards.push(
                    prepareMovieCard({
                        movieName: item.movieName,
                        movieDescription: item.movieDescription,
                        moviePicture: item.moviePicture
                    })
                )
            }
        });
        return movieCards;
    }

    render() {
        return (
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="top"
                spacing={2}
                padding={5}
            >
                {this.prepareAllMovieCards(this.state.movies)}
            </Grid>
        )
    }
}