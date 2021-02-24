import  React,{FC, FormEvent, useState} from 'react'
import {useDispatch} from 'react-redux'
import { setAlert } from '../Actions/AlertActions'
import { setLoading,getweather } from '../Actions/weatherAction'
import   "./module.css"
interface searchProps{
    title:string
}
const Search:FC<searchProps>=({title})=>{
    const dispatch =useDispatch()
    const[city, setCity]=useState('')
    const changeHandler=(e:FormEvent<HTMLInputElement>)=>{
    setCity(e.currentTarget.value)

    }
    const SubmitHandler=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(city.trim()==''){
            return dispatch(setAlert('city is required'))

        }
        dispatch(setLoading())
        dispatch(getweather(city))
        setCity('')

        }
        
    
    return(
        <div className="body">
            <h1 className="title">{title}</h1>
            <form className="form" onSubmit={SubmitHandler}>
                <input type="text" className="TextInput"placeholder="Enter city name"
                value={city}onChange={changeHandler} />
<button className="Button">Search</button>
            </form>
        </div>

    )
}
export default Search
