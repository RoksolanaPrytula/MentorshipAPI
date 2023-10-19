const axios = require("axios");

const sendRequest = async (_url, data = null, method = "get") => {
  try {
    const response = await axios({
      method,
      url: `https://petstore.swagger.io/v2/${_url}`, // Use backticks for template literals
      headers: { 'Content-Type': 'application/json' }, // Proper headers object
      data: data,
    });
    return {
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    return {
      status: error.response.status,
    };
  }
};

module.exports = {
  sendRequest,
};
