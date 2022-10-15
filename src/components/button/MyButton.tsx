import Button from '@mui/material/Button';

function MyButton({className, value, onClick}){
    return (
        <Button variant="contained"
          onClick={onClick}
          className={className}
        >
        {value}
        </Button>
    )
}

export default MyButton;
