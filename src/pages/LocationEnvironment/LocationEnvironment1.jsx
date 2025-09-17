import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";

const LocationSection = [
  {
    img: section2Image1,
    titleText: "강화 도심 개발·관광 호재 중심지<br />탄탄한 미래가치 입지",
    contentText:
      "강화읍 중심 생활권·공공·상업 인프라 확충 기대<br />계양–강화 고속도로(추진) 등 교통 개선 모멘텀",
  },
  {
    img: section2Image2,
    titleText: "의료 인프라 프리미엄<br />안심 건강케어 생활권",
    contentText:
      "지역 종합병원·보건소·의원 밀집<br />건강검진·응급의료 접근성 우수",
  },
  {
    img: section2Image3,
    titleText: "대교 + 광역도로망 호재<br />서울·수도권 접근성 확대",
    contentText:
      "강화대교·초지대교로 김포·서울 진출입 수월<br />계양–강화 고속도로(추진)·순환도로 연계 기대",
  },
  {
    img: section2Image4,
    titleText: "생활 인프라 접근성<br />원스톱 도심생활 기반",
    contentText:
      "강화터미널·풍물시장·하나로마트 인접<br />관공서·금융·카페거리 등 생활 편의 밀집",
  },
  {
    img: section2Image5,
    titleText: "브랜드 대단지 스케일<br />1,325세대 두산위브",
    contentText:
      "지하 2층~지상 25층, 21개동 규모 공원형 단지<br />피트니스·실내골프·작은도서관 등 커뮤니티 특화",
  },
  {
    img: section2Image6,
    titleText: "자연·휴식 인프라<br />여유로운 힐링 환경",
    contentText:
      "고려산·석모도·해변·갯벌 등 풍부한 자연<br />산책·레저·관광을 누리는 주말 라이프",
  },
];




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
          {/* 페이지별 메타: title/description/og/canonical 만 관리 */}
          <title>두산위브 센트럴파크 강화 - 입지환경</title>
          <meta
            name="description"
            content="강화읍 중심 입지, 두산위브 센트럴파크 강화의 입지환경을 확인하세요. 강화대교·초지대교, 계양–강화 고속도로(추진) 등 광역 교통망과 터미널·시장·하나로마트 등 생활 인프라, 고려산·석모도 등 자연환경까지."
          />
          <meta name="robots" content="index,follow" />
          <link rel="canonical" href="https://sinbiapt.co.krLocationEnvironment/intro" />

          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="두산위브 센트럴파크 강화" />
          <meta property="og:title" content="두산위브 센트럴파크 강화 - 입지환경" />
          <meta
            property="og:description"
            content="강화 중심 입지: 강화대교·초지대교, 계양–강화 고속도로(추진) 등 교통망과 도심 생활 인프라, 고려산·석모도 자연환경을 누리는 두산위브 센트럴파크 강화."
          />
          <meta property="og:url" content="https://sinbiapt.co.krLocationEnvironment/intro" />
          <meta property="og:image" content="https://sinbiapt.co.krimg/og/location.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="두산위브 센트럴파크 강화 - 입지환경" />
          <meta
            name="twitter:description"
            content="강화대교·초지대교, 계양–강화 고속도로(추진)로 확장되는 접근성, 터미널·시장·하나로마트 등 생활 인프라, 고려산·석모도 등 자연환경까지 갖춘 입지."
          />
          <meta name="twitter:image" content="https://sinbiapt.co.krimg/og/location.jpg" />
          <meta name="twitter:url" content="https://sinbiapt.co.krLocationEnvironment/intro" />

          {/* JSON-LD (대표 이미지/브레드크럼 포함) */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "두산위브 센트럴파크 강화 - 입지환경",
              "url": "https://sinbiapt.co.krLocationEnvironment/intro",
              "description":
                "강화읍 중심 입지, 강화대교·초지대교 및 계양–강화 고속도로(추진) 교통망, 도심 생활 인프라와 고려산·석모도 등 자연환경을 갖춘 두산위브 센트럴파크 강화의 입지환경.",
              "primaryImageOfPage": {
                "@type": "ImageObject",
                "contentUrl": "https://sinbiapt.co.krimg/og/location.jpg",
                "width": 1200,
                "height": 630
              },
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://sinbiapt.co.kr" },
                  { "@type": "ListItem", "position": 2, "name": "입지환경", "item": "https://sinbiapt.co.krLocationEnvironment/intro" }
                ]
              }
            })}
          </script>
        </Helmet>

        <Header isChanged={isScroll} />
        <FixIcon />

        <Bener title="입지환경" />

        <MenuBar contents={menuContents} />
        {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
        <h1 className={styles.screenReaderOnly}>
          두산위브 센트럴파크 강화 - 입지안내
        </h1>
        <p className={styles.screenReaderOnly}>
          두산위브 센트럴파크 강화의 입지 정보를 확인하세요. 강화대교·초지대교와
          계양–강화 고속도로(추진)로 확장되는 광역 교통망, 강화터미널·풍물시장·하나로마트
          등 생활 인프라, 고려산·석모도 등 자연환경을 두루 갖춘 강화 중심 생활권입니다.
        </p>

        <div className={styles.textBox}>
          <div>갈수록 편리해질 강화</div>
          <div>살수록 높아질 두산위브</div>
          <div>도시를 압도할 자부심, 두산위브 센트럴파크 강화</div>
        </div>


      <img
        src={page1}
        className={styles.image2}
        alt="두산위브센트럴파크강화입지환경-image1"
      />

      <div className={styles.section2}>
        {LocationSection.map((value, idx) => (
          <LocationSectionBox
            image={value.img}
            title={value.titleText}
            text={value.contentText}
          />
        ))}
      </div>

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          ※본 홍보물의 내용과 지역도는 소비자의 이해를 돕기 위한 것으로, 개발 예정•계획 및 교통, 학교 계획 등에 관한 사항은 해당 기관의 아래 자료를 토대로 제작되었습니다. 사업계획 및 일정은 개발계획별 사업주체에 의해 변경될 수 있으며, 두산위브센트럴파크강화사업주체 및 시공사와 무관합니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
