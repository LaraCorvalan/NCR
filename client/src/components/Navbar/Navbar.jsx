import React from 'react'
import NCR from '../../utils/NCR.PNG'
import s from './Navbar.module.css'

export default function Navbar(){
    return (
        <div className={s.navbar}>
            <img src={NCR} alt="" />
        </div>
    )
}