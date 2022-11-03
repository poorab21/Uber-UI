import {
    View ,
    Text
} from 'react-native';

const Map = (props) => {
    return (
        <View style = {{ display : 'flex' , flex : 1 , justifyContent : 'center' , alignItems : 'center' }}>
            <Text>{props.content}</Text>
        </View>
    )
}

export default Map;