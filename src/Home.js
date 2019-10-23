import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Char from "./Char";
import {  Button, Card, CardGroup, Jumbotron, } from "react-bootstrap";
import { Link, } from "react-router-dom";
import axios from 'axios';

class App extends React.Component {

  state = {
    people: [],
  };


  // Makes axios call to server to return people
  componentDidMount() {
    return axios.get("https://swapi.co/api/people/")
      .then(res => {
        this.setState({ people: res.data.results });
      })
      .catch(error => {
        console.log(error)
      })
  };


  // function to iterate through state and render the information to the screen
  renderPeople() {
    const { people, } = this.state;
    return people.map(p => (
      <div>
        <Card style={{ width: '18rem' }}>
        <Card.Title as={Link} to="/char">{p.name}</Card.Title>
        {/* <Button variant="outline-info" as={Link} to="/char" >View Info</Button> */}
        </Card>
      </div>
    ))
  }

  render() {
    return (
        <div>
      <Jumbotron>
        <h1>Star Wars Characters</h1>
      </Jumbotron>
        <CardGroup>
          {this.renderPeople()}
          
        </CardGroup>
      </div>
    )
  }
}


export default App;
