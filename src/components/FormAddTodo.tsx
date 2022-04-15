import React from 'react'

export const FormAddTodo = () => {
  return (
    <div>
      <h3>Add new Todo:</h3>
      <form>
        <input 
          type="text" 
          className="form-control mb-3"
          placeholder="input a todo ..."
        />
        <input 
          className="btn btn-info mb-3" 
          type="submit" 
          value="Add" 
        />
      </form>
    </div>
  )
}
