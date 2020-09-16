import React, { Component } from 'react';

export default class WorkInfo extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      resume: '',
      occupation: '',
      description: '',
      startDate: '',
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
      <fieldset className="work-info">
        <legend>Experiências profissionais</legend>
        <div className="field">
          <label className="label" htmlFor="resume">
            Resumo do currículo:
          </label>

          <textarea
            onChange={this.handleChange}
            name="resume"
            id="resume"
            cols="30"
            rows="4"
            maxLength="1000"
          ></textarea>
        </div>
        <div className="field">
          <label className="label" htmlFor="occupation">
            Cargo:
          </label>

          <input
            onChange={this.handleChange}
            type="text"
            name="occupation"
            id="occupation"
          />
        </div>
        <div className="field">
          <label className="label" htmlFor="description">
            Descrição do cargo:
          </label>

          <input
            onChange={this.handleChange}
            type="text"
            name="description"
            id="description"
          />
        </div>
        <div className="field">
          <label className="label" htmlFor="startDate">
            Data de início:
          </label>

          <input
            onChange={this.handleChange}
            type="text"
            name="startDate"
            id="datepicker"
          />
        </div>
      </fieldset>
    );
  }
}
