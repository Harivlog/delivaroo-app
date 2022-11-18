import { View, Text, SafeAreaView ,Image} from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from '@react-navigation/native';
const PreparingOrderScreen = () => {
  const navigation = useNavigation()
  useEffect(() => {
    setTimeout(()=>{
      navigation.navigate("Delivery")
    }, 4000)
  }, [])
  
  return (
   <SafeAreaView className="bg-[#00ccbb] flex-1 justify-center items-center">
      <Animatable.Image
        source={require("../assets/delivaryLoading.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-80
         w-80"
      />
      {/* <Image source={require("../assets/icon.png")}/> */}
      <Animatable.Text
        animation='slideInUp'
        iterationCount={1}
        className='text-lg my-10 px-5 text-white font-bold text-center'
      >
        Waiting for restaurant to accept your order!
      </Animatable.Text>
      {/* <Progress.CircleSnail color={['red', 'green', 'blue']} /> */}
      {/* <Progress.Circle size={60} indeterminate={true} color='white'  fill='blue' /> */}
   </SafeAreaView>
  )
}

export default PreparingOrderScreen