import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos, addTodo, updateTodo, deleteTodo } from './components/todoSlice';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';

function App() {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.items);
    const todoStatus = useSelector((state) => state.todos.status);
    const error = useSelector((state) => state.todos.error);

    useEffect(() => {
        if (todoStatus === 'idle') {
            dispatch(fetchTodos());
        }
    }, [todoStatus, dispatch]);

    const AddTodo = (title, description) => {
        dispatch(addTodo({ title, description }));
    };

    const UpdateTodo = (todo) => {
        dispatch(updateTodo(todo));
    };

    const DeleteTodo = (id) => {
        dispatch(deleteTodo(id));
    };

    return (
        <div className="min-h-screen w-[100vw] flex items-center justify-center bg-[#262626]">
            <div className="bg-[#4F504E] p-8 rounded-[25px] shadow-lg w-[60vw] overflow-x-hidden">
                <h1 className="text-3xl font-bold mb-6 text-center text-white">My Todos</h1>
                <AddTodoForm onAddTodo={AddTodo} />
                {todoStatus === 'loading' && <div className="text-black">Loading...</div>}
                {todoStatus === 'succeeded' && (
                    <TodoList
                        todos={todos}
                        onUpdateTodo={UpdateTodo}
                        onDeleteTodo={DeleteTodo}
                    />
                )}
                {todoStatus === 'failed' && <div className="text-white">{error}</div>}
            </div>
        </div>
    );
}

export default App;
