import React from 'react'
import Styles from "../style/skills.module.css"

const Card = ({icon, show, name, text, myStyle}) => {
    
    function clicar(){
        show(name, text)
    }

    return ( 
    <div className={Styles.containerCardSkills}>
        <div className={Styles.cardSkills} onClick={clicar} style={myStyle} >
            <div className={Styles.cardSkillsInside}>
                {icon}
            </div>
        </div>
    </div>
    )
}

export default Card