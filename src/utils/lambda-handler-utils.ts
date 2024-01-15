import { APIGatewayProxyHandler } from 'aws-lambda';
import { APIGatewayEventDefaultAuthorizerContext } from 'aws-lambda/common/api-gateway';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda/trigger/api-gateway-proxy';
import { ZodSchema } from 'zod';

import { HttpException } from './http-exception';

export function getValidBody<T>(eventBody: APIGatewayProxyEvent['body'], schema: ZodSchema<T>): T | never {
  if (!eventBody) {
    throw new HttpException(400, 'Body must be provided');
  }

  const parsedBody = JSON.parse(eventBody);
  const result = schema.safeParse(parsedBody);

  if (result.success) {
    return parsedBody as T;
  }

  throw new HttpException(400, JSON.stringify(result.error));
}

export function getSuccessfulResponse(body: string): APIGatewayProxyResult {
  return {
    statusCode: 200,
    body,
  };
}

export function handlerErrorWrapper(
  handler: (
    event: APIGatewayProxyEvent,
    context: APIGatewayEventDefaultAuthorizerContext,
  ) => Promise<APIGatewayProxyResult>,
): APIGatewayProxyHandler {
  return async (event, context) => {
    try {
      return await handler(event, context);
    } catch (error) {
      console.error('Error occurred:', error);

      return {
        statusCode: error.statusCode || 500,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: error.message || 'Internal server error',
        }),
      };
    }
  };
}
