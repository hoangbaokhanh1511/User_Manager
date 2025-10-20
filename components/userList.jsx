
// UserList nhận users và onSelectUser qua props.
"use client";
import UserDetails from "../components/userDetails";

export default function UserList({
  users,
  selectedUser,
  onSelectUsers,
  onEditUser,
  onDeleteUser,
}) {
  return (
    <ul className="space-y-2">
      {users.map((user) => (
        <li key={user.id}>
          <div
            className={`p-2 bg-gray-50 rounded hover:bg-gray-100 cursor-pointer ${
              selectedUser?.id === user.id
                ? "bg-amber-100 font-semibold"
                : ""
            }`}
            onClick={() =>
              onSelectUsers(selectedUser?.id === user.id ? null : user)
            }
          >
            {user.name}
            <div className="float-right space-x-10 items-center">
              <button
                className="text-blue-500 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  onEditUser(user);
                }}
              >
                Sửa
              </button>
              <button
                className="text-red-500 cursor-pointer hover: "
                onClick={(e) => {
                  e.stopPropagation();
                  onDeleteUser(user.id);
                }}
              >
                Xóa
              </button>
            </div>
          </div>

          {selectedUser?.id === user.id && (
            <div className="ml-4 mt-2">
              <UserDetails user={user} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}