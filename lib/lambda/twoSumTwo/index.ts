import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { twoSumTwo } from './twoSumTwo'

export const handler = async (
    event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
    try {
        const numsQueryString = event.queryStringParameters?.nums
        const targetQueryString = event.queryStringParameters?.target

        if (!numsQueryString || !targetQueryString) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: 'Invalid Input' }),
            }
        }

        let nums
        let target
        try {
            nums = JSON.parse(numsQueryString)
            target = Number(targetQueryString)
        } catch (error) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: 'Invalid Input' }),
            }
        }

        const result = twoSumTwo(nums, target)

        return {
            statusCode: 200,
            body: JSON.stringify({ data: result }),
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal Server Error' }),
        }
    }
}
