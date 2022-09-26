import React from "react";
//css-in-js
import styled from "styled-components";
// import PangImage from "../assets/ggompang.jpeg";
import { ResultData } from "../assets/data/resultdata";
import { useSearchParams, useNavigate } from "react-router-dom";
import KakaoShareButton from "../component/KakaoShareButton";

const Result = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get("mbti");
  //최종적으로 도출한 결과 객체
  const [resultData, setResultData] = React.useState({});

  React.useEffect(() => {
    const result = ResultData.find((s) => s.best === mbti);
    setResultData(result);
  }, [mbti]);

  return (
    <Wrapper>
      <Contents>
        <Title>결과보기</Title>
        <LogoImage>
          <img src={resultData.image} alt="고양이 사진"></img>
        </LogoImage>
        <Desc>
          예비 집사님과 찰떡궁합인 고양이는 {resultData.name}입니다.
          {resultData.desc}
        </Desc>
        <ButtonGroup>
          <Button onClick={() => navigate("/")}>테스트 다시하기</Button>
          <KakaoShareButton data={resultData} />
        </ButtonGroup>
      </Contents>
    </Wrapper>
  );
};

export default Result;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 600px;
  padding: 40px 0 110px;
  text-align: center;
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 30pt;
  margin-top: 40px;
`;

const LogoImage = styled.div`
  margin-top: 10px;
`;

const Desc = styled.div`
  font-size: 20pt;
  margin-top: 20px;
`;

const ButtonGroup = styled.div`
  margin-top: 30px;
`;

const Button = styled.div`
  background-color: var(--primary-color);
  color: #fff;
  padding: 20px 50px 17px;
  border-radius: 15px;
  font-size: 25px;
  margin-bottom: 10px;
  cursor: pointer;
`;
