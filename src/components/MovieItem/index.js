// Write your code here
import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl} = movieDetails

  return (
    <div className="movie-card">
      <img src={thumbnailUrl} alt="movie-card" className="movie-card" />
    </div>
  )
}

export default MovieItem
