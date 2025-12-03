import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setIsLoading(false);
          setIsError(true);
          return;
        }
        const user = await response.json();
        setUser(user);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    };
    fetchUser();
  }, []);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>There was an error...</h2>;
  }
  return (
    <div>
      <img
        src={user.avatar_url}
        alt={user.name}
        style={{ width: "150px", borderRadius: "25px" }}
      />
      <h2>{user.name}</h2>
      <h4>Works at {user.location}</h4>
      <p>{user.bio}</p>
      <a href={user.html_url} target="_blank" rel="noreferrer">
        Profile
      </a>
    </div>
  );
};
export default MultipleReturnsFetchData;
