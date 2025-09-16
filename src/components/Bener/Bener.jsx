import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="두산위브센트럴파크강화-benerimage"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <div
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </div>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

const contents = (text, isLoaded) => {
    if (text === '두산위브' || text === '홍보영상' || text === '체크포인트' || text === '당첨자서류안내' || text === '두산위브센트럴파크강화') {
      return (
        <>
          <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
            하루의 무게를 내려놓는 순간, 본연으로 돌아가는 프리미엄.
          </div>
          <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
            강화읍 중심 생활권, 강화대교·초지대교로 연결되는 광역 접근성.
          </div>
          <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
            두산건설 브랜드, 두산위브센트럴파크강화와 함께합니다.
          </div>
        </>
      );
    } else if (text === '사업개요' || text === '세대안내' || text === '인테리어' || text === '청약안내' || text === '모집공고안내' || text === '인지세납부안내') {
      return (
        <>
          <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
            강화의 새 출발, 두산위브센트럴파크강화.
          </div>
          <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
            강화대교·초지대교와 계양–강화 고속도로(추진)로 더 가까워지는 생활권.
          </div>
          <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
            위브 브랜드와 함께 높여가는 일상의 가치.
          </div>
          <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
            두산위브센트럴파크강화
          </div>
        </>
      );
    } else if (text === '입지환경'|| text === '프리미엄') {
      return (
        <>
          <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
            교통·생활·자연 모두 가까운, 강화 핵심 입지.
          </div>
          <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
            터미널·풍물시장·하나로마트·의료 인프라 인접, 관광·레저 호재까지 두산위브센트럴파크강화에서 누리세요.
          </div>
        </>
      );
    } else if (text === '단지안내') {
      return (
        <>
          <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
            주거의 품격과 가치를 높이는 특화설계.
          </div>
          <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
            지상 차 없는 공원형 단지와 편리한 생활 동선.
          </div>
          <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
            두산위브센트럴파크강화, 강화읍 중심에서 찾아옵니다.
          </div>
        </>
      );
    }
  };
  
