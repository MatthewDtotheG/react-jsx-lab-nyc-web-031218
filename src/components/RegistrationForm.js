import React from 'react';

class RegistrationForm extends React.Component {
  render() {
    return (
      <h1>Cool Component</h1>
      <form>
        <div>
          <input type='text'/>
          <input type='password'/>
        </div>
          <button type='submit'>Submit</button>
      </form>
    );
  }
}
