import { GluestackUIProvider, Image, Pressable, Text, View } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config'; 

import DiceOne from './Assets/one.png'
import Dicetow from './Assets/two.png'
import Dicethree from './Assets/three.png'
import Dicefour from './Assets/four.png'
import Dicefive from './Assets/five.png'
import Dicesix from './Assets/six.png'

import ReactNativeHapticFeedback from "react-native-haptic-feedback";
import { useState, type PropsWithChildren } from 'react';
import { ImageSourcePropType, StyleSheet } from 'react-native';

type DiceProps = PropsWithChildren<{
  imageurl: ImageSourcePropType
}>

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};


const Dice =({imageurl}:DiceProps):JSX.Element=>{
  return (
    <View>
      <Image alt='dice 1' style={{width:200, height:200}} source={imageurl} />
      {/* <Text>hello</Text> */}
    </View>
  )
}

export default function App() {

  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne)

  const rollDice=()=>{
    let randomNum = Math.floor(Math.random() * 6) + 1 

    switch (randomNum) {
      case 1:
        setDiceImage(DiceOne)
        break;
      case 2:
        setDiceImage(Dicetow)
        break;
      case 3:
        setDiceImage(Dicethree)
        break;
      case 4:
        setDiceImage(Dicefour)
        break;
      case 5:
        setDiceImage(Dicefive)
        break;
      case 6:
        setDiceImage(Dicesix)
        break;
      default:
        setDiceImage(DiceOne)
        break;
    }
    ReactNativeHapticFeedback.trigger("impactHeavy", options);
  }

  return (
    <GluestackUIProvider 
    // config={config}
    >
      <View style={styles.container}>
      <Dice imageurl={diceImage} />
      <Pressable 
      onPress={()=>rollDice()}
       >
        <Text style={styles.rollDiceBtnText} >Roll The Dice</Text>
      </Pressable>
      </View>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
    borderRadius:10
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#55a8c0',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
    marginTop:30
  },
});