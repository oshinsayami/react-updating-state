// Code ClickityClick Component Here
import React from 'react'

export default class ClickityClick extends React.Component{
    constructor() {
        super()
        this.state = {
            toggled: false,
            currentTheme: 'blue'
        }
    }

    handleClick = () => {
        this.setState(previousState => {
            return {
                toggled: !previousState.toggled
            }
        })
        
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>{this.state.toggled? "ON" : "OFF"}</button>
            </div>
        )
    }
        

}