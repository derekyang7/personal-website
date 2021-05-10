import MyImg from "../logo.svg"

const Sidebar = ({ onTitleClick }) => {
    return (
        <div className="sidebar">
            <img src={MyImg} alt="Derek's Logo"/>
            <button className="sidebar-item" onClick={onTitleClick}>ABOUT</button>
            <button className="sidebar-item">PROJECTS</button>
            <button className="sidebar-item">EXPERIENCE</button>
            <button className="sidebar-item">EDUCATION</button>
            <button className="sidebar-item">CONTACT</button>
        </div>
    )

}

export default Sidebar