import React,{useContext} from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';
import BlogContext from '../context/BlogContext';
import { FontAwesome } from '@expo/vector-icons';

const ShowScreen=({navigation})=>{


    const {data}=useContext(BlogContext);

    const blogPost=data.find((result)=>result.id===navigation.getParam('id'));

    return(
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>

        </View>
    )

};

ShowScreen.navigationOptions=({navigation})=>{

    return{
        headerRight:(
            <TouchableOpacity onPress={()=>{navigation.navigate('Edit',{id:navigation.getParam('id')})}}>
                <FontAwesome name="pencil" size={24} color="black" />
            </TouchableOpacity>
        )


    }
};


const style=StyleSheet.create({

});

export default ShowScreen;