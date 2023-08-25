import React, { useState } from "react";
import Question from "./Question";
import { questions, total } from "./data";
import { response as Res } from "./Question";
import { calculateScore, getAddvice } from "../funtions";
import Text from "./Text";
import Advice from "./Advice";
import Heading from "./Heading";

const QuestionList = () => {
  const [qs, setQuestions] = useState(questions);
  const [ans, setAns] = useState<Res[]>([]);
  const [error, setError] = useState(false);
  const [advice, setAdvice] = useState({
    title: "",
    message: "",
    special: "",
    general: "",
    footer: "",
  });

  const handlChangeOption = (res: Res) => {
    const filtered = ans.filter((r) => res.id !== r.id);
    setAns([...filtered, res]);
  };

  const handleSubmit = () => {
    if (ans.length !== qs.length) {
      setError(true);
      return;
    }
    setError(false);
    const score = calculateScore(ans);
    setAdvice(getAddvice(score, total));
  };
  return (
    <div className="container">
      <Heading title="OHQ Score">
        Please Take out few minutes of your time to answer the questions that
        follows.
      </Heading>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
      >
        {qs.map((question) => (
          <Question
            body={question.body}
            answers={question.answers}
            id={question.id}
            key={question.id}
            onChange={(answer) => handlChangeOption(answer)}
          />
        ))}
        {error && (
          <p className="text-danger">Please answer all the Questions</p>
        )}
        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
      <Text message={advice.general} />
      <Text message={advice.special} />
      {advice.title && <Advice title={advice.title} message={advice.message} />}
      <Text message={advice.footer} />
    </div>
  );
};

export default QuestionList;
