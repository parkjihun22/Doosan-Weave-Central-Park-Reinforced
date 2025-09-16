import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './Brand.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/Brand/intro/page1.jpg";

const Brand1 = () => {
    const menuContents = [{ title: "브랜드 소개", url: "/brand/intro" }, { title: "홍보 영상", url: "/brand/video" }];
    const [isScroll, setIsScroll] = useState(false);
    const [isTextVisible, setIsTextVisible] = useState(false); // 텍스트 애니메이션 상태
    const [isImageVisible, setIsImageVisible] = useState(false); // 이미지 애니메이션 상태
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 0);
            // 스크롤 시 이미지와 텍스트 애니메이션을 트리거
            if (window.scrollY > 200) {
                setIsImageVisible(true); // 이미지가 보이도록
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTextVisible(true); // 메뉴 클릭 시 텍스트가 보이도록
        }, 500); // 딜레이를 두고 텍스트 애니메이션 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            <Helmet>
            <title>두산위브 센트럴파크 강화 - 브랜드 소개</title>
            <meta
                name="description"
                content="두산건설 위브(WE’VE)의 브랜드 철학과 가치를 소개합니다. 품질 기준과 첨단 시공, 커뮤니티·서비스로 생활의 품격을 높이는 두산위브 센트럴파크 강화."
            />
            <link rel="canonical" href="https://www.apay.co.kr/Brand/intro" />
            <meta name="robots" content="index,follow" />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="두산위브 센트럴파크 강화" />
            <meta property="og:title" content="두산위브 센트럴파크 강화 - 브랜드 소개" />
            <meta
                property="og:description"
                content="두산건설 위브(WE’VE) 브랜드 소개: 고객 중심 설계와 신뢰의 품질, 프리미엄 주거문화를 제시하는 두산위브 센트럴파크 강화."
            />
            <meta property="og:url" content="https://www.apay.co.kr/Brand/intro" />
            <meta property="og:image" content="https://www.apay.co.kr/images/og/main.jpg" />
            </Helmet>



            <Header isChanged={isScroll} />
            <FixIcon />

            <Bener title="브랜드 소개" />

            <MenuBar contents={menuContents} />
            {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
            <h1 className={styles.screenReaderOnly}>두산위브 센트럴파크 강화 - 브랜드 소개</h1>
            <p className={styles.screenReaderOnly}>
            두산위브 센트럴파크 강화는 신뢰와 품질을 최우선으로 하는 두산건설의 위브(WE’VE) 브랜드를 적용했습니다.
            고객 중심의 설계와 고급 자재, 첨단 시스템으로 쾌적하고 안전한 주거 환경을 제공합니다. 지속적인 혁신과
            고객 만족을 바탕으로 미래 지향적인 주거 가치를 제시합니다.
            </p>

            <div className={`${styles.textBox} ${isTextVisible ? styles.active : ''}`}>
            <div>생활의 모든 것을 한걸음에</div>
            <div>두산위브, 강화의 중심에 서다</div>
            </div>


            <img className={`${styles.image} ${isImageVisible ? styles.visible : ''}`} src={page1} alt="두산위브센트럴파크강화brand-Image1" />

            <Footer />
        </div>
    );
}

export default Brand1;
