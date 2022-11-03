import {
    View ,
    Text ,
    StyleSheet, 
    Image,
    Pressable,
    Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
    container : {
        backgroundColor : "#eeeeee" ,
        display : 'flex' ,
        flexDirection : 'row' ,
        alignItems : 'center' ,
        padding : 5 ,
        flex : 1 ,
        borderBottomWidth : 2 ,
        borderBottomColor : 'black'
    },
    carData : {
        flex : 10 ,
        marginLeft : 10
    },
    priceData : {
        flex : 3 ,
        display : 'flex' ,
        alignItems : 'flex-end' ,

    },
    estimatedPrice : {
        display : 'flex' ,
        flexDirection : 'row'
    },
    carImage : {
        flex : 3,
        display : 'flex' ,
    }
})

const CarInfo = (props) => {
    return (
        <Pressable style = {styles.container} 
        onPress = {() => Alert.alert('Function Execute',` ${props.carname} was chosen `,[
            {
                text : 'OK' ,
                style : 'cancel'
            }
        ],
        {
            cancelable : true
        }
        )}>
            <View style = {styles.carImage}>
                <Image source={props.image} style = {{ width : 75 , height : 50 , resizeMode : 'contain' }} />
            </View>
            <View style = {styles.carData}>
                <Text style = {{ fontWeight : 'bold' , fontSize : 15 }} >
                    {props.carname}
                    &nbsp;
                    &nbsp;
                    <FontAwesome name='user' color={'black'} size = {10} />
                    &nbsp;
                    <Text style = {{ fontSize : 10 }}>3</Text>
                </Text>
                <Text style = {{ fontSize : 10 }}>
                    {props.timeDropOff} 
                </Text>
            </View>
            <View style = {styles.priceData}>
                <View style = {styles.estimatedPrice}>    
                    <Ionicons name='pricetag' color={'green'} size = {15} />
                    <Text style = {{ fontWeight : 'bold' , fontSize : 15}}>
                        {props.price}
                    </Text>
                </View>
                <Text style = {{ fontSize : 10 }}>
                    {props.priceRange}
                </Text>
            </View>
        </Pressable>
    );
}

export default CarInfo;