import { View,Text,StyleSheet} from 'react-native'
import { Feather } from '@expo/vector-icons'
import moment from 'moment';
import { weatherType } from '../utilities/weatherType';

const Item=(props:any)=>{
    const {dt_txt,min,max,condition} = props;
    return <View style={styles.item}>
           <Feather name={weatherType[condition].icon} size={50} color="white"/>
           <View style={styles.dateTextWrapper}>
           <Text style={styles.date}>{moment(dt_txt).format('dddd')}</Text>
           <Text style={styles.date}>{moment(dt_txt).format('h:mm:ss a')}</Text>
           </View>
          
           <Text style={styles.temp}>{`${Math.round(min)}C / ${Math.round(max)} C`}</Text>
          
           </View>
}
const styles = StyleSheet.create({
   
    temp:{
        color:'white',
        fontSize:20
    },
    date:{
        color:"white",
        fontSize:15
    },
    image:{
        flex:1
        // height:400,
        // width:400
    },
    dateTextWrapper:{


        flexDirection:"column"
    },

    item:{
        padding:20,
        marginVertical:8,
        marginHorizontal:16,
        flexDirection:'row',
        justifyContent:"space-around",
        alignItems:"center",
        borderWidth:5,
        backgroundColor:"indianred"
    },

})


export default Item;