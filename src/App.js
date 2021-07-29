// import "./App.css";
import { Suspense, lazy } from "react";
import { Switch, Route } from "react-router";
import AppBar from "./components/AppBar/AppBar";
import Container from "./components/Container/Container";
import Loader from "./components/Loader/Loader.jsx";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));

const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage.jsx")
);

const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage.jsx"));

function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/movies" exact>
            <MoviesPage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
