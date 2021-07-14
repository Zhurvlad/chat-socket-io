import React from 'react';
import {Link} from 'react-router-dom'
import {useLocalStorage} from "react-use";
import {Form, Button} from 'react-bootstrap'

const Home = () => {
    // создаем и записываем в локальное хранилище имя пользователя
    // или извлекаем его из хранилища
    const [username, setUsername] = React.useState('username', 'Billy')
    // локальное состояние для комнаты
    const [roomId, setRoomId] = React.useState('free')
    const linkRef = React.useRef()

    // обрабатываем изменение имени пользователя
    const handleChangeName = (e) => {
        setUsername(e.target.value)
    }

    // обрабатываем изменение комнаты
    const handleChangeRoom = (e) => {
        setRoomId(e.target.value)
    }

    // имитируем отправку формы
    const handleSubmit = (e) => {
        e.preventDefault()
        // выполняем нажатие кнопки
        linkRef.current.click()
    }

    const trimmed = username.trim()

    return (
        <Form
            className={'mt-5'}
            style={{maxWidth: '320px', margin: '0 auto'}} onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Name:</Form.Label>
                <Form.Control value={username} onChange={handleChangeRoom}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Room:</Form.Label>
                <Form.Control as={'select'} value={roomId} onChange={handleChangeRoom}>
                    <option value={'free'}>Free</option>
                    <option value={'job'} disabled>Job</option>
                </Form.Control>
            </Form.Group>
            {trimmed
            && <Button variant={'success'} as={Link} to={`/${roomId}`} ref={linkRef}>Chat</Button>}
        </Form>
    );
};

export default Home;
