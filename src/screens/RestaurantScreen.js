import { useEffect } from 'react'
import {View,Text, FlatList,Image,Dimensions} from 'react-native'
import useRestaurant from '../hooks/useRestaurant'

export default function RestaurantScreen({navigation}){
    const id = navigation.getParam('id')
    const [{data,loading,error},searchRestaurant] = useRestaurant()

    const dimensions = Dimensions.get('window')
    const imageWidth = dimensions.width
    const imageHeight = (dimensions.width*9) / 16

    useEffect(()=>{
        searchRestaurant(id)
    },[])
    

    if(loading || !data) return <Text>Loading</Text>

    if(error) return <Text>{error}</Text>
 

    return (
        <View>
            <FlatList
            data={data.photos}
            keyExtractor={(photo)=>photo}
            renderItem={({item})=><Image source={{uri:item}} style={{height:imageHeight,width:imageWidth}}/>}
            
            />
           

        </View>
    )

}





