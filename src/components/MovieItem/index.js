// Write your code here
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import ReactPlayer from 'react-player'
import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    <Popup
      modal
      trigger={
        <img src={thumbnailUrl} alt="thumbnail" className="movie-card" />
      }
      className="popup-content"
    >
      {close => (
        <>
          <button
            type="button"
            data-testid="closeButton"
            onClick={() => close()}
            className="close-button"
          >
            <IoMdClose size={20} color="#231f20" />
          </button>
          <ReactPlayer url={videoUrl} className="video-container" />
        </>
      )}
    </Popup>
  )
}

export default MovieItem
