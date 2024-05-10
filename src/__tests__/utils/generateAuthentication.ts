import jwt from "jsonwebtoken";
import { prisma } from "../../database/prisma";
import { createUser1Mock } from "../__mocks__/users.mocks";

export const generateAuthentication = async (user = createUser1Mock) => {
  const newUser = await prisma.user.create({
    data: user,
  });

  const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET as string, {
    subject: newUser.id.toString(),
  });

  return { user: newUser, token };
};

export const generateInvalidToken = () => {
  const token = jwt.sign({}, "INVALID_SECRET");

  return token;
};
