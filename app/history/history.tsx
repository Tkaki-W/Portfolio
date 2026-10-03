"use client"

import {History_test} from "./map_slider/map_slider";
import styles from './page.module.css';

export  function History() {

  const data =[
    {year:"summer 2018", title: "プログラミング学習開始", body:"HTML, CSSなどのウェブサイト系の言語を学び始める", link:""},
    {year:"summer 2020", title:"スーパーマリオサイト制作", body:"WebサイトをHTML, CSS, JQueryを用いて制作",link:""},
    {year:"2020~2021", title:"物理部部長として活動",  body:"ピタゴラスイッチの制作・物理実験をUnityで再現・イライラ棒の電気工作など、部活全体でものづくりを精力的にすすめる", link:"#physics"},
    {year:"spring 2023", title:"大学進学", body:"早稲田大学創造理工学部総合機械工学科に進学", link:""},
    {year:"summer 2023", title:"大学内ロボコンサークルに所属", body:"プログラミングをC++などを用いて制作し, F3RCなどに出場", link:"#robokon"},
    {year:"winter 2023", title:"大学のコンペティション出場", body:"アニメをモチーフにしたタスクマネージャーをProcessing, C++を用いて制作しTA賞を受賞" ,link:"#gokumonkyou"},
    {year:"spring 2025", title:"研究開始", body:"岩田研究室で研究を始める", link:""},
    {year:"summer 2025", title:"react学習開始", body:"ポートフォリオサイト作成", link:"#portfolio"},
    {year:"fall 2025", title:"インターン勤務開始", body:"株式会社スペースビジョンで医療用デバイスのソフトウェアの開発に携わる"},
    {year:"winter 2025", title:"プチ卒論", body:"卒論の前研究で, 重機に追従するドローン制御を経験",link:"#puti-soturon"},
    {year:"spring 2026", title:"卒論研究", body:"機械学習を用いた触診ロボットの制御研究",link:"soturon"},
    {year:"spring 2027", title:"大学院進学(予定)", body:"東京大学情報理工学系研究科システム情報学専攻の院試に合格し、同大学に進学予定",link:""}

  ];

  return (
    <div>
      <a id="history" ></a>
      <h2 className={styles.title}>History~経歴~</h2>
      <div className ={styles.history}>
          <History_test entries={data}/>
      </div>
    </div>
  );
}