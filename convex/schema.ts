import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

export default defineSchema({
  todos: defineTable({
    completed: v.boolean(),
    title: v.string(),
    userId: v.string(),
  }),
})
