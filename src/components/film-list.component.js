import React, { Component } from "react";
import FilmDataService from "../services/film.service";
import { Link } from "react-router-dom";

import '../style.css';

export default class FilmList extends Component {
  constructor(props) {
    super(props);
    console.log("Calling FilmList Constructor()");
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

  componentDidMount() {
    this.retrieveFilms();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }

  retrieveFilms() {
    console.log("Calling retrieveFilms()");
    FilmDataService.getAll()
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

  refreshList() {
    console.log("refreshList()");
    this.retrieveFilms();
    this.setState({
      currentTutorial: null,
      currentIndex: -1
    });
  }

  setActiveTutorial(tutorial, index) {
    console.log("setActiveTutorial()");
    this.setState({
      currentTutorial: tutorial,
      currentIndex: index
    });
  }

  removeAllFilms() {
    console.log("removeAllFilms()");
    FilmDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchTitle() {
    console.log("searchTitle()")
    this.setState({
      currentTutorial: null,
      currentIndex: -1
    });

//    FilmDataService.findByTitle(this.state.searchTitle)
    FilmDataService.getAll()
      .then(response => {
        this.setState({
          films: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    console.log("render()");
    const { searchTitle, films, currentTutorial, currentIndex } = this.state;
    var film_count = 1;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchTitle}
              onChange={this.onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchTitle}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="film-table">
          <table id="filmlist" className="display">
            <thead>
               <tr>
                  <th>No.</th>
                  <th>Title</th>
                  <th>Runtime</th>
                  <th>Classification</th>
                  <th>IMDB Rating</th>
                  <th>Media Type</th>
                  <th>Watched</th>
               </tr>
            </thead>
            <tbody>
            {films &&
              films.map((film, index) => (
                <tr key={index.uniqueId}>
                <td> {film_count++} </td>
                <td> <a href={'http://www.imdb.com/title/' + film.imdbid}  >  {film.title} ({film.year})</a> </td>
                <td> {film.runtime / 60} </td>
                <td> {film.classification} </td>
                <td> {film.imdb_rating} </td>
                <td> {film.media_type} </td>
                <td> {film.watched} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
