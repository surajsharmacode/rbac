// src/pages/UserManagement.jsx
import React, { useState } from "react";
import Table from "../components/Table";
import Modal from "../components/Modal";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddUser = (user) => {
    setUsers([...users, user]);
    setModalOpen(false);
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">User Management</h2>
      <div className="flex justify-end mb-4">
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded shadow-md transition duration-300"
          onClick={() => setModalOpen(true)}
        >
          Add User
        </button>
      </div>
      <Table
        headers={["Name", "Email", "Role", "Status"]}
        data={users}
        actions={(user) => (
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-3 py-1 rounded shadow-md transition duration-300"
            onClick={() => handleDeleteUser(user.id)}
          >
            Delete
          </button>
        )}
      />
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            handleAddUser({
              id: Date.now(),
              name: formData.get("name"),
              email: formData.get("email"),
              role: formData.get("role"),
              status: "Active",
            });
          }}
        >
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              name="name"
              className="w-full px-3 py-2 border rounded-lg shadow-sm"
              placeholder="Enter name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              name="email"
              className="w-full px-3 py-2 border rounded-lg shadow-sm"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Role</label>
            <input
              name="role"
              className="w-full px-3 py-2 border rounded-lg shadow-sm"
              placeholder="Enter role"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded shadow-md transition duration-300"
          >
            Save
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default UserManagement;
