import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper';
import * as Font from 'expo-font'



export default function Quotes () {
    const CustomText = (props) => {
        const [fontLoaded, setFontLoaded] = useState(false);
      
        useEffect(() => {
          async function loadFont() {
            await Font.loadAsync({
              'custom-font': require('./../assets/fonts/CoffeCake.otf'),
            });
      
            setFontLoaded(true);
          }
      
          loadFont();
        }, []);
      
        if (!fontLoaded) {
          return <Text>Loading...</Text>;
        }
      
        return (
          <Text style={{ ...props.style, fontFamily: 'custom-font' }}>
            {props.children}
          </Text>
        );
      };
      

    const funnyQuotes = [

        "Do no take life seriously. You will never get out of it alive.",
        "Whatever you do, always give 100%. Unless you're donating blood.",
        "If you think you are too small to be effective, you've never been in a dark room with a mosquito",
        "If at first you do not succeed, then skydiving is definitely not for you.",
        "Hard work never killed anybody, but why take a chance?"

    ]
    const [randomQuote, setRandomQuote] = useState("");
 const generateRandomQuote = () => {
const randomIndex = Math.floor(Math.random() * funnyQuotes.length);
const newRandomQuote = funnyQuotes[randomIndex];
setRandomQuote(newRandomQuote);

 }
    return (

        <View style={styles.container}>
            <CustomText style={styles.text}>
                {randomQuote}
            </CustomText>
            <Button style={styles.buttonStyle} onPress={generateRandomQuote} > Give me wisdom</Button>
        </View>
    )

    }

    const styles= StyleSheet.create({
        text: {
            color:'white',
            fontSize:25,
        },
        container:{
        justifyContent: 'center',
        alignItems:'center'
        },
        buttonStyle:{
            backgroundColor: '#f2acd5',
            fontsize: 20

        }
    })