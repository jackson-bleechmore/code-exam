import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { moveZerosToEnd } from './moveZerosToEnd'

export const handler = async (
    event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
    try {
        const numsQueryString = event.queryStringParameters?.nums

        if (!numsQueryString) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: 'Invalid Input' }),
            }
        }

        let nums

        try {
            nums = JSON.parse(numsQueryString)
        } catch (error) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: 'Invalid Input' }),
            }
        }

        const zerosMovedToEnd = moveZerosToEnd(nums)

        return {
            statusCode: 200,
            body: JSON.stringify({ data: zerosMovedToEnd }),
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal Server Error' }),
        }
    }
}
