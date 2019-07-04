# PHOTOGRAM
It is an instagram like web app for uploading your picture with social logins and custom login.
# Table of Contents
* [Getting Started](#getting-started)
* [Live Project](#live-project)
* [Features](#features)
* [Built with](#built-with)
* [Author](#author)
 
# <a name="getting-started"></a>Getting Started
First thing you need to do to use this project is to clone it using the following command -
```
git clone https://github.com/soni0611/photogram.git
```
Initially you would need to replace the firebase config in the index.html with your own firebase config settings so that it works on your firebase database, for more details on how to do that you can follow the process described [here](https://firebase.google.com/docs/web/setup).

The project is divided into three sections namely Login, adding image and Gallery.


# <a name="live-project"></a> Live Project
Photogram is live <a href="https://lit-shelf-28896.herokuapp.com/">here.</a> 

# <a name="features"></a>Features
* The user can sign up and create a new account. Check for email duplicate scenario and show an appropriate message if the same email is used for login.
* The user can log in using the previous email/password combination. If email/pass is incorrect to show the appropriate error.
* If the user successfully creates a new account take him to create a new post form - which will have fields photo, caption etc. Date   will also be stored in database along with these information.
* After submitting the above form user should automatically be redirected/routed to the photo Gallery page.
Gallery page should show all cards of logged in user. Only photos uploaded by the same user must be displayed.
* If user login into existing account he must be redirected to Gallery page if he has 1 or more cards uploaded. If no cards are there he must be redirected to the same form as after signup.
* Gallery page should also have a link to form page - using button - “Create new card”.
* The user can also delete cards from gallery page by click on a cross Icon “X” which you can add to all cards in front-end.
* To maintained loggedIn user use sessions and localStorage.

# <a name="built-with"></a>Built with
* <a href="https://reactjs.org/">React JS </a> - Best javascript framework.
* <a href="https://firebase.google.com/">Firebase</a> - Used for Authentication, Database, Storage and Hosting in thi app.
* <a href="https://react-bootstrap.github.io/">Bootstrap</a> - Used in designing.
* <a href="https://semantic-ui.com/">semantic</a> - Used in designing.
* <a href="https://ant.design/">antd</a> - Used in designing.
* Programming languages used - HTML5, CSS3, JavaScript

# <a name="author"></a>Author
* <b>Shivam Soni  </b>
<a href="mailto:shivam.soni1998@gmail.com">Email</a>
