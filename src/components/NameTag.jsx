import './NameTag.css'

const NameTag = ({name}) =>{

    return(
        <div className="nametag">
            <div className="nametag-header">
                <div className="hello">HELLO</div>
                <div className="my-name-is">My Name is</div>
            </div>
            <div className="nametag-name">
                {name}
            </div>
        </div>
    )
}

export default NameTag