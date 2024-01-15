import { APIGatewayProxyHandler } from 'aws-lambda';
import { z } from 'zod';

import { CountWordsByCategoryUseCase } from '../use-cases/text-processing/count-words-by-category.use-case';
import { getSuccessfulResponse, getValidBody, handlerErrorWrapper } from '../utils/lambda-handler-utils';

const RequestBodySchema = z.object({
  text: z.string(),
});

export const handler: APIGatewayProxyHandler = handlerErrorWrapper(async (event) => {
  const { text } = getValidBody(event.body, RequestBodySchema);
  const wordCounts = new CountWordsByCategoryUseCase().execute({ text });

  return getSuccessfulResponse(JSON.stringify(wordCounts));
});
