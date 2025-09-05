import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import connect from "./utils/db";
import User from "./models/User";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google,
    Credentials({
      credentials: {
        email: {
          type: "email",
          label: "Email",
          placeholder: "johndoe@gmail.com",
        },
        password: {
          type: "password",
          label: "Password",
          placeholder: "*****",
        },
      },
      authorize: async (credentials) => {
        await connect();

        try {
          const user = await User.findOne({ email: credentials.email });
          if (!user) throw new Error("User not found");

          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );

            if (isPasswordCorrect) {
              return {
                id: user._id.toString(),
                email: user.email,
                username: user.username,
              };
            }

            throw new Error("Wrong credentials");
          }
          if (!user) throw new Error("User not found");
        } catch (err) {
          throw new Error(err);
        }
      },
    }),
  ],

  pages: {
    signIn: "/dashboard/(auth)/login",
    error: "/dashboard/(auth)/login",
  },
});
