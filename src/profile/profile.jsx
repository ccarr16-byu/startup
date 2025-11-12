import React from 'react';
import Table from 'react-bootstrap/Table';
import './profile.css';

export function Profile() {
    const friendsPlaceholder = [
        { id: 5, name: 'Friend 1', photo: '/Green-frog.png' },
        { id: 6, name: 'Friend 2', photo: '/Green-frog.png' },
        { id: 7, name: 'Friend 3', photo: '/Green-frog.png' },
        { id: 8, name: 'Friend 4', photo: '/Green-frog.png' },
    ];
    const requestsPlaceholder = [
        { id: 1, name: 'User 1', photo: '/Green-frog.png' },
        { id: 2, name: 'User 2', photo: '/Green-frog.png' },
        { id: 3, name: 'User 3', photo: '/Green-frog.png' },
        { id: 4, name: 'User 4', photo: '/Green-frog.png' },
    ];

    const [friends, setFriends] = React.useState(() => {
        const storedFriends = localStorage.getItem("friends");
        if (storedFriends) {
            return JSON.parse(storedFriends);
        } else {
            return friendsPlaceholder;
        }
    });
    const [requests, setRequests] = React.useState(() => {
        const storedRequests = localStorage.getItem("requests");
        if (storedRequests) {
            return JSON.parse(storedRequests);
        } else {
            return requestsPlaceholder;
        }
    });

    React.useEffect(() => {
        document.title = 'Profile'; 
    }, []);

    React.useEffect(() => {
        localStorage.setItem("friends", JSON.stringify(friends));
    }, [friends]);

    React.useEffect(() => {
        localStorage.setItem("requests", JSON.stringify(requests));
    }, [requests]);

    const handleReject = (id) => {
        setRequests((prev) => prev.filter(requests => requests.id !== id));
    }

    const handleAccept = (id) => {
        const accepted = requests.find(requests => requests.id === id);
        if (accepted) {
            setFriends((prev) => [...prev, accepted]);
            setRequests((prev) => prev.filter(requests => requests.id !== id));
        }
    }

    const handleUnfriend = (id) => {
        setFriends((prev) => prev.filter(friends => friends.id !== id))
    }

    const requestRows = [];
    if (requests.length) {
        for (const [i, user] of requests.entries()) {
            requestRows.push(
                <tr key={i}>
                    <td>{user.name.split('@')[0]} <img src={user.photo} width="50px" /></td>
                    <td>
                        <button type="submit" className="btn btn-primary" onClick={() => handleAccept(user.id)}>Accept</button>
                        <button type="submit" className="btn btn-secondary" onClick={() => handleReject(user.id)}>Reject</button>
                    </td>
                </tr>
            );
        } 
    } else {
        requestRows.push(
            <tr key='0'>
                <td colSpan='2'>No new friend requests</td>
            </tr>
        )
    }

    const friendRows = [];
    if (friends.length) {
        for (const [i, user] of friends.entries()) {
            friendRows.push(
                <tr key={i}>
                    <td>{user.name.split('@')[0]} <img src={user.photo} width="50px" /></td>
                    <td>
                        <button type="submit" className="btn btn-secondary" onClick={() => handleUnfriend(user.id)}>Unfriend</button>
                    </td>
                </tr>
            );
        } 
    } else {
        friendRows.push(
            <tr key='0'>
                <td colSpan='2'>No friends right now</td>
            </tr>
        )
    }

  return (
    <main className="container-fluid" id="profile-main">
            <div className="text-center">
                <h3><em>Hi, User!</em></h3>
                <img src="/Green-frog.png" width="100px" />
            </div>

            <div className="container-fluid" id="friend_info">
                <div className="container-fluid" id="friend_requests">
                    <h2>Friend Requests</h2>
                    <Table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">User</th>
                                <th scope="col">Options</th>
                            </tr>
                        </thead>
                        <tbody id='requests'>{requestRows}</tbody>
                    </Table>
                </div>

                <div className="container-fluid" id="friend_list">
                    <h2>Friend List</h2>
                    <Table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Friend</th>
                                <th scope="col">Options</th>
                            </tr>
                        </thead>
                        <tbody id='friends'>{friendRows}</tbody>
                    </Table>
                </div>
            </div>
        </main>
  );
}