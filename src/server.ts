import express, {Request, Response, json} from 'express';
const app = express();
const PORT = process.env.PORT || 3000;
import {ConnectionPostegress} from './Services/connectionPostegress'
import { UserController }  from './Controllers/UserController'

const userController = new UserController();

app.use(express.json());
app.get('/', (req : Request , res : Response) => {
  res.send('Hello World!');

});


app.get('/usuarios', async (req  , res : Response) => {
  let usuarios = userController.ListarUsuarios();
  res.send(usuarios);
});

app.post('/createusuario', async (req : Request , res : Response) => {
  let {email, name} = req.body;
  let response = await userController.CadastrarUsuario(email, name);
    res.send(JSON.stringify(response));
  
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log('Tentando conectar com o banco de dados...');
  ConnectionPostegress();

});
module.exports = app;