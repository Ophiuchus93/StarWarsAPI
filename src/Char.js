import React from "react";
import axios from "axios";
import { Card, CardGroup, Jumbotron } from "react-bootstrap"

class Char extends React.Component {
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
        <CardGroup>
          <Card style={{ width: '18rem' }}>
            <Card.Title>Name: {p.name}</Card.Title>
            <Card.Body>Height: {p.height}</Card.Body>
            <Card.Body>Mass: {p.mass}</Card.Body>
            <Card.Body>Gender: {p.gender}</Card.Body>
            <Card.Body>Birth Year: {p.birth_year}</Card.Body>
            <Card.Body>Hair Color: {p.hair_color}</Card.Body>
            <Card.Body>Eye Color: {p.eye_color}</Card.Body>
            <Card.Body>Skin Color: {p.skin_color}</Card.Body>
          </Card>
        </CardGroup>
      </div>
    ))
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Character Information</h1>
        </Jumbotron>
        <CardGroup>
          {this.renderPeople()}
        </CardGroup>
      </div>
    )
  }
};

export default Char;