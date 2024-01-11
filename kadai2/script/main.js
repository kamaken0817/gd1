const image = document.getElementById('../image/kikyuu.png');
image.animate({ transform: 'translateX(80px)'}, // 開始時の状態（左端）
{ transform: 'translateX(200px)' } ,// 終了時の状態（左端から200pxの位置）
 
// タイミングに関する設定
{
fill: 'backwards', // 再生前後の状態（再生前、開始時の状態を適用）
duration: 1000, // 再生時間（1000ミリ秒）
iterations: Infinity,  // アニメーションの繰り返し回数（ずっと繰り返す）
},
);