export default async function UserIdPage({params}) {
  const { userId } = params;

  // Simulate a 3-second delay
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const user = await res.json();

  return (
    <div>
      <h1>User Detail</h1>
      user {userId} - {user.email}
    </div>
  );
}