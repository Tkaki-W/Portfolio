"use client"

import {test} from "./map_slider/map_slider.tsx";
import {History_test} from "./map_slider/map_slider.tsx";
import styles from './page.module.css';

export  function History() {

  const data =[
    {year:"summer 2018", title: "HTML, CSS学習開始", body:"Progateを使った学習をし始める"},
    {year:"spring 2019", title: "Javascript, jQuery学習開始", body:"動的なサイトについて学ぶ"},
    {year:"summer 2019", title:"スーパーマリオサイト制作開始" , body:"べた書きで書き続け、ウェブサイト作りの基礎を学ぶ"},
    {year:"summer 2020", title:"スーパーマリオサイト制作完了", body:"スライド機能で独自性を加えたほか、外部のサイトの動きも参考にしたUIを制作"},
    {year:"winter 2020", title:"PHPとmySQLを学習", body:"Progateで少しだけ学習"},
    {year:"summer 2021", title:"Unityを使ったモンキーハンディング装置の政策",  body:"所属していた物理部の部長として、リモートでもわかりやすいように、物理実験をUnityで再現"},
    {year:"spring 2023", title:"大学進学", body:"早稲田大学創造理工学部総合機械工学科に進学"},
    {year:"summer 2023", title:"ロボコンサークルで活動開始", body:"マイコンのプログラミングをC++などを用いて制作"},
    {year:"winter 2023", title:"獄門疆制作", body:"大学のコンペティションでアニメをモチーフにしたタスクマネージャーを制作しTA賞を受賞"},
    {year:"spring 2025", title:"研究室でpythonやUnityについて学ぶ", body:"所属している岩田研究室で将来に役立つプログラミングの知識を学習中"}

  ];

  return (
    <div>
      <a id="history"></a>
      <h2 className={styles.title}>History~経歴~</h2>
      <div className ={styles.history}>
          <History_test entries={data}/>
      </div>
    </div>
  );
}