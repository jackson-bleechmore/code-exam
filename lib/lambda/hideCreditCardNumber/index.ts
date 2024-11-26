import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { hideCreditCardNumber } from "./hideCreditCardNumber";
import { getLogger } from "../../shared/logger";
import {
  createResponseInternalError,
  createResponseInvalidInput,
  createResponseSuccess,
} from "../../shared/responses";

const logger = getLogger();

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  const loggingMetadata = {
    requestId: event?.requestContext?.requestId,
    handler: "hideCreditCardNumber",
  };
  logger.debug("hideCreditCardNumber handler called", { ...loggingMetadata });
  let creditCardNumber: string;
  try {
    const body = JSON.parse(event.body || "{}");
    creditCardNumber = body.creditCardNumber;
    if (!creditCardNumber || typeof creditCardNumber !== "string") {
      logger.debug("Invalid Input", { ...loggingMetadata });
      return createResponseInvalidInput();
    }
  } catch (error) {
    logger.debug("Invalid Input", { ...loggingMetadata });
    return createResponseInvalidInput();
  }
  try {
    const hiddenCreditCardNumber = hideCreditCardNumber(creditCardNumber);
    return createResponseSuccess(hiddenCreditCardNumber);
  } catch (error) {
    logger.error("Internal Server Error", { ...loggingMetadata, error });
    return createResponseInternalError();
  }
}
