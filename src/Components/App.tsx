import React, {useEffect} from "react";
import "../App.css";
import {Header} from "./Header/Header";
import {Search} from "./Search/Search";
import Movie from "./Movie/Movie";
import {
    searchMoviesFailure,
    searchMoviesRequest,
    searchMoviesSuccess
} from "../appReducer/AppReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../Store/Store";

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";

const App = () => {
    let loading = useSelector((state: AppStoreType) => state.app.loading)
    let errorMessage = useSelector((state: AppStoreType) => state.app.errorMessage)
    let movies = useSelector((state: AppStoreType) => state.app.movies)
    const dispatch = useDispatch()

    useEffect(() => {

        fetch(MOVIE_API_URL)
            .then(response => response.json())
            .then(jsonResponse => {
                dispatch(searchMoviesSuccess(jsonResponse.Search));
            });
    }, []);

    const search = (searchValue: string) => {
        dispatch(searchMoviesRequest());

        fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
            .then(response => response.json())
            .then(jsonResponse => {
                if (jsonResponse.Response === "True") {
                    dispatch(searchMoviesSuccess(jsonResponse.Search));
                } else {
                    dispatch(searchMoviesFailure(jsonResponse.Error));
                }
            });
    };

    return (
        <div className="App">
            <Header/>
            <Search search={search} />
            <p className="App-intro">Sharing a few of our favourite movies</p>
            <div className="movies">
                {loading && !errorMessage ? (
                    <span>loading... </span>
                ) : errorMessage ? (
                    <div className="errorMessage">{errorMessage}</div>
                ) : (movies.map((movie:any, index:any) => (
                        <Movie key={`${index}-${movie.Title}`} movie={movie} />
                    ))
                )}
            </div>
        </div>
    );
};

export default App;