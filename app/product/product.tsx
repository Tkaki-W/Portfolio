import {Component} from "./list/list";
import styles from "./product.module.css";
export function Product(){


    const data=[
        {img:"/picture/gokumonkyou.jpg", title:"獄門疆", body:"大学のarduinoの授業でアニメをモチーフにした作品を作成。arduinoとProcessingを組み合わせてポートによる通信で作動させる。", url:"https://github.com/Tkaki-W/Processing_project"},
        {img:"/picture/mario.png", title:"スーパーマリオサイト", body:"高校時代に作ったサイト。HTML, CSS, jQueryを組み合わせて制作。", url:"/webcontents_mario/WebContents/html/index.html"},
        {img:"/picture/iwata.png", title:"研究室pythonコード", body:"研究室の課題で作ったもの。様々な議題に対して制作した。", url:"https://github.com/Tkaki-W/iwata_lab_assignment/tree/master"},
        {img:"/picture/monkey.jpg", title:"モンキーハンティング", body:"モンキーハンティングという物理実験をUnity上で再現してコロナ禍の際に部員に発表。", url:"https://m.youtube.com/watch?v=mnZrvFxNT1I&feature=youtu.be"},
        {img:"/picture/robokon.jpg", title:"ロボットコンテスト", body:"ロボコンサークルにおいて部内大会で作ったC++のコード", url:"https://github.com/Tkaki-W/Taikousen_Program"},
        {img:"/picture/portfolio.png", title:"ポートフォリオ", body:"本ポートフォリオ、reactを用いて制作した。",url:"https://github.com/Tkaki-W/Portfolio/tree/master"}
    ]
    return(
        <div>
            <a id="product"></a>
            <h2 className={styles.title}>Product ~成果物~</h2>
            <div className={styles.product}>
            <Component arraies = {data}/>
            </div>
        </div>  
    );
}