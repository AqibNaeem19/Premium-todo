import React, { useEffect } from 'react';
import UseTodoState from './hooks/useTodoState';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

export default function TodoApp() {
     //Default Todos
     const arr = [
          {id: "1", todo: "Make Coffee", complete: false},
          {id: "2", todo: "Make Tea", complete: false},
          {id: "3", todo: "Make Orange Juice", complete: false}   
     ]
     //Take Todo from localStorage or use default todos.
     const initialTodos = JSON.parse(
          window.localStorage.getItem('todos')
     ) || arr;

     //Importing states from UseTodoStateHook
     const {todos, 
          addTodo, 
          deleteTodo, 
          completeTodo,
          editTodo
     } = UseTodoState(initialTodos);
     
     //Re-renders everytime when identifies any activity on todos
     useEffect(() => {
          window.localStorage.setItem('todos', JSON.stringify(todos));
     }, [todos])
    
  

     return (
          <div>
               <h1 style={{fontSize: "40px", color: "white"}}>TODO LIST</h1>
               <TodoForm addTodo={addTodo} />
               <TodoList todos={todos} 
                    deleteTodo={deleteTodo} 
                    editTodo={editTodo} 
                    completeTodo={completeTodo}
                    />   
          </div>
     )
}
