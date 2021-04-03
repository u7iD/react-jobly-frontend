import React, { useContext } from "react";
import CurrentUserContext from "./CurrentUserContext";

function Profile() {
  const currentUser = useContext(CurrentUserContext);
  return <div>Profile</div>;
}

export default Profile;
