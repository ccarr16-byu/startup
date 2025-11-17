import React from "react";

import Button from "react-bootstrap/Button";
import { MessageDialog } from "./messageDialog";

export function Unauthenticated(props) {
    const [userName, setUserName] = React.useState(props.userName);
    const [password, setPassword] = React.useState('');
    const [displayError, setDisplayError] = React.useState(null);

    async function loginUser() {
        loginOrCreate(`/api/auth/login`);
    }

    async function createUser() {
        loginOrCreate(`/api/auth/create`);
    }

    async function loginOrCreate(endpoint) {
        const response = await fetch(endpoint, {
            method: 'post',
            body: JSON.stringify({ email: userName, password: password }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        if (response?.status === 200) {
            localStorage.setItem('userName', userName);
            props.onLogin(userName);
        } else {
            const body = await response.json();
            setDisplayError(`⚠ Error: ${body.msg}`);
        }
        }

    return (
        <div>
            <div className="text-center">
                <div className="input-group mb-3">
                    <span className="input-group-text">@</span>
                    <input className="form-control" type="text" vale={userName} onChange={(e) => setUserName(e.target.value)} placeholder="your@email.com" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">🔒</span>
                    <input className="form-control" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password" />
                </div>
                <Button variant='primary' onClick={() => loginUser()} disabled={!userName || !password}>
                    Login
                </Button>
                <Button variant='secondary' onClick={() => createUser()} disabled={!userName || !password}>
                    Create
                </Button>
            </div>

            <MessageDialog message={displayError} onHIde={() => setDisplayError(null)} />

            <div>
                <h4>What is QuoteBoard?</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacinia vulputate ultricies. Fusce posuere leo id nisl volutpat, ac laoreet sem dapibus. Aenean nec feugiat lorem, vitae porttitor urna. Sed non eleifend nisl. Maecenas ut erat sit amet magna luctus eleifend. Cras odio leo, malesuada at ipsum eget, fringilla varius sem. Vestibulum lacinia ipsum ac velit efficitur, sed tempor ipsum sodales. Nunc interdum ut urna in elementum. Maecenas convallis semper ligula quis commodo. Nullam vehicula eu magna vel gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <h4>How does it work?</h4>
                <p>
                    Aenean rutrum fermentum dui condimentum consequat. Cras convallis, sapien at blandit lobortis, ex nulla feugiat quam, eu convallis nisi libero ut libero. Etiam sed rutrum felis, in tincidunt sapien. Aenean eu velit rhoncus, porttitor augue ut, finibus magna. Morbi magna mi, bibendum sit amet felis vitae, ultricies consequat velit. Duis ornare scelerisque enim, et porta metus laoreet a. Maecenas a dolor vehicula quam pretium ornare. Aliquam vitae nulla nibh. Nullam blandit nunc nec metus euismod, vulputate consequat lectus dignissim.
                </p>
                <h4>How do I get started?</h4>
                <p>
                    Praesent tincidunt tellus et aliquam lobortis. Curabitur a hendrerit ipsum. Vivamus porttitor augue sed justo ultricies dapibus. Praesent ante tellus, vestibulum id urna sit amet, tincidunt tincidunt libero. Morbi varius, lacus scelerisque euismod dignissim, nunc mi imperdiet lectus, non tincidunt odio nisl sit amet ligula. Sed ex elit, vulputate eget placerat commodo, lacinia a turpis. Etiam sodales urna turpis, vel maximus eros pretium quis. Praesent aliquam molestie neque non gravida. Aliquam sed mollis nisi, quis posuere nibh.
                </p>
            </div>
        </div>
    )
}