import { useNavigation } from '@react-navigation/native';
import { useState, Ref , createRef } from 'react';
import {
    View ,
    Text ,
    StyleSheet ,
    TextInput ,
    Pressable ,
} from 'react-native';



const styles = StyleSheet.create({
    container : {
        padding : 10 ,
        display : 'flex' ,
        flexDirection : 'column' ,
        flex : 1 ,
        justifyContent : 'center'
    },
    textbox : {
        borderColor : 'black' ,
        borderWidth : 1 ,
        borderRadius : 10 ,
        textAlign : 'center' ,
        fontSize : 20 ,
        marginTop : 10 ,
        backgroundColor : '#fff'
    },
    confirmBtn : {
        borderColor : 'black' ,
        borderWidth : 1 ,
        marginTop : 10 ,
        padding : 10 ,
        borderRadius : 10 ,
        backgroundColor : 'skyblue' ,
    },
    confirmText : {
        fontSize : 20 ,
        color : 'white' ,
        textAlign : 'center' ,
        fontWeight : 'bold'
    }
});

const LocationSet = (props) => {
    const [origin,setOrigin] = useState(null);
    const [destination,setDestionation] = useState(null);
    const navigation = useNavigation();
    const textBtn1 = createRef();
    const textBtn2 = createRef();

    const CarBook = () => {
        if(origin && destination){
            navigation.navigate('CarBooking',{
                origin : origin ,
                destination : destination 
            });
        }
        else {
            origin ? textBtn2.current.focus() : textBtn1.current.focus();
        }
    }

    return (
        <View style = {styles.container}>
            <View>
                <TextInput 
                placeholder='From ? ' 
                style = {styles.textbox} 
                onChangeText = {setOrigin}
                ref = {textBtn1}
                />
            </View>
            <View>
                <TextInput 
                placeholder='to Where ? ' 
                style = {styles.textbox} 
                onChangeText = {setDestionation} 
                ref = {textBtn2} />
            </View>
            <Pressable 
            style = {styles.confirmBtn}
            onPress = {CarBook}
            >
                <Text style = {styles.confirmText}>
                    Submit
                </Text>
            </Pressable>
        </View>
    )
}

export default LocationSet;