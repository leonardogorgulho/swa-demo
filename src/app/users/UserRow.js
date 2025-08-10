import Link from "next/link";

const UserRow = ({ id, name }) => {
  return (
    <Link href={`/users/${id}`}>{name}</Link>
  )
}

export default UserRow;