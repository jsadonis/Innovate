import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import { Request, Response } from "express";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter{
    catch(exception: HttpException, host: ArgumentsHost) {
        console.log(exception.getResponse());
        console.log(exception.getStatus());
        console.log(exception);

        const context = host.switchToHttp();
        const request = context.getResponse<Request>();
        const  response = context.getResponse<Response>();


    response.send({
        status: exception.getStatus(),
        message: exception.getResponse(),

    });
    }
}