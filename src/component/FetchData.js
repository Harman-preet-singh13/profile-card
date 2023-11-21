import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfileCard from './ProfileCard';

const YourComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc');
        setData(response.data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
}

console.log(data)

  return (
    <div className="h-screen flex items-center justify-center bg-zinc-50">
        {data.map((user) => (
          <div key={user.login.uuid}>
            <ProfileCard 
            userImgLg={user.picture.large}
            userImgMd={user.picture.medium}
            userImgSm={user.picture.thumbnail}
            userTitle={user.name.title}
            userFirstName={user.name.first}
            userLastName={user.name.last}
            userGender={user.gender}
            userPhone={user.phone}
            userDob={user.email}
            userLocationState={user.location.state}
            userLocationCountry={user.location.country}
            />
          </div>
        ))}
    </div>
  );
};

export default YourComponent;
