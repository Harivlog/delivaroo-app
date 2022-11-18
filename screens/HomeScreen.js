import { View, Text, SafeAreaView, Image ,TextInput, ScrollView} from 'react-native'
import React , {useEffect, useLayoutEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native'


import { ChevronDownIcon , AdjustmentsVerticalIcon ,} from "react-native-heroicons/solid";
import { UserIcon ,MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow'
import sanityClient from '../sanity';


const HomeScreen = () => {
  const [featuredCategories, setFeaturedCategories] = useState([])

  useEffect(() => {
    sanityClient
      .fetch(
        `
   *[_type == "featured"] {
     ...,
     resturents[]->{
       ...,
       dishes[]->
     }
   }`
      )
      .then((data) => {
        setFeaturedCategories(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  // console.log(featuredCategories)
  return (
     <SafeAreaView style={{paddingTop :29}} className="bg-white">

      <View className="flex-row pb-3 items-center mx-4 space-x-2 ">
        <Image
          source={{
            uri:"https://links.papareact.com/wru"
          }}
          className="w-8 h-8 bg-gray-300 rounded-full"
        />
        <View className="flex-1">
          <Text className="text-gray-400 font-bold text-xs">Deliver Now!</Text>
          <View className="flex-row items-center">
          <Text className="font-bold text-lg items-center justify-center">Current Location  </Text>
        <ChevronDownIcon  fill="#00ccbb" size={22}  className="justify-center items-center relative top-4"  />
          </View>
        </View>
        <UserIcon size={30} color="#00ccbb"/>  
        </View>
        {/* -----------search */}
        <View className="flex-row justify-between items-center px-3 pb-2">
          <View 
             className="flex-row flex-1 bg-gray-200 p-2 items-center rounded-md"
          >
            <MagnifyingGlassIcon color="gray" size={23} />   
            <TextInput
            placeholder="Resturents and cuisines"
            keyboardType="default"
            className="ml-1"
            />
          </View>

           <AdjustmentsVerticalIcon color="#00ccbb" size={28} />
        </View>
        {/* body of app */}
        <ScrollView className="bg-gray-100">
             <Categories />
             
             {/* Features */}
          {
            featuredCategories?.map((category)=>(
              
              <FeaturedRow
              key={category._id}
              id={category._id}
              title={category.name}
              description={category.short_description}
            />
            ))
          }
            
               
        </ScrollView>

        <Text>sd/fsl;dfs sdklfklsdf sdfnsdf</Text>
        <Text>sd/fsl;dfs sdklfklsdf sdfnsdf</Text>
        <Text>sd/fsl;dfs sdklfklsdf sdfnsdf</Text>
        <Text>sd/fsl;dfs sdklfklsdf sdfnsdf</Text>
        <Text>sd/fsl;dfs sdklfklsdf sdfnsdf</Text>
        <Text>sd/fsl;dfs sdklfklsdf sdfnsdf</Text>
        <Text>sd/fsl;dfs sdklfklsdf sdfnsdf</Text>

     </SafeAreaView>
  
    )
}

export default HomeScreen