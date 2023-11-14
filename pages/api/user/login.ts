import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";

import { db } from "@/database";
import { User } from "@/models";
import { JWT } from "@/utils";

type Data =
  | { message: string }
  | {
      token: string;
      user: {
        email: string;
        role: string;
        name: string;
      };
    };

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case "POST":
      return loginUser(req, res);

    default:
      return res.status(400).json({ message: "Bad request" });
  }
}

const loginUser = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { email = "", password = "" } = req.body;

  await db.connect();
  const user = await User.findOne({ email });
  await db.disconnect();

  if (!user) return res.status(400).json({ message: "Email no valido" });

  if (!bcrypt.compareSync(password, user.password!))
    return res.status(400).json({ message: "Contrasena no valida" });

  const { role, name, _id } = user;

  const token = JWT.signToken(_id, email);

  return res.status(200).json({
    token: token,
    user: {
      name,
      email,
      role,
    },
  });
};
