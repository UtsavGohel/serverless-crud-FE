import axios from "axios";
import type { User } from "../types/user";

const API_BASE = import.meta.env.VITE_API_BASE;

export const getAllUsers = async (): Promise<User[]> => {
  const res = await axios.get(API_BASE);
  return res.data;
};

export const createUser = async (user: Omit<User, "userId">): Promise<User> => {
  const res = await axios.post(API_BASE, user);
  return res.data;
};

export const updateUser = async (
  id: string,
  user: Omit<User, "userId">
): Promise<User> => {
  const res = await axios.put(`${API_BASE}/${id}`, user);
  return res.data;
};

export const deleteUser = async (id: string): Promise<void> => {
  await axios.delete(`${API_BASE}/${id}`);
};
