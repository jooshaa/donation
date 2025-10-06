import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";


@Injectable()
export class JwtAuthGuard implements CanActivate{
    constructor(private readonly jwtService: JwtService){}
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest()
        const authHeader = request.headers.authorization;
        if(!authHeader){
            throw new UnauthorizedException("not found Auth-headers")
        }
        const token = authHeader.split(" ")[1];
        if(!token){
            throw new UnauthorizedException("not found token")
        }
        let decodedToken : any;
        try{
            decodedToken = this.jwtService.verify(token)
        }
        catch(err){
            throw new Error(err.message)
        }
        request.user = decodedToken
        return true
    }
}     