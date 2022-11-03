import {
    View ,
    Text ,
    StyleSheet
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#fff' , 
        padding : 10 ,
        display : 'flex' ,
        flexDirection : 'row',
        flex : 1 
    },
    personalInfo : {
        flex : 7 ,
        alignSelf : 'center'
    },
    iconSign : {
        flex : 1 ,
        alignSelf : 'center' ,
    },
    personalIcon : {
        flex : 1 ,
        alignSelf : 'center' 
    }
})

const Personal = (props) => {
    return (
        <View style = {styles.container}>
            <View style = { styles.personalIcon }>
                <FontAwesome5 name='user-circle' size={30} color = 'black' />
            </View>
            <View style = {styles.personalInfo}>
                <Text style = {{ fontSize : 15 , fontWeight : 'bold' }}>Personal</Text>
                <Text style = {{ fontSize : 10 , fontWeight : 'bold' }}>Visa 0037</Text>
            </View>
            <View style = {styles.iconSign}>
                <Ionicons name = {'arrow-forward-circle-sharp'} color = {'black'} size = {50} />
            </View>
        </View>
    )
}

export default Personal;