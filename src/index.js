import server from './server.js';

const { PORT: port } = process.env;

server.listen({ port }, () => {
  console.log(`🚀 Server ready at ${port}`);
});
