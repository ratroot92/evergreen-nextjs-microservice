import React from 'react'

export default function Col(size,col) {
    return (
        <div className={`col-${size|"lg"}-${col|12}`}>
            
        </div>
    )
}
