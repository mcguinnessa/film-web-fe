import React, { Component } from "react";
import FilmDataService from "../services/film.service";
import { Link } from "react-router-dom";
//import FilmList from "./components/film-list-component";
import FilmList from "./film-list.component";

import '../style.css';

export default class OwnedList extends FilmList {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveFilms = this.retrieveFilms.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);
    this.removeAllFilms = this.removeAllFilms.bind(this);
    this.searchTitle = this.searchTitle.bind(this);

    this.state = {
      films: [],
      currentTutorial: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  retrieveFilms() {
    console.log("Calling retrieveFilms()");
//    FilmDataService.getAll()
    FilmDataService.getOwned()
      .then(response => {
        this.setState({
          films: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e.message);
        console.log(e.data);
        console.log(e.response);
        console.log(e.statusText);
        console.log(e.responseType);
        console.log(e);
      });
  }

}
