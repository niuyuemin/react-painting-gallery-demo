import React from "react";
import "typeface-roboto";
import data from "./json/artsy-example.json";
import PaintingList from "./components/PaintingList";
import Header from "./components/Header";

import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
//import $ from 'jquery'

class App extends React.Component {
  componentDidMount() {
    // !!! - Access denied due to CORS policy, use local reads instead
    // //assuming jquery. You can also use the fetch API instead.
    // $.get(
    //   "https://s3-us-west-2.amazonaws.com/s.cdpn.io/207241/artsy-example.json",
    //   data => {
    //     alert('Success')
    //   }
    // );
  }
  render() {
    return (
      <div>
        <CssBaseline />
        <Container>
          <Header />
          <PaintingList painting_list={data._embedded.artworks} />
        </Container>
      </div>
    );
  }
}

export default App;
