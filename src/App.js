// import "./App.css";
import { Suspense, lazy } from "react";
import { Switch } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import Container from "./components/Container/Container";
import Loader from "./components/Loader/Loader.jsx";

function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Switch></Switch>
      </Suspense>
    </Container>
  );
}

export default App;
