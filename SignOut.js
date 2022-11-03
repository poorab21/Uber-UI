import { View , 
  Text ,
  StyleSheet,
  Pressable,
  BackHandler,
  AsyncStorage,
  Alert
} from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

const styles = StyleSheet.create({
  container : {
    display : 'flex' ,
    backgroundColor : '#fff' ,
    flex : 1 ,
    justifyContent : 'center'
  },  
  signoutContainer : {
    display : 'flex' ,
    padding : 20 ,
    flexDirection : 'column' ,
    backgroundColor : '#fff' ,
    margin : 20 ,
    borderWidth : 1 ,
    borderColor : 'black' ,
    borderRadius : 20 ,
  },
  signOutText : {
    borderBottomColor : 'black' ,
    borderBottomWidth : 1,
    paddingBottom : 10 ,
  },
  button : {
    display : 'flex' ,
    flexDirection : 'row' ,
    padding : 10
  },
  btn1 : {
    borderWidth : 1 ,
    borderColor : 'black' ,
    padding : 10 ,
    flex : 1 ,
    backgroundColor : 'lime' ,
    borderRadius : 20
  },
  btn2 : {
    flex : 1,
    borderWidth : 1 ,
    marginLeft : 10 ,
    borderColor : 'black' ,
    padding : 10 ,
    backgroundColor : 'red',
    borderRadius : 20
  }
})

const SignOut = (props) => {
  const navigation = useNavigation();
  
  const Exit = async () => {
    props.setLogout(false);
    await AsyncStorage.clear();
    navigation.navigate('Login');
  }

  return (
    <View style = {styles.container}>
      <View style = {styles.signoutContainer}>
          <View style = {styles.signOutText}>
              <Text style = {{ fontSize : 20 , fontWeight : 'bold' }}>
                Are you sure you want to sign out ?
              </Text>
          </View>
          <View style = {styles.button}>
              <Pressable 
              onPress={Exit}
              style = {styles.btn1}>
                  <Text style = {{ fontWeight : 'bold' , textAlign : 'center' , fontSize : 20 }}>
                      Yes
                  </Text>
              </Pressable>
              <Pressable 
              onPress={() => navigation.navigate('Home')}
              style = {styles.btn2}>
                  <Text style = {{ fontWeight : 'bold' , textAlign : 'center' , fontSize : 20 }}>
                      No
                  </Text>
              </Pressable>
          </View>
      </View>
    </View>
  )
}

export default SignOut;