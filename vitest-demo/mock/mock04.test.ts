import { afterAll, afterEach, beforeAll } from 'vitest'
import { setupServer } from 'msw/node'
import { graphql, rest } from 'msw'

const posts = [
    {
        userId: 1,
        id: 1,
        title: 'first post title',
        body: 'first post body',
    },
    // ...
]

export const restHandlers = [
    rest.get('https://rest-endpoint.example/path/to/posts', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(posts))
    }),
]

const graphqlHandlers = [
    graphql.query(
        'https://graphql-endpoint.example/api/v1/posts',
        (req, res, ctx) => {
            return res(ctx.data(posts))
        }
    ),
]

const server = setupServer(...restHandlers, ...graphqlHandlers)

// 在所有测试之前启动服务器
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

// 所有测试后关闭服务器
afterAll(() => server.close())

// 每次测试后重置处理程序 `对测试隔离很重要`
afterEach(() => server.resetHandlers())