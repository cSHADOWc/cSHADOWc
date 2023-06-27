import './navitem.css'

const Navitem = (props) =>{

    return(
        <li className='nav-item'>
            {props.children}
        </li>
    )

}




const Navitem_dropdown = (props) =>{

    return (
        <li className='nav-item dropdown'>
            {props.children}

        </li>
    )

}



export default Navitem
export {Navitem_dropdown}