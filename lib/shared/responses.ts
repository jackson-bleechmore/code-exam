export function createResponseInvalidInput() {
  return {
    statusCode: 400,
    body: JSON.stringify({ message: "Invalid Input" }),
  };
}

export function createResponseInternalError() {
  return {
    statusCode: 500,
    body: JSON.stringify({ message: "Internal Server Error" }),
  };
}

export function createResponseSuccess(data: any) {
  return {
    statusCode: 200,
    body: JSON.stringify({ data }),
  };
}
