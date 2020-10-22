import React,{useState,useContext} from 'react';
import {StyleSheet,View,Text,TextInput,Button} from 'react-native';
import BlogContext from '../context/BlogContext';

const EditScreen=({navigation})=> {

    const {data,updateBlogPost}=useContext(BlogContext);

    const[title,setTitle]=useState('');
    const[content,setContent]=useState('');


    const blogPost=data.find((result)=>result.id===navigation.getParam('id'));
    return(

        <View style={styles.container}>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput style={styles.textField} value={blogPost.title} onChangeText={(title)=>setTitle(title)}/>

            <Text style={styles.label2}>Enter Content:</Text>
            <TextInput style={styles.textField} value={blogPost.content} onChangeText={(content)=>setContent(content)}/>

            <Button title="Update Blog Post" onPress={(navigation,blogPost)=>{
                updateBlogPost(blogPost.id,title,content,()=>{
                     navigation.pop();
                });
            }}/>



        </View>

            )
};


const styles=StyleSheet.create({

    container:{
        flex:1,
        flexDirection:'column',
    },
    textField:{
        borderWidth:3,
        borderColor:'black',
        fontSize:25,

    },
    label:{
        fontSize:30,

    },
    label2:{
        fontSize:30,
        paddingTop:10

    },
    button:{


    }


});

export default EditScreen;