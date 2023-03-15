import React from "react";
//css-in-js
import styled from "styled-components";
import PangImage from "../assets/cat/main.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClikckButton = () => {
    //useHistory
    navigate("/question");
  };

  return (
    <Wrapper>
      <Header>예비집사 mbti</Header>
      <Contents>
        <LogoImage>
          <img src={PangImage} alt="고양이 사진"></img>
        </LogoImage>
        <Desc>MBTI를 기반으로 하는 나랑 잘 맞는 고양이 찾기!</Desc>
        <Button onClick={handleClikckButton}>테스트 시작하기</Button>
      </Contents>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

const Header = styled.div`
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
  margin-bottom: 30px;
  @media (max-width: 760px) { 
    font-size: 35px;
  }
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LogoImage = styled.div`
  margin: 0 auto;
  text-align: center;
  img {
    width: 50%;
    @media (max-width: 760px) { 
      width: 75%;
    }
  }
  
`;

const Desc = styled.div`
  font-size: 20pt;
  margin-top: 20px;
  @media (max-width: 760px) { 
    font-size: 17pt;
    margin-top: 10px;
  }
`;

const Button = styled.div`
  background-color: var(--primary-color);
  color: #fff;
  border: 0;
  border-radius: 15px;
  font-size: 27px;
  font-weight: 700;
  margin-top: 50px;
  padding: 15px 50px 15px;
  cursor: pointer;
  @media (max-width: 760px) { 
    padding: 15px 50px;
    font-size: 15pt;
  }
`;
