import React from "react";

const UserProfile = ({ params }: any) => {
  return (
    <div className="">
      <h1>{params.slug}</h1>
      <p></p>
    </div>
  );
};

export default UserProfile;
