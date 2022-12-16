import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Lists from './components/Lists';

export default function App() {
  const [todoData, setTodoData] = useState([
    {
      id: '1',
      title: '공부하기',
      completed: true,
    },
    {
      id: '2',
      title: '청소하기',
      completed: false,
    },
  ]);
  const [value, setValue] = useState('');

  return (
    <div className='container'>
      <div className='todoBlock'>
        <div className='title'>
          <h1>할 일 목록</h1>
        </div>
        <Lists todoData={todoData} setTodoDate={setTodoData} />
        <Form value={value} setValue={setValue} setTodoData={setTodoData} />
      </div>
    </div>
  );
}
