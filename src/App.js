import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // users:[],
      studName: "",
      // emailId: '',
      dob: "",
      division: "select",

      class1: "select",
      gender: "select",
      formErrors: {}
    };
    this.initialState = this.state;
  }

  handleFormValidation() {
    const { studName, dob, division, class1, gender } = this.state;
    let formErrors = {};
    let formIsValid = true;

    // Name
    if (!studName) {
      formIsValid = false;
      formErrors["studNameErr"] = "Name is required.";
    }
    else{
      var v=/^[a-zA-Z\s]+$/;
      // /^[a-zA-Z]+$/;
      if(!v.test(studName)){
        formIsValid = false;
        formErrors["studNameErr"] = "only letters and spaces";

      }
    }

    // DOB
    if (!dob) {
      formIsValid = false;
      formErrors["dobErr"] = "Date of birth is required.";
    } else {
      var pattern = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/;
      if (!pattern.test(dob)) {
        formIsValid = false;
        formErrors["dobErr"] = "Invalid date of birth";
      }
    }

    //  Division
    if (division === "" || division === "select") {
      formIsValid = false;
      formErrors["divisionErr"] = "Select division.";
    }

    //   radio

    if (gender === "" || gender === "select") {
      formIsValid = false;
      formErrors["genderErr"] = "Select gender.";
    }
    // Class
    if (class1 === "" || class1 === "select") {
      formIsValid = false;
      formErrors["class1Err"] = "Select Class.";
    }

    this.setState({ formErrors: formErrors });
    return formIsValid;
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.handleFormValidation()) {
      alert("You have been successfully registered.");
      this.setState(this.initialState);
    }
  };
  render() {
    const {
      studNameErr,
      dobErr,
      divisionErr,
      class1Err,
      genderErr
    } = this.state.formErrors;

    return (
      <div className="formDiv">
        <div>
          <h1 style={{ textAlign: "center" }}>Student information </h1>{" "}
        </div>

        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="studName">
                <b>Name:</b>
              </label>
              <input
                type="text"
                name="studName"
                value={this.state.studName}
                onChange={this.handleChange}
                placeholder="Your name.."
                className={studNameErr ? " showError" : ""}
              />
              {studNameErr && (
                <div style={{ color: "red", paddingBottom: 10 }}>
                  {studNameErr}
                </div>
              )}
            </div>
            <div>
              <label htmlFor="text">
                <b>Date of Birth:</b>
              </label>
              <input
                type="Date"
                name="dob"
                value={this.state.dob}
                onChange={this.handleChange}
                placeholder="DD/MM/YYYY.."
                className={dobErr ? " showError" : ""}
              />
              {dobErr && (
                <div style={{ color: "red", paddingBottom: 10 }}>{dobErr}</div>
              )}
            </div>
            <div>
              <label htmlFor="class1">
                <b>Class:</b>
              </label>
              <select
                name="class1"
                value={this.state.class1}
                onChange={this.handleChange}
                className={class1Err ? " showError" : ""}
              >
                <option value="select">--Select--</option>
                <option value="I">I</option>
                <option value="II">II</option>
                <option value="III">III</option>
                <option value="IV">IV</option>
                <option value="V">V</option>
                <option value="V1">V1</option>
                <option value="V11">V11</option>
                <option value="V111">V111</option>
                <option value="1X">1X</option>
                <option value="X">X</option>
                <option value="X11">X11</option>
                <option value="X12">X12</option>
              </select>
              {class1Err && (
                <div style={{ color: "red", paddingBottom: 10 }}>
                  {class1Err}
                </div>
              )}
              <div>
                <label htmlFor="division">
                  <b>Division:</b>
                </label>
                <select
                  name="division"
                  onChange={this.handleChange}
                  className={divisionErr ? " showError" : ""}
                  value={this.state.division}
                >
                  <option value="select">--Select--</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                </select>
                {divisionErr && (
                  <div style={{ color: "red", paddingBottom: 10 }}>
                    {divisionErr}
                  </div>
                )}
              </div>
              <div className="gender">
                <label>
                  <b>Gender:</b>
                </label>
                <input
                  type="radio"
                  name="gender"
                  value="select"
                  checked={this.state.gender === "select"}
                  onChange={this.handleChange}
                />
                <b>Select:</b>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={this.state.gender === "Male"}
                  onChange={this.handleChange}
                />
                Male
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={this.state.gender === "Female"}
                  onChange={this.handleChange}
                />
                Female
                <br />
                {genderErr && (
                  <div style={{ color: "red", paddingBottom: 10 }}>
                    {genderErr}
                  </div>
                )}
              </div>

              <div className="submit">
                <button type="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
