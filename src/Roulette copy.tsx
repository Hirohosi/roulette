import { useState, useEffect, useCallback, memo } from "react";
import "./Roulette.css"; // CSSファイルをインポート
import { foodList } from "./constant";

export const Roulette: React.FC = memo(() => {
  const [start, setStart] = useState(false);
  const [index, setIndex] = useState(0);

  //   const rouletteContents = [
  //     "カレー",
  //     "パスタ",
  //     "唐揚げ",
  //     "天ぷら",
  //     "中華",
  //     "ハンバーグ",
  //     "うどん",
  //     "肉じゃが",
  //   ];

  //ボタンの文言を変更する処理
  const startRoulette = useCallback(() => {
    setStart(!start);
  }, [start]);

  //ルーレットを回す処理
  useEffect(() => {
    if (start) {
      const interval = setInterval(() => {
        setIndex((oldIndex) => {
          if (oldIndex < foodList.length - 1) return oldIndex + 1;
          return 0;
        });
      }, 50); //ルーレットの中身を切り替える速度
      return () => clearInterval(interval);
    } else if (!start) {
      return () => clearInterval(0);
    }
  }, [start]);

  return (
    <div className="roulette-container">
      <div>
        <p>今日のメニューは・・・</p>
        <p>{foodList[index]}</p>
      </div>
      <button type="button" onClick={startRoulette}>
        {start ? "ストップ" : "スタート"}
      </button>
    </div>
  );
});
