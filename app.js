const fastify = require('fastify')({logger: true})
  
fastify.get('/', async (request, reply) => {
    reply.status(200).send ({ message: 'Welcome to Fastify' })
    })
  
fastify.listen({
  port: 0,
  host: '0.0.0.0',
  exclusive: false,
  readableAll: false,
  writableAll: false,
  ipv6Only: false
}, (err) => {})
