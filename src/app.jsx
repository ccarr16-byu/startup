import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    return (
        <div className="body">
            <header class="container-fluid">
                <nav class="navbar fixed-top">
                    <a class="navbar-brand" href="#"><b>QuoteBoard</b></a>
                    <menu class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" href="index.html">Home</a> 
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="userBoards.html">My Boards</a> 
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="friendBoards.html">Friends</a>                 
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="communityBoards.html">Community</a>                 
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="editBoard.html">Create</a>                 
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="profile.html">Profile</a>
                        </li>
                    </menu>
                </nav>
            </header>

            <main>App components go here</main>

            <footer class="fixed-bottom">
                <div class="container-fluid">
                    <span class="text-reset">By Chance Carr</span>
                    <a class="text-reset" href="https://github.com/ccarr16-byu/startup">My Startup Github Repo</a>
                </div>
            </footer>
        </div>
    );
}