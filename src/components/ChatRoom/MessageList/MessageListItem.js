import React from 'react';
import TimeAgo from 'react-timeago' // форматирование даты и времени
import {ListGroup, Card, Button} from 'react-bootstrap'
import {AiOutlineDelete} from 'react-icons/ai'

// функция принимает объект сообщения и функцию для удаления сообщений
const MessageListItem = ({msg, removeMessage}) => {
    // обрабатываем удаление сообщений
    const handleRemoveMessage = (id) => {
        removeMessage(id)
    }

    const {messageId, messageText, senderName, createdAt, currentUser} = msg

    return (
        <ListGroup.Item
            className={`d-flex ${currentUser ? 'justify-content-end' : ''}`}
        >
            <Card
                bg={`${currentUser ? 'primary' : 'secondary'}`}
                text={'light'}
                style={{width: '55%'}}>
                <Card.Header className={'d-flex justify-content-between align-item-center'}>
                    <Card.Text as={TimeAgo} data={createdAt} className={'small'}/>
                    <Card.Text>
                        {senderName}
                    </Card.Text>
                </Card.Header>
                <Card.Body className={'d-flex justify-content-between align-item-center'}>
                    <Card.Text>{messageText}</Card.Text>
                    {currentUser && (
                        <Button variant={'none'}
                                classNmae={'text-warning'}
                                onClick={()=> handleRemoveMessage(messageId)}>
                            <AiOutlineDelete/>
                        </Button>
                    )}
                </Card.Body>
            </Card>
        </ListGroup.Item>
    );
};

export default MessageListItem;
