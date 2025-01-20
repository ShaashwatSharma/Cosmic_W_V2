import { Hono } from "hono";
import { Prisma, PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, verify, sign } from "hono/jwt";
import { userRouter } from "./routes/user";
import { blogRouter } from "./routes/blog";
import { cors } from "hono/cors";
import z from "zod";
// const token=Hono.jwt.sign(body.email,JWT_PASSWORD)
const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_PASSWORD: string;
  };
  // Variables: {
    //   prisma: any;
    // };
  }>();
  app.use("/*",cors());

//For future use cases->
    // app.use("*", async (c, next) => {
    //   const prisma = new PrismaClient({
    //     datasourceUrl: c.env.DATABASE_URL,
    //   }).$extends(withAccelerate());

    //   c.set("prisma", prisma);
    //   next();
    // });
app.route('api/v1/user',userRouter )
app.route('api/v1/blog',blogRouter)

// This is what backend will need 
export const signupInput= z.object({
    email:z.string().email(),
    password:z.string().min(8),
    name:z.string(),
    bio:z.string().min(10),
    username:z.string().min(4)
})

export const signinInput=z.object({
    email:z.string().email(),
    password:z.string().min(8)
})

export const createblogInputs=z.object({
    title:z.string().min(5),
    content:z.string().min(100),
    thumbnailurl:z.string()
})

// export const updateblogInputs = z.object({
//     title:z.string(),
//     content:z.string(),
//     id:z.string()
// })

// This is what frontend will need 
export type SignupInput=z.infer<typeof signupInput>
export type SigninInput = z.infer<typeof signinInput>
export type CreateblogInputs=z.infer<typeof createblogInputs>
// export type UpdateblogInputs=z.infer<typeof updateblogInputs>

export default app;