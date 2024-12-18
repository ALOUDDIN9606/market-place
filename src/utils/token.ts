import { InternalServerErrorException } from "@nestjs/common"


export const generateToken = async (jwtService: any, payload: object) => {
    try {
        const [access_token, refresh_token] = await Promise.all([
            await jwtService.sign(payload, {
                secret: process.env.ACCESS_TOKEN_KEY,
                expiresIn: process.env.ACCESS_TOKEN_TIME
            }),
            await jwtService.sign(payload, {
                secret: process.env.REFRESH_TOKEN_KEY,
                expiresIn: process.env.REFRESH_TOKEN_TIME
            })
        ]);
        return { access_token , refresh_token }
    } catch (error) {
       throw new InternalServerErrorException(error)
    }
}