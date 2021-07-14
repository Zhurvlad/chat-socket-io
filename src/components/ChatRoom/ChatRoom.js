import { useParams } from 'react-router-dom'

import { Container } from 'react-bootstrap'
import {useLocalStorage} from "react-use";
import {useChat} from "../../hooks";
import UserList from "./UserList/UserList";
import MessageList from "./MessageList/MessageList";
import MessageForm from "./MessageForm/MessageForm";

export function ChatRoom() {
    const { roomId } = useParams()
    const [username] = useLocalStorage('username')
    const { users, messages, sendMessage, removeMessage } = useChat(roomId)

    return (
        <Container>
            <h2 className='text-center'>Room: {roomId === 'job' ? 'Job' : 'Free'}</h2>
            <UserList users={users} />
            <MessageList messages={messages} removeMessage={removeMessage} />
            <MessageForm username={username} sendMessage={sendMessage} />
        </Container>
    )
}
