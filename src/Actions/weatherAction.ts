import {ThunkAction} from 'redux-thunk'
import { RootState } from '../Store/index'
 import {WeatherAction,WeatherData,WeatherError,GET_WEATHER,SET_LOADING,SET_ERROR} from '../Store/types'
 export const getweather=(city:string):ThunkAction<void,RootState,null,WeatherAction> =>{
return  async dispatch=>{
    try{
      const APP_KEY="9c84c1d27535932611fc4e27ad979739"
const res =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APP_KEY}`)

if(!res.ok){
    const resData:WeatherError =await res.json()
    throw new Error (resData.message)
}  
const resData:WeatherData= await res.json()
dispatch({
    type:GET_WEATHER,
    payload:resData
})
}
    catch(err){
        dispatch({
            type:SET_ERROR,
            payload:err.message
        })

    }
}
 }
 export default getweather;
 
 export const setLoading =():WeatherAction=>{
     return {
         type:SET_LOADING
     }
 }
 export const setError =():WeatherAction=>{
     return {
         type:SET_ERROR,
         payload:''
     }
 }