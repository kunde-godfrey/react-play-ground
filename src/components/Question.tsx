import { useState } from "react";
interface AnswerProps {
  id: number;
  title: string;
  content: string;
  score: number;
}
export interface response {
  id: number;
  answer: AnswerProps;
}
export interface Props {
  id: number;
  body: string;
  answers: AnswerProps[];
  onChange: (answer: response) => void;
}
// const question = {
//   id: 1,
//   body: "How How often do you clean your teeth?",
//   answers: [
//     { id: 1, title: "A", content: "Twice a day or more", score: 0 },
//     { id: 2, title: "B", content: "Once a day", score: 1 },
//     { id: 3, title: "C", content: "Less than once a day", score: 2 },
//     { id: 4, title: "D", content: "Never", score: 3 },
//   ],
// };

const Question = ({ body, answers, id, onChange }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div className="w-75">
      <p>Q. {body}</p>
      <ul key={id} className="list-group  lign-items-center mb-3 bg-secondary">
        {answers.map((answer, index) => (
          <li
            className="list-group-item text-white bg-secondary"
            key={answer.id}
          >
            <input
              type="radio"
              value={answer.id}
              checked={index === selectedIndex ? true : false}
              className="mx-2"
              onChange={() => {
                setSelectedIndex(index);
                onChange({ id: id, answer: answer });
              }}
            />
            {answer.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
