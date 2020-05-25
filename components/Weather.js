import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import propTypes from 'prop-types';
import { weatherConditions } from '../utils/WeatherConditions';


const Weather = ({ weather, temperature }) => {
    return (
        <View 
        style={[
            styles.weatherContainer, 
            {backgroundColor: weatherConditions[weather].color}
        ]}
        >           
         <ImageBackground
            source={{ uri: weatherConditions[weather].imagem}}
              resizeMode="cover"
              style={styles.imagemfundo}>
            <Text style={styles.TextPrinc}>Olá, Ana! </Text>
            <Text style={styles.TextPrinc}> hoje o clima está assim</Text>
            <View style={styles.headerContainer}>
                <MaterialCommunityIcons
                 size={72} 
                 name={weatherConditions[weather].icon} 
                 color={'#fff'} 
                 />
                 <Text style={styles.tempText}>{temperature}°</Text>
            </View>
            <View style={styles.bodyContainer}>
                <Text style={styles.title}>{weatherConditions[weather].title}</Text>
                <Text style={styles.subtitle}>
                 {weatherConditions[weather].subtitle}
                </Text>
            </View>
            </ImageBackground>
        </View>
    );
};

Weather.propTypes = {
    temperature: propTypes.number.isRequired,
    weather: propTypes.string
};


const styles = StyleSheet.create({
    weatherContainer: {
        flex: 1,
    },
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    tempText: {
        fontSize: 60,
        color: '#B0E0E6'
    },
    bodyContainer: {
       flex: 2,
       alignItems: 'flex-start' ,
       justifyContent: 'flex-end',
       paddingLeft: 25,
       marginBottom: 40
    },
    title: {
        fontSize: 60,
        color: '#fff'
    },
    subtitle: {
        fontSize: 24,
        color: '#fff'
    },
    imagemfundo:{
      flex:1,
      backgroundColor:"#fff",
   
    },TextPrinc: {
        fontSize: 30,
        color: '#E0FFFF',
        paddingTop:50,
        textAlign:"center"
    }
});

export default Weather;