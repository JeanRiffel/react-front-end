import Button from "../Button/Button";

import Item from "../Item/Item";
import Valor from "../Valor/Valor";

function FormOrder(){
    return (
        <div>
            <form>
                <Item></Item>      
                <Valor></Valor>
                <Button value="Save" />
                <Button value="Cancel" />
            </form>
        </div>
    )
}

export default FormOrder;