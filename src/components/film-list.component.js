import React, { Component } from "react";
import FilmDataService from "../services/film.service";
import { Link } from "react-router-dom";

export default class FilmList extends Component {
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
        <div className="col-md-6">
          <h4>Film List</h4>

          <table className="list-group">
            {films &&
              films.map((film, index) => (
                <tr>
                <td > <a href={'http://www.imdb.com/title/' + film.imdbid}  >  {film.title} ({film.year})</a> </td>
                <td> {film.runtime} </td>
                <td> {film.imdb_rating} </td>
                <td> {film.media_type} </td>
                </tr>
              ))}
          </table>
        </div>
      </div>
    );
  }
}
