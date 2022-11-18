import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/solid'
import ResturentCard from './ResturentCard'
import sanityClient, { urlFor } from '../sanity';

const FeaturedRow = ({ id, title, description }) => {
  const [resturents, setResturents] = useState([])
  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == "featured" && _id == $id] {
      ...,
      restaurants[]->{
        ...,
        dishes[]->,
        type->{
          name
        }
      }
    }[0]`,
        { id }
      )
      .then((data) => {
        setResturents(data?.restaurants);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  return (
    <View className="">
      <View className="mt-4 flex-row items-center justify-between px-4 ">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00ccbb" size={23}/>
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,

        }}
        showsVerticalScrollIndicator={false}
        className="pt-4 "
      >
        {
        resturents?.map((resturents)=>(

          <ResturentCard
          key={resturents._id}  
          id={resturents._id}
          imgUrl={ urlFor(resturents.image).url() }
            address={resturents.address}
            title={resturents.name}
            dishes={resturents.dishes}
            rating={resturents.rating}
            short_description={resturents.short_description}
            genre={resturents.type?.name}
            long={resturents.long}
            lat={resturents.lat}
           
           />
        ))
         }
      </ScrollView>
    </View>
  )
}

export default FeaturedRow