export default async function handler(req, res) {
  const API_URL = "http://147.135.212.197/crapi/had/viewstats";
  const TOKEN = process.env.SMS_TOKEN;

  try {
    const response = await fetch(
      `${API_URL}?token=${TOKEN}&records=20`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "API Failed" });
  }
}
