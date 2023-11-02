import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';



const CartWidgetComponent = () => {
    const iconStyles = {
        fontSize: '30px',
        paddingLeft: '40px',
        paddingRight: '10px'
    }
    const spanStyle ={
        fontSize: '18px',
        backgroundColor: 'red',
        color: 'white',
        borderRadius: '50%',
        border: 'solid black',
        padding: '3px'
    }

    return (
        <div>
            <FontAwesomeIcon style={iconStyles} icon={faCartShopping} />
            <span style={spanStyle}>17</span>
        </div>
    )
}

export default CartWidgetComponent;