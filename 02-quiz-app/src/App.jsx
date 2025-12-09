import Progress from "./components/Progress";
import QuizOverview from "./components/QuizOverview";
import { QuizContext } from "./store/QuizContext";

function App() {

  function handleCorrect() {
    
  }

  const valueCtx = {
    skipped: 0,
    correct: 0,
    incorrect: 0,
  };

  return (
    <QuizContext.Provider value={valueCtx}>
      <header>
        <img src="quiz-logo.png" alt="quiz logo" />
        <h1>ReactQuiz</h1>
      </header>
      <div id="quiz">
        <span id="question-overview">
          <span id="question">
            <Progress />
            <QuizOverview />
          </span>
        </span>
      </div>
    </QuizContext.Provider>
  );
}
export default App;
