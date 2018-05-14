import React from 'react';

export default class RegistrationForm extends React.Component {
  render() {
    return (
      <form>
        <div>
          <input type='text'></input>
          <input type='password'></input>
        </div>
          <button type='submit'>Submit</button>
      </form>
    );
  }
}
