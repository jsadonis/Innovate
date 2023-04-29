import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { User } from "src/typeorm/user.entity";

export const CurrentUser = createParamDecorator(
    (data: User, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        return request.user || null;
    }
)