import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class BarespaceStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const hideCreditCardNumberLambda = new cdk.aws_lambda.Function(
      this,
      "hideCreditCardNumber",
      {
        runtime: cdk.aws_lambda.Runtime.NODEJS_20_X,
        handler: "index.handler",
        code: cdk.aws_lambda.Code.fromAsset("dist/hideCreditCardNumber"),
      }
    );

    const moveZerosToEndLambda = new cdk.aws_lambda.Function(
      this,
      "moveZerosToEnd",
      {
        runtime: cdk.aws_lambda.Runtime.NODEJS_20_X,
        handler: "index.handler",
        code: cdk.aws_lambda.Code.fromAsset("dist/moveZerosToEnd"),
      }
    );

    const twoSumTwoLambda = new cdk.aws_lambda.Function(this, "twoSumTwo", {
      runtime: cdk.aws_lambda.Runtime.NODEJS_20_X,
      handler: "index.handler",
      code: cdk.aws_lambda.Code.fromAsset("dist/twoSumTwo"),
    });

    const api = new cdk.aws_apigateway.RestApi(this, "barespace-api");
    const hideCreditCardNumberResource = api.root.addResource(
      "hide-credit-card-number"
    );
    const moveZerosToEndResource = api.root.addResource("move-zeros-to-end");
    const twoSumTwoResource = api.root.addResource("two-sum-two");

    const hideCreditCardNumberMethod = hideCreditCardNumberResource.addMethod(
      "POST",
      new cdk.aws_apigateway.LambdaIntegration(hideCreditCardNumberLambda)
    );
    moveZerosToEndResource.addMethod(
      "GET",
      new cdk.aws_apigateway.LambdaIntegration(moveZerosToEndLambda)
    );
    twoSumTwoResource.addMethod(
      "GET",
      new cdk.aws_apigateway.LambdaIntegration(twoSumTwoLambda)
    );
  }
}
