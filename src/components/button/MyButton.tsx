import Button from '@mui/material/Button';

function MyButton({value, onClick}){
    return (
        <Button variant="contained"
          onClick={onClick}
        >
        {value}
        </Button>
    )
}

export default MyButton;
