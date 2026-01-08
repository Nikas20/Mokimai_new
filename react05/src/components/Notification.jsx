function Notification(props) {
    const {type} = props
    return(
        <p className={type == "success" ? "bg-green-600 text-green-600" : type == "error" ? "bg-red-600 text-red-600" : "bg-yellow-400 text-yellow-400"}>{type}</p>
    )
}

export default Notification