import { View,Text,StyleSheet,Image,TouchableOpacity } from "react-native"
import { elevation } from "../common/styles"

export default function CategoryItem({name,imageUrl,index,active,handlePress}){

    


    return (
        <TouchableOpacity onPress={handlePress}>

        
        <View style={[styles.container,styles.elevation,index === 0 ? {marginLeft:25} : {marginLeft:15 },
        active ? {backgroundColor: '#E54B4B' } : {backgroundColor: 'white'}]}>
            <View style={styles.imageContainer}>
                <Image source={imageUrl} style={styles.image}/>

            </View>
            <Text style={styles.header}>
                {name}
            </Text>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        width:70,
        height:100,
        borderRadius:50,
        marginVertical:35,
        alignItems:'center',

        justifyContent:'center' 
        
    },
    elevation,
    image:{
        width:35,
        height:35
    },
    imageContainer:{
        width:50,
        height:50,
        alignItems:"center",
        justifyContent:'center',
        borderRadius:50,
        marginBottom:5
    },
    header:{
        fontWeight:'bold'
    }

})