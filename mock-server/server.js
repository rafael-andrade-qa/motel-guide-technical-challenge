import jsonServer from 'json-server';

const server = jsonServer.create();
const router = jsonServer.router('mock-server/db.json');
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);

server.use((req, res, next) => {
  if (req.method === 'POST' && req.path === '/users') {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({
        error: 'Campos obrigatórios ausentes: nome e email são necessários.',
      });
    }
  }

  if (req.method === 'GET' && req.path === '/users/server-error') {
    return res.status(500).json({
      message: 'Erro interno no servidor.',
    });
  }

  next();
});

server.use(middlewares);
server.use(router);

server.listen(3001, () => {
  // eslint-disable-next-line no-console
  console.log('JSON Server is running on http://localhost:3001');
});
