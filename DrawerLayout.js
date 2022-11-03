import { View, Text , StyleSheet } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const styles = StyleSheet.create({
    container : {
        backgroundColor : 'black' ,
        display : 'flex' ,
        flex : 1
    },
    user : {
        display : 'flex' ,
        flexDirection : 'column' ,
        justifyContent : 'space-around' ,
        flex : 3 ,
        alignItems : 'center'
    },
    userName : {
        color : 'white' ,
        fontSize : 20 ,
        fontWeight : 'bold'
    },
    userData : {
        paddingTop : 10
    },
    message : {
        borderTopColor : 'white' ,
        borderTopWidth : 1 ,
        borderBottomColor : 'white' ,
        borderBottomWidth : 1 ,
        marginTop : 10 ,
        padding : 10 ,
        display : 'flex' ,
        flexDirection : 'row' ,
        justifyContent : 'space-between' ,
        flex : 1 ,
        alignItems : 'center'
    },
    messageContent : {
        display : 'flex' ,
        flexDirection : 'row' ,
    },
    messageContent2 : {
        color : 'white' ,
        fontSize : 20
    },
    blueCircle : {
        backgroundColor : 'lightblue' ,
        width : 10 ,
        height : 10 ,
        borderRadius : 25 ,
        marginLeft : 10 ,
        marginTop : 12
    },
    account : {
        flex : 1 ,
        alignItems : 'center' ,
        justifyContent : 'center'
    },
    accountText : {
        color : 'lightgray',
        padding : 10 ,
        fontWeight : 'bold' ,
        fontSize : 15
    },
    money : {
        flex : 1 ,
        alignItems : 'center' ,
    },
    moneyText : {
        color : 'white' ,
        fontWeight : 'bold' ,
        fontSize : 15 ,
        padding : 10
    },
    listItems : {
        flex : 7 ,
        backgroundColor : 'white' ,
    }
})

export default function DrawerLayout(props) {
  return (
    <DrawerContentScrollView>    
        <View style = {styles.container}>
            <View style = {styles.user}>
                <View style = {styles.userIcon}>
                    <FontAwesome name='user-circle-o' color={'white'} size = {110} />
                </View>
                <View style = {styles.userData}>
                    <Text style = {styles.userName}>
                        Poorab Gangwani
                    </Text>
                    <Text style = {{ color : 'white' , textAlign : 'center' }}>
                        5.00
                        <Entypo name='star' color={'white'} size = {20} />
                    </Text>
                </View>
            </View>
            <View style = {styles.message}>
                <View style = {styles.messageContent}>
                    <Text style = {styles.messageContent2}>Messages</Text>
                    <View style = {styles.blueCircle} />
                </View>
                <View style = {styles.arrowIcon}>
                    <SimpleLineIcons name='arrow-right' color={'white'} size = {20} />
                </View>
            </View>
            <View style = {styles.account}>
                <Text style = {styles.accountText}>Do more with your account</Text>
            </View>
            <View style = {styles.money}>
                <Text style = {styles.moneyText}>Make money driving</Text>
            </View>
            <View style = {styles.listItems}>
                <DrawerItemList {...props} />
            </View>
        </View>
    </DrawerContentScrollView>
  )
}