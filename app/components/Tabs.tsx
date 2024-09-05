import City from  "../screens/City"

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'
import CardWeather from '../screens/CardWeather'
import UpcomingWeather from "../screens/UpcomingWeather"


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
const Tab = createBottomTabNavigator();
const Tabs = ({weather}) => {
   console.log("weather",weather) 
  return (
 
        <Tab.Navigator 
        screenOptions={{
            tabBarActiveTintColor:'tomato',
            tabBarInactiveTintColor:'gray'
            ,tabBarStyle:{
                backgroundColor:'lightblue'
            },
            headerStyle:{
                backgroundColor:"lightblue"
            },
            headerTitleStyle:{
                fontWeight:'semibold',
                fontSize:25,
                color:'tomato'
            }
        }}
        >   
            <Tab.Screen name="Current" 
            options={{
                tabBarIcon:({focused})=>(
                    <Feather name="droplet" size={25} color={focused?'tomato':'black'}/>
                )
            }}>
                {()=> <CardWeather weatherData={weather?.list?.[0]}/>}
                </Tab.Screen>
            <Tab.Screen name="Upcoming"  options={{
                tabBarIcon:({focused})=><Feather name="clock" size={24}color={focused?'tomato':'black'} />
            }}>
                 {()=> <UpcomingWeather weatherData={weather?.list}/>}
                </Tab.Screen>

            <Tab.Screen name="City" 
            options={{
                tabBarIcon:({focused})=><Feather name="home" size={24}color={focused?'tomato':'black'} />
            }}>
                {()=> <City weatherData={weather.city}/>}
            </Tab.Screen>
  
   </Tab.Navigator>
 
  )
}

export default Tabs

const styles = StyleSheet.create({})