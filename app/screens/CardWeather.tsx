import { StyleSheet, Text, View , SafeAreaView } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';
import { weatherType } from '../utilities/weatherType';

const CardWeather = ({weatherData}) => {
console.log(weatherData)
    const { main :{temp, feels_like, temp_max, temp_min},weather} = weatherData;

    const weatherCondition = weather[0].main
  return (
    <SafeAreaView style={{flex:1,backgroundColor:weatherType[weatherCondition].backgroundColor}}>
    <View style={styles.container}>
    <Feather name={weatherType[weatherCondition].icon} size={100} color="white" />
      <Text>Current Weather</Text>
      <Text style={styles.text}>{temp}</Text>
      <Text style={styles.feels}>{`Feels like ${feels_like}`} </Text>
      <View style={ styles.highlowwrapper}>
      <Text style={styles.highlow}>{`High: ${temp_max} `}</Text>
      <Text style={styles.highlow}>{`Low: ${temp_min} `}</Text>
      </View>
      </View>
      <View style={styles.bodywrapper}>
<Text style={styles.description}>{weather[0].description}</Text>
<Text style={styles.message}>{weatherType[weatherCondition].message}</Text>
<Text></Text>
      </View>
     
   
    </SafeAreaView>
  )
}

export default CardWeather

const styles = StyleSheet.create({
    container:{
        flex:1,
        
        alignItems:"center",
         justifyContent:"center"
    },
    text:{
        color:'black',
        fontSize: 48
    },
    feels:{
         fontSize:30,
         color:'black'
    },
    highlow:{
        color:'black',
        fontSize:20
    },
    highlowwrapper:{
        flexDirection:"row"
    },
    bodywrapper:{
        justifyContent:"flex-end",
        alignItems:"flex-start",
        paddingLeft:25,
        marginBottom:40

    },
    description:{
fontSize:48
    },message:{
   fontSize:30
    }
})