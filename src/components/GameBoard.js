import React, { Component } from 'react'
import { connect } from 'react-redux'

export default class GameBoard extends Component{
    renderBoard = () => {
        let boardArray = []
        for(let i = 0; i < this.props.board; i++){
            boardArray.push('X')
        }
        return boardArray
    }
    render(){
        return(
            <div>{this.renderBoard()}</div>
        )
    }
}
