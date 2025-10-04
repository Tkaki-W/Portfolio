"use client"
import {Header} from "../header/header";
import {BlobBackground} from "../top_page/top_page";
import { motion } from 'framer-motion';
import styles from "./aboutme.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function Aboutme(){
    const images = [
        {src:"picture/bad.jpg"},
        {src:"picture/guitar.jpg"},
        {src:"picture/simpa.jpeg"},
        {src:"picture/illit.webp"},
        {src:"picture/bud.webp"},
        {src:"picture/evans.jpg"}
    ]

    return(
        <div className={styles.aboutme}>
            <div className = {styles.index_parent}>
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 3, delay: 0.05}}
                >
                    <h1 className = {styles.index}>
                        About me
                    </h1>
                </motion.div>
            </div>
            <div className="flex justify-center">
                <img 
                className="w-[80vh] object-cover h-[300px] rounded-xl"
                src="picture/rockin.jpg"/>
            </div>
            <div className={styles.sentence}>
                <h2>ごあいさつ</h2>
                <div className={styles.text}>
                    <p>初めまして、このポートフォリオサイトの制作者のたかきです!</p>
                    <p>見ていただいてありがとうございます。</p>
                    <p>大学生に通いながらハードウェア・ソフトウェア関係なしに積極的に取り組んでいます</p>
                    <p>将来はいろんな人を支えられるような技術開発に携わりたいと思っています</p>
                    <p>まだまだ未熟ですが、興味と行動力は人一倍あるので頑張ります！</p>
                </div>
            </div>
            <div className={styles.sentence}>
                <h3>趣味</h3>
                <div className={styles.text}>
                    <p>普段はバドミントンをしたり、音楽を聴いたりしています。</p>
                    <p>JPopだとKing Gnu、KPopだとBTSやILLIT、あとはジャズが好きです</p>
                    <p>ジャズだとビルエバンスやバドパウエルが好きなので同じ趣味の人がいたらうれしいです！</p>
                </div>
            </div>
            <div className={styles.slider}>
            <Swiper 
                modules={[Autoplay, Navigation]}
                autoplay={{ delay: 3000, disableOnInteraction:false }}
                slidesPerView={1}
                spaceBetween={100}
                allowTouchMove={false}
                simulateTouch={false}
                breakpoints={{
                    800 :{slidesPerView:2},
                    1200 :{slidesPerView:3},
                    1800 :{slidesPerView:4},
                }}  
                loop={true}>
                    {images.map((img, index)=>(
                        <SwiperSlide key={index}>
                            <img src={img.src} className="w-[300px] object-cover h-[300px] rounded-xl mx-auto"/>
                        </SwiperSlide>
                    )
                    )}
            </Swiper>
            </div>
        </div>
    )
}