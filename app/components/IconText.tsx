import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'

const IconText = (props) => {
    const { iconName, iconColor,text, textStyles } = props
  return (
    <View style={styles.container}>
    <Feather name={iconName} size={50} color={iconColor}/>
    <Text style={[styles.textTheme,textStyles]}>{text}</Text>
    </View>
  )
}

export default IconText

const styles = StyleSheet.create({
    container:{
        alignItems:"center"
    },

    textTheme:{
        fontWeight:"bold",
    
    }
})