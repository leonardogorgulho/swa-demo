export default async function UsersPage() {

  const result = await fetch('http://localhost:3000/api/users')
  const {data} = await result.json();

  return (
    <div>
      <ul>
        {
          (data.map((user) => (
            <li key={user._id}>
              {user.name} - {user.email}
            </li>
          )))
        }
      </ul>
    </div>
  );
}
