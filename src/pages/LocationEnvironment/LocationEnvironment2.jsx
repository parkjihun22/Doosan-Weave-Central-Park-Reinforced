import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import Ready from "../../components/Ready/Ready";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";
import { Helmet } from "react-helmet-async";
// import page1 from "../../assets/LocationEnvironment/LocationEnvironment2/page1.jpg";


const LocationEnvironment1 = () => {
  const menuContents = [
    // { title: "입지 안내영상", url: "/FloorPlan/videos" },
    { title: "입지안내", url: "/LocationEnvironment/intro" },
    { title: "프리미엄", url: "/LocationEnvironment/primium" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  // 화면 스크롤이 탑이 아니면 isScroll 값 true로 변환
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Helmet>
        <title>두산위브 센트럴파크 강화- 프리미엄</title>
        <meta
          name="description"
          content="두산위브 센트럴파크 강화 프리미엄을 확인하세요. 1,325세대 브랜드 대단지, 지상 차 없는 공원형 단지, 강화대교·초지대교와 계양–강화 고속도로(추진) 접근성, 커뮤니티 특화, 고려산·석모도 자연환경 등 핵심 가치를 안내합니다."
        />
        <link rel="canonical" href="http://www.sinbiapt.co.kr/LocationEnvironment/primium" />
        <meta name="robots" content="index,follow" />
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="프리미엄" />

      <MenuBar contents={menuContents} />
      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>
        두산위브 센트럴파크 강화- 프리미엄
      </h1>
      <p className={styles.screenReaderOnly}>
        두산위브 센트럴파크 강화만의 프리미엄을 만나보세요. 공원형 단지 설계와
        브랜드 커뮤니티, 강화대교·초지대교 및 계양–강화 고속도로(추진)로 확장되는
        접근성, 고려산·석모도 등 자연환경을 더해 일상의 품격을 높입니다.
      </p>

      <div className={styles.textBox}>
        <div>강화의 새로운 기준 위에</div>
        <div>두산위브 센트럴파크 강화의 프리미엄을 누리세요.</div>
      </div>


      {/* <img
        src={page1}
        className={styles.image3}
        alt="두산위브센트럴파크강화-image1"
      /> */}
      <Ready/>
      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
