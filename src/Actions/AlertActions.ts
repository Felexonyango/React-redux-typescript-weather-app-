import {SET_ALERT,AlertAction} from '../Store/types'
export const setAlert=(message:string):AlertAction=>{
    return{
        type:SET_ALERT,
        payload:message
    }
}