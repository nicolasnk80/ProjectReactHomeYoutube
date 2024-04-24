import './styles.css'

// eslint-disable-next-line react/prop-types
const CardProfile = ({ cargo, sourceImg, nameProfile }) => {
  return (
    <div className='card-profile'>
      <h2>{cargo}</h2>

      <div className="profile-container">
        <img src={sourceImg} alt="Rosto da pessoa" />
      </div>

      <p>{nameProfile}</p>
    </div>
  )
}

export default CardProfile
