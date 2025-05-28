import { useEffect, useState } from "react";
import type { User } from "../types/user";
import {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../api/userApi";
import UserForm from "../components/UserForm";
import UserList from "../components/UserList";

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const fetchUsers = async () => {
    const data = await getAllUsers();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = async (userData: Omit<User, "userId">) => {
    if (selectedUser) {
      const updated = await updateUser(selectedUser.userId, userData);
      setUsers(users.map((u) => (u.userId === updated.userId ? updated : u)));
      setSelectedUser(null);
    } else {
      const newUser = await createUser(userData);
      setUsers([...users, newUser]);
    }
  };

  const handleDelete = async (id: string) => {
    await deleteUser(id);
    setUsers(users.filter((u) => u.userId !== id));
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <UserForm
        onSubmit={handleSubmit}
        selectedUser={selectedUser}
        onCancel={() => setSelectedUser(null)}
      />
      <UserList
        users={users}
        onEdit={setSelectedUser}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default UsersPage;
