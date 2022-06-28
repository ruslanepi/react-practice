import { useState } from 'react';
import data from './data';
import Question from './Question';

function App() {
  const [questions, setQuestion] = useState(data);

  return (
    <main>
      <div className="container">
        <h4>Q & A</h4>
        <div className="info">
          {questions.map((question) => {
            return <Question key={question.id} data={question} />;
          })}
        </div>
      </div>
    </main>
  );
}

export default App;
