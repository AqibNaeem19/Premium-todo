import React from 'react';
import Todo from './Todo';

export default function TodoList({todos, deleteTodo, completeTodo, editTodo}) {
     return (
          <div>
               {todos.map(todo => (
                    <Todo id={todo.id}
                         key={todo.id}
                         task={todo.todo}
                         complete={todo.complete}
                         deleteTodo={deleteTodo}
                         completeTodo={completeTodo} 
                         editTodo={editTodo}  
                    />
               ))}
               {/* Annimation balls on screen */}
               <div className="movement"></div>
               <div className="movement2"></div>  
          </div>
     )
}
