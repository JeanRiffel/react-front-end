import { useState } from "react";
import uuid from 'react-uuid';
import MyButton from "../button/MyButton";
import Grid from "../grid/Grid";
import InputItem from "../fields/Item/InputItem";
import InputValue from "../fields/value/InputValue";
import "./FormOrder.css";

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
        setListItems(currentItems => [... currentItems, { itemId: uuid(), itemName: itemName, itemValue: itemValue }]);        
    }

    return (
        <div>
            <div className="order-title">
                <h1>Create Grocery List</h1>
            </div>
            <div>
                <form className="form" >                
                    <div>
                        <label className="label-item" >Description</label>
                        <InputItem className="form-item"                            
                            onBlur={placeItemName} 
                        />
                        <label className="label-item" >Value</label>
                        <InputValue className="form-item"                            
                            onBlur={placeItemValue} 
                        />   
                    </div>                                                 
                </form>
                <div>
                    <MyButton className="form-button"
                        value="Add Item" 
                        onClick={placeListItems} 
                    />   
                </div>                                             
                <div>
                    <Grid 
                        listItems={listItems}  
                    />                
                </div>
            </div>
        </div>
    )
}

export default FormOrder;