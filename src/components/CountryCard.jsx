import React from 'react'
import { Link } from 'react-router-dom'

export default function CountryCard({name, population, region, flag, capital, data}) {
  console.log(data);
  return (
  <>
  <Link className='country-card' key={name} to={`/${name}`} state = {{name, population, region, flag, capital}}>
  <img src={flag} alt="Barbados flasg" />
  <div className='card-text'>
        <h3 className='card-title'>{name}</h3>
        <p><b>Population : </b>{population.toLocaleString('en-IN')}</p>
        <p><b>Region : </b>{region}</p>
        <p><b>Capital : </b>{capital}</p>
  </div>
  </Link>
  </>
  )
}
