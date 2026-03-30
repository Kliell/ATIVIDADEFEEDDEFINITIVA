// import { defineSchema, defineTable } from "convex/server";
// import { v } from "convex/values";

// export default defineSchema({
//   posts: defineTable({
//     user: v.string(),
//     content: v.string(),
//     image: v.string(),
//   }),
// });


import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  posts: defineTable({
    user: v.string(),
    content: v.string(),
    image: v.string(),
  }).index("by_creation", ["_creationTime"]),
});

