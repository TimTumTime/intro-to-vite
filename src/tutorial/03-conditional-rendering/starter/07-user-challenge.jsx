import { useState } from "react";
const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    setUser({ name: "John Doe" });
  };

  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      {user ? (
        <div>
          <h2>Hello there, {user.name}!</h2>
          <button className="btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h2>Please log in.</h2>
          <button className="btn" onClick={handleLogin}>
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;
