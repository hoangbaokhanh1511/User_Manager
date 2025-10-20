"use client";
import { useState, useEffect } from "react";
export default function userList() {
    // khai báo các state: 
    const [users, setUsers] = useState([]); // users: chứa danh sách người dùng (ban đầu là mảng rỗng)
    const [loading, setLoading] = useState(true); // loading: biến cờ để biết là dữ liệu đang được tải hay đã tải xong.
    useEffect(() => {
        async function  fetchUsers() {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await res.json();
                setUsers(data);
            } catch (error) {
                console.error("Lỗi khi fetch dữ liệu", error);
            } finally  {
                setLoading(false);
            }
        }
        fetchUsers();
    }, []);

  if (loading) return <p>Đang tải...</p>;

  return (
    <div>
      <h2>Danh sách người dùng</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}
