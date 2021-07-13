const SET_MOVIES = "SET_MOVIES"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_CURRENT_MOVIE = "SET_CURRENT_MOVIE"
//const SET_MOVIES_COUNT = "SET_MOVIES_COUNT"

const defaultState = {
    movies: [],
    id:[],
    currentPage: 1,
    page: 20,
    movieCount: 0

}

export const movieReduser = (state = defaultState, action) => {
    switch (action.type) {
        case SET_MOVIES:
            return {
                ...state,
                movies: action.payload.movies,
                movieCount: action.payload.movie_count

            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
            
         case SET_CURRENT_MOVIE:
             return {
                 ...state,
                 id: action.payload
             }
        default:
            return state
    }
}
// export const movieIdReducer = (state = defaultState, action) => {
//     switch (action.type) {
       
//         case SET_CURRENT_MOVIE:
//             return {
//                 ...state,
//                 id: action.payload
//             }
//         default:
//             return state
//     }
// }



export const setMovies = (movie) => ({ type: SET_MOVIES, payload: movie })
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, payload: page })
export const setCurrentMovie = (movie) => ({ type: SET_CURRENT_MOVIE, payload: movie })