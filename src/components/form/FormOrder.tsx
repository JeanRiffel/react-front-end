import { useState } from "react";
import MyButton from "../button/MyButton";
import Grid from "../grid/Grid";
import InputItem from "../fields/Item/InputItem";
import InputValue from "../fields/value/InputValue";

function FormOrder(){
    const [itemName, setItemName] = useState('');
    const [itemValue, setItemValue] = useState('');    
    const [listItems, setListItems] = useState([]);

    const placeItemName = (event: Event) => {
        setItemName(event.target.value);
    }

    const placeItemValue = (event: Event) => {
        setItemValue(event.target.value);        
    }

    const placeListItems = ()=>{
        if(!itemName && !itemValue){
            return console.log("Values were not filled!");
        }
        setListItems(currentItems => [... currentItems, { itemName: itemName, itemValue: itemValue }]);        
    }

    return (
        <div>
            <form>                
                <InputItem 
                    label="Description"
                    onBlur={placeItemName} 
                />
                <InputValue 
                    label="Value"
                    onBlur={placeItemValue} 
                />                
                <MyButton 
                    value="Add Item" 
                    onClick={placeListItems} 
                />                                
                <Grid 
                    listItems={listItems}  
                />                
            </form>
        </div>
    )
}

export default FormOrder;