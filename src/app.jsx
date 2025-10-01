import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Board } from './board/board';
import { ListBoards } from './listBoards/listBoards';
import { Profile } from './profile/profile';

export default function App() {
    return (
        <BrowserRouter>
            <div className="body">
                <header className="container-fluid">
                    <nav className="navbar fixed-top">
                        <NavLink className="navbar-brand" to="#"><b>QuoteBoard</b></NavLink>
                        <menu className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="">Home</NavLink> 
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="listBoards">My Boards</NavLink> 
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="listBoards">Friends</NavLink>                 
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="listBoards">Community</NavLink>                 
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="board">Create</NavLink>                 
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="profile">Profile</NavLink>
                            </li>
                        </menu>
                    </nav>
                </header>

                <Routes>
                    <Route path='/' element={<Login />} exact />
                    <Route path='/board' element={<Board />} />
                    <Route path='/listBoards' element={<ListBoards />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>

                <footer className="fixed-bottom">
                    <div className="container-fluid">
                        <span className="text-reset">By Chance Carr</span>
                        <NavLink className="text-reset" to="https://github.com/ccarr16-byu/startup">My Startup Github Repo</NavLink>
                    </div>
                </footer>
            </div>
        </BrowserRouter>
    );
}

function NotFound() {
  return <main className="container-fluid text-center">404: Return to sender. Address unknown.</main>;
}