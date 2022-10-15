import { useState } from 'react';

type listItems = {
    itemName: string,
    itemValue: number
}

function Grid(props: listItems){
    


    const checkBoxChange = (item: any)=>{        
          
        console.log(item);
    }

    const printItemList = ()=>{                
        return props.listItems.map((item: listItems ) =>{            
            return <li key={item.itemId}>
                        {item.itemName} - 
                        {item.itemValue}  
                        <button  onClick={checkBoxChange(item.itemId)}>delete</button>
                        
                    </li>
        });        
    };

    return(
        <div>
            <h2>Item List</h2>
            <ul>
               {printItemList()}
            </ul>
        </div>
    )

}

export default Grid;
