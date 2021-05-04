import React from 'react'
import { ListGroup } from 'react-bootstrap'

function Project(props) {
    return (
        <div>
            <ListGroup.Item className = "allLinks" action href={props.projectUrl}>
                {props.name}
            </ListGroup.Item>
  
        </div>
    )
}

export default Project
