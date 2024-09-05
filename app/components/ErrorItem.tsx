import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'


const ErrorItem = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.errortext}>SOmething went wrong</Text>
      <Feather name="frown" size={100} colot="white"/>
    </View>
  )
}

export default ErrorItem

const styles = StyleSheet.create({
    container:{
 flex:1,
 backgroundColor:"red"
 ,
 justifyContent:"center",
 alignItems:"center"
    },
    errortext:{
fontSize:30 ,
color:'white',
marginHorizontal:10,
textAlign:"center"
    }
})