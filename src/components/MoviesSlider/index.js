// Write your code here
import Slider from 'react-slick'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {moviesList} = props

  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {moviesList.map(each => (
          <MovieItem movieDetails={each} key={each.id} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
