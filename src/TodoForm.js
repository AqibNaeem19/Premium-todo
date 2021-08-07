import React from 'react';
import './TodoForm.css';
import useInputState from './hooks/useInputState';

export default function TodoForm({addTodo}) {
     const [value, setValue, reset] = useInputState("");
     return (
         
          <div className="buttonInside">
               <form onSubmit={(e) => {
                    e.preventDefault();
                    addTodo(value);
                    reset();
               }}>
                    <input className="inp" 
                         placeholder="Enter Todo" 
                         value={value} 
                         onChange={setValue}
                         maxLength="100"
                    />
                    <button className="btn" 
                         type="submit">Todo
                    </button>
               </form>
          </div>
     )
}
