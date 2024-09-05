import { StyleSheet, Text,StatusBar, 
  View,SafeAreaView ,ImageBackground,
  FlatList} from 'react-native'
import React from 'react'
import Item from '../components/ListItem'


const UpcomingWeather = ({weatherData}) => {
    const renderItem=({item})=>(
        <Item condition={item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max}/>
    )
  return (
    <SafeAreaView style={styles.container}>
     
      <ImageBackground source = { require('../../assets/images/clouds2.jpg')} style={styles.image}>
      <FlatList data={weatherData} renderItem={renderItem}
      keyExtractor={item=>item.dt_txt}
      ListEmptyComponent={()=>(<View><Text>No Data</Text></View>)}/>
</ImageBackground>
    </SafeAreaView>
  )
}

export default UpcomingWeather

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:StatusBar.currentHeight || 0,
         backgroundColor:"royalblue"
    },
   
   

})