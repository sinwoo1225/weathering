import React from 'react';
import Loading from "./components/Loading";
import Weather from "./components/Weather";
import "./App.css"
import Axios from 'axios';

const API_KEY = "78877597580a34750c5536bd2adc3fcc";

class App extends React.Component{
  
  state = {
    isLoading : true,
    loadingMsg : "Loading ,,,"
  }

  async getWeather(lat,lon){
    const {data:{name}, data : {weather},data:{main:{temp}}} = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    this.setState({isLoading:false, weather:weather[0].main, temp, location:name});
  }

  handleSuccesGetPos(position){
    const {latitude,longitude} = position.coords;
    this.getWeather(latitude,longitude);  
  }

  handleErrorGetPos(){
    this.setState({loadingMsg:"Can`t not use navigation, please allow location permission"});
  }

  getLocation(){
    const { geolocation } = window.navigator;
    if(geolocation){
      geolocation.getCurrentPosition(this.handleSuccesGetPos.bind(this),this.handleErrorGetPos.bind(this));
    }
    else{
      this.handleErrorGetPos();
    }
  }

  componentDidMount(){
    this.getLocation();
  }

  render(){
    const { isLoading,loadingMsg,weather,temp,location } = this.state;
  
    return (
      <div className="container">
        {isLoading?
          <Loading msg={loadingMsg}/>:
          <Weather 
            weather={weather} 
            temp={Math.round(temp)}
            location={location}  
          />
        }
      </div>
    );
  }
}

export default App;
