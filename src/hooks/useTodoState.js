import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

let UseTodoState =  (initialTodo) => {
     const [todos, setTodos] = useState(initialTodo);
     return {
          todos,
          addTodo : newTodo => {
               setTodos([...todos, {id: uuidv4(), todo: newTodo, complete: false}]);
          
          },
     
          deleteTodo : todoId => {
               const updatedTodos = todos.filter(todo => todo.id !== todoId);
               setTodos(updatedTodos);   
          },

          completeTodo : todoId => {
               const updatedTodos = todos.map(todo => 
                    todo.id === todoId ? {...todo, complete: !todo.complete} : todo
               )
               setTodos(updatedTodos); 
          },
     
          editTodo : (todoId, updatedTask) => {
               const updatedTodos = todos.map(todo => todo.id === todoId ?
               {...todo, todo: updatedTask} : todo);
               setTodos(updatedTodos);
          },
     }
}
export default UseTodoState;