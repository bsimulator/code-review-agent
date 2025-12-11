import React, { useState, useEffect } from 'react';

function UserDashboard() {
    const [users, setUsers] = useState([]);
    const [count, setCount] = useState(0);
    
    // Missing dependency array - will run on every render
    useEffect(() => {
        fetchUsers();
    });
    
    const fetchUsers = async () => {
        console.log('Fetching users...');  // Debug statement
        const response = await fetch('/api/users');
        const data = await response.json();
        setUsers(data);
    };
    
    return (
        <div>
            <h1>User Dashboard</h1>
            
            {/* Missing key prop */}
            {users.map(user => (
                <div className="user-card">
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                </div>
            ))}
            
            {/* XSS vulnerability */}
            <div dangerouslySetInnerHTML={{ __html: users[0]?.bio }} />
            
            <button onClick={() => setCount(count + 1)}>
                Count: {count}
            </button>
        </div>
    );
}

// Old class component with issues
class LegacyComponent extends React.Component {
    componentWillMount() {  // Deprecated lifecycle
        this.loadData();
    }
    
    handleClick = () => {
        this.state.count = this.state.count + 1;  // Direct state mutation!
        this.forceUpdate();
    }
    
    render() {
        var message = "Hello";  // var instead of const/let
        return <div onClick={this.handleClick}>{message}</div>;
    }
}

export default UserDashboard;
