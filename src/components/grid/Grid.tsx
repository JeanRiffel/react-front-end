type listItems = {
    itemName: string,
    itemValue: number
}

function Grid(props: listItems){

    const printItemList = ()=>{                
        return props.listItems.map((item: listItems ) =>{            
            return <li>{item.itemName} - {item.itemValue}</li>
        });        
    };

    return(
        <div>
            <ul>
               {printItemList()}
            </ul>
        </div>
    )

}

export default Grid;
