import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Fetch user data from backend when component mounts
        const fetchUserData = async () => {
            try {
                const response = await fetch('/api/user', {
                    method: 'GET',
                    credentials: 'include' // Include cookies or tokens for authentication
                });
                if (response.ok) {
                    const data = await response.json();
                    setUserData(data);
                } else {
                    throw new Error('Failed to fetch user data');
                }
            } catch (error) {
                console.error(error);
                // Redirect to login page if user is not authenticated
                navigate('/Login');
            }
        };
        fetchUserData();
    }, [navigate]);

    return (
        <div>
            <h1>User Profile</h1>
            {userData ? (
                <div>
                    <p>Name: {userData.firstName} {userData.lastName}</p>
                    <p>Email: {userData.email}</p>
                    <p>Number: {userData.number}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
