import React, { useState, useEffect } from "react";
import fire from "./fire";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Auth/index";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import MyCourse from "./components/MyCourse/MyCourse";
import Subject from "./components/Subject/Subject";
import Schedule from "./components/Schedule/Schedule";
import Retake from "./components/Retake/Retake";
import Finals from "./components/Finals/Finals";
import StudyPlan from "./components/StudyPlan/StudyPlan";
import Info from "./components/Info/Info";
import Footer from "./components/Footer/Footer";
import axios from "axios";

const App = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // clear Inputs
  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  // clear errors
  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  // login
  const handleLogin = () => {
    console.log("handle login");
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-error":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
          default:
            break;
        }
      });
  };

  // SignUp
  // const handleSignUp = () => {
  //   console.log("handle signup");
  //   clearErrors();
  //   fire
  //     .auth()
  //     .createUserWithEmailAndPassword(email, password)
  //     .catch((err) => {
  //       switch (err.code) {
  //         case "auth/email-already-in-use":
  //         case "auth/invalid-email":
  //           setEmailError(err.message);
  //           break;
  //         case "auth/weak-password":
  //           setPasswordError(err.message);
  //           break;
  //         default:
  //           break;
  //       }
  //     });
  // };

  // logout
  const handleLogOut = () => {
    fire.auth().signOut();
  };

  // auth listener
  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else setUser("");
    });
  };

  // useeffect
  useEffect(() => {
    authListener();
  }, []);

  const [courses, setCourses] = useState();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res)
      .then((data) => {
        setCourses(data.data);
        setLoader(false);
      });
  }, []);

  // navbar
  const [navToggle, setNavToggle] = useState(false);

  //navbar toggle
  const handleToggle = () => {
    setNavToggle(!navToggle);
  };

  return (
    <div className="App">
      {user ? (
        <Router>
          <Navbar
            user={user}
            navToggle={navToggle}
            handleToggle={handleToggle}
            handleLogOut={handleLogOut}
          />
          <Sidebar navToggle={navToggle} handleToggle={handleToggle} />
          <Switch>
            <Route exact path="/dashboard/news/:id">
              <Dashboard user={user} handleLogOut={handleLogOut} />
            </Route>
            <Route path="/student/subject">
              <Subject />
            </Route>
            <Route path="/student/my-course">
              <MyCourse Courses={courses} loader={loader} />
            </Route>

            <Route path="/student/schedule">
              <Schedule />
            </Route>
            <Route path="/student/retake">
              <Retake />
            </Route>
            <Route path="/student/finals">
              <Finals Courses={courses} loader={loader} />
            </Route>
            <Route path="/student/study-plan">
              <StudyPlan />
            </Route>
            <Route path="/student/info">
              <Info />
            </Route>
            <Redirect to="/dashboard/news/1" />
          </Switch>
          <Footer />
        </Router>
      ) : (
        <Login
          email={email}
          password={password}
          setPasswordError={setPasswordError}
          setEmailError={setEmailError}
          handleLogin={handleLogin}
          setEmail={setEmail}
          setPassword={setPassword}
          emailError={emailError}
          passwordError={passwordError}
        />
      )}
    </div>
  );
};

export default App;
