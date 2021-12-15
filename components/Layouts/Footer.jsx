import React from 'react'

import styles from './Footer.module.css'



export default function Footer() {
    
    return (
        <div className={`${styles.footer} col-md-12 bg-dark text-center`}>
            <small className="text-white">@evergreen.com</small>
        </div>
    )
}
