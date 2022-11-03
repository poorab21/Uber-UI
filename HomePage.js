import {
    View ,
    StyleSheet, 
    BackHandler,
    Alert,
    AsyncStorage,
} from 'react-native';
import { useCallback, useState } from 'react';
import Map from '../../components/Map';
import Travelmessage from '../../components/Travelmessage';
import SearchTransition from '../../components/SearchTransition';
import STOptions from '../../components/SearchTransitionOptions';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect, useRoute } from '@react-navigation/native';
const styles = StyleSheet.create({
    container : {
        display : "flex" ,
        height : "100%" , 
        flexDirection : 'column' , 
    },
    map : {
        flex : 3
    },
    travelmessage : {
        flex : 1 ,
        backgroundColor : '#68BBE9' , 
        padding : 10 ,
        borderRadius : 10 
    },
    searchTransition : {
        padding : 5 ,
        backgroundColor : 'lightgray' 
    }
})

const AlertBox = (props) => {
    return (
        <>
            {Alert.alert('Message',props.msg,[
                {
                    text : 'OK' ,
                    style : 'cancel'
                }
            ],
            {
                cancelable : true
            })}
        </>
    )
}

const HomePage = (props) => {
    const [locations , setLocations] = useState(['Spin NightClub','Home']);
    useRoute().params.setLogout(true);
    
    useFocusEffect(() => {
            const backPress = () => {
                Alert.alert('Exit App','Would you like to Exit App ?',[
                    {
                        text : 'Yes' ,
                        style : 'default' ,
                        onPress : async function(){
                            await AsyncStorage.clear();
                            BackHandler.exitApp();
                        }
                    },
                    {
                        text : 'No' ,
                        style : 'cancel',
                    }
                ],{
                    cancelable : true
                })
                return true;
            }

            BackHandler.addEventListener('hardwareBackPress',backPress);

            return () => BackHandler.removeEventListener('hardwareBackPress',backPress);
    });
    
    return (
        <SafeAreaView>
            <View style = {styles.container}>
                <View style = {styles.map}>
                    <Map content = {'This is a Map'}/>
                </View>
                <View style = {styles.travelmessage}>
                    <Travelmessage/>
                </View>
                <View style = {styles.searchTransition}>
                    <SearchTransition/>
                    {locations.map((value,index) => <STOptions key = {index}  location = {value} />) }
                </View>
            </View>
        </SafeAreaView>
    ); 
}

export default HomePage;