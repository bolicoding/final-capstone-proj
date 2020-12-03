import React from "react";
import axios from "axios";
import "../styles/contact-form.css";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      successfulMsg: "",
    };
  }

  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onMessageChange = (event) => {
    this.setState({ message: event.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://fastgarage-server.herokuapp.com/send", {
        email: this.state.email,
        name: this.state.name,
        message: this.state.message,
      })
      .then((res) => {
        console.log(res);
        this.setState({
          email: "",
          name: "",
          message: "",
          successfulMsg: "YOUR MESSAGE WAS SENT",
        });
        this.resetForm();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }

  render() {
    return (
      <div className="contact-form">
        <div className="form-content-left">
          <img className="form-img" src="img/img-2.svg" alt="spaceship" />
        </div>
        <div className="form-content-right">
          <form
            className="form"
            id="contact-form"
            onSubmit={(e) => this.handleSubmit(e)}
            method="POST"
          >
            <div className="form-inputs">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                className="form-input"
                id="name"
                value={this.state.name}
                onChange={this.onNameChange}
              />
            </div>
            <div className="form-inputs">
              <label className="form-label" htmlFor="exampleInputEmail1">
                Email address
              </label>
              <input
                type="email"
                className="form-input"
                id="email"
                aria-describedby="emailHelp"
                value={this.state.email}
                onChange={this.onEmailChange}
              />
            </div>
            <div className="form-inputs">
              <label className="form-label" htmlFor="message">
                Message
              </label>
              <textarea
                className="form-input"
                rows="5"
                id="message"
                value={this.state.message}
                onChange={this.onMessageChange}
              />
            </div>
            <button type="submit" className="form-input-btn">
              Submit
            </button>
            <div className="successfulMsg">
              <h1>{this.state.successfulMsg}</h1>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;
