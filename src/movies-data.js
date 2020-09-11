
import Information from './data/movies.json';
 


export function MoviesData() {
    return Information
}

export function renderMovieTitle(state, val) {
    return (
        state.title.toLowerCase().indexOf(val.toLowerCase()) !== -1
    );
}
