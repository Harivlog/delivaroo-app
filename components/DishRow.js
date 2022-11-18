import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState ,useCallback} from 'react'
import Currency from 'react-currency-formatter'
import { urlFor } from '../sanity'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket , selectBasketItems, selectBasketItemsById ,removeFromBasket} from '../features/baskitSlice'

const DishRow = ({name , description , price ,image ,id}) => {

  const items = useSelector((state) => selectBasketItemsById(state, id));
  const [isPressed, setIsPressed] = useState(false)
  const dispatch = useDispatch();
  
  const removeItemFromBasket = () => {
    if (items.length <= 0) return;
    dispatch(removeFromBasket({ id }));
  };
  
  const addItemToBasket = useCallback(() => {
    dispatch(addToBasket({ id, name, description, price, image }));
  }, [dispatch]);
    return (
    <>
    <TouchableOpacity onPress={()=> setIsPressed(!isPressed)} className={` bg-white border p-4 border-gray-200   ${isPressed && 'border-b-0'}`}>
    <View className="flex-row ">
    <View className="flex-1 pr-2">


<Text className="text-lg mb-1">{name}</Text>
<Text className="text-gray-400">{description}</Text>
<Text className="text-gray-400 mt-2">
  <Currency quantity={price} currency="GBP" />
</Text>
</View>
<View>
<Image
  source={{uri : urlFor(image).url()}}
  className="h-20 w-20 bg-gray-300 p-4"
/>
</View> 
      </View> 
    </TouchableOpacity>

    {
      isPressed && (
        <View className='bg-white px-4 pt-2 justify-center flex-row items-center space-x-2 pb-3'>
           <TouchableOpacity className="" onPress={removeItemFromBasket}>
            <MinusCircleIcon  size={40} color={items.length > 0 ? `#00ccbb` : 'gray'}/>
           </TouchableOpacity>
           <Text>{items.length}</Text>
           <TouchableOpacity onPress={addItemToBasket}>
            <PlusCircleIcon  color='#00ccbb' size={40}/>
           </TouchableOpacity>
        </View>
      )
    }
    </>
  )
}

export default DishRow