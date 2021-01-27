import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

import MenuBar from "./components/MenuBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Generate from "./pages/Generate";

import 'semantic-ui-css/semantic.min.css'
import './App.css';

const App = () => {
  return (
    <Container>
      <Router>
        <MenuBar />
        <Route exact path="/"><Home /></Route>
        <Route exact path="/about"><About /></Route>
        <Route exact path="/generate"><Generate /></Route>
      </Router>
    </Container>
  );
};

export default App;
