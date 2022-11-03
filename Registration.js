import { View, 
  Text , 
  StyleSheet ,
  TextInput ,
  Pressable 
} from 'react-native';


import { Alert } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  form : {
    backgroundColor : '#fff' ,
    padding : 20 ,
    display : 'flex' ,
    flex : 1 ,
    flexDirection : 'column' ,
  },
  firstname : {
    flex : 1 ,
    display : 'flex' ,
    justifyContent : 'center' ,
  },
  text : {
    fontWeight : 'bold' ,
    fontSize : 20 ,
    fontStyle : 'italic' ,
    textAlign : 'center' 
  },
  input : {
    borderWidth : 1 ,
    borderColor : 'black' ,
    borderRadius : 20 ,
    padding : 10
  },
  lastname : {
    flex : 1 ,
    display : 'flex' ,
    justifyContent : 'center'
  },
  email : {
    flex : 1 ,
    display : 'flex' ,
    justifyContent : 'center'
  },
  password : {
    flex : 1 ,
    display : 'flex' ,
    justifyContent : 'center'
  },
  register : {
    flex : 1 ,
    justifyContent : 'center' ,
  },
  registerBtn : {
    backgroundColor : 'skyblue' ,
    borderRadius : 25 ,
    display : 'flex',
    flex : 1 ,
    justifyContent : 'center' ,
    marginTop : 10
  },
  registerText : {
    fontSize : 30 ,
    fontWeight : 'bold' ,
    textAlign : 'center' ,
  },
  accountPresent : {
    flex : 1,
    display : 'flex' ,
    flexDirection : 'row',
    justifyContent : 'space-around',
    alignItems : 'center'
  },
  accountText : {
    fontSize : 15 ,
    fontStyle : 'italic' ,
    fontWeight : 'bold' ,
  }
})

const Registration = (props) => {
  const navigation = useNavigation();
  const register = async () => {
    await fetch('http://192.168.100.131:3000/register',{
      method : 'POST' ,
      headers : {
        'Content-type' : 'application/json'
      },
      body : JSON.stringify({
        firstname : firstname ,
        lastname : lastname ,
        email : email ,
        password : password
      })
    }).then(res => res.json()).then((data) => {
      
      if(data.err){  
        Alert.alert('Sign up error',data.err,[
          {
            text : 'OK' ,
            style : 'cancel' 
          }
        ],{
          cancelable : true
        })
      }

      else if(data.msg){
        navigation.navigate('Login');
      }

    }).catch((err)=>{
      console.log(err);
    })
  }
  const [firstname,setFirstName] = useState('');
  const [lastname,setLastName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  return (
    <View style = {styles.form}>
        <View style = {styles.firstname}>
            <View style = {{ flex : 1}}>
              <Text style = {styles.text}>First-Name</Text>
            </View>
            <View style = {{ flex : 1}}>
              <TextInput style = {styles.input} onChangeText = {setFirstName} value = {firstname} />
            </View>
        </View>
        
        <View style = {styles.lastname}>
            <View style = {{ flex : 1}}>
              <Text style = {styles.text}>Last-Name</Text>
            </View>
            <View style = {{ flex : 1}}>
              <TextInput style = {styles.input} onChangeText = {setLastName} value = {lastname} />
            </View>
        </View>

        <View style = {styles.email}>
            <View style = {{ flex : 1}}>
              <Text style = {styles.text}>Email Address</Text>
            </View>
            <View style = {{ flex : 1}}>
              <TextInput type = {'email'} style = {styles.input} onChangeText = {setEmail} value = {email} />
            </View>
        </View>

        <View style = {styles.password}>
            <View style = {{ flex : 1}}>
              <Text style = {styles.text}>Password</Text>
            </View>
            <View style = {{ flex : 1}}>
              <TextInput type = {'email'} secureTextEntry = {true} style = {styles.input} onChangeText = {setPassword} value = {password} />
            </View>
        </View>

        
        
        <View style = {styles.registerBtn}>
            <Pressable style = {styles.register} onPress = {register}>
                <Text style = {styles.registerText}>Register</Text>
            </Pressable>
        </View>
        <View style = {styles.accountPresent}>
            <Text style = {styles.accountText}>
              If you have an account already present !
            </Text>
            <Pressable>
               <Text 
               style = {[styles.accountText,{ color : 'blue' }]}
               onPress = {() => navigation.navigate('Login')}>
                  Log in
               </Text>
            </Pressable>
        </View>
    </View>
  )
}

export default Registration;