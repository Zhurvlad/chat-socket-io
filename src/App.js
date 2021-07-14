import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Home from "./components/Home/Home";
import {ChatRoom} from "./components/ChatRoom/ChatRoom";
import {Component} from "react";

// маршруты
const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/:roomId', name: 'ChatRoom', Component: ChatRoom }
]


function App() {
  return (
  <Route>
    <Container style={{maxWidth: '512px'}}>
      <h1 className={'mt-2 text-center'}>
       React Chat App
      </h1>
      <Switch>
        {routes.map(({path, Component}) => (
            <Route key={path} path={path} exact>
              <Component/>
            </Route>
        ))}
      </Switch>
    </Container>
  </Route>
  )
}

export default App;
