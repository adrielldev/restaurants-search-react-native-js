import {View,TextInput,StyleSheet} from 'react-native';
import {FontAwesome} from '@expo/vector-icons'
import {elevation} from '../common/styles'
import {useState} from 'react'

function Search({setTerm}){
    const [input,setInput] = useState('')

    const handleEndEditting = (input) => {
        if(!input) return;

        setTerm(input)
        setInput('')
    }


    return (
        

        <View style={[styles.container,styles.elevation]}>
            <FontAwesome name='search' size={25}/>

            <TextInput style={styles.input}
            placeholder='Restaurants, food '
            value={input}
            onChangeText={(text)=>{setInput(text)}}
            onEndEditing ={()=> handleEndEditting(input)}
            />
        </View>
    )
}



const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginTop:5,
        marginHorizontal:25,
        backgroundColor:"white",
        padding:15,
        borderRadius:40
    },
    elevation,
    input:{
        fontSize:20,
        marginLeft:10 
    }
})

export default Search