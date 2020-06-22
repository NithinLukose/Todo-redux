import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({text,completed,toggleTodo}) => {

    return(

        <li onClick={toggleTodo} style={{textDecoration:completed?"line-through":"none"}}>{text}</li>

    )

}

Todo.propTypes = {

    text: PropTypes.string.isRequired

}

export default Todo