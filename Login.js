import { View , 
  Text , 
  StyleSheet ,
  TextInput ,
  Pressable, 
  Alert,
  AsyncStorage
} from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  loginContainer : {
    display : 'flex' ,
    flexDirection : 'row' ,
    alignItems : 'center' ,
    backgroundColor : '#fff' ,
    flex : 1 ,
  },
  loginForm : {
    flex : 1,
    borderColor : 'black' ,
    borderWidth : 1 ,
    borderRadius : 20 ,
    padding : 10 ,
    backgroundColor : 'skyblue' ,
    margin : 10 ,
    display : 'flex',
    flexDirection : 'column' 
  },
  emailInput : {
    backgroundColor : '#fff' ,
    borderRadius : 20 ,
    padding : 10 ,
  },
  passwordInput : {
    backgroundColor : '#fff' ,
    borderRadius : 20 ,
    padding : 10 ,
    marginTop : 10
  },
  submitBtn : {
    borderRadius : 20 ,
    padding : 15 ,
    marginTop : 10 ,
    backgroundColor : 'lightblue' ,
    borderWidth : 1,
    borderColor : 'black'
  },
  btnText : {
    textAlign : 'center' ,
    fontSize : 20 ,
    fontWeight : 'bold'
  },
  register : {
    padding : 10 ,
    display : 'flex' ,
    flexDirection : 'row' ,
    justifyContent : 'center' ,
    alignItems : 'center'
  },
  registerBtn : {
    marginLeft : 10 ,
    borderColor : 'black' ,
    borderWidth : 1 ,
    padding : 5 ,
    borderRadius : 20 ,
    backgroundColor : 'lime'
  }
});

const Login = (props) => {
  const navigation = useNavigation();
  const [email,setEmail] = useState(null);
  const [password,setPassword] = useState(null);
  
  const saveToken = async (token) => {
    try{
      await AsyncStorage.setItem('token',token);
    }
    catch(err){
      throw err;
    }
  }

  const login = async () => {
    await fetch('http://192.168.100.131:3000/login',{
      method : 'POST' ,
      headers : {
        'Content-type' : 'application/json'
      },
      body : JSON.stringify({
        email : email ,
        password : password
      })
    }).then(response => response.json()).then((data) => {
        if(data.err){
          Alert.alert(
            'Login Error' ,
            data.err ,
            [{
              text : 'OK' ,
              style : 'cancel'
            }],
            {
              cancelable : true
            }
            )
        }
        else if(data.token){
          saveToken(data.token);
          navigation.navigate('Home')
        }
    }).catch((err) => {
      throw err;
    });
  }
  
  return (
    <View style = {styles.loginContainer}>
        <View style = {styles.loginForm}>
            <View style = {styles.emailInput}>
                <TextInput 
                placeholder='Enter Email' 
                onChangeText={setEmail} 
                value = {email}  />     
            </View>
            <View style = {styles.passwordInput}>
                <TextInput 
                placeholder='Enter Password' 
                secureTextEntry = {true}
                onChangeText = {setPassword}
                value = {password} />
            </View>
            <View style = {styles.submitBtn}>
                <Pressable>
                  <Text 
                  style = {styles.btnText}
                  onPress = {login}>
                      Sign in
                  </Text>
                </Pressable>    
            </View>
            <View style = {styles.register}>
                <Text>
                    If you are not registered ! Please
                </Text>
                <Pressable 
                style = {styles.registerBtn}
                onPress = {() => navigation.navigate('Registration') }>
                    <Text>
                        Register
                    </Text>
                </Pressable>
            </View>
        </View>
    </View>
  )
}

export default Login;