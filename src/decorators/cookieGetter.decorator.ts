import { ExecutionContext, UnauthorizedException, createParamDecorator } from "@nestjs/common";

export const cookiGetter = createParamDecorator(
    async (data: string, context: ExecutionContext) => {
        const request = context.switchToHttp().getRequest();

        const refresh_token = request.cookies[data];
        if(!refresh_token){
            throw new UnauthorizedException('Unauthotion refresh token')
        }
        return refresh_token;
    }
)