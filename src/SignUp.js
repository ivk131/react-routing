import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useFormik } from "formik";
import "./SignUp.css";

import intensel from "./intensel.png";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flex: 0.4,
    alignContent: "right",
    flexDirection: "column",
    alignItems: "center",
  },
  intensel: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const onSubmit = (values) => {
  console.log("Form data", values);
};

const validate = (values) => {
  let errors = {};

  if (!values.firstName) {
    errors.firstName = "";
  }
  if (!values.lastName) {
    errors.lastName = "";
  }
  if (!values.email) {
    errors.email = "";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "";
  }

  return errors;
};

export default function SignUp() {
  const classes = useStyles();
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  // console.log("form errors", formik.errors);
  // console.log("visited filled", formik.touched);
  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <div className={classes.intensel}>
          <img src={intensel} width='250px' height='100px' alt='' />
        </div>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete='fname'
                name='firstName'
                variant='outlined'
                fullWidth
                required
                id='firstName'
                label='First Name'
                autoFocus
                onChange={formik.handleChange}
                value={formik.values.firstName}
                onBlur={formik.handleBlur}
              />
              {formik.errors.firstName ? (
                <div className='error'>{formik.errors.firstName} </div>
              ) : null}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant='outlined'
                fullWidth
                required
                id='lastName'
                label='Last Name'
                name='lastName'
                autoComplete='lname'
                onChange={formik.handleChange}
                value={formik.values.lastName}
                onBlur={formik.handleBlur}
              />
              {formik.errors.lastName ? (
                <div className='error'>{formik.errors.lastName} </div>
              ) : null}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                fullWidth
                id='email'
                label='Email Address'
                required
                name='email'
                autoComplete='email'
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
              {formik.errors.email ? (
                <div className='error'>{formik.errors.email} </div>
              ) : null}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                fullWidth
                name='password'
                required
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
              />
              {formik.errors.password ? (
                <div className='error'>{formik.errors.password} </div>
              ) : null}
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value='allowExtraEmails' color='primary' />}
                label='I agree with terms and condition'
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}>
            Sign Up
          </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              <Link to='/signin' variant='body2'>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
