import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Timer from "./Timer";
import Footer from "./Footer";
import styles from "./Quiz.module.css";

const SECS_PER_QUESTIONS = 30;

const initialState = {
  questions: [],
  // loading error ready active finished
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.questions.length * SECS_PER_QUESTIONS,
      };
    case "newAnswer":
      const question = state.questions.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "restart":
      return {
        ...initialState,
        questions: state.questions,
        status: "ready",
        highscore: state.highscore,
      };
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };

    default:
      throw new Error("Action unknown");
  }
}

function Quiz() {
  const [
    { secondsRemaining, questions, status, index, answer, points, highscore },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(function () {
    fetch("data/questions.json")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  let NumLength;
  let maxPossiblePoints;
  if (status === "ready" || status === "active" || status === "finished") {
    NumLength = questions.questions.length;
    maxPossiblePoints = questions.questions.reduce(
      (prev, cur) => prev + cur.points,
      0
    );
  }

  return (
    <div className={styles.quizcontainer}>
      <Header />
      <Main main={styles.main}>
        {status === "loading" && <Loader />}
        {status === "error" && <Error error={styles.error} />}
        {status === "ready" && (
          <StartScreen
            btn={styles.btn}
            NumLength={NumLength}
            dispatch={dispatch}
            start={styles.start}
          />
        )}
        {status === "active" && (
          <>
            <Progress
              maxPossiblePoints={maxPossiblePoints}
              NumLength={NumLength}
              index={index}
              points={points}
              answer={answer}
              progress={styles.progress}
            />
            <Question
              question={questions.questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <Footer>
              <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
              <NextButton
                NumLength={NumLength}
                index={index}
                dispatch={dispatch}
                answer={answer}
                btn={styles.btn}
                btnui={styles.btnui}
                btnoption={styles.btnoption}
              />
            </Footer>
          </>
        )}
        {status === "finished" && (
          <FinishScreen
            highscore={highscore}
            points={points}
            maxPossiblePoints={maxPossiblePoints}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}

export default Quiz;
