import { useState } from 'react';
import { TodosError } from './TodosError';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../components/style.css';

export function TodosNew({ onSave }) {
    const [text, setText] = useState('');
    const [error, setError] = useState('');

    const inputStyle = {
        animation: error && !text ? 'horizontal-shaking 0.35s' : 'none',
        borderColor: error && !text ? 'red' : '#ced4da',
        padding: '10px',
        paddingLeft: '30px',
        borderTopLeftRadius: '20px',
        borderBottomLeftRadius: '20px',
        borderBottomRightRadius: '0',
        borderTopRightRadius: '0',
        // height: '70px',
    };

    const buttonStyle = {
        borderTopRightRadius: '20px',
        borderBottomRightRadius: '20px',
        borderBottomLeftRadius: '0',
        borderTopLeftRadius: '0',
    };

    function handleTextChange(e) {
        setText(e.target.value);
    }

    function handleSave() {
        if (text === '') {
            setError('Utgaa bichne uu');
        } else {
            onSave(text);
            setError('');
            setText('');
        }
    }

    function handleKeyUp(e) {
        if (e.code === 'Enter') {
            handleSave();
        }
    }

    return (
        <>
            <Form.Control
                placeholder='Жагсаалтаа бичнэ үү'
                aria-label='Жагсаалтаа бичнэ үү'
                aria-describedby='basic-addon2'
                value={text}
                style={inputStyle}
                onChange={handleTextChange}
                onKeyUp={handleKeyUp}
                className='horizontal-shake'
            />
            <Button
                variant='outline-primary'
                id='button-addon2'
                onClick={handleSave}
                style={buttonStyle}
            >
                Шинэ
            </Button>
            <TodosError error={error} />
        </>
    );
}
