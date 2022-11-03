import {
    View ,
    StyleSheet 
} from 'react-native';
import { useState } from 'react';
import Map from '../../components/Map';
import CarInfo from '../../components/Cars';
import Personal from '../../components/Personal';
import ConfirmBooking from '../../components/confirmBooking';
import uberCar from '../../components/carList';
import { useRoute } from '@react-navigation/native';

const styles = StyleSheet.create({
    container : {
        display : 'flex' ,
        flexDirection : 'column' ,
        height : "100%"
    },
    map : {
        flex : 4 ,
    },
    cars : {
        flex : 3 ,
        borderColor : 'black' ,
        borderWidth : 2 ,
        display : 'flex'
    },
    personal : {
        display : 'flex' ,
        flex : 1
    },
    confirm : {
        display : 'flex' , 
        flex : 1 ,
    }
})


const CarBooking = (props) => {
    const [uberCars , setUberCars] = useState(uberCar);
    const route = useRoute();
    const content = (
    <>
        {" Origin = " + route.params.origin}
        {'\n'}
        {" Destination = " + route.params.destination}
    </>
    );
    return (
        <View style = {styles.container}>
            <View style = {styles.map}>
                <Map content = {content}/>
            </View>
            <View style = {styles.cars}>
                { uberCars.map((value,index) => <CarInfo 
                key = {index} 
                carname = {value.carname} 
                timeDropOff = {value.timeDropOff} 
                price = {value.price} 
                priceRange = {value.priceRange}   
                image = {value.image} />) }
            </View>
            <View style = {styles.personal}>
                <Personal/>
            </View>
            <View style = {styles.confirm}>
                <ConfirmBooking/>
            </View>
        </View>
    );
}

export default CarBooking;