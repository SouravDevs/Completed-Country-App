import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import "./countryDetail.css";
import { useWindowSize } from "../hooks/useWIndowSize";

export default function CountryDetail() {
  const params = useParams();
  const countryName = params.country;
  const [isDark] =  useOutletContext()

  // Use State
  const [countryData, setCountryData] = useState({});
  const [notFound, setNotFound] = useState(false);

  const windowSize = useWindowSize()

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        setCountryData({
          native: Object.values(data.name.nativeName)[0].common,
          flag: data.flags.svg,
          population: data.population.toLocaleString("en-IN"),
          region: data.region,
          subregion: data.subregion,
          capital: data.capital,
          tld: data.tld,
          currencies: Object.values(data.currencies)
            .map((currency) => currency.name)
            .join(" "),
          language: Object.values(data.languages).join(", "),
          borders: ["India"],
        });
      })
      .catch((err) => {
        setNotFound(true);
      });
  }, [countryName]);

  if (notFound) {
    return <div>Country Not Found.</div>;
  }

  return countryData === null ? (
    "Loading..."
  ) : (
    <main className={`${isDark ? 'dark' : ''}`}>
      <h1 style={{textAlign : 'center'}}>{windowSize.width} X {windowSize.height}</h1>
      <div className="country-details-container">
        <span className="back-button">
          <i className="fa-solid fa-arrow-left" onClick={() => {
            history.back()
          }}></i>&nbsp; Back
        </span>
        <div className="country-details">
          <img className="country-flag" src={countryData.flag} alt={`flag`} />
          <div className="details-text-container">
            <div className="details-text">
              <h1>{countryData.name}</h1>
              <p>
                <b>Native Name: {countryData.native}</b>
                <span className="native-name"></span>
              </p>
              <p>
                <b>Population: {countryData.population}</b>
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
  );
}
