import { StyleSheet, Text, View ,SafeAreaView,ImageBackground, StatusBar} from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import IconText from '../components/IconText'
import moment from 'moment'
const City = ({weatherData}) => {
    const { name,country,population, sunrise, sunset} = weatherData|| {};
    console.log(weatherData)
  return (
    <SafeAreaView style={styles.container}>

   <ImageBackground source={require('../../assets/images/city1.jpg')}
   style={styles.imageLayout} >
   <Text style={[styles.cityText,styles.cityName]}>{name}</Text>
   <Text style={[styles.cityText,styles.country]}>{country}</Text>
   <View style={[styles.populationWrapper,styles.rowLayout]}>
   <IconText iconName="user" iconColor="red" text={`Population : ${population}`} textStyles={styles.ptext}/>
   </View>
   <View style={[styles.riseWrapper,styles.rowLayout]}>
    <IconText iconName="sunrise" iconColor="white" text={moment(sunrise).format('h:mm:ss a')} textStyles={styles.sunrise}/>
    <IconText iconName="sunset" iconColor="white" text={moment(sunset).format('h:mm:ss a')} textStyles={styles.sunset}/>
  
   </View>
   </ImageBackground>
  
    </SafeAreaView>
  )
}

export default City

const styles = StyleSheet.create({

    container:{
        flex:1
    },
    imageLayout:{
        flex:1,
        marginTop:StatusBar.currentHeight ||0

    },
    cityText:{
        justifyContent:"center",
        alignSelf:"center",

        fontWeight:'bold',
        color:'white'
    },
    country:{
      
        fontSize:30
       
    },
    cityName:{
        fontSize:40
    },
    populationWrapper:{
      
        justifyContent:"center",
        marginTop:30
    },
    rowLayout:{
flexDirection:"row",
alignItems:"center"
    },

    ptext:{
        fontSize:30,
        marginLeft:7.5,
        color:'red',
        fontWeight:'bold'
    },
    riseWrapper:{
 
 justifyContent:"space-around",
 marginTop:30
    },sunrise:{
fontSize:20,
color:"white",
fontWeight:"bold"
    }, sunset:{
        fontSize:20,
        color:"white",
        fontWeight:"bold"
    }
})