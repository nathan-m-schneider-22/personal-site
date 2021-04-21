import React from 'react';
import '../styles/questions.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      loading: false,
      response: '',
    };
  }

  updateQuery = (e) => {
    this.setState({ query: e.target.value });
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.sendQuery(this.state.query);
    }
  }

  sendQuery = (query) => {
    if (!this.state.loading) {
      this.setState({ loading: true, query: '' });
      const url = 'http://localhost:9090/question';
      const header = { 'Content-Type': 'application/json' };
      const data = { query };
      axios.post(url, data, header).then((res) => {
        console.log(res);
        const { response } = res.data;
        this.setState({ loading: false, response });
      }).catch((e) => {
        console.log(e);
        this.setState({ loading: false, response: 'Sorry, I don\'t know how to answer that.' });
      });
    }
  }

  render() {
    return (
      <div className="questions-container">
        <div className="questions-blurb">
          <h1>Ask me a question!</h1>
          <h3><a label="GPT-3" href="https://openai.com/blog/gpt-3-apps/">Openai&apos;s GPT-3 </a> is a powerful text-generation and semantic search algorithm.
            I&apos;ve fed the model a set of facts about my life, work and hobbies.
            You can ask me questions in pretty much any format, and the model will isloate the purpose of your question,
            find the relevant facts about me, and compile a grammatically correct response. <br />
            NOTE: For questions that the model cannot deduce from the information I have provided, it will refer to
            its training data, which can include sensitive or offensive reponses, depending on the question.
            Please use responsibly. To view exactly what information I provided, see&nbsp;
            <Link to="/facts/">
              here
            </Link>
          </h3>
        </div>
        <div className="prompt-container">
          <input className="prompt"
            type="text"
            value={this.state.query}
            onKeyDown={this.handleKeyPress}
            onChange={this.updateQuery}
          />
          <button className="ask-button"
            type="button"
            onClick={() => this.sendQuery(this.state.query)}
          >
            {this.state.loading ? 'Loading' : 'Ask'}
          </button>
        </div>
        <div className="response-container">
          <h2>{this.state.response}</h2>
        </div>
      </div>
    );
  }
}

export default Projects;
