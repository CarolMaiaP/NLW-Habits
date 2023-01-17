import Fastify from "fastify";

const app = Fastify()

app.get('/', () => {
  return 'Hello NLW'
})

app.listen({
  port: 3333,
})