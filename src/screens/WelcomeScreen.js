import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation()
  const handleClick = () =>{
    navigation.navigate("SubscribeScreen")
  }
  return (
    <View style={styles.container}>
      <Image source={require("../assets/little-lemon-logo.png")} style={styles.img} />
      <Text style={styles.textStyle}>Little Lemon, your local</Text>
      <Text style={styles.textStyle}>Mediterranean Bistro</Text>
      <Pressable style={styles.button} onPress={handleClick} >
        <Text style={styles.buttonText}>NewsLetter</Text>
      </Pressable>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container : {
    flex : 1,
    display : "flex",
    alignItems : "center",
    justifyContent : "center",
    paddingHorizontal : 20
  },
  img : {
    resizeMode : "contain",
    width : 220,
    height : 220,
    marginBottom : 40
  },
  textStyle : {
    fontSize : 18,
    fontWeight : "bold",
  },
  button : {
    width : "100%",
    borderRadius: 8,
    backgroundColor: '#495E57',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 8,
    position :"absolute",
    bottom : 20
  },
  buttonText : {
    color : "white",
  }
})