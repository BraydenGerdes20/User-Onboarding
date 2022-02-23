import React, { useState } from 'react';
import schema from './validate/formSchema';
import * as yup from 'yup';
import './App.css';
import Form from './components/Form';
import axios from 'axios';

const initialFormValues = {
  username: '',
  password: '',
  email: '',
  check: false
}

const initialFormErrors = {
  username: '',
  password: '',
  email: '',
  check: ''
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [users, setUsers] = useState([]);

  const handleSubmit = () =>{
    axios.post('https://reqres.in/api/users', formValues)
    .then(res => {
      setUsers([ res.data, ...users ])
    }).catch(err => console.error(err))
    .finally(() => setFormValues(initialFormErrors))
  }
  const validate =(name, value) =>{
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]: '' }))
    .catch(err => setFormErrors({...formErrors, [name]: err.errors[0] }))
  }
    
  const handleChange = (name, value) =>{
    validate(name, value);
    setFormValues({...formValues, [name]: value});
  }
  return (
    <div className="App">
      <Form 
        values={formValues} 
        change={handleChange} 
        errors={formErrors} 
        sumbit={handleSubmit}
      />
      {users.map(user => (
        <div key={user.id}>
          <p>{user.createdAt}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
