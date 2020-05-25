import React from 'react';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';

import { API_KEY } from './utils/WeatherAPIKey';

import Weather from './components/Weather';

export default class App extends React.Component {
  state = {
    isLoading : true,
    temperature: 0,
    weatherCondition: null,
    error: null
  };

componentDidMount() {
  navigator.geolocation.getCurrentPosition(
    position => {
      this.fetchWeather(position.coords.latitude, position.coords.longitude)
    },
    error => {
      this.setState({
        error: 'Erro obtendo condições do tempo'
      });
    }
  );
}

fetchWeather(lat, lon){
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
  )
  .then(res => res.json())
  .then(json => {
     console.log(json);
    this.setState({
      temperature: json.main.temp,
      weatherCondition: json.weather[0].main,
      isLoading: false
    });
  });
}


  render() {
    const { isLoading , weatherCondition, temperature} = this.state;
    return (
        <View style={styles.container}>
          {isLoading ? (
             
              <View style={styles.loadingContainer}>
               <ImageBackground
              source= {require("./assets/clima1.jpg")}
              resizeMode="cover"
              style={styles.imagemfundo}>
                <Text style={styles.loadingtext}>Pesquisando o Tempo...</Text>
                </ImageBackground>
              </View>
              
          ) : (
            <Weather weather={weatherCondition} temperature={temperature} />
          )}
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFDE4',
  },
  loadingtext: {
    fontSize: 30,
    color:"#f5fff5",
    paddingTop: 250,
    textAlign:"center"
  },
  imagemfundo:{
    flex:1,
    backgroundColor:"#fff",
    width: 600,
  }
});
