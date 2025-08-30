// src/components/UserProfile.jsx
import React from "react";

function UserProfile({ name, age, bio }) {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Bio: {bio}</p> {/* Important: Must say "Bio" exactly */}
    </div>
  );
}

export default UserProfile;
