const url = "https://api.github.com/users";
import { useState, useEffect } from "react";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <section>
      <h3>GitHub Users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <div key={id} className="card">
              <img src={avatar_url} alt={login} />
              <h4>{login}</h4>
              <a href={html_url} target="_blank" rel="noreferrer">
                Profile
              </a>
            </div>
          );
        })}
      </ul>
    </section>
  );
};
export default FetchData;
