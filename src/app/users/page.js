import UserRow from "./UserRow";

export default async function UsersPage() {

  const data = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await data.json();

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (<li key={user.id}><UserRow id={user.id} name={user.name} /></li>))}
      </ul>
    </div>
  )
}