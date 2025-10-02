import React from 'react';
import Table from 'react-bootstrap/Table';
import './profile.css';

export function Profile() {
  React.useEffect(() => {
    document.title = 'Profile'; 
  }, []);

  return (
    <main className="container-fluid" id="profile-main">
            <div className="text-center">
                <h3><em>Hi, User!</em></h3>
                <img src="https://cdn.britannica.com/72/45872-050-10F6A603/Green-frog.jpg" width="100px" />
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

                        <tbody>
                            <tr>
                                <td>
                                    User 1 <img src="https://cdn.britannica.com/72/45872-050-10F6A603/Green-frog.jpg" width="50px" />
                                </td>
                                <td>
                                    <button type="submit" className="btn btn-primary">Accept</button>
                                    <button type="submit" className="btn btn-secondary">Reject</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    User 2 <img src="https://cdn.britannica.com/72/45872-050-10F6A603/Green-frog.jpg" width="50px" />
                                </td>
                                <td>
                                    <button type="submit" className="btn btn-primary">Accept</button>
                                    <button type="submit" className="btn btn-secondary">Reject</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    User 3 <img src="https://cdn.britannica.com/72/45872-050-10F6A603/Green-frog.jpg" width="50px" />
                                </td>
                                <td>
                                    <button type="submit" className="btn btn-primary">Accept</button>
                                    <button type="submit" className="btn btn-secondary">Reject</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    User 4 <img src="https://cdn.britannica.com/72/45872-050-10F6A603/Green-frog.jpg" width="50px" />
                                </td>
                                <td>
                                    <button type="submit" className="btn btn-primary">Accept</button>
                                    <button type="submit" className="btn btn-secondary">Reject</button>
                                </td>
                            </tr>
                        </tbody>
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

                        <tbody>
                            <tr>
                                <td>
                                    Friend 1 <img src="https://cdn.britannica.com/72/45872-050-10F6A603/Green-frog.jpg" width="50px" />
                                </td>
                                <td>
                                    <button type="submit" className="btn btn-secondary">Unfriend</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Friend 2 <img src="https://cdn.britannica.com/72/45872-050-10F6A603/Green-frog.jpg" width="50px" />
                                </td>
                                <td>
                                    <button type="submit" className="btn btn-secondary">Unfriend</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Friend 3 <img src="https://cdn.britannica.com/72/45872-050-10F6A603/Green-frog.jpg" width="50px" />
                                </td>
                                <td>
                                    <button type="submit" className="btn btn-secondary">Unfriend</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Friend 4 <img src="https://cdn.britannica.com/72/45872-050-10F6A603/Green-frog.jpg" width="50px" />
                                </td>
                                <td>
                                    <button type="submit" className="btn btn-secondary">Unfriend</button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </main>
  );
}