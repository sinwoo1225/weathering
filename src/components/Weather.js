import React from "react";
import PropTypes from "prop-types";
import "../App.css";
import "./Weather.css";
import "./WeatherGradient.css"

// Icon Import
import { WiSnow,WiDayHaze, WiThunderstorm, WiUmbrella,WiCloud,WiDaySunny, WiNa,WiSprinkle,WiSmoke,WiDust, WiVolcano,WiCloudyGusts,WiTornado, WiFog } from "react-icons/wi";


function Weather({weather, temp, location}){   
    return(
        <div className={`weatherBox ${WeatherGradients[weather]}`}>
            <div className="weather__column text_align_right">
                <span className="location-content">@ {location}</span>   
            </div>
            <div className="weather__column height_100">
                <div className="centerContainer font_title">
                <span className="weather__icon">{getWeatherIcon(weather)}</span>
                <span className="weather__content">{weather} {temp}º</span>   
                </div>
            </div> 
        </div>
    );
}

Weather.propTypes = {
    weather :PropTypes.string.isRequired,
    temp : PropTypes.number.isRequired,
    location : PropTypes.string.isRequired
}

const WeatherGradients = {
    "Clear":"gradient_sunrise",
    "Drizzle":"gradient_sky",
    "Clouds":"gradient_steelgray",
    "Rain":"gradient_darya",
    "Thunderstorm":"gradient_ash",
    "Haze":"gradient_mistic",
    "Mist":"gradient_mistic",
    "Smoke":"gradient_50gray",
    "Sand":"gradient_mini",
    "Dust":"gradient_mini",
    "Ash":"gradient_ash",
    "Squall":"gradient_darya",
    "Tornado":"gradient_50gray",
    "Snow":"gradient_jonquil",
    "Fog":"gradient_moor"
};

function getWeatherIcon(weather){
    switch(weather){
        case "Clear":
            return <WiDaySunny/>;
        case "Drizzle":
            return <WiSprinkle/>;
        case "Clouds":
            return <WiCloud/>;
        case "Rain":
            return <WiUmbrella/>;
        case "Thunderstorm":
            return <WiThunderstorm/>;
        case "Haze":
            return <WiDayHaze/>;
        case "Mist":
            return <WiSprinkle/>;
        case "Smoke":
            return <WiSmoke/>;
        case "Sand":
            return <WiDust/>;
        case "Dust":
            return <WiDust/>;
        case "Ash":
            return <WiVolcano/>;
        case "Squall":
            return <WiCloudyGusts/>;    
        case "Tornado":
            return <WiTornado/>;
        case "Snow":
            return <WiSnow/>;
        case "Fog":
            return <WiFog/>;
        default:
            return <WiNa/>;
    }
}

export default Weather;