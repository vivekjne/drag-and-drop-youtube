import React,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import MovieCard from "./components/MovieCard";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const movieList = [
  {
    id: "movie-1",
    name: "Shawshank Redemption",
    image: "https://miro.medium.com/max/1024/1*ZuyHle2wBnM1MY0xkIa9hA.jpeg",
    rating: "MasterPiece!!",
    stars: 5,
  },
  {
    id: "movie-2",
    name: "Godfather",
    image:
      "https://cdn.britannica.com/55/188355-050-D5E49258/Salvatore-Corsitto-The-Godfather-Marlon-Brando-Francis.jpg",
    rating: "Timeless Classic!!",
    stars: 5,
  },
  {
    id: "movie-3",
    name: "Darknight",
    image:
      "https://img.cinemablend.com/filter:scale/quill/6/7/f/5/3/9/67f5391012ab341a4743c340d6cd0833ddbb96ca.jpg?mw=600",
    rating: "The best Batman movie!!",
    stars: 5,
  },
  {
    id: "movie-4",
    name: "12 Angry Men",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_US/lt5wv-8DSYPCHFP0D-Full-Image_GalleryBackground-en-US-1584716481793._SX1080_.jpg",
    rating: "Movie making at its best!!",
    stars: 5,
  },
  {
    id: "movie-5",
    name: "Avatar",
    image:
      "https://image.cnbcfm.com/api/v1/image/105897632-1557241558937avatar-e1541360922907.jpg?v=1557241670&w=678&h=381",
    rating: "Visual Treat!!",
    stars: 4,
  },
];

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,

  listContainer: {
    border: "1px solid rgba(0,0,0,0.2)",
    padding: 8,
    marginBottom:50
  },
  active:{
    background:'rgba(0,0,0,0.1)'
  }
}));

function App() {
  const [movies,setMovies] = useState(movieList)
  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
   
  
    const startIndex =  result.source.index
    const endIndex =    result.destination.index

    const moviesNew = Array.from(movies);
    const [removed] = moviesNew.splice(startIndex, 1);
    moviesNew.splice(endIndex, 0, removed);
  
    setMovies(moviesNew)
  };

  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6">React Drag and Drop</Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
      <Container maxWidth="sm">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <List
                {...provided.droppableProps}
                innerRef={provided.innerRef}
                className={`${classes.listContainer} ${snapshot.isDraggingOver?classes.active:''}`}
                subheader="My Top 5 Movie List"
              >
                {movies.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <ListItem
                        innerRef={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        key={item.id}
                      >
                        <MovieCard movie={item} />
                      </ListItem>
                    )}
                  </Draggable>
                ))}
              </List>
            )}
          </Droppable>
        </DragDropContext>
      </Container>
    </>
  );
}

export default App;
