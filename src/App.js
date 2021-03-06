import React from "react";
import Home from "./Home";
import Char from "./Char";
import { Switch, Route, } from "react-router-dom";
import { Container, } from "semantic-ui-react";

const App = () => (
  <> 
    <Container>

    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/char" component={Char} />
    </Switch>
    </Container>
  </>
);

export default App;