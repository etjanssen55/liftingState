
const NameInput = ({name, setName, placeholder}) =>{

    return(
        <input
            type="text"
            style={{fontSize: '16px', padding: '8px', width: '300px', margin:'10px 10px 20px'}}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={placeholder}
        />
    )
}

export default NameInput