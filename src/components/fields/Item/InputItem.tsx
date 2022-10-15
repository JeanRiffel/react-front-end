
function InputItem({className, onBlur}) {
    return(
        <div>            
            <input 
                className={className}
                type="text" 
                onBlur={onBlur}  
            />
        </div>
    )
}

export default InputItem;