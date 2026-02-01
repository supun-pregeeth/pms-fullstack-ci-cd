import { useAuth } from "../../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();
  return (
    <div className="container page">
      <h1 className="pageTitle">Profile</h1>
      <div className="profileCard">
        <div><b>Name:</b> {user?.name}</div>
        <div><b>Email:</b> {user?.email}</div>
        <div><b>Role:</b> {user?.role}</div>
      </div>
    </div>
  );
}
