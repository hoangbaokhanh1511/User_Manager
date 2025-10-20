"use client";
import { useState, useEffect } from "react";

export default function UserForm({ onAddUser, onUpdateUser, editingUser, resetForm, onResetDone }) {
  const [form, setForm] = useState({ name: "", email: "", city: "" });

useEffect(() => {
  if (editingUser) {
    setForm({
      id: editingUser.id,
      name: editingUser.name || "",
      email: editingUser.email || "",
      city: editingUser.city || "",
    });
  }
}, [editingUser]);

useEffect(() => {
  if(resetForm) {
    setForm({ name: "", email: "", city: "" });
    onResetDone();
  }
}, [resetForm, onResetDone]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingUser) {
      onUpdateUser(form);
    } else {
      onAddUser(form);
    }
    setForm({ name: "", email: "", city: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8"
    >
      <div className= "text-center">
        <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Tên"
        className="border p-2 rounded w-80 mr-5"
        required
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="border p-2 rounded w-80 mr-5"
          required
        />
        <input
          name="city"
          value={form.city}
          onChange={handleChange}
          placeholder="Thành phố"
          className="border p-2 rounded w-80 mr-5"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          {editingUser ? "Cập nhật" : "Thêm mới"}
        </button>
      </div>
      
    </form>
  );
}
