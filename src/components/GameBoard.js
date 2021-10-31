import React, { Component } from 'react'
import GameRenderer from './GameRenderer'

export default class GameBoard extends Component{
    handleClick = (event) => {
        event.preventDefault()

    }
    render(){
        return(
            <div onClick={event => this.handleClick(event)}>
                <GameRenderer board={this.props.board}/>
            </div>
        )
    }
}
