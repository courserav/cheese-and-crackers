import React from 'react'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

const GameRenderer = ({board}) => {

        let renderedBoard = []

        for (let i = 0; i < board.length; i++){
            renderedBoard.push(<Row sm={3}>{board.map(space => <Col>{space}</Col>)}</Row>)
        }
        return(
            <Container>{renderedBoard}</Container>
        )
}

export default GameRenderer