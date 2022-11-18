import { View, Text, TouchableOpacity ,Image} from 'react-native'
import React from 'react'

const CategoryCard = ({imgUrl,title}) => {

  return (
    <TouchableOpacity className="mr-2 relative flex-col justify-center items-center">
       <Image
          source={{uri : imgUrl}}
          className="w-20 h-20 bg-gray-300  "
        />
        <Text  className="absolute bottom-1 left-1 text-white font-bold text-center">{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard