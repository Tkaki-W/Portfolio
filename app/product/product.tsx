import {Component} from "./list/list";
import styles from "./product.module.css";
export function Product(){


    const data=[
        {img:"/picture/tumor_robot.png",title:"卒論研究", body:"皮膚腫瘍に対し機械学習による、触診用ロボットハンドの制御自動化の研究。",url:"https://github.com/stars/Tkaki-W/lists/senior-thesis-research"},
        {img:"/picture/tello.png",title:"プチ卒論", body:"ドローンの重機追従プログラムを作成、ARマーカーの位置、角度情報を基に作成",url:"https://github.com/Tkaki-W/Tello-Control-with-AR-Marker"},
        {img:"/picture/portfolio.png", title:"ポートフォリオ", body:"本ポートフォリオ、reactやNext.jsを用いて制作した。",url:"https://github.com/Tkaki-W/Portfolio/tree/master"},
        {img:"/picture/gokumonkyou.jpg", title:"獄門疆", body:"大学のarduinoの授業でアニメをモチーフにした作品を作成。arduinoとProcessingを組み合わせてポートによる通信で作動させる。", url:"https://github.com/Tkaki-W/Processing_project"},
        {img:"/picture/mario.png", title:"スーパーマリオサイト", body:"高校時代に作ったサイト。HTML, CSS, jQueryを組み合わせて制作。", url:"/webcontents_mario/WebContents/html/index.html"},
        {img:"/picture/recog.png", title:"リアルタイム顔認証", body:"リアルタイムでカメラと登録した画像がどのくらい似ているかを示してくれる。",url:"https://github.com/Tkaki-W/realtime_face_recognition/tree/master" },
        {img:"/picture/setagora.avif", title:"物理部", body:"私が中高時代に所属した物理部でピタゴラスイッチ装置・モンキーハンティング物理実験・イライラ棒などを作成した", url:"https://www.youtube.com/playlist?list=PLs3HQt4i0yljAM-fAEQEsVenTYD_Nga0d"},
        {img:"/picture/fps.png", title:"Unity シューティングゲーム", body:"研究室内で作成した一人称シューティングゲーム。", url:"https://github.com/Tkaki-W/unity-project?tab=readme-ov-file"}
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