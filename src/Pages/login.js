import React, { Component } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  CircularProgress,
  Button,
} from "@material-ui/core";
import logo from "../Media/logo/logo2.png";
import firebase from "../firebase";

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      show_progress: false,
    };
    this.handleChange = this.handleChange.bind();
    this.login = this.login.bind();
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  login = () => {
    let valid_data = true;

    this.state.email_error = null;
    this.state.password_error = null;

    if (this.state.email === "") {
      this.state.email_error = "Required";
      valid_data = false;
    }

    if (this.state.password === "") {
      this.state.password_error = "Required";
      valid_data = false;
    }

    if (valid_data) {
      this.state.show_progress = true;
    }

    this.setState({
      update: true,
    });

    if (valid_data) {
      firebase
        .firestore()
        .collection("USERS")
        .where("email", "==", this.state.email)
        .where("IsAdmin", "==", true)
        .get()
        .then((querySnapshot) => {
          if (!querySnapshot.empty) {
            //login
          } else {
            this.state.email_error = "Not Allowed!";
            this.setState({
              show_progress: false,
            });
          }
        });
    }
  };

  render() {
    return (
      <Container maxWidth="xs">
        <Box
          bgcolor="white"
          textAlign="center"
          p="24px"
          mt="50px"
          boxShadow="2"
          borderRadius="12px"
        >
          <img src={logo} height="80px" />
          <Typography variant="h5" color="textSecondary">
            ADMIN
          </Typography>
          <TextField
            label="Email"
            id="outlined-size-small"
            variant="outlined"
            color="secondary"
            name="email"
            onChange={this.handleChange}
            error={this.state.email_error != null}
            helperText={this.state.email_error}
            fullWidth
            margin="normal"
            size="small"
          />
          <TextField
            label="Password"
            id="outlined-size-small"
            color="secondary"
            name="password"
            onChange={this.handleChange}
            error={this.state.password_error != null}
            helperText={this.state.password_error}
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            size="small"
          />
          <br />
          <br />
          {this.state.show_progress ? (
            <CircularProgress size={24} thickness={4} color="secondary" />
          ) : null}
          <br />
          <br />
          <Button
            variant="contained"
            color="primary"
            onClick={this.login}
            fullWidth
            disableElevation
          >
            Login
          </Button>
        </Box>
      </Container>
    );
  }
}

export default login;
