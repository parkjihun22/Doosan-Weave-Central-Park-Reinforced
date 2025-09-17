import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./FloorPlan.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

const Emodel = () => {
  const menuContents = [
    { title: "1,2단지", key: "1,2단지" },
    { title: "3,5단지", key: "3,5단지" },
    // { title: "84A", key: "84A" },
    // { title: "84B", key: "84B" },
  ];

  const vrUrls = {
    "1,2단지": "https://www.hillstate.co.kr/upload/2024/07/20240719023756017530/tour.html",
    "3,5단지": "https://www.hillstate.co.kr/upload/2024/11/20241107065049013129/tour.html",
    // "84A": "https://www.prugio.com/hb/2025/onecluster/vr/84a.html",
    // "84B": "https://www.prugio.com/hb/2025/onecluster/vr/84b.html",
  };





  const [selectedType, setSelectedType] = useState("1,2단지");
  const { pathname } = useLocation();
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <Helmet>
        {/* 핵심 SEO 페이지: E-모델하우스 */}
        <title>두산위브 센트럴파크 강화 - E-모델하우스</title>
        <meta
          name="description"
          content="두산위브 센트럴파크 강화 E-모델하우스를 온라인에서 편리하게 둘러보세요. VR 가상 투어와 전용 59·72·84㎡ 세대별 평면도, 인테리어를 실감 나게 확인하실 수 있습니다."
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="http://www.sinbiapt.co.kr/FloorPlan/Emodel" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="두산위브 센트럴파크 강화" />
        <meta property="og:title" content="두산위브 센트럴파크 강화 - E-모델하우스" />
        <meta
          property="og:description"
          content="두산위브 센트럴파크 강화 E-모델하우스: VR 투어와 세대별 평면도·인테리어를 통해 실제 같은 공간을 체험하세요."
        />
        <meta property="og:url" content="http://www.sinbiapt.co.kr/FloorPlan/Emodel" />
        <meta property="og:image" content="http://www.sinbiapt.co.kr/img/og/emodel.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="두산위브 센트럴파크 강화 - E-모델하우스" />
        <meta
          name="twitter:description"
          content="두산위브 센트럴파크 강화 E-모델하우스를 온라인으로 체험하세요. VR 투어와 전용 59·72·84㎡ 평면도, 인테리어를 한눈에."
        />
        <meta name="twitter:image" content="http://www.sinbiapt.co.kr/img/og/emodel.jpg" />
        <meta name="twitter:url" content="http://www.sinbiapt.co.kr/FloorPlan/Emodel" />

        {/* JSON-LD (구조화데이터) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "두산위브 센트럴파크 강화 - E-모델하우스",
            "url": "http://www.sinbiapt.co.kr/FloorPlan/Emodel",
            "description":
              "두산위브 센트럴파크 강화 E-모델하우스를 온라인에서 편리하게 둘러보세요. VR 가상 투어와 전용 59·72·84㎡ 세대별 평면도를 확인할 수 있습니다.",
            "primaryImageOfPage": {
              "@type": "ImageObject",
              "contentUrl": "http://www.sinbiapt.co.kr/img/og/emodel.jpg",
              "width": 1200,
              "height": 630
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "홈", "item": "http://www.sinbiapt.co.kr/" },
                { "@type": "ListItem", "position": 2, "name": "E-모델하우스", "item": "http://www.sinbiapt.co.kr/FloorPlan/Emodel" }
              ]
            }
          })}
        </script>
      </Helmet>



      <Header isChanged={isScroll} />
      <FixIcon />
      <Bener title="E-모델하우스" />
      <MenuBar contents={menuContents} />

      <h1 className={styles.screenReaderOnly}>두산위브센트럴파크강화- E-모델하우스</h1>

      <div className={styles.tabMenu}>
        {menuContents.slice(0, 5).map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedType(tab.key)}
            className={`${styles.tabButton} ${selectedType === tab.key ? styles.activeTab : ""}`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className={styles.vrSection}>
        <p className={styles.vrDescription}>
          화면의 아무 곳이나 클릭하시면 해당 VR을 감상하실 수 있습니다.
        </p>
        <iframe
          className={styles.vrIframe}
          src={vrUrls[selectedType]}
          title={`${selectedType} VR`}
          allowFullScreen
          frameBorder="0"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Emodel;
