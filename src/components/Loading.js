import React from 'react'

export const Loading = (style) =>{

    return (
        <div className="spinner-border" style={style.props} role="status">
            <span className="sr-only">Loading...</span>
        </div>
    )
}