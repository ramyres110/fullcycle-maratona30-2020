'use strict';

const somaResponse = (status, body) => {
  return {
    statusCode: status,
    body: JSON.stringify(body),
  };
}

module.exports.soma = async event => {
  if (!event.queryStringParameters) {
    return somaResponse(401, { resultado: 0 });
  }

  const a = Number(event.queryStringParameters.a || 0);
  const b = Number(event.queryStringParameters.b || 0);
  return somaResponse(200, { resultado: a + b });
};
