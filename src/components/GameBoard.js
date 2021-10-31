import React, { Component } from 'react'
import GameRenderer from './GameRenderer'

export default class GameBoard extends Component{
    handleClick = (event) => {
        event.preventDefault()
        
    }
    render(){
        return(
            <div>
                <GameRenderer onClick={this.handleClick()} board={this.props.board}/>
            </div>
        )
    }
}
