import React from 'react'

export const Header = (props:any) => {
    return (
        <header className='App-header'>
            <h2>{props.text}</h2>
            <p>Кино - наша страсть!</p>
        </header>
    )
}