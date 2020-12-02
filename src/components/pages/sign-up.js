import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import "../../App.css";
import "../../styles/footer.css";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      emails: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  addEmail = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/sign-up", {
        email: this.state.email,
      })
      .then((res) => {
        this.setState({
          email: "",
        });
        console.log("success", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="sign-up">
        <h1>Sign Up</h1>
      </div>
    );
  }
}

export default SignUp;

const rootElement = document.getElementById("root");
ReactDOM.render(<SignUp />, rootElement);
