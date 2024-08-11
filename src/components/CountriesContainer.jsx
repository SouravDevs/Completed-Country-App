// import { useEffect, useState } from "react"
import CountryCard from "./CountryCard"
import { useEffect, useState } from "react"
import ShimmerEffect from "./ShimmerEffect"

export default function CountriesContainer({query}) {
  const [countriesData, setCountriesData] = useState([])


useEffect(() => {
  const url = 'https://restcountries.com/v3.1/all'
  fetch(url)
  .then((res) => res.json())
  .then((data) => {
    setCountriesData(data)
  })

},[])

if(countriesData.length === 0) {
  return (<ShimmerEffect />)
}

 
  return (
    <>
    <div className='countries-container'>
        {
          countriesData.filter((country) => 
              country.name.common.toLowerCase().includes(query)  || country.region.toLowerCase().includes(query)
          ).map((country) => {
       
            return <CountryCard key={country.name.common} name={country.name.common} population={country.population} region={country.region} 
            flag={country.flags.svg} capital={country.capital?.[0]}
            data={country}
            />
        })
        }
    </div><div className="
    "></div>
    </>
  )
}
