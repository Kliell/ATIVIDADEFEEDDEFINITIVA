import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getPosts = query({
  handler: async (ctx) => {
    return await ctx.db
      .query("posts")
      .withIndex("by_creation")
      .order("desc")
      .collect();
  },
});

export const addPost = mutation({
  args: {
    user: v.string(),
    content: v.string(),
    image: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("posts", args);
  },
});


// import { mutation } from "./_generated/server";
// import {v} from "convex/values"

// export const addPost = mutation({
//   args: {
//     user: v.string(),
//     content: v.string(),
//     image: v.string(),
//   },
//   handler: async (ctx, args) => {
//     await ctx.db.insert("posts", {
//       user: args.user,
//       content: args.content,
//       image: args.image,
//     });
//   },
// });


// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
// } from "react-native";
// import { useState } from "react";
// import { useMutation } from "convex/react";
// import { api } from "../convex/_generated/api";
// import {createHomeStyles} from "@/assets/style/style";
// import useTheme from "@/hooks/useTheme";



// type Props = {
//   onClose: () => void;
// };

// export default function PostModal({ onClose }: Props) {
//   const createPost = useMutation(api.posts.createPost);

//   const [newPost, setNewPost] = useState("");
//   const [newImage, setNewImage] = useState("");

//   const handleAddPost = async () => {
//     if (!newPost) return;

//     await createPost({
//       user: "Você",
//       content: newPost,
//       image: newImage,
//     });

//     setNewPost("");
//     setNewImage("");
//     onClose();
//   };

//   return (
//     <View style={styles.modalContainer}>
//       <Text style={styles.modalTitle}>Novo Post</Text>

//       <TextInput
//         placeholder="O que você está pensando?"
//         value={newPost}
//         onChangeText={setNewPost}
//         style={styles.input}
//       />

//       <TextInput
//         placeholder="URL da imagem (opcional)"
//         value={newImage}
//         onChangeText={setNewImage}
//         style={styles.input}
//       />

//       <TouchableOpacity style={styles.button} onPress={handleAddPost}>
//         <Text style={styles.buttonText}>Publicar</Text>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={onClose}>
//         <Text style={styles.cancel}>Cancelar</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// import { mutation, query } from "./_generated/server";
// import { v } from "convex/values";

// export const getPosts = query({
//   handler: async (ctx) => {
//     return await ctx.db.query("posts").order("desc").collect();
//   },
// });

// export const createPost = mutation({
//   args: {
//     user: v.string(),
//     content: v.string(),
//     image: v.string(),
//   },
//   handler: async (ctx, args) => {
//     return await ctx.db.insert("posts", args);
//   },
// });


// //import { mutation, query } from "./_generated/server";
// // import { v } from "convex/values";

// // export const getPosts = query({
// //   handler: async (ctx) => {
// //     return await ctx.db
// //       .query("posts")
// //       .withIndex("by_creation")
// //       .order("desc")
// //       .collect();
// //   },
// // });

// // export const addPost = mutation({
// //   args: {
// //     user: v.string(),
// //     content: v.string(),
// //     image: v.string(),
// //   },
// //   handler: async (ctx, args) => {
// //     return await ctx.db.insert("posts", args);
// //   },
// // });