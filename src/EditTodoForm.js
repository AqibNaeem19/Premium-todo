import React from 'react';
import useInputState from './hooks/useInputState';

export default function EditTodoForm({id, task, editTodo, toggleIsEditing}) {
     const [value, 
          handleChange, 
          reset
     ] = useInputState(task);

     return (
          <div>
               <div class="buttonInside">
                    <form onSubmit={(e) => {
                         e.preventDefault();
                         editTodo(id,value);
                         toggleIsEditing();
                         reset();
                    }}>
                         <input className="inp" 
                              minLength="5" 
                              maxLength="100"
                              placeholder="Edit Todo" 
                              value={value} 
                              onChange={handleChange} 
                              autoFocus
                              required 
                         />
                    </form>
               </div>  
          </div>
     )
}
