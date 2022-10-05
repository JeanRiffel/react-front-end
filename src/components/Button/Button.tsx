type buttonProps = {
    value: string;
}

function Button(props: buttonProps){
    return (
        <div>
            <input
                type="button"
                value={props.value}
            />
        </div>
    )
}

export default Button;