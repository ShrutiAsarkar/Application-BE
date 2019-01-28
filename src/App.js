import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todolist.component";

import logo from "./hcbs_logo.png";
class App extends Component {
  render() {
    return (
        <Router>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="https://humancloud.co.in/" target="_blank">
                        <img src={logo} width="200" height="30" alt="CodingTheSmartWay.com" />
                    </a>
                </nav>
                <Link to="/" className="navbar-brand">Human Cloud's Todo App</Link>
                <div className="collpase nav-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Todos</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Create Todo</Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <a href="#">Sign Up</a>
                </div>
                <Route path="/" exact component={TodosList} />
                <Route path="/edit/:id" component={EditTodo} />
                <Route path="/create" component={CreateTodo} />

            </div>
          </Router>
    );
  }
}

export default App;
