import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { twoSumTwo } from "./twoSumTwo";
import {
  createResponseInvalidInput,
  createResponseSuccess,
} from "../../shared/responses";
import { getLogger } from "../../shared/logger";

const logger = getLogger();

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const loggingMetadata = {
    requestId: event?.requestContext?.requestId,
    handler: "twoSumTwo",
  };
  logger.debug("twoSumTwo handler called", { ...loggingMetadata });

  const numsQueryString = event.queryStringParameters?.nums;
  const targetQueryString = event.queryStringParameters?.target;
  if (!numsQueryString || !targetQueryString) {
    logger.debug("Invalid Input", { ...loggingMetadata });
    return createResponseInvalidInput();
  }

  let nums;
  let target;
  logger.info("Parsing input", { ...loggingMetadata });
  try {
    nums = JSON.parse(numsQueryString);
    target = Number(targetQueryString);
  } catch (error) {
    logger.debug("Invalid Input", { ...loggingMetadata, error });
    return createResponseInvalidInput();
  }

  logger.info("Calculating result", { ...loggingMetadata });
  try {
    const result = twoSumTwo(nums, target);
    return createResponseSuccess(result);
  } catch (error) {
    logger.error("Internal Server Error", { ...loggingMetadata, error });
    return createResponseInvalidInput();
  }
};
