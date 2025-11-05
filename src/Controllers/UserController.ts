import {Request, Response} from 'express';
import { UserAppService } from '../AppServices/UserAppService';
import { User } from '../Entitys/User';
import { UserValidator } from '../Validators/UserValidator';


export class UserController {
  private userAppService = new UserAppService();

  

  async ListarUsuarios() {
    let usuarios = this.userAppService.ListarUsuarios();
    return usuarios;
  }

  async CadastrarUsuario(email : string, name : string ) {
    let user = new User(email, name);

    const validationErrors = UserValidator.validateUser(user);
      if (Object.keys(validationErrors).length > 0) 
          return validationErrors; 
    
    let usuarioExiste = await this.userAppService.GetUsuario(email)

    if(usuarioExiste)
      return "Email já cadastrado no banco de dados";

    let usuarioCadastrado = await this.userAppService.CadastrarUsuario(user);

    if(usuarioCadastrado) 
      return "Usuário cadastrado com sucesso!";
  
  }
}