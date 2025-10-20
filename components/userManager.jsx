"use client";
import { useState, useEffect } from "react";
import SearchBar from "../components/searchBar";
import UserList from "../components/userList";
import UserForm from "../components/userForm"; 
import Toast from "../components/toast";

const API_URL = "https://68f4ba92b16eb6f46835564f.mockapi.io/api/v1/users";  
export default function UserManager() {
  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [showList, setShowList] = useState(true);
  const [editingUser, setEditingUser] = useState(null);
  const [resetForm, setResetForm] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  
  const showToast = (msg) => {
    setToastMsg(msg);
  };

  const hideToast = (msg) => {
    setToastMsg("");
  }

  // Lấy danh sách user
  const fetchUsers = () => {
    setLoading(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Thêm user
const handleAddUser = async (newUser) => {
  const isExit = users.some(
    (user) =>
      user.email.toLowerCase() === newUser.email.toLowerCase() ||
      user.name.toLowerCase() === newUser.name.toLowerCase()
  );
  if (isExit) {
    alert("Người dùng này đã tồn tại trong hệ thống");
    return;
  }

  try {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });
    await fetchUsers(); // chờ cập nhật danh sách
    showToast("Đã thêm người dùng thành công!");
  } catch (error) {
    showToast("Lỗi khi thêm người dùng!");
  }
};

// Cập nhật user
const handleUpdateUser = async (updatedUser) => {
  try {
    await fetch(`${API_URL}/${updatedUser.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedUser),
    });
    await fetchUsers();
    setEditingUser(null);
    showToast("Đã cập nhật thông tin người dùng!");
  } catch (error) {
    showToast("Lỗi khi cập nhật!");
  }
};

// Xoá user
const handleDeleteUser = async (id) => {
  if (confirm("Bạn có chắc muốn xóa user này không?")) {
    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      await fetchUsers();
      setEditingUser(null);
      setResetForm(true);
      showToast("Đã xóa người dùng!");
    } catch (error) {
      showToast("Lỗi khi xoá người dùng!");
    }
  }
};

  // Xử lý tìm kiếm
  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    <div className=" sticky top-0 z-50 bg-white shadow-md p-4">
      <h1 className="text-5xl font-bold mb-4 text-center">👥 User Manager</h1>

      <div className="flex items-center justify-center mb-6">
        <h2 className="mr-5 font-bold text-2xl">Tìm kiếm tên:</h2>
        <SearchBar onSearchChange={setSearch} />
        <button
          className="bg-amber-600 text-black font-bold pt-3 pb-3 pl-10 pr-10 ml-4 text-2xl rounded-sm border cursor-pointer"
          onClick={() => setShowList(!showList)}
        >
          {showList ? "Ẩn danh sách" : "Hiện danh sách"}
        </button>
      </div>

      <UserForm
        onAddUser={handleAddUser}
        onUpdateUser={handleUpdateUser}
        editingUser={editingUser}
        resetForm = {resetForm}
        onResetDone = {() => setResetForm(false)}
      />
    </div>
    <div className="p-4">
      {loading ? (
        <p>Đang tải dữ liệu...</p>
      ) : showList ? (
        filteredUsers.length > 0 ? (
          <UserList
            users={filteredUsers}
            selectedUser={userSelected}
            onSelectUsers={setUserSelected}
            onEditUser={setEditingUser}
            onDeleteUser={handleDeleteUser}
          />
        ) : (
          <p>Không tìm thấy người dùng</p>
        )
      ) : null}
      <Toast message={toastMsg} onClose={hideToast}/>
    </div>
  </>
  );
}
