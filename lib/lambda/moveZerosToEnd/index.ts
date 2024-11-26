import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { moveZerosToEnd } from "./moveZerosToEnd";
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
    handler: "moveZerosToEnd",
  };

  logger.debug("moveZerosToEnd handler called", { ...loggingMetadata });
  const numsQueryString = event.queryStringParameters?.nums;
  if (!numsQueryString) {
    logger.debug("Invalid Input", { ...loggingMetadata });
    return createResponseInvalidInput();
  }

  let nums;
  logger.info("Parsing input", { ...loggingMetadata });
  try {
    nums = JSON.parse(numsQueryString);
  } catch (error) {
    logger.debug("Invalid Input", { ...loggingMetadata, error });
    return createResponseInvalidInput();
  }

  logger.info("Calculating result", { ...loggingMetadata });
  try {
    const zerosMovedToEnd = moveZerosToEnd(nums);
    return createResponseSuccess(zerosMovedToEnd);
  } catch (error) {
    logger.error("Internal Server Error", { ...loggingMetadata, error });
    return createResponseInvalidInput();
  }
};
