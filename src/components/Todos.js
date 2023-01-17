import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TodoListItem } from './TodosListItem';
import { TodosNew } from './TodosNew';
import Container from 'react-bootstrap/Container';

export function Todos() {
    const [todos, setTodos] = useState([]);

    function handleSave(text) {
        // const newTodo = ;
        const newTodos = [
            {
                text: text,
                id: uuidv4(),
            },
            ...todos,
        ];
        setTodos(newTodos);
    }

    function handleDelete(index) {
        if (window.confirm('Устах уу?')) {
            const newTodos = [...todos];
            newTodos.splice(index, 1);
            setTodos(newTodos);
        }
    }

    function handleUpdate(index, text) {
        const newTodos = [...todos];
        newTodos[index].text = text;
        setTodos(newTodos);
    }

    return (
        <>
            <Container className='d-flex flex-column align-items-center '>
                <h1 className='mt-5 todoH1 '>TODO - LIST</h1>
                <div className='d-flex w-50 mt-5 mb-5 justify-content-center shadow'>
                    <TodosNew onSave={handleSave} />
                </div>
                {todos.map((todo, index) => {
                    return (
                        <TodoListItem
                            key={todo.id}
                            todo={todo}
                            onUpdate={(text) => handleUpdate(index, text)}
                            onDelete={() => handleDelete(index)}
                        />
                    );
                })}
            </Container>
        </>
    );
}
