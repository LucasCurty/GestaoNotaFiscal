import { PrismaClient } from "../generated/prisma/client";
import { User } from "../Entitys/User";
import { UserValidator } from "../Validators/UserValidator";



export class UserAppService {
  private  Prisma = new PrismaClient();


  async ListarUsuarios() {
    const usuarios = await this.Prisma.user.findMany();
    return usuarios;
  }

  async GetUsuario(email: string){
    const usuario = await this.Prisma.user.findUnique({
      where: { email },
    });
    return usuario;

  }
  
  async  CadastrarUsuario(user: User ) {
    let usuarioExiste = await this.Prisma.user.findUnique({
      where: { email: user.Email },
    });
    
    if(usuarioExiste)
      return "Email já cadastrado no banco de dados"
    
    let usuarioBD = await this.Prisma.user.create({
      data: { email: user.Email, name: user.Nome },
    });
    
    if(usuarioBD)
      return usuarioBD;
  }
}