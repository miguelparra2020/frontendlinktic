import express, { Request, Response } from 'express';

import productRouter from './routes/products'

const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Ruta principal
app.get('/', (_req: Request, res: Response) => {
  res.send('¡Hola Mundo!');
});

// Ruta principal
app.get('/ping', (_req: Request, res: Response) => {
    res.send('Pong!');
});

app.use('/api/products', productRouter)

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
