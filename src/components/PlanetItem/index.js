import './index.css'

const PlanetItem = props => {
  const {eachPlanet} = props
  return (
    <div className="each-planet-container">
      <img
        src={eachPlanet.imageUrl}
        alt={`planet ${eachPlanet.name}`}
        className="planet-image"
      />
      <h1 className="each-planet-name">{eachPlanet.name}</h1>
      <p className="each-planet-description">{eachPlanet.description}</p>
    </div>
  )
}
export default PlanetItem
