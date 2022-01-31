const TranslateDisplay = ({letter}) => {

    const img = "img/" + letter + ".png"

    return (
        <img src={ img } alt={ letter } width="55" />
    )
}
export default TranslateDisplay