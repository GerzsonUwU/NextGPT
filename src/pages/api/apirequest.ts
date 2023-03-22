// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { Configuration, OpenAIApi } = require("openai");
import axios from 'axios';


const api_key = process.env.DEVELOPMENT_ENV_VARIABLE_OPENAI;

async function generateJwtToken() {
  const response = await axios({
    url: 'https://api.openai.com/v1/json/webtokens',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${api_key}`,
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Methods": "DELETE, GET, HEAD, OPTIONS, PATCH, POST, PUT",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With"
    },
    data: {
      "model": "gpt-4",
      "permissions": ["completions:create"]
    },
  });

  return response.data.token;
}

export default async function openai(){
  const jwtToken = await generateJwtToken();

  const configuration = new Configuration({
    apiKey: jwtToken,
  });
  const openai = new OpenAIApi(configuration);
  
  const completion = await openai.createChatCompletion({
    model: "gpt-4",
    messages: [{role: "user", content: "Hello world"}],
  });
  console.log(completion.data.choices[0].message);
}


