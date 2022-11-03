import {
    Text ,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Travelmessage = (props) => {
    return (
        <>
            <Text style = {{ fontSize : 20 , color : 'white' }}>
                Travel Only if Necessary
            </Text>
            <Text style = {{ color : 'white' , padding : 5 }}>
                Help flatten the curve.if you must travel please exercise caution for your safety and the safety of your community
            </Text>
            <Text style = {{ color : 'white' , fontWeight : 'bolder' , padding : 5 }} >
                Learn More 
                <AntDesign name='arrowright' size={12} color = 'white' />
            </Text>
        </>
    )
}

export default Travelmessage;