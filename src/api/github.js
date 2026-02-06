export default async function handler(req, res) {
  const username = "rntejaswini";

  const response = await fetch(
    `https://api.github.com/users/${username}/events/public`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    }
  );

  const data = await response.json();

  const today = new Date().toDateString();
  const commitsToday = data.filter(
    (e) =>
      e.type === "PushEvent" &&
      new Date(e.created_at).toDateString() === today
  ).length;

  res.status(200).json({
    commitsToday,
    lastActivity: data[0]?.created_at,
  });
}
