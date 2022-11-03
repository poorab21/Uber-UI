import {
    View , 
    Pressable ,
    StyleSheet ,
    Text , 
    ToastAndroid
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const styles = StyleSheet.create({
    container : {
        flex : 1 ,
        backgroundColor : 'lightgray' ,
        display : 'flex' ,
        flexDirection : 'row' ,
        padding : 10
    },
    btn : {
        flex : 4 ,
        backgroundColor : 'black' ,
        borderRadius : 15 ,
        display : 'flex' ,
        flexDirection : 'row' ,
        justifyContent : 'center' ,
        alignItems : 'center'
    },
    btnText : {
        textAlign : 'center' ,
        fontSize : 20 ,
        color : 'white' ,
    },
    sideIcon : {
        flex : 1 ,
        borderColor : 'gray' ,
        backgroundColor : 'gray' ,
        borderWidth : 1 ,
        borderRadius : 15 ,
        marginLeft : 3 ,
        display : 'flex',
        flexDirection : 'row' ,
        justifyContent : 'center' ,
        alignItems : 'center'
    }
})

const ConfirmBooking = (props) => {
    const confirm = () => {
        ToastAndroid.showWithGravityAndOffset('Booking Confirmed',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50);
    }

    return (
        <View style = {styles.container}>
            <Pressable 
            onPress = {confirm}
            style = {styles.btn}>
                <Text style = {styles.btnText}>
                    Confirm UberX
                </Text>
            </Pressable>
            <View style = {styles.sideIcon}>
                <MaterialCommunityIcons name='car-clock' size={50} color = {'black'} />
            </View>
        </View>
    )
}

export default ConfirmBooking;