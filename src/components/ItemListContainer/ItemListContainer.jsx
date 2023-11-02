const ItemListContainer = ({greeting}) => {
    const greetingStyles  = {
        fontSize: '70px',
        fontWeight: '900',
        textAlign: 'center',
        color: 'white',
        paddingTop: '7rem'
    }
    return (

        <div style={greetingStyles}>
            {greeting}
        </div>
    )
}

export default ItemListContainer;