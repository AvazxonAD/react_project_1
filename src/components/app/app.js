import './app.css'
import MovieInfo from '../movie-info/movie-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import MovieList from '../movie-list/movie-list'
import AddMovie from '../add-movie/add-movie'

const App = () => {
    return (
        <div className="app ">
            <div className='content'>
                <MovieInfo/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <MovieList/>
                <AddMovie/>
            </div>            
        </div>
    )
}

export default App;