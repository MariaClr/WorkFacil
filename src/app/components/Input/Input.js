"use client"
import "./Input.css"
export default function Input(props){
    return(
        <>
            <div className="div-input">
                <label   forhtml={props.for}>{props.label}</label>
                <input required value={props.value} onChange={props.onChange} type={props.type} placeholder={props.placeholder} id={props.id}/>
            </div>
        </>
    )
}