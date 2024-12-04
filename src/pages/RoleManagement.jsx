// src/pages/RoleManagement.jsx
import React, { useState } from "react";
import Table from "../components/Table";
import Modal from "../components/Modal";

const RoleManagement = () => {
  const [roles, setRoles] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddRole = (role) => {
    setRoles([...roles, role]);
    setModalOpen(false);
  };

  return (
    <div className="p-4">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setModalOpen(true)}
      >
        Add Role
      </button>
      <Table
        headers={["Role", "Permissions"]}
        data={roles}
        actions={() => <button className="text-red-500">Delete</button>}
      />
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            handleAddRole({
              id: Date.now(),
              name: formData.get("role"),
              permissions: formData.get("permissions").split(","),
            });
          }}
        >
          <input name="role" placeholder="Role Name" className="border p-2 w-full" />
          <input name="permissions" placeholder="Permissions (comma-separated)" className="border p-2 w-full" />
          <button type="submit" className="bg-green-500 text-white px-4 py-2 mt-2">
            Save
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default RoleManagement;
