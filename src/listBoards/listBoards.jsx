import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './listBoards.css';

export function ListBoards() {
  React.useEffect(() => {
    document.title = 'Boards'; 
  }, []);

  return (
    <main className="container-fluid text-center" id="boardList">
        <div>
            Board 1 Placeholder (Database)
        </div>
        <div>
            Board 2 Placeholder (Database)
        </div>
        <div>
            Board 3 Placeholder (Database)
        </div>
        <div>
            Board 4 Placeholder (Database)
        </div>
        <div>
            Board 5 Placeholder (Database)
        </div>
        <div>
            Board 6 Placeholder (Database)
        </div>
        <div>
            Board 7 Placeholder (Database)
        </div>
    </main>
  );
}