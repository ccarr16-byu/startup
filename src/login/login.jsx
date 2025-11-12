import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';

export function Login({ userName, authState, onAuthChange }) {
  React.useEffect(() => {
    document.title = 'QuoteBoard'; 
  }, []);

  return (
    <main className="container-fluid">
        <div>
            {authState !== AuthState.Unknown && <h1>Welcome!</h1>}
            {authState === AuthState.Authenticated && (
                <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />
            )}
            {authState === AuthState.Unauthenticated && (
                <Unauthenticated
                    userName={userName}
                    onLogin={(loginUsername) => {
                        onAuthChange(loginUsername, AuthState.Authenticated);
                    }}
                />
            )}
        </div>    
    </main>
  );
}