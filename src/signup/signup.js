import React from 'react';
import { Header, Form, Segment } from 'semantic-ui-react';

function Signup({ db, signup, handelchange }) {

    return <div>
        <Header as="h2" color="blue" textAlign="center">

        </Header>
        <Form size="large" onSubmit={() => signup()}>
            <Segment stacked>
                <Form.Field required>
                    <label>UserName</label>
                    <Form.Input required fluid name="username" icon="user" iconPosition="left"
                        placeholder="Username" type="text" onChange={handelchange} />
                </Form.Field>
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
                <Form.Field required>
                    <label>Confirm Password</label>
                    <Form.Input required fluid name="passwordConfirmation" icon="repeat" iconPosition="left"
                        placeholder="Password Confirmation" type="password" onChange={handelchange} />
                </Form.Field>
                <Form.Button type='submit' color="blue" fluid size="large" >SignUp</Form.Button>

            </Segment>
        </Form>
    </div>
}


export default Signup;
