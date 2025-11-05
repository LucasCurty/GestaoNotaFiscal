import { User } from "../Entitys/User";

export interface ValidationResult {
    [field: string]: string;
}

export class UserValidator {
    
    public static validateUser(user: User): ValidationResult {
        const errors: ValidationResult = {};

        if (!user.Email || user.Email.trim() === '') {
            errors.Email = 'O email é obrigatório.';
        } 
        else if (!UserValidator.isValidEmail(user.Email)) {
            errors.Email = 'O email fornecido não é válido.';
        }
        
        if (!user.Nome || user.Nome.trim() === '') {
            errors.Nome = 'O nome é obrigatório.';
        }
        
        return errors; 
    }
    
    private static isValidEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}