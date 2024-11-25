import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { hideCreditCardNumber } from "./hideCreditCardNumber";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  try {
    const body = JSON.parse(event.body || "{}");
    const creditCardNumber = body.creditCardNumber;

    if (!creditCardNumber || typeof creditCardNumber !== "string") {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Invalid Input" }),
      };
    }

    const hiddenCreditCardNumber = hideCreditCardNumber(creditCardNumber);

    return {
      statusCode: 200,
      body: JSON.stringify({ data: hiddenCreditCardNumber }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal Server Error" }),
    };
  }
}
