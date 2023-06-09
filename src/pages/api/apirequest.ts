// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { Configuration, OpenAIApi } = require("openai");
import axios from 'axios';

export default async function openai() {
  const response = await axios({
    url: 'http://localhost:6969/api/openai',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.data;
}


