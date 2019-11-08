import React from "react";
import "./App.css";
import data from "./artsy-example.json";
import PaintingList from "./PaintingList";
import "typeface-roboto";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

//import $ from 'jquery'

class App extends React.Component {
  componentDidMount() {
    // //assuming jquery. You can also use the fetch API instead.
    // $.get(
    //   "https://s3-us-west-2.amazonaws.com/s.cdpn.io/207241/artsy-example.json",
    //   data => {
    //     alert('Success')
    //   }
    // );
    console.log(data._embedded.artworks[0]);
  }
  render() {
    return (
      <div>
        <CssBaseline />
        <Container>
          <Typography variant="h4">Classic Painting Gallery</Typography>
          <PaintingList painting_list={data._embedded.artworks} />
        </Container>
      </div>
    );
  }
}

export default App;
