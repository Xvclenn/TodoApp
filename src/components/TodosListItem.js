import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export function TodoListItem({ todo, onUpdate, onDelete }) {
    const [editing, setEditing] = useState(false);
    const [done, setDone] = useState(false);

    function handleDoneToggle() {
        setDone(!done);
    }

    function handleSave(text) {
        onUpdate(text);
        setEditing(false);
    }

    if (editing) {
        return (
            <EditingItem
                defaultValue={todo.text}
                onCancel={() => setEditing(false)}
                onSave={handleSave}
                onDelete={onDelete}
            />
        );
    }

    return (
        <NormalItem
            onToggleDone={handleDoneToggle}
            done={done}
            todo={todo}
            onEdit={() => setEditing(true)}
            onDelete={onDelete}
        />
    );
}

function EditingItem({ onSave, onCancel, onDelete, defaultValue }) {
    const [text, setText] = useState(defaultValue);

    return (
        <div className='card w-50 m-auto mb-4 shadow'>
            <div className='card-body d-flex align-items-center justify-content-between'>
                <Form.Control
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <div className='d-flex'>
                    <Button
                        className='btn-success d-flex'
                        onClick={() => onSave(text)}
                    >
                        Хадгалах
                    </Button>
                    <Button
                        className='btn-dark ms-2 d-flex'
                        onClick={() => onCancel()}
                    >
                        Болих
                    </Button>
                    <Button
                        className='btn-danger ms-2 d-flex  '
                        onClick={onDelete}
                    >
                        Устгах
                    </Button>
                </div>
            </div>
        </div>
    );
}

function NormalItem({ done, onToggleDone, todo, onEdit, onDelete }) {
    return (
        <div
            className='card w-50 m-auto mb-4 shadow'
            style={{
                opacity: done ? '50%' : '100%',
            }}
        >
            <div className='card-body d-flex align-items-center justify-content-between'>
                <div className='d-flex'>
                    <input
                        type='checkbox'
                        checked={done}
                        onChange={onToggleDone}
                    />
                    <span
                        className='ms-3'
                        style={{
                            textDecoration: done ? 'line-through' : 'none',
                        }}
                    >
                        {todo.text}
                    </span>
                </div>
                <div className='d-flex'>
                    <Button
                        className='btn-warning d-flex'
                        onClick={onEdit}
                        disabled={done}
                    >
                        Засах
                    </Button>

                    <Button
                        className='btn-danger ms-2 d-flex  '
                        onClick={onDelete}
                    >
                        Устгах
                    </Button>
                </div>
            </div>
        </div>
    );
}
