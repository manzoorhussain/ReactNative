import React,{useContext} from 'react';
import {View,Text,StyleSheet
    ,Button,FlatList,SafeAreaView,
    TouchableOpacity} from 'react-native';
import BlogContext from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen=({navigation})=>{

 const {data,deleteBlogPost}=useContext(BlogContext);


return(
    <View style={styles.container}>

        <SafeAreaView>

        <FlatList
           data={data}
           keyExtractor={(blogPost)=>blogPost.id}
           renderItem={({item})=>{
           return(
           <TouchableOpacity onPress={()=>navigation.navigate('Show',{id:item.id})}>
           <View style={styles.row}>
           <Text style={styles.blogText}>{item.title}--{item.id}---{item.content}</Text>
           <TouchableOpacity onPress={()=>deleteBlogPost(item.id)}>
           <Feather style={styles.icon} name="trash-2" size={24} color="black"/>
           </TouchableOpacity>

           </View>
           </TouchableOpacity>
           );

           }}
            />
            </SafeAreaView >


    </View>
)

};

IndexScreen.navigationOptions=({navigation})=>{

    return{
        headerRight:(
            <TouchableOpacity onPress={()=>navigation.navigate('Create')}>
                <Feather name="plus" size={30}/>
            </TouchableOpacity>
        )


    }
};
 const styles=StyleSheet.create({
     icon:{

     },

      row:{
          flex:1,
          flexDirection:'row',
          justifyContent:'space-between',
          borderWidth:2,
          borderColor:'grey',
          borderRadius:5,
          height:70,
      },

     blogText:{
         fontSize:20,
         fontWeight:'bold',
         padding:8
     }

 });

export default IndexScreen;