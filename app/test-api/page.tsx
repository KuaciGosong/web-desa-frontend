async function getData() {
  const res = await fetch("http://localhost:8000/api/users");

  if (!res.ok) { 
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return (await res.json()) as { name: string, email: string }[];
}

export default async function Home() {
  const result = await getData();
  return (
    <div>
      <h1>All Users</h1>
      {result.map((user) => (
        <div key={user.name}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}
  