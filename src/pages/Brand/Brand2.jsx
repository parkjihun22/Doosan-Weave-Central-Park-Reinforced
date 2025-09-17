import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import YouTube from 'react-youtube';

import styles from './Brand.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

const Brand2 = () => {
	const menuContents = [
		{ title: "브랜드 소개", url: "/brand/intro" }, 
		{ title: "홍보 영상", url: "/brand/video" }];


	const [isScroll, setIsScroll] = useState(false);
	const [isTextVisible, setIsTextVisible] = useState(true); // isTextVisible 상태 추가
	const isMobile = useMediaQuery({ query: '(max-width: 900px)' });
	const { pathname } = useLocation(); // 현재 경로를 가져옴

	useEffect(() => {
		window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
	}, [pathname]); // pathname이 변경될 때마다 실행

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScroll(true);
			} else {
				setIsScroll(false); 
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={styles.container}>
				<Helmet>
				<title>두산위브 센트럴파크 강화 - 홍보영상</title>
				<meta
					name="description"
					content="두산위브 센트럴파크 강화 홍보영상으로 세대 설계, 지상 차 없는 공원형 단지, 커뮤니티 시설과 강화 중심 생활 인프라·광역 접근성을 생생하게 확인하세요."
				/>
				<link rel="canonical" href="https://sinbiapt.co.krBrand/video" />
				<meta name="robots" content="index,follow" />

				{/* OG 태그 */}
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="두산위브 센트럴파크 강화" />
				<meta property="og:title" content="두산위브 센트럴파크 강화 - 홍보영상" />
				<meta
					property="og:description"
					content="두산위브 센트럴파크 강화 홍보영상: 공원형 단지 설계, 커뮤니티, 강화 중심 생활 인프라와 광역 접근성을 영상으로 만나보세요."
				/>
				<meta property="og:url" content="https://sinbiapt.co.krBrand/video" />
				<meta property="og:image" content="https://sinbiapt.co.krimages/og/main.jpg" />

				{/* Twitter */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="두산위브 센트럴파크 강화 - 홍보영상" />
				<meta
					name="twitter:description"
					content="세대 설계와 커뮤니티, 공원형 단지와 강화 생활 인프라·접근성을 영상으로 확인하세요."
				/>
				<meta name="twitter:image" content="https://sinbiapt.co.krimages/og/main.jpg" />
				</Helmet>


				<Header isChanged={isScroll} />
				<FixIcon />

				<Bener title="홍보영상" />

				<MenuBar contents={menuContents} />

				{/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
				<h1 className={styles.screenReaderOnly}>두산위브 센트럴파크 강화 - 홍보영상</h1>
				<p className={styles.screenReaderOnly}>
				두산위브 센트럴파크 강화의 홍보영상을 통해 공원형 단지 설계와 커뮤니티,
				강화읍 중심의 생활 인프라와 광역 접근성을 생생하게 확인하세요. 현대적 감각과
				편의성이 결합된 새로운 라이프스타일을 영상으로 만나보세요.
				</p>

				<div className={`${styles.textBox} ${isTextVisible ? styles.active : ''}`}>
				<div>강화의 새로운 기준 위에</div>
				<div>두산위브센트럴파크강화가 자부심으로 찾아옵니다.</div>
				</div>


			<div className={styles.videoContainer}>
				<YouTube
					videoId="OACqO8K3F9g"
					opts={{
						width: isMobile ? "400" : "1300",
						height: isMobile ? "300" : "500",
						playerVars: {
							autoplay: 1,
							rel: 0,
							modestbranding: 1,
						},
					}}
					onEnd={(e) => {
						e.target.stopVideo(0);  // 비디오 종료 시 정지
					}}
				/>
			</div>

			<Footer />
		</div>
	)
}

export default Brand2;
