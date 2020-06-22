import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../action'


const AddTodo = ({dispatch}) => {
   
    let input
    return(

        <div>

            <form onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}>

                <input type="text" ref={node => (input = node)} name="todo"/>
                <input type="submit" value="add" />

            </form>

        </div>

    )
}

export default connect()(AddTodo)