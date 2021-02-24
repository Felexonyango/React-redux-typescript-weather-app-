import React,{FC} from 'react'
import { WeatherData } from '../Store/types'
import   "./module.css";
interface WeatherProps{
    data:WeatherData
}
const Weather:FC<WeatherProps>=({data})=>{
    const fahreint =(data.main.temp *1.8 -459.67).toFixed(2)
    const celcius =(data.main.temp -273.15).toFixed(2)
    return(
        <div className="App">
            
                <h1 className="title">{data.name}-{data.sys.country}</h1>
                <div className="level">
     <p className ="heading">
      {data.weather[0].description}
      </p>
      <p className="title">
          <img src={`https://openweathermap.org/img/win/${data.weather[0].icon}.png`}alt=""/>
      </p>
                </div>
              <div className="weather">
              <h2 className="header">temp</h2>
              <div className ="title">
                  <p className="mb1">{data.main.temp}</p>
                  <p className="mb1">{fahreint}</p>
                  <p>{celcius}</p>
                  
              </div>
              <div className="center">
                  <div>
                <p className="humidity">humidity</p>
                <p className="title">{data.main.humidity}</p>
                  </div>
                  <div>
                <p className="pressure">pressure</p>
                <p className="title">{data.main.pressure}</p>
                  </div>
                  <div>
                <p className="wind">wind</p>
                <p className="title">{data.wind.speed}m/s</p>
                  </div>
              </div>
                
              </div>

            </div>
        
    )
}
export  default Weather;