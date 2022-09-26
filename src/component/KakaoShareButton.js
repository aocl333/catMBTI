import React from "react";
import styled from "styled-components";
const { Kakao } = window;

const KakaoShareButton = ({ data }) => {
  const url = "https://catmbtiapp.netlify.app/";
  const resultUrl = window.location.href;

  React.useEffect(() => {
    Kakao.cleanup();
    Kakao.init("851303c8767894f22ccc146bae192caf");
    console.log(Kakao.isInitialized());
  }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "예비집사 판별기 결과",
        description: `예비 집사님이 고양이를 키운다면 가장 잘맞는 고양이는 ${data.name}입니다`,
        imageUrl: url + data.image,
        link: {
          mobileWebUrl: resultUrl,
          WebUrl: resultUrl,
        },
      },
      buttons: [
        {
          title: "나도 테스트 하러가기",
          link: {
            mobileWebUrl: url,
            WebUrl: url,
          },
        },
      ],
    });
  };
  return <Button onClick={shareKakao}>카카오톡 공유하기</Button>;
};

export default KakaoShareButton;

const Button = styled.div`
  background-color: #f4d635;
  color: #341d1d;
  padding: 20px 50px 17px;
  border-radius: 15px;
  font-size: 25px;
  cursor: pointer;
`;
