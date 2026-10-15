import { userRepository } from "./user.repository.js";
import bcrypt from "bcrypt";

export const userService = {
  async createUser(data) {
    const hashedPassword = await bcrypt.hash(data.userPassword, 10);

    return userRepository.create({
      ...data,
      userPassword: hashedPassword, // sobrescribe el texto plano
    });
  },
};