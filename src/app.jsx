import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Board } from './board/board';
import { ListBoards } from './listBoards/listBoards';
import { Profile } from './profile/profile';
import { AuthState } from './login/authState';

export default function App() {
    const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
    const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
    const [authState, setAuthState] = React.useState(currentAuthState);

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
                            {authState === AuthState.Authenticated && (
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="myBoards">My Boards</NavLink> 
                                </li>
                            )}
                            {authState === AuthState.Authenticated && (
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="friends">Friends</NavLink>                 
                                </li>
                            )}
                            <li className="nav-item">
                                <NavLink className="nav-link" to="community">Community</NavLink>                 
                            </li>
                            {authState === AuthState.Authenticated && (
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="board">Create</NavLink>                 
                                </li>
                            )}
                            {authState === AuthState.Authenticated && (
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="profile">Profile</NavLink>
                                </li>
                            )}
                        </menu>
                    </nav>
                </header>

                <Routes>
                    <Route 
                        path='/' 
                        element={
                            <Login 
                                userName={userName}
                                authState={authState}
                                onAuthChange={(userName, authState) => {
                                    setAuthState(authState);
                                    setUserName(userName);
                                }}
                            />
                        } 
                        exact 
                    />
                    <Route path='/board' element={<Board userName={userName}/>} />
                    <Route path='/myBoards' element={<ListBoards />} />
                    <Route path='/friends' element={<ListBoards />} />
                    <Route path='/community' element={<ListBoards />} />
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