import { FlatList,View } from "react-native"
import CategoryItem from "./CategoryItem"


export default function Categories({categories,setTerm,term}){
    


    return (
      <View>
        <FlatList
      data={categories}
      renderItem={({item, index})=>{
        return (
         <CategoryItem name={item.name} imageUrl={item.imageUrl} index={index}
         active={item.name === term}
         handlePress={()=>setTerm(item.name)}
        
         /> 
        )
      }}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(category)=>category.name}


      />

      </View>
        

    )
}