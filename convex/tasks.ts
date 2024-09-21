import { v } from 'convex/values'
import { mutation, query } from './_generated/server'

export const createTask = mutation({
  args: {
    title: v.string(),
  },
  handler: async (ctx, args) => {
    const user = await ctx.auth.getUserIdentity()

    if (!user) {
      throw new Error('Usuário não autenticado')
    }

    await ctx.db.insert('todos', {
      title: args.title,
      completed: false,
      userId: user.subject,
    })
  },
})

export const getUserTasks = query({
  args: {},
  handler: async (ctx) => {
    const user = await ctx.auth.getUserIdentity()

    if (!user) {
      return []
    }

    const tasks = await ctx.db
      .query('todos')
      .filter((q) => q.eq(q.field('userId'), user.subject))
      .collect()

    return tasks
  },
})

export const toggleTask = mutation({
  args: {
    id: v.id('todos'),
  },
  handler: async (ctx, args) => {
    const user = await ctx.auth.getUserIdentity()
    if (!user) {
      throw new Error('Usuário não autenticado')
    }

    const task = await ctx.db.get(args.id)
    if (!task) {
      throw new Error('Tarefa não encontrada')
    }

    if (task.userId !== user.subject) {
      throw new Error('Não autorizado a modificar esta tarefa')
    }

    await ctx.db.patch(args.id, {
      completed: !task.completed,
    })
  },
})

export const deleteTask = mutation({
  args: {
    id: v.id('todos'),
  },
  handler: async (ctx, args) => {
    const user = await ctx.auth.getUserIdentity()
    if (!user) {
      throw new Error('Usuário não autenticado')
    }

    const task = await ctx.db.get(args.id)
    if (!task) {
      throw new Error('Tarefa não encontrada')
    }

    if (task.userId !== user.subject) {
      throw new Error('Não autorizado a deletar esta tarefa')
    }

    await ctx.db.delete(args.id)
  },
})
