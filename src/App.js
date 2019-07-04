import React from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import { Navbar, Nav, Button, Form } from 'react-bootstrap';
import NotFound from './notfound/notfound';
import Login from './loginform/login';
import Signup from './signup/signup';
import Display from './display';
import Gallery from './homepage/gallery';
import Add from './upload/add';
import logo from './homepage/logo.png';
import './App.css';
import 'antd/dist/antd.css';
import Homepage from './homepage/homepage';
import * as firebase from "firebase/app";
import "firebase/auth";
import axios from 'axios';
import { message } from 'antd';

const firebaseConfig = {
  apiKey: "AIzaSyDH19fHS8HSTEzxrcNusmBNnBXxtaXyBrc",
  authDomain: "photogram-bb18f.firebaseapp.com",
  databaseURL: "https://photogram-bb18f.firebaseio.com",
  projectId: "photogram-bb18f",
  storageBucket: "",
  messagingSenderId: "66730494298",
  appId: "1:66730494298:web:743823765b316a33"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      db: {
        email: '',
        pass: '',
        photos: []
      }
    }

  }
  componentDidMount() {
    this.checkLogin()

  }
  getPhotos(uid) {
    axios.get("/photos?uid=" + uid).then(
      (res) => {
        let db = this.state.db;
        db.photos = res.data;
        this.setState({
          db: db
        })
      }
    )
  }
  removeitem = (item) => {
    let { db } = this.state;
    console.log(item._id)
    let i = db.photos.indexOf(item);
    axios.delete("/del?_id=" + item._id).then((res) => {
      db.photos.splice(i, 1);
      this.setState({ db })
    })
  }

  addPhoto = (photo) => {
    let { db } = this.state;
    photo.uid = this.state.user.uid;
    console.log(photo)
    axios.post("/photo", photo).then(
      (res) => {
        console.log("res.data = ", res.data)
        db.photos.push(res.data);
        console.log(db.photos);
        this.setState(
          { db: db }
        )

        this.props.history.push('/Gallery')

      }
    )




  }
  googleLogin() {
    var provider = new firebase.auth.GoogleAuthProvider();


    firebase.auth().signInWithPopup(provider).then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(user);
      this.setState(
        { user: user }
      )
      this.props.history.push("/Display");
      // ...
    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }

  logout() {
    firebase.auth().signOut().then(() => {
      this.setState({
        user: null
      })
      this.props.history.push("/");
    }).catch(function (error) {
      // An error happened.
    });
  }
  checkLogin() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState(
          { user: user }
        )
        this.getPhotos(user.uid)
        this.props.history.push("/");
      } else {
        // No user is signed in.
      }
    });
  }
  emailSignUp = () => {
    const email = this.state.db.email;
    const pass = this.state.db.password;
    console.log(email, pass)
    firebase.auth().createUserWithEmailAndPassword(email, pass).then((result) => {
      // The signed-in user info.
      var user = result.user;

      this.props.history.push('/')
      console.log("email signup", user.displayName, user.email);
      // ...
    })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  }

  emailSignIn = () => {
    const email = this.state.db.email;
    const pass = this.state.db.password;
    firebase.auth().signInWithEmailAndPassword(email, pass).then((result) => {
      // The signed-in user info.
      var user = result.user;
      console.log("email signin", user.displayName, user.email);
      this.setState({
        user: user
      })
      this.props.history.push('/')
      // ...
    })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // ...
      });
  }

  handelChange = (e) => {
    console.log(e.target.value, e.target.name)
    const { db } = this.state;
    db[e.target.name] = e.target.value;
    this.setState({ db });
    console.log(this.state.db)
  }

  savePhoto = (img) => {

    console.log(img, this.state.user)
    axios.post("/photo", img).then((res) => {
      console.log(res.data)
    })
  }


  fileUpload = (e) => {
    console.log(e.target.files[0])
    let fd = new FormData()
    const { db } = this.state;
    fd.append("avatar", e.target.files[0])

    axios.post("/profile",
      fd, {
        headers: {
          'Content-Type': "multipart/form-data"
        }
      }).then((res) => {
        console.log("hello", res.data);
        db.path = res.data;
        this.setState({ db })
      })
  }

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" >
          <Link to='/'><Navbar.Brand >
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {' PhotoGram'}
          </Navbar.Brand></Link>
          <Nav className="mr-auto">
            <Nav.Link ></Nav.Link>
            <Nav.Link ></Nav.Link>
            <Nav.Link ></Nav.Link>
          </Nav>
          <Form inline>
            <div>
              {this.state.user ? <Button as="input" type="button" value="logout" onClick={() => { this.logout() }} variant="outline-light" /> :
                <Link to="/Login"><Button as="input" type="button" value="login" variant="outline-light" /></Link>}
            </div>
            {this.state.user ? <Button variant="outline-light" backgroundColor="#6e7a75" disabled={this.logout}>SignUp</Button> : <Link to="/signup"><Button variant="outline-light" as="input" type="button" value="SignUp" /></Link>}
          </Form>
        </Navbar>
        {this.state.user ? <Display /> : null}

        <Switch>
          <Route exact path='/' component={Homepage}></Route>
          <Route path='/display' component={Display}></Route>
          <Route path='/gallery' render={props => <Gallery {...props} db={this.state.db} delete1={this.removeitem} />} />
          <Route path='/Login' render={props => <Login {...props} handelchange={this.handelChange} db={this.state.db} googlelogin={this.googleLogin} signin={this.emailSignIn} />} />
          <Route path='/add' render={props => <Add {...props} db={this.state.db} savephoto={this.addPhoto} upload1={this.fileUpload} />} />
          <Route path='/signup' render={props => <Signup {...props} handelchange={this.handelChange} db={this.state.db} googlelogin={this.googleLogin} signup={this.emailSignUp} />} />
          <Route component={NotFound} />
        </Switch>

      </div>);
  }
}
export default withRouter(App);
