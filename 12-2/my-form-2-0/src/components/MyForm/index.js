import React, { Component } from 'react';
import PersonalData from "../PersonalData/index";
import WorkInfo from '../WorkInfo';

export default class MyForm extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }
  render() {
    return (
      <form action="" method="get">
        <PersonalData />
        <WorkInfo />

        <div className="field">
          <button type="submit">Submit</button>

          <button type="reset">Clear form</button>
        </div>
      </form>
    );
  }
}
