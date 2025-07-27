const Input = (props) => {
    const { placeholder, type, setState } = props

    return (
        <input
            placeholder={placeholder}
            type={type}
            className="form-control"
            onChange={(e) => setState(e.target.value)}
        />
    )
}

export default Input