import './index.css'
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

const PlanetSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="planet-container" data-testid="planets">
      <div className="slider-container">
        <h1 className="planet-main-heading">PLANETS</h1>
        <Slider {...settings}>
          {planetsList.map(eachPlanet => (
            <PlanetItem eachPlanet={eachPlanet} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetSlider
