import React from "react";
import Button from "react-bootstrap/Button";
const { Kakao } = window;

const KakaoShareButton = () => {
  const url = "https://catmbtiapp.netlify.app/";
  const resultUrl = window.location.href;

  console.log("ddd", resultUrl, url);

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
        description:
          "예비 집사님이 고양이를 키운다면 가장 잘맞는 고양이는 아비시니안입니다",
        imageUrl:
          "https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg",
        link: {
          mobileWebUrl: "https://developers.kakao.com",
          androidExecutionParams: "test",
        },
      },
      buttons: [
        {
          title: "나도 테스트 하러가기",
          link: {
            mobileWebUrl: url,
          },
        },
      ],
    });
  };
  return (
    <Button
      onClick={shareKakao}
      style={{ fontFamily: "SimKyungha", width: 170, marginLeft: "10px" }}
    >
      카카오톡 공유하기
    </Button>
  );
};
export default KakaoShareButton;
