import { View,StatusBar,StyleSheet } from "react-native"

import { useState } from "react"

import Header from "../components/Header"
import Search from "../components/Search"
import Categories from "../components/Categories"
import Restaurants from "../components/Restaurants"


export default function HomeScreen(){

    const [term,setTerm] = useState('Burger')
  const commonCategories = [
    {
      name:'Burger',
      imageUrl:require('../images/burguer.png')
    },
    {
      name:"Pizza",
      imageUrl:require('../images/pizza.png')
    },
    {
      name:'Dessert',
      imageUrl:require('../images/cupcake.png')
    },
    {
      name:'Drinks',
      imageUrl:require('../images/cocktail.png')
    },
    {
      name:'Steak',
      imageUrl:require('../images/steak.png')
    },
    {
      name:'Pasta',
      imageUrl:require('../images/spaguetti.png')
    }
  ]

    return (
        <View style={styles.container}>
      <Header/>
      <Search
      setTerm={setTerm}
      />
      <Categories 
      categories={commonCategories}
      setTerm={setTerm}
      term={term}
      />
      <Restaurants term={term}/>

      
      <StatusBar style="auto" />
    </View>
    )
    
}



const styles= StyleSheet.create({
    container:{
        backgroundColor:'rgb(253,253,253)'
    }
})