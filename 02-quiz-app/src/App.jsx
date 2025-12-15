import QuizOverview from "./components/QuizOverview";

function App() {

  return (
    <>
      <header>
        <img src="quiz-logo.png" alt="quiz logo" />
        <h1>ReactQuiz</h1>
      </header>
      <div id="quiz">
        <span id="question-overview">
          <span id="question">
            <QuizOverview />
          </span>
        </span>
      </div>
    </>
  );
}
export default App;
