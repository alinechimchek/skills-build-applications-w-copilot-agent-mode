import React, { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://fantastic-couscous-wr77wgpqw7rg3v49p-8000.app.github.dev/api/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => setUsers([]));
  }, []);

  return (
    <div className="card mt-4">
      <div className="card-body">
        <h2 className="card-title mb-4">Users</h2>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="table-light">
              <tr>
                <th>Username</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(users) && users.map((user, idx) => (
                <tr key={idx}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Users;
