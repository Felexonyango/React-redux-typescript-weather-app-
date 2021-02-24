import React,{FC} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './Store';
import Search from './Components/Search'
import Alert from './Components/Alert'
import Weather from './Components/Weather'
import { setAlert } from './Actions/AlertActions';
import { setError } from './Actions/weatherAction';
const App:FC=()=>{
	const dispatch =useDispatch()
	const weatherData =useSelector((state:RootState)=>state.weather.data)
	const loading=useSelector((state:RootState)=>state.weather.loading)
	const error =useSelector((state:RootState)=>state.weather.error)
	const Alertmsg =useSelector((state:RootState)=>state.alert.message)
	
	return (

		<div className="APP">
			<Search title="Enter city and press button"/>
			
	{loading ? <h2 className="loading">loading..</h2>: weatherData && <Weather data={weatherData}/>}
		
		{Alertmsg && <Alert message={Alertmsg}onclose={()=>dispatch(setAlert(""))}/>}
		{error && <Alert message ={error}onclose={()=>dispatch(setError())}/>}
		</div>

	)
}


export default App;