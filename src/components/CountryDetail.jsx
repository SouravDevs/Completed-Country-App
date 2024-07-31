import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
export default function CountryDetail() {
 const params = useParams()
 const countryName = params.country

 // Use State
 const [countryData, setCountryData] = useState({})
    
      useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
        .then(res => res.json())
        .then(([data]) => {
          console.log(data);
          setCountryData({
            native:Object.values(data.name.nativeName)[0].common,
            flag:data.flags.svg,
            population:data.population.toLocaleString('en-IN'),
            region:data.region,
            subregion: data.subregion,
            capital:data.capital,
            tld: data.tld,
            currencies: Object.values(data.currencies).map((currency) => currency.name)
            .join(' '),
            language: Object.values(data.languages).join(', ')
          })
        })
      },[])

  return (
  countryData === null ? ('Loading...') :
  (
    <main>
    <div className="country-details-container">
      <span className="back-button" 
      >
        <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
      </span>
      <div className="country-details">
        <img className='w-[300px] h-[300px]'  src={countryData.flag} alt={`flag`} />
        <div className="details-text-container">
          <h1>{}</h1>
          <div className="details-text">
            <p>
              <b>Native Name: {countryData.native}</b>
              <span className="native-name"></span>
            </p>
            <p>
              <b>
                Population: {countryData.population}
              </b>
              <span className="population"></span>
            </p>
            <p>
              <b>Region: {countryData.region}</b>
              <span className="region"></span>
            </p>
            <p>
              <b>Sub Region: {countryData.subregion}</b>
              <span className="sub-region"></span>
            </p>
            <p>
              <b>Capital: {countryData.capital}</b>
              <span className="capital"></span>
            </p>
            <p>
              <b>Top Level Domain: {countryData.tld}</b>
              <span className="top-level-domain"></span>
            </p>
            <p>
              <b>Currencies: {countryData.currencies}</b>
              <span className="currencies"></span>
            </p>
            <p>
              <b>Languages: {countryData.language}</b>
              <span className="languages"></span>
            </p>
          </div>
          <div className="border-countries">
            <b>Border Countries: </b>&nbsp;
          </div>
        </div>
      </div>
    </div>
  </main>
  )
  )
}
