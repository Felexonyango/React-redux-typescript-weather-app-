import { AlertAction, AlertState, SET_ALERT } from "../Store/types";

const intialState:AlertState={
    message:''
}
const AlertReducer=(state =intialState, action:AlertAction):AlertState=>{
    switch(action.type){
        case SET_ALERT:
            return{
            message:action.payload
            }
            default:
                return state;
                
    }
}
export default AlertReducer;