import http from "../http-common";

//class FilmDataService {
const filmDataService = {
  getAll() {
    console.log("Calling getAll()");
    console.log("DB_BACKEND_URL:");
    //console.log(process.env.DB_BACKEND_URL);

    return http.get("/films&sort=imdb_rating&asc=false");
  },

  getUnwatched() {
    console.log("Calling getUnwatched()");
    return http.get("/unwatched");
  }

}

//export default new FilmDataService();
export default filmDataService;
