import { 
    View , 
    Pressable ,
    Text ,
    StyleSheet
 } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
 
const style = StyleSheet.create({
    whereToBox : {
        backgroundColor : 'darkgray',
        borderRadius : 10 , 
        padding : 10 ,
        display : 'flex' ,
        flexDirection : 'row' ,
        justifyContent : 'space-between' ,
        alignItems : 'center'
    }
 }) 

 const SearchTransition = (props) => {
    const navigation = useNavigation();

    const goToLocationSearch = (e) => {
        navigation.navigate('locationSet');
    }

    return (
        <>
            <View>
                <Pressable 
                onPress={goToLocationSearch}
                style = {style.whereToBox}>
                    <Text style = {{ fontSize : 15 , 
                        fontWeight : 'bold' ,
                        }}
                        >
                        Where to ? 
                    </Text>
                    <Text style = {{ 
                        backgroundColor : 'white' ,  
                        padding : 10 ,
                        width : 95 ,
                        borderRadius : 15 ,
                        fontWeight : 'bold' ,
                        display : 'flex' 
                        }} 
                        >
                        
                        <View>    
                            <AntDesign  name='clockcircle' color={'black'} size = {15} />
                        </View>
                        &nbsp; Now &nbsp;
                        <View>
                            <AntDesign name='caretdown' color={'black'} size = {10} />
                        </View>
                    </Text>
                </Pressable>
            </View>
        </>
    )
 }

 export default SearchTransition;