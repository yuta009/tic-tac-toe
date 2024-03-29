'use strict';

// 変数と関数は区切りは基本は小文字で大文字ででつなぐ　(ex playerNow のN)
// 定数は、基本大文字で、_でつなぐ　(ex PLAYER_FIRST )
const PLAYER_FIRST = 1    //プレイヤー変数（先行)
const PLAYER_SECOND = 2   //プレイヤー変数（先行)
let playerNow = PLAYER_FIRST  //プレイヤーターン用変数
let drowCount=0;  //カウント用変数
const FLAME_SIZE=3;  //枠数　(3×3)
let box = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
];
console.log(box);

//押された時に、その場所を感知する。
//●×判定
function put(obj){
  console.dir(playerNow)
  console.dir(obj)

  //objの中身が""じゃなかったら、終了する
  if(obj.innerText !== "") return
  //objの中身が""だったら、実行
  if(playerNow == PLAYER_FIRST){
    playerNow = PLAYER_SECOND
    obj.innerText="◎"
    drowCount+=1;
  }else{
    playerNow = PLAYER_FIRST
    obj.innerText="×"
      drowCount+=1;
  }
  judg();
}

function judg(){
  let winner = null;
//  勝者判定
  for(let i=0;i<FLAME_SIZE;i++){
    for(let j=0;j<FLAME_SIZE;j++){
      box[i][j]=document.getElementById(`a[${i}][${j}]`).innerText;
      console.log(`取得した値：box[${i}][${j}]=`,box[i][j]);
    }
  }

  if(box[0][0]==box[0][1] && box[0][1]==box[0][2] && box[0][0] != ""){  //横一列
    winner = box[0][0];
  }else if(box[0][0]==box[1][0] && box[1][0]==box[2][0] && box[0][0] != ""){//縦一列目
    winner = box[0][0];
  }else if(box[0][0]==box[1][1] && box[1][1]==box[2][2] && box[0][0] != ""){//斜め
    winner = box[0][0];
  }else if(box[0][1]==box[1][1] && box[1][1]==box[2][1] && box[0][1] != ""){//縦二列
    winner = box[1][1];
  }else if(box[0][2]==box[1][2] && box[1][2]==box[2][2] && box[0][2] != ""){//縦三列目
    winner = box[1][1];
  }else if(box[1][0]==box[1][1] && box[1][1]==box[1][2] && box[1][0] != ""){//横二列目
    winner = box[1][0];
  }else if(box[2][0]==box[2][1] && box[2][1]==box[2][2] && box[2][0] != ""){//横三列目
    winner = box[2][0];
  }else if(box[2][0]==box[1][1] && box[1][1]==box[0][2] && box[2][0] != ""){//斜め
    winner = box[2][0];
  }else if(drowCount === 9 && winner === null){
    alert("Drow")
    console.log("Drow")
  }
  if(winner !== null){
    alert(winner + 'の勝利です')
    console.log(winner)
  }
}
