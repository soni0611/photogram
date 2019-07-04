import React from "react";

import { Link } from "react-router-dom";
import { Header, Form, Segment, Label } from 'semantic-ui-react';


export default function Login({ db, signin, handelchange, googlelogin }) {
  //console.log({ googlelogin });


  return <div>
    <Header as="h2" color="blue" textAlign="center">

    </Header>
    <Form size="large" onSubmit={() => signin()}>
      <Segment stacked>
        <Form.Field required>
          <label>Email Address</label>
          <Form.Input required fluid name="email" icon="mail" iconPosition="left"
            placeholder="Email" type="email" onChange={handelchange} />
        </Form.Field>
        <Form.Field required>
          <label>Password</label>
          <Form.Input required fluid name="password" icon="lock" iconPosition="left"
            placeholder="Password" type="password" onChange={handelchange} />
        </Form.Field>
        <Form.Field>
          <Link to='/forgot_password'><Label as='a' style={{ float: 'right', color: 'blue' }}>Forgot Password ?</Label></Link>
        </Form.Field>
        <Form.Button type='submit' color="blue" fluid size="large" >SignIn</Form.Button>
        <Form.Button onClick={() => googlelogin()} color="red" fluid size="large" >Login with Google</Form.Button>
      </Segment>

    </Form>
  </div>

}

