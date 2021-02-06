import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import './App.css';
import db from './firebase';
import Message from './Message';
import firebase from 'firebase';
import FlipMove from 'react-flip-move'

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([

  ]);
  const [username, setUsername] = useState('');

  // useState = variable in React
  // useEffect = run code on conditional base
  useEffect(() => {
    //run code here
    // if its blank inside [], this code runs once when the app component loads
    // const username = promt("please enter usename")
    setUsername(prompt('please enter username: '))
  }, []) //dependencies.. ;;condition

  useEffect(() => {
    //run once when the app component loads
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
    setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))

    })
  },[])


  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    //setMessages([...messages, { username: username, message: input}]);
    setInput('');

  }

  return (
    <div className="App">
      <img src = 'https://seeklogo.com/images/F/facebook-messenger-logo-1B1179FB01-seeklogo.com.png?w=50&h=50'/>
      <h1> 채팅방</h1>

      <h2> {username}님 환영합니다</h2>
      <form className ='app__form'>
        <FormControl>
          <InputLabel>메세지</InputLabel>
          <Input value = {input} onChange={event => setInput(event.target.value)}/>
        <Button disabled ={!input} variant='contained' color = 'primary' onClick ={sendMessage}>메세지</Button>
        </FormControl> 
      </form>

    <FlipMove>
     {
      messages.map(({id, message}) =>(
          <Message key ={id} username ={username} message = {message}/>

      ))
      }       
    </FlipMove>

    </div>
  );
}

export default App;
