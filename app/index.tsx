
import React,{useState, useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './components/Tabs'
import { ActivityIndicator ,Alert,View} from 'react-native'
import useGetWeather from "../hooks/useGetWeather"
import { weatherType } from './utilities/weatherType'
import ErrorItem from './components/ErrorItem'
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
const App = () => {

const [ isLoading, error, weatherdata] = useGetWeather()


if(weatherdata)
{ console.log(weatherdata,isLoading,error)

}

if(isLoading)
    return <View style={{flex:1, justifyContent:"center",alignItems:"center"}}>
        {error?<ErrorItem/>:<ActivityIndicator size='large' color='blue'/>}
    </View>
  return (
    <NavigationContainer independent={true} >
       <Tabs weather={weatherdata}/>
     </NavigationContainer>
  )
}

export default App

