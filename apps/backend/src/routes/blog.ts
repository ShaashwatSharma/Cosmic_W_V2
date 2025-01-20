import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";
import { createblogInputs } from "..";
// import { createblogInputs,updateblogInputs } from "@shaashwat/medium-common";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_PASSWORD: string;
  },
  Variables:{
    authorId:string;
  }
}>();
// good practive to add pagination


//get all blogs
blogRouter.get("/bulk", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate());
    
      try {
        const blogs = await prisma.post.findMany({
          select: {
            id: true,
            title: true,
            content: true,
            thumbnailurl: true,
            createdAt: true,
            author: {
              select: {
                name: true,
                bio: true,
              },
            },
          },
        });
        c.status(200);
        return c.json({ blogs });
      } catch (e) {
        console.error(e);
        c.status(500);
        return c.json({ msg: "Error while fetching blogs" });
      }
//   const prisma = new PrismaClient({
//       datasourceUrl: c.env.DATABASE_URL,
//     }).$extends(withAccelerate());
// try{
//   const blogs= await prisma.post.findMany({
//     select:{
//       content:true,
//       title:true,
//       id:true,
//       author:{
//         select:{
//           name:true,
//         }
//       }
//     }
//   })
//   c.status(200)
//   return c.json({blogs})
// }catch(e){
//   c.status(411)
//   return c.json({msg:"Error while fetching all blogs "})
// }
});



// // get a specific blog based on the blog id (without :)->
blogRouter.get("/:id", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate());
try{
  const blogid= parseInt( c.req.param('id'));
    const blog= await prisma.post.findUnique({
        where:{
            id:blogid
        },
        select:{
          id:true,
          title:true,
          content:true
        //   author:{
        //     select:{
        //       name:true
        //     }
        //   }
        }
    })
    if(!blog){
        c.status(404)
        return c.json({msg:"No blog found"})
    }
    c.status(200)
    return c.json({blog})
}catch(e){
    c.status(411)
    console.log(e);
    return c.json({msg:"Error while fetchng the blog"})
}
});




//check for the auth
blogRouter.use("/*", async (c, next) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    // const prisma = c.get("prisma");
    const header = c.req.header("authorization") || "";
    const token = header.split(" ")[1];
    const user = await verify(token, c.env.JWT_PASSWORD);
    if (!user) {
      c.status(403);
      return c.json({ error: "Unauthourized" });
    }
    const userId: string = user.id as string;
    c.set("authorId", userId);

    // for some reason this gives a ts error so use the above two line of code 
    // c.set("authorId",user.id);

    await next();
  } catch (e) {
    c.status(404);
    return c.json({ msg: "Error while Authenticating" });
  }
});


//delete a blog 
blogRouter.post("/delete",async(c)=>{
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
try{

  const body= await c.req.json();
  await prisma.post.delete({
    where:{
      id:body.id
    }
  })
  return c.json({msg:"Deleted"})
}catch(e){
 return c.json({msg:"error"})
}
});


// Add a new blog post ->
blogRouter.post("/",async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate());
    
      try {
        const body = await c.req.json();
        const parsedInput = createblogInputs.safeParse(body);
    
        if (!parsedInput.success) {
          c.status(400);
          return c.json({ msg: "Invalid blog inputs", errors: parsedInput.error });
        }
    
        const blog = await prisma.post.create({
          data: {
            title: body.title,
            content: body.content,
            thumbnailurl: body.thumbnailurl,
            authorId: parseInt(c.get("authorId")),
            readtime:5
          },
        });
    
        c.status(201);
        return c.json({ id: blog.id, msg: "Blog created successfully" });
      } catch (e) {
        console.error(e);
        c.status(500);
        return c.json({ msg: "Error while creating blog" });
      }
//     const prisma = new PrismaClient({
//         datasourceUrl: c.env.DATABASE_URL,
//       }).$extends(withAccelerate());
// try{
//   const body=await c.req.json();
//   const {success}=createblogInputs.safeParse(body);
//   if(!success){
//     c.status(411)
//     return c.json({Msg:"Invalid Blog Inputs "})
//   }
//     const blog=await prisma.post.create({
//         data:{
//             title:body.title,
//             content:body.content,
//             authorId:c.get('authorId')
//             // authorId:"1"
//         }
//     })

//     c.status(200)
//     return c.json({id:blog.id})
// }catch(e){
//     c.status(411)
//     return c.json({msg:"Error while creating blog"})
// }
});



// Upate the blog post->
// blogRouter.put("/", async(c) => {
//     const prisma = new PrismaClient({
//         datasourceUrl: c.env.DATABASE_URL,
//       }).$extends(withAccelerate());

// try{
//   const body=await c.req.json();
//   const {success}=updateblogInputs.safeParse(body);
//   if(!success){
//     c.status(411)
//     return c.json({Msg:"Wrong Input values of blogs"})
//   }
//     await prisma.post.update({
//         where:{
//             id:body.id
//         },
//         data:{
//             title:body.title,
//             content:body.content
//         }
//     })
//     c.status(200)
//     return c.json({msg:"Your blog has been upadated"})
// }catch(e){
//     c.status(411)
//     return c.json({msg:"Error whie updating your blog"})
// }
// });