import React from 'react';
import EditTodoForm from './EditTodoForm';
import useToggle from './hooks/useToggleState';
import './TodoList.css';



export default function Todo({id, task, completeTodo, complete, deleteTodo, editTodo}) {
     const [isEditing, 
          toggleIsEditing
     ] = useToggle();

     return (
          <>
          {/* if editing then shows form input, otherwise show todo */}
               {isEditing ?   
                    <EditTodoForm editTodo={editTodo} 
                         id={id} 
                         task={task} 
                         toggleIsEditing={toggleIsEditing} 
                    />
                    : 
                    <div className="TodoList" key={id}>
                         {/* Todo task heading */}
                         <h3  className={`todo-heading ${complete ? "todo-complete": " "}`}
                              onClick={() => completeTodo(id)}>{task}
                         </h3>
                         {/* Editing button */}
                         <button className="todo-edit" 
                              onClick={toggleIsEditing}
                         >
                              <i class="fas fa-edit"></i>
                         </button>
                         {/* Delete button */}
                         <button className="todo-delete" 
                              onClick={() => deleteTodo(id)}
                         >
                              <i class="fas fa-trash-alt"></i>
                         </button>
                    </div> 
               }
          </>
        
     )
}
