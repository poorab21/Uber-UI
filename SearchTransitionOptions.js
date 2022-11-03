import { useNavigation } from '@react-navigation/native';
import { 
    View , 
    Pressable ,
    Text ,
    StyleSheet,
    Alert
 } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
 const styles = StyleSheet.create({
    container : {
        borderBottomWidth : 1 ,
        padding : 25 ,
    },
    btn : {
        display : 'flex' ,
        flexDirection : 'row' ,
        alignItems : 'center'
    }
 });

 const STOptions = (props) => {
    const navigation = useNavigation();
    return (
        <View style = {styles.container}>
            <Pressable 
            onPress = {() => navigation.navigate('CarBooking',{
                origin : 'Current Location' ,
                destination : props.location
            })}
            style = {styles.btn}>
                { props.location !== 'Home' ? 
                <View style = {{ borderWidth : 1 , borderColor : 'white' , borderRadius : 20 , padding : 2 }}>
                    <AntDesign name='clockcircle' size={25} color = 'white' /> 
                </View>
                    : 
                <View style = {{ borderWidth : 1 , borderColor : 'blue' , borderRadius : 20 , padding : 2 ,backgroundColor : 'blue' }}>
                    <Entypo name='home' size={25} color = 'white' /> 
                </View>    
                }
                <Text style = {{ fontWeight : 'bold' , marginLeft : 10 }}>
                    {props.location}
                </Text>
            </Pressable>
        </View>
    ); 
 }

 export default STOptions;