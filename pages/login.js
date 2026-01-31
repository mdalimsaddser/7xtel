import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const [u, setU] = useState("");
  const [p, setP] = useState("");
  const router = useRouter();

  const login = () => {
    if (u === "admin" && p === "Ssabbir@1122") {
      localStorage.setItem("auth", "yes");
      router.push("/dashboard");
    } else {
      alert("Wrong login");
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Login</h2>
      <input placeholder="Username" onChange={e => setU(e.target.value)} /><br /><br />
      <input type="password" placeholder="Password" onChange={e => setP(e.target.value)} /><br /><br />
      <button onClick={login}>Login</button>
    </div>
  );
}
