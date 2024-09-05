
import React,{useState, useEffect} from 'react'
import  * as Location from "expo-location"
import { WEATHER_API_KEY} from '@env'
const useGetWeather = () => {
    const [ isLoading , setIsLoading] = useState(true)
const [ location , setLocation] = useState(null)
const [ error , setError] = useState<string | null>(null)
const [ weatherdata , setweatherData] = useState([])
const [ latitude , setLatitude] = useState([])
const [ longitude , setLongitude] = useState([])
    const fetchWeatherData = async( )=>{
console.log("123",latitude,longitude)
try {
    await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
    ).then(res=>{
        if(res.status ==200 ||res.status==201)
        {
            res.clone()
        }
        else{
            alert("Something went wrong")
        }
    return res.json()
    }).then(resJson=> setweatherData(resJson) )

    // Read the response body once
   
} catch (e) {
    setError('Could not fetch weather');
} finally {
    setIsLoading(false);
}
        } 
        
useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setError('Permission to access location was denied');
        // setIsLoading(false)
        return;
      }
  
      let location = await Location.getCurrentPositionAsync({});
      setLatitude(location?.coords?.latitude);
      setLongitude(location?.coords?.longitude)
      console.log("coords",location.coords.latitude,location.coords.longitude)
      await fetchWeatherData()
      // setIsLoading(false)
    })();
  }, [latitude , longitude]);
  return [ isLoading, error, weatherdata]
}

export default useGetWeather

