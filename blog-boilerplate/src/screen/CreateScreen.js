/**
 * Created by manzoor.hussain on 10/19/2020.
 */
import React,{useContext,useState} from 'react';
import {StyleSheet,View,Text,TextInput,Button} from 'react-native';
import BlogContext from '../context/BlogContext';


const CreateScreen=({navigation})=>{

    const[title,setTitle]=useState('');
    const[content,setContent]=useState('');

    const {addBlogPost}=useContext(BlogContext);
    return(
        <View style={styles.container}>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput style={styles.textField} value={title} onChangeText={(text)=>setTitle(text)}/>

            <Text style={styles.label2}>Enter Content:</Text>
            <TextInput style={styles.textField} value={content} onChangeText={(text)=>setContent(text)}/>

            <Button title="Add Blog Post" style={styles.button}
                    onPress={()=>{
                    addBlogPost(title,content,()=>{

                        navigation.navigate('Index');
                    })



                    }}/>
        </View>
    )

}

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

export default CreateScreen;

