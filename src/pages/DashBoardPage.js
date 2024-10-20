import React, { useEffect, useState } from 'react';
import { UserDetailsApi } from '../services/Api';
import NavBar from '../components/NavBar';
import { isAuthenticated } from '../services/Auth';
import { useNavigate } from 'react-router-dom';

export const DashBoardPage = () => {
    const [user, setUser] = useState({ name: "", email: "", localId: "" });
    const navigate = useNavigate();

    // Redirect to login if not authenticated
    useEffect(() => {
        if (!isAuthenticated()) {
            navigate('/login');  // Navigate to login if not authenticated
        } else {
            // If authenticated, fetch user details
            UserDetailsApi().then((response) => {
                setUser({
                    name: response.data.users[0].displayName,
                    email: response.data.users[0].email,
                    localId: response.data.users[0].localId
                });
            }).catch(error => {
                console.error("Failed to fetch user details:", error);
            });
        }
    }, [navigate]);  // Add `navigate` as a dependency to avoid issues in React

    // Render the dashboard or loading state
    return (
        <div>
            <NavBar />
            <main role="main" className="container mt-5">
                <div className="container">
                    <div className="text-center mt-5">
                        <h3>Dashboard Page</h3>
                        {user.name && user.email && user.localId ? (
                            <div>
                                <p className="text-bold">Hi {user.name}, your Firebase ID is {user.localId}</p>
                                <p>Your email is {user.email}</p>
                            </div>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};
