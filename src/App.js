import React, { useState } from "react";
import Login from "./components/Login";
import "./App.css";
import Row from "./components/Row";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import {
  fetchNetflixOriginals,
  fetchTrending,
  fetchTopRated,
  fetchActionMovies,
  fetchComedyMovies,
  fetchHorrorMovies,
  fetchRomanceMovies,
  fetchDocumentaries,
} from "./actions/index";
import Login from "./components/Login";
import Nav from "./components/Nav";
import {
  fetchNetflixOriginals,
  fetchTrending,
  fetchTopRated,
  fetchActionMovies,
  fetchComedyMovies,
  fetchHorrorMovies,
  fetchRomanceMovies,
  fetchDocumentaries,
} from "./actions/index";
import { Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Nav from './components/Nav';
import {
  fetchNetflixOriginals,
  fetchTrending,
  fetchTopRated,
  fetchActionMovies,
  fetchComedyMovies,
  fetchHorrorMovies,
  fetchRomanceMovies,
  fetchDocumentaries,
} from './actions/index';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route
          path="/content"
          element={
            <>
              <Nav />
              <Banner />
              <Row
                title={"NETFLIX ORIGINALS"}
                isLargeRow={true}
                action={fetchNetflixOriginals}
                category={"NetflixOriginals"}
              />
              <Row
                title={"Trending Now"}
                action={fetchTrending}
                category={"Trending"}
              />
              <Row
                title={"Top Rated"}
                action={fetchTopRated}
                category={"TopRated"}
              />
              <Row
                title={"Action Movies"}
                action={fetchActionMovies}
                category={"ActionMovies"}
              />
              <Row
                title={"Comedy Movies"}
                action={fetchComedyMovies}
                category={"ComedyMovies"}
              />
              <Row
                title={"Horror Movies"}
                action={fetchHorrorMovies}
                category={"HorrorMovies"}
              />
              <Row
                title={"Romance Movies"}
                action={fetchRomanceMovies}
                category={"RomanceMovies"}
              />
              <Row
                title={"Documentaries"}
                action={fetchDocumentaries}
                category={"Documentaries"}
              />
            </>
          }
        ></Route>
      </Routes>
      {/* <Nav />
      <Banner />
      <Row
        title={"NETFLIX ORIGINALS"}
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title={"Trending Now"} fetchUrl={requests.fetchTrending} />
      <Row title={"Top Rated"} fetchUrl={requests.fetchTopRated} />
      <Row title={"Action Movies"} fetchUrl={requests.fetchActionMovies} />
      <Row title={"Comedy Movies"} fetchUrl={requests.fetchComedyMovies} />
      <Row title={"Horror Movies"} fetchUrl={requests.fetchHorrorMovies} />
      <Row title={"Romance Movies"} fetchUrl={requests.fetchRomanceMovies} />
      <Row title={"Documentaries"} fetchUrl={requests.fetchDocumentaries} /> */}
    </div>
  );
}

export default App;
