import React, { Component } from 'react';

export default class PersonalData extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      houseType: '',
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
      <fieldset className="personal-info">
        <legend>Dados Pessoais</legend>

        <div className="field">
          <label className="label" htmlFor="name">
            Nome:
          </label>

          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            id="name"
            maxLength="40"
          />
        </div>
        <div className="field">
          <label className="label" htmlFor="email">
            Email:
          </label>

          <input
            onChange={this.handleChange}
            type="text"
            name="email"
            id="email"
            maxLength="50"
          />
        </div>
        <div className="field">
          <label className="label" htmlFor="cpf">
            CPF:
          </label>

          <input
            onChange={this.handleChange}
            type="text"
            name="cpf"
            id="cpf"
            maxLength="11"
          />
        </div>
        <div className="field">
          <label className="label" htmlFor="address">
            Endereço:
          </label>

          <input
            onChange={this.handleChange}
            type="text"
            name="address"
            id="address"
            maxLength="200"
          />
        </div>
        <div className="field">
          <label className="label" htmlFor="city">
            Cidade:
          </label>

          <input
            onChange={this.handleChange}
            type="text"
            name="city"
            id="city"
            maxLength="28"
          />
        </div>
        <div className="field">
          <label className="label" htmlFor="state">
            Estado:
          </label>

          <select name="state" id="state"></select>
        </div>
        <div className="field">
          <legend>Tipo de residência:</legend>

          <label className="radio" htmlFor="house">
            <input
              onChange={this.handleChange}
              type="radio"
              id="house"
              name="houseType"
              value="house"
            />
            Casa
          </label>
          <label className="radio" htmlFor="appartment">
            <input
              onChange={this.handleChange}
              type="radio"
              id="appartment"
              name="houseType"
              value="appartment"
            />
            Apartamento
          </label>
        </div>
      </fieldset>
    );
  }
}
