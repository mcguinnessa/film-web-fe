import http from "../http-common";

class FilmDataService {
  getAll() {
    console.log("Calling getAll()");
    return http.get("/films");
  }

  getUnwatched() {
    console.log("Calling getUnwatched()");
    return http.get("/unwatched");
  }

}

export default new FilmDataService();
