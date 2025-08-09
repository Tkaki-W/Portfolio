import {List} from "./list/list.tsx";
import {Component} from "./list/list.tsx";
import styles from "./product.module.css";
export function Product(){


    const data=[
        {img:"/picture/R.jpg", title:"獄門疆", body:"大学のarduinoの授業でアニメをモチーフにした作品を作成。arduinoとProcessingを組み合わせてポートによる通信で作動させる。", url:""},
        {img:"/picture/R.jpg", title:"スーパーマリオサイト", body:"高校時代に作ったサイト。HTML, CSS, jQueryを組み合わせて制作。", url:""},
        {img:"/picture/monkey.jpg", title:"研究室pythonコード", body:"研究室の課題で作ったもの。様々な議題に対して制作した。", url:""},
        {img:"/picture/monkey.jpg", title:"モンキーハンティング", body:"モンキーハンティングという物理実験をUnity上で再現してコロナ禍の際に部員に発表。", url:"https://m.youtube.com/watch?v=mnZrvFxNT1I&feature=youtu.be"}
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