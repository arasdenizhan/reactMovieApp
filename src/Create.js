import {Box, Button, Grid, TextField} from "@mui/material";
import ImageIcon from '@mui/icons-material/Image';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import React from "react";
import axios from "axios";

export class Create extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            name: null,
            description: null,
            picture: null
        }
    }

    onChangeNameField(value){
        let prevState = Object.assign({}, this.state)
        prevState.name = value;
        this.setState(prevState)
    }

    onChangeDescriptionField(value){
        let prevState = Object.assign({}, this.state)
        prevState.description = value; 
        this.setState(prevState)
    }

    onChangePictureField(value){
        /* :TO-DO:
        * read file encode it to base64 and update the state.
        * */
    }

    async createRequest () {
        const movieDto = JSON.stringify({
            movieName: this.state.name,
            movieDescription: this.state.description,
            moviePicture: this.state.picture
        });
        return (
            axios.post('http://localhost:8080/api/movies', movieDto, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            ).then(function (response) {
                    return response;
                })
        );
    }

    render() {
        return(
            <Grid container alignItems={"center"} padding={5} direction={"column"} spacing={2}>
                <Box bgcolor={"whitesmoke"} padding={5} borderRadius={5} >
                    <Grid item paddingBottom={2}>
                        <TextField id="movie-name" label="Movie Name" variant="filled" onChange={ event => {this.onChangeNameField(event.target.value)} } />
                    </Grid>
                    <Grid item paddingBottom={2}>
                        <TextField id="movie-description" label="Movie Description" variant="filled" onChange={ event => {this.onChangeDescriptionField(event.target.value)} }/>
                    </Grid>
                    <Grid item paddingBottom={2}>
                        <Button variant="contained" component="label" startIcon={<ImageIcon/>} onChange={ event => {this.onChangePictureField(event.target.files[0])} }>
                            Select Image
                            <input type="file" hidden/>
                        </Button>
                    </Grid>
                    <Grid item paddingTop={4} textAlign={"center"}>
                        <Button onClick={ () => {this.createRequest().then(r => console.log(r));} } variant="contained" component="label" startIcon={<AddCircleIcon/>}>
                            Create New Movie
                        </Button>
                    </Grid>
                </Box>
            </Grid>
        );
    }
}