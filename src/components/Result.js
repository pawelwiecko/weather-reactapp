import React from 'react'

const  Result = props => {
    const {city, date,temp, sunset, sunrise, pressure, err} = props.weather;

    let content = null;

    if(!err && city) {


        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
         

        content = (
        <div className="content">
        <h3>Wyniki wyszukiwania dla <em>{city}</em></h3>
        <h4>Dala dnia i godziny: {date}</h4>
        <h4>Aktualna temperatura: {Math.floor(temp)} &#176;C</h4>
        <h4>Wschód słońca dzisiaj o{sunriseTime}</h4>
        <h4>Zachód słońca dzisiaj o {sunsetTime }</h4>
        <h4>Atualne ciśnienie {pressure} hPa</h4>
        </div>
        )
    }

    return ( 
        <div className="result">
          {err ? `Nie ma w bazie ${city}` : content }
        </div>
     );
}
 
export default  Result;
