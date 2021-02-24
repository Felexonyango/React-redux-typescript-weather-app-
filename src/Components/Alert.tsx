import React, {FC} from 'react'
import   "./module.css"
interface AlertProps{
    message:string;
    onclose:()=>void

}
const Alert:FC<AlertProps>=({message,onclose})=>{

    return(

        <div className="App">
        <div className="background"onClick={onclose}>
            <header className="danger">
                <p className="p">{message}</p>
                
            </header>
            <footer className="footer">
      <button className="button"onClick={onclose}>close</button>
            </footer>

        </div>
        </div>
    )
}
export default Alert;