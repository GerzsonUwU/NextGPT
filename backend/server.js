const { Configuration, OpenAIApi } = require("openai");
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const api = process.env.OPEN_AI;
const port = process.env.PORT || 6969;

app.use(cors());

const configuration = new Configuration({
    apiKey: api,
});

app.get('/api/openai', async (req, res) => {
  try {
      const openai = new OpenAIApi(configuration);
      
      const completion = await openai.createChatCompletion({
        model: "gpt-4",
        messages: [{role: "user", content: "Hello world"}],
      });
      console.log(completion.data.choices[0].message);
        res.status(200).json({ message: completion.data.choices[0].message });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.listen(6969, () => {
  console.log('Server listening on port: ', port);
});