import './styles.css'

// eslint-disable-next-line react/prop-types
const CardTiposDeServicos = ({ title, item1, item2, item3 }) => {
  return (
    <div className='card-type-service'>
      <h3>{title}</h3>
      <ul>
        <li>{item1}</li>
        <li>{item2}</li>
        <li>{item3}</li>
      </ul>
    </div>
  )
}

export default CardTiposDeServicos
