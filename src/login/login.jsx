import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Login() {
  return (
    <main className="container-fluid">
            <div className="text-center">
                <h1>Welcome!</h1>
                <form method="get" action="userBoards.html">
                <div className="input-group mb-3">
                    <span className="input-group-text">@</span>
                    <input className="form-control" type="text" placeholder="your@email.com" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">🔒</span>
                    <input className="form-control" type="password" placeholder="password" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <button type="submit" className="btn btn-secondary">Create</button>
                </form>
            </div>

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
        </main>
  );
}