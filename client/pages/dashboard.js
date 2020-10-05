import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Dashboard() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await axios.delete("/api/signout");
      // localStorage.setItem("user_status", "signed_out");
      router.push("/signin");
    } catch (err) {
      alert("An error has occurred! Try again");
    }
  };
  return (
    <>
      <h1>Welcome!</h1>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}
