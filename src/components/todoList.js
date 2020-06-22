import React from 'react'
import PropTypes from 'prop-types'
import Todo from './todo'
const TodoList = ({todos,toggleTodo}) => (

    <ul>
        {todos.map(todo=><Todo key={todo.id} {...todo} toggleTodo={()=>toggleTodo(todo.id)} />)}
    </ul>

)

TodoList.propTypes = {

    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            text:PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        }).isRequired
    ).isRequired,
    toggleTodo: PropTypes.func.isRequired

}

export default TodoList