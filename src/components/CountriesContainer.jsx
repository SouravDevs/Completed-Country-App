// import { useEffect, useState } from "react"
import CountryCard from "./CountryCard"
import countriesData from '../countryData'

export default function CountriesContainer({query}) {
  // const [countriesData, setCountriesData] = useState([])


// useEffect(() => {
//   const url = 'https://restcountries.com/v3.1/all'
//   fetch(url)
//   .then((res) => res.json())
//   .then((data) => {
//     setCountriesData(data)
//   })

// },[])

 
  return (
    <>
    <div className='countries-container'>
        {
          countriesData.filter((country) => 
              country.name.common.toLowerCase().includes(query)
          ).map((country) => {
       
            return <CountryCard name={country.name.common} population={country.population} region={country.region} 
            flag={country.flags.svg} capital={country.capital?.[0]}
            />
        })
        }
    </div><div className="
    "></div>
    </>
  )
}
