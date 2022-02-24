import './App.css'
import {ButtonGroup, CardContent, CardMedia, Typography} from "@mui/material";
import {Button} from "@mui/material";
import {Card} from "@mui/material";

function App() {
  return (
      <div>
          <div className="header">
              <div className="nav-menu">
                  <ButtonGroup variant="contained" aria-label="outlined primary button group">
                      <Button>HOMEPAGE</Button>
                      <Button>MOVIES</Button>
                      <Button>CAST</Button>
                  </ButtonGroup>
              </div>
          </div>
          <div>
              <MediaCard/>
          </div>

      </div>
  );
}

function MediaCard() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
        </Card>
    );
}

export default App;
