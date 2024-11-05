import "./Input.css"
export default function Input(props){
    return(
        <>
            <div className="div-input">
                <label forHtml={props.for}>{props.label}</label>
                <input type={props.type} placeholder={props.placeholder} id={props.id}/>
            </div>
        </>
    )
}