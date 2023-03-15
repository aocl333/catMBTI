import React from "react";
import styled from "styled-components";
import { ProgressBar } from "react-bootstrap";
import { createSearchParams, useNavigate } from "react-router-dom";
import { QuestionData } from "../assets/data/questiondata";

const Question = () => {
  const [questionNo, setQuestionNo] = React.useState(0);
  const [totalScore, setTotalScore] = React.useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ]);
  const navigate = useNavigate();

  const handleCLickButton = (no, type) => {
    const newScore = totalScore.map((s) =>
      s.id === type ? { id: s.id, score: s.score + no } : s
    );

    setTotalScore(newScore);

    //다음문제로 문제수 증가
    if (QuestionData.length !== questionNo + 1) {
      setQuestionNo(questionNo + 1);
    } else {
      //mbti도출
      const mbti = newScore.reduce(
        (acc, curr) =>
          acc +
          (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)),
        ""
      );
      //결과 페이지 이동
      navigate({
        pathname: "/result",
        search: `?${createSearchParams({
          mbti: mbti,
        })}`,
      });
    }
    // if (type === "EI") {
    //   //기존 스코어에 더할 값을 계산(기존의 값 + 배점)
    //   const addScore = totalScore[0].score + no;
    //   //새로운 객체
    //   const newObject = { id: "EI", score: addScore };
    //   //splice 통해 새로운 객체를 해당객체 자리에 넣어줌
    //   totalScore.splice(0, 1, newObject);
    // } else if (type === "SN") {
    //   const addScore = totalScore[1].score + no;
    //   const newObject = { id: "SN", score: addScore };
    //   totalScore.splice(1, 1, newObject);
    // } else if (type === "TF") {
    //   const addScore = totalScore[2].score + no;
    //   const newObject = { id: "SN", score: addScore };
    //   totalScore.splice(2, 1, newObject);
    // } else {
    //   const addScore = totalScore[3].score + no;
    //   const newObject = { id: "JP", score: addScore };
    //   totalScore.splice(3, 1, newObject);
    // }
  };

  return (
    <Wrapper>
      <ProgressBar striped now={(questionNo / QuestionData.length) * 100} />
      <Content>
        <Title>{QuestionData[questionNo].title}</Title>
        <ButttonGroup>
          <Button
            onClick={() => handleCLickButton(1, QuestionData[questionNo].type)}
          >
            {QuestionData[questionNo].answera}
          </Button>
          <Button
            onClick={() => handleCLickButton(0, QuestionData[questionNo].type)}
          >
            {QuestionData[questionNo].answerb}
          </Button>
        </ButttonGroup>
      </Content>
    </Wrapper>
  );
};

export default Question;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

const Content = styled.div`
  margin: 0 auto;
  max-width: 600px;
  padding: 40px 0 110px;
  text-align: center;
  @media (max-width: 760px) { 
    padding: 40px 15px 110px;
  }
`;

const Title = styled.div`
  font-size: 25pt;
  text-align: center;
  margin-top: 40px;
  @media (max-width: 760px) { 
    font-size: 18pt;
  }
`;

const ButttonGroup = styled.div`
  margin-top: 30px;
`;

const Button = styled.div`
  background-color: #f5f5f5;
  border: 0;
  border-radius: 15px;
  font-size: 22px;
  font-weight: 700;
  margin: 10px 0;
  padding: 20px 25px;
  width: 100%;
  cursor: pointer;
  @media (max-width: 760px) { 
    font-size: 14pt;
  }
`;
