import {Accordion, Card, Button, Badge} from 'react-bootstrap'
import {RiRadioButtonLine} from 'react-icons/ri'
import React from "react";

// компонент принимает объект с пользователями - нормализованную структуру
export const userList = ({users}) => {
    // преобразуем структуру в массив
    const userArr = Object.entries(users)
    // получаем массив вида (массив подмассивов)
    // [ ['1', { username: 'Alice', online: false }], ['2', {username: 'Bob', online: false}] ]

    // количество активных пользователей
    const activeUsers = Object.values(users).filter((u) => u.online).length
    // получаем массив вида
    // [ {username: 'Alice', online: false}, {username: 'Bob', online: false} ]

    return (
        <Accordion className={'mt-4'}>
            <Card>
                <Card.Header>
                    <Accordion.Toggle
                        as={Button}
                        varian={'info'}
                        eventLey={'0'}
                        style={{textDecoration:'none'}}
                    >
                        Active user {''}
                        <Badge variant={'light'} className={'ml-1'}>
                            {activeUsers}
                        </Badge>
                    </Accordion.Toggle>
                </Card.Header>
                {userArr.map(([userId,obj]) =>
                <Accordion.Collapse eventKey={'0'} key={userId}>
                    <Card.Body>
                        <RiRadioButtonLine
                        className={`mb-1 ${obj.online ? 'text-success': 'text-secondary'}`}
                        size={'0.8em'}
                        {''}
                        {obj.username}
                        />
                    </Card.Body>
                </Accordion.Collapse>
                )}
            </Card>
        </Accordion>
    )
}

export default userList;