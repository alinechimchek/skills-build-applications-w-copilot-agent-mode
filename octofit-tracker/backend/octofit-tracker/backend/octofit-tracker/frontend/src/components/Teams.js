import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://fantastic-couscous-wr77wgpqw7rg3v49p-8000.app.github.dev/api/teams')
      .then(res => res.json())
      .then(data => setTeams(data))
      .catch(err => setTeams([]));
  }, []);

  return (
    <div className="card mt-4">
      <div className="card-body">
        <h2 className="card-title mb-4">Teams</h2>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="table-light">
              <tr>
                <th>Name</th>
                <th>Members</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(teams) && teams.map((team, idx) => (
                <tr key={idx}>
                  <td>{team.name}</td>
                  <td>{Array.isArray(team.members) ? team.members.join(', ') : ''}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Teams;
