
function InputItem({label, onBlur}) {
    return(
        <div>
            <label>{label}: </label>
            <input 
                type="text" 
                onBlur={onBlur}  
            />
        </div>
    )
}

export default InputItem;