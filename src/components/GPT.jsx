import styled from 'styled-components';
import { useCallback, useEffect } from 'react';
import { Configuration, OpenAIApi } from 'openai';

class GPT extends React.Component {
  configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });

  fetchOpenApi = async () => {
    try {
      const response = await new OpenAIApi(this.configuration).createCompletion({
        model: 'gpt-3.5-turbo-0613',
        prompt: 'Say this is a test',
        temperature: 0,
        max_tokens: 7,
      });

      const { data } = response;
      console.log(data);
    } catch (error) {
      console.error('Error fetching data from OpenAI API:', error);
    }
  };

  componentDidMount() {
    this.fetchOpenApi();
  }

  render() {
    return <div className="App">openai</div>;
  }
}

export default GPT;
