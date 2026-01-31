import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Dashboard() {
  const [sms, setSms] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("auth") !== "yes") {
      router.push("/login");
      return;
    }

    fetch("/api/sms")
      .then(res => res.json())
      .then(data => setSms(data.data || []));
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h2>SMS Dashboard</h2>
      {sms.map((s, i) => (
        <div key={i} style={{ marginBottom: 10 }}>
          {s.dt} | {s.num} | {s.cli} | ${s.payout}
        </div>
      ))}
    </div>
  );
}
