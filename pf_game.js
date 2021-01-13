// 勉強ポイント!! #001 従来の関数の書き方
// 勉強ポイント!! #002 従来の変数の書き方
// 勉強ポイント!! #003 新しい関数の書き方
// 勉強ポイント!! #004 新しい変数の書き方
// 勉強ポイント!! #005 新しい定数の書き方
// 勉強ポイント!! #006 可変長引数(オーバーロード)の書き方
// 勉強ポイント!! #007 ショートサーキット評価の書き方
// 勉強ポイント!! #008 三項演算子の書き方
// 勉強ポイント!! #009 連想配列の書き方
// 勉強ポイント!! #010 Map(キーと値がセットのコレクションでmap関数とは全く異なる)の書き方
// 勉強ポイント!! #011 mapメソッド(forEachと違い結果の配列を返す)の書き方
// 勉強ポイント!! #012 forEach(戻り値はなく実行するだけ)の書き方
// 勉強ポイント!! #013 forEachおまけ(ラムダ組み合わせ)の書き方
// 勉強ポイント!! #014 for文(戻り値はなく実行するだけ 従来の書き方)



// 画像
const objImage = {
	my           : new Image()
  , lifeUp       : new Image()
  ,	speedUp	     : new Image()
  ,	boss         : { boss1 : new Image()
				   , boss2 : new Image()
				   , boss3 : new Image()
				   , boss4 : new Image()}
  ,	boss1        : new Image()
  ,	boss2        : new Image()
  ,	boss3        : new Image()
  ,	boss4        : new Image()
  ,	bossStop     : new Image()
  ,	bossAtack1   : new Image()
  ,	bossAtack2   : new Image()
  ,	bossAtack3   : new Image()
  , gameclear    : new Image()
  , gameover     : new Image()
  , top          : new Image()
  , title        : new Image()
  , haka         : new Image()
};

// 画像ロード状態を格納
const imgLoad = {
	my           : false
  ,	lifeUp       : false
  ,	speedUp      : false
  ,	bossStop     : false
  ,	boss         : false
  ,	boss1        : false
  ,	boss2        : false
  ,	boss3        : false
  ,	boss4        : false
  ,	bossAtack1   : false
  ,	bossAtack2   : false
  ,	bossAtack3   : false
  , top          : false
  , title        : false
  , haka        : false
};

// 自機を読み込み
objImage.my.src = "images/my.png";
objImage.my.onload = function() {
	imgLoad.my = true; // 自機画像読み込み完了
};

// ライフアップを読み込み
objImage.lifeUp.src = "images/LifeUpItem.png";
objImage.lifeUp.onload = function() {
	imgLoad.lifeUp = true; // ライフアップ画像読み込み完了
};

// スピードアップを読み込み
objImage.speedUp.src = "images/SpeedUpItem.png";
objImage.speedUp.onload = function() {
	imgLoad.speedUp = true; // スピードアップ画像読み込み完了
};

// 敵画像を読み込み
// objImage.boss.src = "images/boss.png";
// objImage.boss.onload = function() {
// 	imgLoad.boss = true; // 敵画像読み込み完了
// };

// 敵画像1を読み込み
objImage.boss.boss1.src = "images/boss1.png";
objImage.boss.boss1.onload = function() {
	imgLoad.boss1 = true; // 敵画像読み込み完了
};

// 敵画像2を読み込み
objImage.boss.boss2.src = "images/boss2.png";
objImage.boss.boss2.onload = function() {
	imgLoad.boss2 = true; // 敵画像読み込み完了
};

// 敵画像3を読み込み
objImage.boss.boss3.src = "images/boss3.png";
objImage.boss.boss3.onload = function() {
	imgLoad.boss3 = true; // 敵画像読み込み完了
};

// 敵画像4を読み込み
objImage.boss.boss4.src = "images/boss4.png";
objImage.boss.boss4.onload = function() {
	imgLoad.boss4 = true; // 敵画像読み込み完了
};

// 敵攻撃1を読み込み
objImage.bossAtack1.src = "images/bossAtk1.png";
objImage.bossAtack1.onload = function() {
	imgLoad.bossAtack1 = true; // 敵攻撃1画像読み込み完了
};

// 敵攻撃2を読み込み
objImage.bossAtack2.src = "images/bossAtk2.png";
objImage.bossAtack2.onload = function() {
	imgLoad.bossAtack2 = true; // 敵攻撃2画像読み込み完了
};

// 敵攻撃3を読み込み
objImage.bossAtack3.src = "images/bossAtk3.png";
objImage.bossAtack3.onload = function() {
	imgLoad.bossAtack3 = true; // 敵攻撃3画像読み込み完了
};

// GAMECLEARを読み込み
objImage.gameclear.src = "images/gameclear.png";
objImage.gameclear.onload = function() {
	imgLoad.gameclear = true; // GAMECLEAR画像読み込み完了
};

// GAMEOVERを読み込み
objImage.gameover.src = "images/gameover.png";
objImage.gameover.onload = function() {
	imgLoad.gameover = true; // GAMEOVER画像読み込み完了
};

// TOP背景を読み込み
objImage.top.src = "images/top.png";
objImage.top.onload = function() {
	imgLoad.top = true; // TOP背景画像読み込み完了
};

// タイトルを読み込み
objImage.title.src = "images/title.png";
objImage.title.onload = function() {
	imgLoad.title = true; // TOP背景画像読み込み完了
};

// 墓を読み込み
objImage.haka.src = "images/haka.png";
objImage.haka.onload = function() {
	imgLoad.haka = true; // 墓画像読み込み完了
};

// ゲーム盤関連情報
const gameBoard = {
    MY_SIZE_X    :   3 // 自分サイズ横幅
  , MY_SIZE_Y    :   3 // 自分サイズ縦幅
  , BOSS_SIZE_X  :  32 // ボスサイズ横幅
  , BOSS_SIZE_Y  :  32 // ボスサイズ縦幅
  , CHAR_TYPE    :   4 // 登場オブジェクト 0自分/1敵(BOSS)/2アイテム
  , FIELD_SIZE_X : 600 // ゲーム盤サイズ横幅
  , FIELD_SIZE_Y : 400 // ゲーム盤サイズ縦幅
  , OBJECT_COUNT :  30 // 盤上の最大オブジェクト数
  , LIFE         :   3 // 残ライフ
  , TIME         : 300 // 残り秒数
  , TERRITORY    :   0 // 何％表示されているか
};

// 勉強ポイント!! #009 連想配列の書き方
const disp = {
	battleField : null  // ゲーム盤状態(表示用)
  ,	  workField : null  // ゲーム盤状態(作業用)
};

/*
	■キャラクター
	10:自分
	20:ライフ回復
	21:スピードアップ
	22:ボス拘束
	70:敵
	71:敵攻撃1
	72:敵攻撃2
	73:敵攻撃3
*/
// キャラクター情報
const chrObj = {
	chrType : 0
  ,	nowX    : 0
  , nowY    : 0
  , vectorX : 0
  , vectorY : 0
  , mySpeed : 0
  , sizeX   : 0
  , sizeY   : 0
};


// キャラクター情報初期化
// const arrChrObj = new Array(100);
// for(let i=0; i<arrChrObj.length; i++) {
// 	arrChrObj[i] = {...chrObj};
// }
// const arrChrObj = new Array(100).fill().map(e => ({chrObj}));

// TODO
// const arrChrObj = new Array(100).fill().map(e => ({
// 	chrType : 0
//   ,	nowX    : 0
//   , nowY    : 0
//   , vectorX : 0
//   , vectorY : 0
//   , mySpeed : 0
//   , sizeX   : 0
//   , sizeY   : 0
// }));

// 勉強ポイント!! #011 mapメソッド(forEachと違い結果の配列を返す)の書き方
const arrChrObj = new Array(gameBoard.OBJECT_COUNT).fill().map(e => ({chrObj}));

// マウスの入力状態を表示
const mouseStatus = {
	downFlg : false
  , clickX  : null
  ,	clickY  : null
  ,	moveX   : null
  ,	moveY   : null
  ,	x       : null
  , y       : null
  , lockFlg : false
};

// マウスの入力状態を表示
const dispSts = {
	PLAY : -1
  , TOP  :  0
  ,	USE  :  1
};

// 勉強ポイント!! #005 新しい定数の書き方
// 文字コード
const LEFT_KEY     = 37;	// ←キー
const UP_KEY       = 38;	// ↑キー
const RIGHT_KEY    = 39;	// →キー
const DOWN_KEY     = 40;	// ↓キー
const SPACE_KEY    = 32;	// スペースキー
const ENTER_KEY    = 13;	// エンターキー
const ESC_KEY      = 27;	// エスケープキー
const B_KEY        = 66;	// Bキー
const V_KEY        = 86;	// Vキー
const C_KEY        = 67;	// Cキー
const X_KEY        = 88;	// Xキー
const E_KEY        = 69;	// Eキー

// 陣地状態
const ENEMY_LAND   = -1; // 敵が通った土地
const NORMAL_LAND  =  0; // 平地
const MY_LAND      =  1; // 自分の土地の外周部
const WORK_LAND    =  2; // 開拓中の土地
const RENTAL_LAND  =  3; // 自分の土地内部の売却済み部分
const PAINT_LAND   =  9; // ボス領域の為平地として塗りつぶし対象（走査中）

// ゲーム開始時刻
let startTime    = performance.now();   // 開始時刻
let keyboardStatus = new Array();	    // キーボードの入力状態を保存
let scanBuff       = new Array(1000);   // 塗りつぶし箇所操作対象のY座標確保
let scanBuffIdx    = 0;                 // 次のスキャン対象Index
let scanBuffSetIdx = 0;                 // いつかスキャンする対象設定Index
let paintFlg       = false;             // 塗りつぶし処理実行要否
let context        = null;		    	// 描画領域（バトルフィールド）
let inStatus       = new Array();	    // キーボードの入力状態を保存
let hitCnt         = 0;                 // 敵との衝突回数
let endFlg         = false;             // クリア時
let gameOverFlg    = false;		        // ゲームオーバー時
let gameOverCnt    = 0;                 // ゲームオーバーアニメーション用
let gameClearCnt   = 0;                 // ゲームクリアアニメーション用
let bossImgChgCnt  = 0;                 // ボスアニメーション切り替え用
let srEndFlg       = false;             // エンディング終了フラグ
let endDisp        = [];                // エンディング表示用
let menuSelectSts  = 0;					// スタートメニュー選択情報 0:ゲームスタート 1:ゲーム説明
let menuDispSts    = dispSts.TOP;       // 現在表示画面情報
let bossAtk1Angle  = 0;                 // ボス攻撃の回転角度を保持
let bossAtk2Angle  = 0;                 // ボス攻撃の回転角度を保持
let escFlg         = false;             // ESCキーが押された場合
let muteFlg        = true;              // true:音無し

// アイテム生成情報
const itemMakeSts = {
	life1    : false
  , life2    : false
  , life3    : false
  , speed1   : false
  , speed2   : false
  , speed3   : false
};


// 墓関連
const haka = {
	flg       : false
  , count     :   0
  , nowX      :   0
  , nowY      :   0
  , hakaX     :   0
  , hakaY     :   0
};

// キーボードの値初期化
keyboardStatus[LEFT_KEY]  = false;
keyboardStatus[RIGHT_KEY] = false;
keyboardStatus[UP_KEY]    = false;
keyboardStatus[DOWN_KEY]  = false;
keyboardStatus[ENTER_KEY] = false;
keyboardStatus[SPACE_KEY] = false;

// キーボードのキーを押したとき
const inputKeyDown = (downKey) => {
	// 対象キーのステータスを押してる状態に変更
	keyboardStatus[downKey] = true;
};

// キーボードのキーを上げたとき
const inputKeyUp = (upKey) => {
	// 対象キーのステータスを押してない状態に変更
	keyboardStatus[upKey] = false;
};

// サウンド関連
const sound = {
	volume           : 0	// 音量
  , music            : []	// 各ミュージック情報を格納するリスト
  , topMusic         : 0	
  , battleMusic      : 0
  , crashMusic       : 0
  , decisionMusic    : 0
  , gameclearMusic   : 0
  , gameoverMusic    : 0
  , moveMusic        : 0
  , itemgetMusic     : 0
  , territorygetMusic : 0
  , workMusic        : 0
};

sound.music.push('topMusic');          // TOP画面BGM
sound.music.push('battleMusic');       // 戦闘画面BGM
sound.music.push('crashMusic');        // 衝突音
sound.music.push('decisionMusic');     // 決定音
sound.music.push('gameclearMusic');    // ゲームクリア音
sound.music.push('gameoverMusic');     // ゲームオーバー音
sound.music.push('moveMusic');         // 移動音
sound.music.push('itemgetMusic');      // アイテムゲット音
sound.music.push('territorygetMusic'); // テリトリー拡大音
sound.music.push('workMusic');         // 開拓中音

//バックミュージック再生タグ取得 TODO ここ機能してない気がする
sound.topMusic          = document.getElementById("topMusic");
sound.battleMusic       = document.getElementById("battleMusic");
sound.crashMusic        = document.getElementById("crashMusic");
sound.decisionMusic     = document.getElementById("decisionMusic");
sound.gameclearMusic    = document.getElementById("gameclearMusic");
sound.gameoverMusic     = document.getElementById("gameoverMusic");
sound.moveMusic         = document.getElementById("moveMusic");
sound.itemgetMusic      = document.getElementById("itemgetMusic");
sound.territorygetMusic = document.getElementById("territorygetMusic");
sound.workMusic         = document.getElementById("workMusic");

// sound.music.push('battleMusic'); // ゲームプレイ音楽情報キー

// FPS計算関連
const fps = {
	startTime  : new Date()
  , finishTime : new Date()
  , dispFPS    :   0
  , fpsCount   : 100
  , DISP_X     : 500
  , DISP_Y     :  10
};

/**
* 初期画面ロード処理
*/
const startDisplay = () => {
	// 描画領域の取得
	fieldMap = document.getElementById("battleField");
	// ブラウザがcanvasに対応しているか確認
	if ( ! fieldMap.getContext ) {
		// ブラウザが対応していないので強制終了
		// メッセージだしてリダイレクトか？ TODO まだリダイレクト入ってない
		alert("ブラウザが対応してないよ");
	}
	// 2D設定
	context = fieldMap.getContext("2d");
	
	// ゲーム盤(表示用)初期化
	disp.battleField = iniField(disp.battleField);

	// ゲーム盤(作業用)初期化
	disp.workField = iniField(disp.workField);

	// TODO 画像を表示してみる
	// disp.workField[0][220] = 70;
	// disp.workField[400][120] = 71;
	// disp.workField[499][369] = 70;
	// drawObjImage(disp.workField);

	//音量初期設定値取得
	sound.volume = Number(document.getElementById("setVolume").value);

	// 新しい音量を設定
	// 従来の書き方
	// for(var i=0; i<sound.music.length; i++) {
	// 	document.getElementById(sound.music[i]).volume = sound.volume;
	// }
	// 勉強ポイント!! #012 forEach(戻り値はなく実行するだけ)の書き方
	// 新しい音量を設定
	sound.music.forEach( function(value) {
		document.getElementById(value).volume = sound.volume;
	});

	//バックミュージック再生タグ取得
	sound.topMusic = document.getElementById("topMusic");
	// バックミュージック再生
	sound.topMusic.muted = false;
	sound.topMusic.pause();
	sound.topMusic.currentTime = 0;
	sound.topMusic.play();
	

	// 初期キャラクター配置
	putIniChar();

	// ループ開始
	requestAnimationFrame(menuLoop);
}


/**
* マウスボタンが押された瞬間の処理
* @param mouse マウス入力情報(x座標,y座標とか入ってる)
*/
const inputMouseDown = (mouse) => {
	// 決定音鳴らす
	if(muteFlg === false) {
		sound.decisionMusic = document.getElementById("decisionMusic");
		sound.decisionMusic.muted = false;
		sound.decisionMusic.pause();
		sound.decisionMusic.currentTime = 0;
		sound.decisionMusic.play();
	}

	// クリック位置から次の状態に移動
	menuDispSts = judgeNextDisp(menuDispSts, mouse.offsetX, mouse.offsetY);
	
}

// 勉強ポイント!! #001 従来の関数の書き方 function
/**
* マウスクリック時の画面遷移先決定
* @param sts 次の画面遷移先は何かを格納してる
* @param mouseX クリック時のマウスX座標
* @param mouseY クリック時のマウスY座標
*/
function judgeNextDisp(sts, mouseX, mouseY) {
	// TODO 勉強ポイント!! #002 従来の変数の書き方
	// varはブロックスコープを飛び出しても使えるし、再定義可能なので要注意
	var nextDisp = sts;
	switch(sts) {
		// TOP画面からの遷移
		case dispSts.TOP:
			// クリック位置で画面遷移先決定
			if(mouseX >= 70 && mouseY >= 120 && mouseX <= 250 && mouseY <= 155) {
				// ゲームプレイ画面に遷移
				nextDisp = dispSts.PLAY;

			} else if(mouseX >= 70 && mouseY >= 170 && mouseX <= 150 && mouseY <= 205) {
				// 遊び方画面に遷移
				nextDisp = dispSts.USE;

			}
			break;
		// 遊び方画面からの遷移
		case dispSts.USE:
			// クリック場所問わずTOP画面に遷移させる
			nextDisp = 0;
			break;
		// ゲームプレイ画面からの遷移
		case dispSts.PLAY:
			// 処理無し(マウス操作不可)
			break;
	}

	// 次に表示する画面情報を返す
	return nextDisp;
}


/**
* マウス移動時(移動後座標)
* @param mouse マウス移動時情報(x,y座標など)
*/
const inputMouseMove = (mouse) => {
	
	// マウス移動位置から画面選択状態を判定
	menuSelectSts = judgeNextDisp(menuDispSts, mouse.offsetX, mouse.offsetY);
};


/**
* スタートメニュー画面描画ループ処理
*/
const menuLoop = () => {
	if(muteFlg === false) {
		// バックミュージック再生
		sound.topMusic = document.getElementById("topMusic");
		sound.topMusic.muted = false;
		sound.topMusic.play();
	}

	let objDraw = {
		image : null
	};

	// TOP背景を表示
	objDraw.image = objImage.top
	if(objDraw.image != null) {
		// TOP背景を描画
		context.drawImage(objDraw.image, 0, 0, 600, 400);
	}

	// ゲームタイトル表示
	objDraw.image = objImage.title
	if(objDraw.image != null) {
		// ゲームタイトルを描画
		context.drawImage(objDraw.image, 35, 50);
	}

	// メニューセレクト状態により表示を切り替える
	if (menuSelectSts === dispSts.PLAY) {
		// 上選択状態(ゲームスタート選択状態)

		// 移動音
		if(muteFlg === false) {
			sound.moveMusic = document.getElementById("moveMusic");
			sound.moveMusic.muted = false;
			sound.moveMusic.play();
		}

		// 表示フォント設定
		context.font = "24px Arial";
		context.fillStyle = "yellow";
		context.fillText("ゲームスタート", 70, 150);
		
	} else {
		context.font = "24px Arial";
		context.fillStyle = "#333631";
		context.fillText("ゲームスタート", 70, 150);
	}
	
	if (menuSelectSts === dispSts.USE) {
		// 下選択状態(ゲーム説明選択状態)

		// 移動音
		if(muteFlg === false) {
			sound.moveMusic = document.getElementById("moveMusic");
			sound.moveMusic.muted = false;
			sound.moveMusic.play();
		}

		// 表示フォント設定
		context.font = "24px Arial";
		context.fillStyle = "yellow";
		context.fillText("遊び方", 70, 200);
	} else {
		context.font = "24px Arial";
		context.fillStyle = "#333631";
		context.fillText("遊び方", 70, 200);
	}
	
	// 動きのあるボスを表示
	bossImgChgCnt = bossImgChgCnt + 1;
	if(bossImgChgCnt >= 40) bossImgChgCnt = 0;
	if(bossImgChgCnt < 10) objDraw.image = objImage.boss.boss1;
	else if(bossImgChgCnt < 20) objDraw.image = objImage.boss.boss2;
	else if(bossImgChgCnt < 30) objDraw.image = objImage.boss.boss3;
	else if(bossImgChgCnt < 40) objDraw.image = objImage.boss.boss4;
	if(objDraw.image != null) {
		// オブジェクトを描画
		context.drawImage(objDraw.image, 300, 50, 300, 300);
	}
	
	// 404も飾り表示
	objDraw.image = objImage.bossAtack1
	if(objDraw.image != null) {

		// 左下あたりに配置
		context.drawImage(objDraw.image,   5, 270, 120, 120);
		context.drawImage(objDraw.image, 130, 310,  80,  80);

		// ボス右手に右回転表示
		// 305 230
		imageRotateSize(325, 220, 120, 120, bossAtk1Angle, objDraw)
		bossAtk1Angle = bossAtk1Angle + 36;
		if(bossAtk1Angle >= 360) {
			bossAtk1Angle = 0;
		}
		// ボス左手に左回転表示
		imageRotateSize(585, 193, 80, 80, bossAtk2Angle, objDraw)
		bossAtk2Angle = bossAtk2Angle - 24;
		if(bossAtk2Angle <= 0) {
			bossAtk2Angle = 360;
		}
	}

	// ループ開始
	if (menuDispSts === dispSts.TOP) {
		// TOPメニュー表示
		requestAnimationFrame(menuLoop);
	} else if (menuDispSts === dispSts.USE){
		// 遊び方説明表示
		requestAnimationFrame(howToUseLoop);
	} else {
		// ゲーム開始
		if(muteFlg === false) {
			sound.topMusic = document.getElementById("topMusic");
			sound.topMusic.pause();
			sound.battleMusic = document.getElementById("battleMusic");
			sound.battleMusic.muted = false;
			sound.battleMusic.pause();
			sound.battleMusic.currentTime = 0;
			sound.battleMusic.play();
		}

		startTime = performance.now();
		requestAnimationFrame(mainLoop);
	}
};


/**
* 遊び方画面描画ループ処理
*/
const howToUseLoop = () => {

	let objDraw = {
		image : null
	};

	// TOP背景を表示
	objDraw.image = objImage.top
	if(objDraw.image != null) {
		// TOP背景を描画
		context.drawImage(objDraw.image, 0, 0, 600, 400);
	}

	// ゲームタイトル表示
	objDraw.image = objImage.title
	if(objDraw.image != null) {
		// ゲームタイトルを描画
		context.drawImage(objDraw.image, 35, 50);
	}

	// 説明
	context.font = "16px Arial";
	context.fillStyle = "#333631";
	context.fillText("陣地を増やして領域80%を目指すゲームです。", 70, 140);
	context.fillText("↑↓←→キーで安全地帯(青線)を移動します。", 70, 160);
	context.fillText("SPACEキーを押すと危険地帯(桃色)の移動が可能です。", 70, 180);
	context.fillText("危険地帯移動した陣地は開拓中(白線)となります。", 70, 200);
	context.fillText("開拓地を安全地帯まで伸ばして囲んだ部分が新たな陣地になります。", 70, 220);
	context.fillText("開拓中は敵に攻撃を受けるので気を付けましょう。", 70, 240);

	context.fillStyle = "yellow";
	context.fillText("TOPに戻る", 500, 260);


	// 404も飾り表示
	objDraw.image = objImage.bossAtack1
	if(objDraw.image != null) {
		// オブジェクトを描画
		context.drawImage(objDraw.image,   5, 270, 120, 120);
		context.drawImage(objDraw.image, 130, 310,  80,  80);
	}

	// ループ開始
	if (menuDispSts === dispSts.TOP) {
		// TOPメニュー表示
		requestAnimationFrame(menuLoop);
	} else if (menuDispSts === dispSts.USE){
		// 遊び方説明表示
		requestAnimationFrame(howToUseLoop);
	} else {
		// ありえないけど、ゲーム開始
		startTime = performance.now();
		requestAnimationFrame(mainLoop);
	}
};


/**
* メイン（戦闘画面）描画処理
*/
const mainLoop = () => {

	// バトルフィールドの描画を一旦全消ししてから塗りつぶし
	// context.clearRect( 0, 0, gameBoard.FIELD_SIZE_X, gameBoard.FIELD_SIZE_Y);
	if (gameBoard.TERRITORY <= 50) {
		// 前半は画面をピンク(平地)で塗りつぶす
		context.fillStyle = "pink";
	} else {
		// 後半は画面を黄色(レンタル済みの自分の土地（内側）)で塗りつぶす
		context.fillStyle = "yellow";
	}
	context.fillRect(0, 0, gameBoard.FIELD_SIZE_X, gameBoard.FIELD_SIZE_Y);


	// 仮想ディスプレイに従って色をつける
	/* 0:隠されている状態
	   1:線を引いている途中
	   2:自軍境界ライン
	   3:画像オープン済み(自軍内)
	   4:画面境界ライン
	*/

	// 墓状態か確認
	if(haka.flg != true) {
		// 自キャラクターの移動
		// 押されてるキーボードの判定
		chkPressKey();

		// ボスとアイテムの移動
		moveObject(disp.workField);
	}

	// アイテム生成条件を満たしているか確認して生成
	judgeItem(disp.workField);

	// 陣地などのフィールド情報を出力
	drawFieldSts(disp.workField);

	// バトルフィールドの描画
	drawObjImage(disp.workField);

	// 残ライフ表示
	drawLife();

	// 残り時間表示
	drawTime();

	// テリトリー表示
	drawTerritory(disp.workField);

	// FPS表示
	frameDisp();

	// ゲームオーバーの場合表示切替
	if(gameOverFlg === true) {
		if(muteFlg === false) {
			sound.battleMusic = document.getElementById("battleMusic");
			sound.battleMusic.pause();
			sound.gameoverMusic = document.getElementById("gameoverMusic");
			sound.gameoverMusic.muted = false;
			sound.gameoverMusic.currentTime = 0;
			sound.gameoverMusic.play();
		}

		requestAnimationFrame(gameOver);
	} else if(escFlg === true) {
		// ESCキーが押された場合リロードしてメニュー画面に戻る
		escFlg = false;
		location.reload();
	} else {

		// 勉強ポイント!! #008 三項演算子の書き方
		// ゲームクリアの場合表示切替（エンディング表示判定
		const res = endFlg === false ? requestAnimationFrame(mainLoop) : requestAnimationFrame(gameClear);
	}
};


/**
* 初期戦闘画面に表示するオブジェクト配置
*/
const putIniChar = () => {
	
	// 自キャラ生成
	makeChrObject(arrChrObj[0], 10, 0, 0, 4, 14, 14);

	// 敵キャラ1
	makeChrObject(arrChrObj[20], 71, 300, 150, 1, 1, 49, 49);

	// 敵キャラ2
	makeChrObject(arrChrObj[21], 72, 100, 250, 2, 2, 49, 49);

	// 敵キャラ3
	makeChrObject(arrChrObj[22], 73, 50, 300, 3, 3, 49, 49);

	// 敵キャラ生成
	makeChrObject(arrChrObj[29], 70, 400, 200, 6, 6, 78, 78);
};


/**
* マウス移動時(移動後座標)
* @param args 各オブジェクト生成時の初期値

	配置オブジェクトの生成
	自キャラの場合
	  args[0]:arrChrObj[n] 生成先
	  args[1]:chrType キャラクター種別
	  args[2]:nowX キャラクター初期位置x座標
	  args[3]:nowY キャラクター初期位置y座標
	  args[4]:mySpeed 自キャラクター速度
	  args[5]:sizeX キャラクター画像サイズ横
	  args[6]:sizeY キャラクター画像サイズ縦

	敵またはアイテムの場合
	  args[0]:arrChrObj[n] 生成先
	  args[1]:chrType キャラクター種別
	  args[2]:nowX キャラクター初期位置x座標
	  args[3]:nowY キャラクター初期位置y座標
	  args[4]:vectorX キャラクターx座標速度
	  args[5]:vectorY キャラクターy座標速度
	  args[6]:sizeX キャラクター画像サイズ横
	  args[7]:sizeY キャラクター画像サイズ縦
*/
// 勉強ポイント!! #006 可変長引数(オーバーロード)の書き方
// 今回はswitch文でオーバーロード関数になっています。
const makeChrObject = (...args) => {
	switch(args.length) {
		// 自キャラ生成
		case 7:
			args[0].chrType = args[1];
			args[0].nowX    = args[2];
			args[0].nowY    = args[3];
			args[0].mySpeed = args[4];
			args[0].sizeX   = args[5];
			args[0].sizeY   = args[6];
			break;
		// 敵またはアイテム生成
		case 8:
			args[0].chrType = args[1];
			args[0].nowX    = args[2];
			args[0].nowY    = args[3];
			args[0].vectorX = args[4];
			args[0].vectorY = args[5];
			args[0].sizeX   = args[6];
			args[0].sizeY   = args[7];
			break; 
		default:
			throw "err makeChrObject 001";
	}
};


/**
* アイテムの生成判定
* @param field ゲーム盤情報
*/
const judgeItem = (field) => {
	// スピードアップアイテム生成
	if(gameBoard.TIME <= 60 && gameBoard.TERRITORY <= 50 && itemMakeSts.speed1 === false) {
		// スピードアップアイテム４つ配置
		for(let i=1; i<=5; i++) {
			makeItem(field, i, 21);
		}
		// アイテム配置済みに設定
		itemMakeSts.speed1 = true;

	} else if(gameBoard.TIME <= 120 && gameBoard.TERRITORY <= 30 && gameBoard.LIFE <= 2 && itemMakeSts.speed2 === false) {
		// スピードアップアイテム２つ配置
		for(let i=6; i<=7; i++) {
			makeItem(field, i, 21);
		}
		// アイテム配置済みに設定
		itemMakeSts.speed2 = true;

	} else if(gameBoard.TIME > 120 && gameBoard.TERRITORY <= 15 && gameBoard.LIFE <= 1 && itemMakeSts.speed3 === false) {
		// スピードアップアイテム１つ配置
		makeItem(field, 8, 21);
		// アイテム配置済みに設定
		itemMakeSts.speed3 = true;
	}
	
	// ライフアップアイテム生成
	if(gameBoard.TIME <= 60 && gameBoard.TERRITORY <= 50 && itemMakeSts.life1 === false) {
		// ライフアップアイテム４つ配置
		for(let i=9; i<=12; i++) {
			makeItem(field, i, 20);
		}
		// アイテム配置済みに設定
		itemMakeSts.life1 = true;
		
	} else if(gameBoard.TIME >= 60 && gameBoard.TERRITORY <= 30 && gameBoard.LIFE <= 2 && itemMakeSts.life2 === false) {
		// ライフアップアイテム２つ配置
		for(let i=13; i<=14; i++) {
			makeItem(field, i, 20);
		}
		// アイテム配置済みに設定
		itemMakeSts.life2 = true;

	} else if(gameBoard.TIME >= 120 && gameBoard.TERRITORY <= 15 && gameBoard.LIFE <= 1 && itemMakeSts.life3 === false) {
		// ライフアップアイテム１つ配置
		// スピードアップアイテム１つ配置
		makeItem(field, 15, 20);
		// アイテム配置済みに設定
		itemMakeSts.life3 = true;
	}
};


/**
* アイテムの生成
* @param field ゲーム盤情報
* @param idx アイテム生成のオブジェクト設定先添え字
* @param type アイテム種類
*/
// 勉強ポイント!! #003 新しい関数の書き方
const makeItem = (field, idx, type) => {
	// 勉強ポイント!! #004 新しい変数の書き方
	let tmpX=0;
	let tmpY=0;
	while(field[tmpY][tmpX] != NORMAL_LAND){
		tmpX = Math.floor( Math.random() * gameBoard.FIELD_SIZE_X );
		tmpY = Math.floor( Math.random() * gameBoard.FIELD_SIZE_Y );

	}
	// スピードアップアイテム１つ配置
	if(type === 20) {
		// ライフ回復
		makeChrObject(arrChrObj[idx], type, tmpX, tmpY, 1, 1, 15, 11);
	} else if(type === 21) {
		// スピードアップ
		makeChrObject(arrChrObj[idx], type, tmpX, tmpY, 1, 1, 15, 15);
	}
};


/**
* 押されたキーの判定
*   キーによってそれぞれイベント
*/
const chkPressKey = () => {

	// 勉強ポイント!! #014 for文(戻り値はなく実行するだけ 従来の書き方)
	// 全オブジェクト走査
	for (let i=0; i<arrChrObj.length; i++) {
		// 自機を対象
		if(arrChrObj[i] != undefined && arrChrObj[i] != null && arrChrObj[i].chrType != undefined &&  arrChrObj[i].chrType === 10) {
			// 速度数分繰り返す
			for (let j=0; j<arrChrObj[i].mySpeed; j++) {
				// 左カーソルキーが押されているかつ移動先が盤上かつ( または )
				if(keyboardStatus[LEFT_KEY] === true && arrChrObj[i].nowY != undefined && arrChrObj[i].nowX != undefined && arrChrObj[i].nowX-1 >= 0
					&& (disp.workField[arrChrObj[i].nowY][arrChrObj[i].nowX-1] === MY_LAND
						|| (keyboardStatus[SPACE_KEY] === true
							&& disp.workField[arrChrObj[i].nowY][arrChrObj[i].nowX-1] <= MY_LAND
							&& chkAreaSts(disp.workField, arrChrObj[i].nowX-1, arrChrObj[i].nowY) <= 1))) {

					// 開拓中音
					if(muteFlg === false) {
						sound.workMusic = document.getElementById("workMusic");
						sound.workMusic.muted = false;
						sound.workMusic.play();
					}

					// 自キャラ動かす
					arrChrObj[i].nowX = arrChrObj[i].nowX - 1;

					if(disp.workField[arrChrObj[i].nowY][arrChrObj[i].nowX] <= NORMAL_LAND) {					
						// 開拓中の土地として設定
						disp.workField[arrChrObj[i].nowY][arrChrObj[i].nowX] = WORK_LAND;
					} else if(disp.workField[arrChrObj[i].nowY][arrChrObj[i].nowX] === MY_LAND) {
						// 外延部まで戻ってきた場合は開拓地を外延部に確定
						
						// 開拓地を外延部に設定
						updateExploring(disp.workField);

						// 平地と隣接していない箇所(ボスを埋め尽くさない方)は売却済み土地に設定
						paint(disp.workField);
					}
				}

				// 上カーソルキーが押されているかつ移動先が盤上かつ( または )
				if(keyboardStatus[UP_KEY] === true && arrChrObj[i].nowY != undefined && arrChrObj[i].nowX != undefined && arrChrObj[i].nowY-1 >= 0
					&& (disp.workField[arrChrObj[i].nowY-1][arrChrObj[i].nowX] === MY_LAND
						|| (keyboardStatus[SPACE_KEY] === true
							&& disp.workField[arrChrObj[i].nowY-1][arrChrObj[i].nowX] <= MY_LAND
							&& chkAreaSts(disp.workField, arrChrObj[i].nowX, arrChrObj[i].nowY-1) <= 1))) {

					// 開拓中音
					if (muteFlg === false) {
						sound.workMusic = document.getElementById("workMusic");
						sound.workMusic.muted = false;
						sound.workMusic.play();
					}

					// 自キャラ動かす
					arrChrObj[i].nowY = arrChrObj[i].nowY - 1;

					// 開拓中の土地として設定
					if(disp.workField[arrChrObj[i].nowY][arrChrObj[i].nowX] <= NORMAL_LAND) {
						disp.workField[arrChrObj[i].nowY][arrChrObj[i].nowX] = WORK_LAND;
					} else if(disp.workField[arrChrObj[i].nowY][arrChrObj[i].nowX] === MY_LAND) {
						// 外延部まで戻ってきた場合は開拓地を外延部に確定
						
						// 開拓地を外延部に設定
						updateExploring(disp.workField);

						// 平地と隣接していない箇所(ボスを埋め尽くさない方)は売却済み土地に設定
						paint(disp.workField);
					}
				}

				// 右カーソルキーが押されているかつ移動先が盤上かつ( または )
				if(keyboardStatus[RIGHT_KEY] === true && arrChrObj[i].nowY != undefined && arrChrObj[i].nowX != undefined && arrChrObj[i].nowX+1 < gameBoard.FIELD_SIZE_X
						&& (disp.workField[arrChrObj[i].nowY][arrChrObj[i].nowX+1] === MY_LAND
							|| (keyboardStatus[SPACE_KEY] === true
								&& disp.workField[arrChrObj[i].nowY][arrChrObj[i].nowX+1] <= MY_LAND
								&& chkAreaSts(disp.workField, arrChrObj[i].nowX+1, arrChrObj[i].nowY) <= 1))) {

					// 開拓中音
					if (muteFlg === false) {
						sound.workMusic = document.getElementById("workMusic");
						sound.workMusic.muted = false;
						sound.workMusic.play();
					}

					// 自キャラ動かす
					arrChrObj[i].nowX = arrChrObj[i].nowX + 1;

					// 開拓中の土地として設定
					if(disp.workField[arrChrObj[i].nowY][arrChrObj[i].nowX] <= NORMAL_LAND) {
						disp.workField[arrChrObj[i].nowY][arrChrObj[i].nowX] = WORK_LAND;
					} else if(disp.workField[arrChrObj[i].nowY][arrChrObj[i].nowX] === MY_LAND) {
						// 外延部まで戻ってきた場合は開拓地を外延部に確定
			
						// 開拓地を外延部に設定
						updateExploring(disp.workField);

						// 平地と隣接していない箇所(ボスを埋め尽くさない方)は売却済み土地に設定
						paint(disp.workField);
					}
				}

				// 下カーソルキーが押されているかつ移動先が盤上かつ( または )
				if(keyboardStatus[DOWN_KEY] === true && arrChrObj[i].nowY != undefined && arrChrObj[i].nowX != undefined && arrChrObj[i].nowY+1 < gameBoard.FIELD_SIZE_Y
						&& (disp.workField[arrChrObj[i].nowY+1][arrChrObj[i].nowX] === MY_LAND
							|| (keyboardStatus[SPACE_KEY] === true
								&& disp.workField[arrChrObj[i].nowY+1][arrChrObj[i].nowX] <= MY_LAND
								&& chkAreaSts(disp.workField, arrChrObj[i].nowX, arrChrObj[i].nowY+1) <= 1))) {

					// 開拓中音
					if(muteFlg === false) {
						sound.workMusic = document.getElementById("workMusic");
						sound.workMusic.muted = false;
						sound.workMusic.play();
					}

					// 自キャラ動かす
					arrChrObj[i].nowY = arrChrObj[i].nowY + 1;

					// 開拓中の土地として設定
					if(disp.workField[arrChrObj[i].nowY][arrChrObj[i].nowX] <= NORMAL_LAND) {
						disp.workField[arrChrObj[i].nowY][arrChrObj[i].nowX] = WORK_LAND;
					} else if(disp.workField[arrChrObj[i].nowY][arrChrObj[i].nowX] === MY_LAND) {
						// 外延部まで戻ってきた場合は開拓地を外延部に確定

						// 開拓地を外延部に設定
						updateExploring(disp.workField);

						// 平地と隣接していない箇所(ボスを埋め尽くさない方)は売却済み土地に設定
						paint(disp.workField);
					}
				}
			}
			
			// スペースキーが押されておらず開拓中の土地が存在する場合
			if(arrChrObj[i].nowY != undefined
					&& arrChrObj[i].nowX != undefined
					&& keyboardStatus[SPACE_KEY] === false
					&& disp.workField[arrChrObj[i].nowY][arrChrObj[i].nowX] === WORK_LAND) {
				
				// 速度の２倍分繰り返す
				for (let k=0; k<arrChrObj[i].mySpeed * 2; k++) {
					if (disp.workField[arrChrObj[i].nowY][arrChrObj[i].nowX] === WORK_LAND) {
						let dest = [];
						if(chkAreaSts(disp.workField, arrChrObj[i].nowX, arrChrObj[i].nowY) === 1) {
							// 戻り先を取得
							dest = chkReturn(disp.workField, arrChrObj[i].nowX, arrChrObj[i].nowY, WORK_LAND);

						} else {
							// 戻り先を取得
							dest = chkReturn(disp.workField, arrChrObj[i].nowX, arrChrObj[i].nowY, MY_LAND);

						}
						// 現在位置を平地に戻す
						disp.workField[arrChrObj[i].nowY][arrChrObj[i].nowX] = NORMAL_LAND;

						// 自分の土地の外周部に戻る

						if(dest != null) {
							arrChrObj[i].nowX = dest.nextX;
							arrChrObj[i].nowY = dest.nextY;
						}
					}
					
				}
			}

			// 現在位置が売却済み土地にめり込んでしまっているなどの想定外の場合
			if (disp.workField[arrChrObj[i].nowY][arrChrObj[i].nowX] != 1
					&& disp.workField[arrChrObj[i].nowY][arrChrObj[i].nowX] != 2) {
				// 自機を一番近いセーフティゾーンに移動させる
				searchSafety(disp.workField);

			}
		}
	}

	// ESCキーが押されていたらメニュー画面に戻る
	if(keyboardStatus[ESC_KEY] === true) {
		escFlg = true;
	}
};


/**
* 外延部更新
* @param field 外延部更新対象のゲーム盤
*/
const updateExploring = (field) => {
	let musicFlg = false;
	// 生成した盤外周を自分の陣地に設定
	for(let i = 0; i  < gameBoard.FIELD_SIZE_Y; i++) {
		for(let j = 0; j < gameBoard.FIELD_SIZE_X; j++) {
			if (field[i][j] === WORK_LAND) {
				musicFlg = true;
				
				// 外周のドットは自分の陣地として更新
				field[i][j] = MY_LAND;
				paintFlg = true;
			}
		}
	}
	
	if(musicFlg === true) {
		// 領域拡大音
		if (muteFlg === false) {
			sound.workMusic = document.getElementById("workMusic");
			sound.workMusic.pause();
			sound.territorygetMusic = document.getElementById("territorygetMusic");
			sound.territorygetMusic.muted = false;
			sound.territorygetMusic.pause();
			sound.territorygetMusic.currentTime = 0;
			sound.territorygetMusic.play();
		}
	}
};


/**
* 盤上の上下左右の土地が開拓中の土地でなく移動可能であることを判定する
* @param field ゲーム盤情報
* @param x チェック対象の基点x座標
* @param y チェック対象の基点y座標
* @return 開拓中エリア隣接数
*/
const chkAreaSts = (field, x, y) => {
	let cnt = 0;
	// 左チェック
	if(x -1 < 0 || field[y][x -1] === WORK_LAND) {
		cnt = cnt + 1;
	}
	// 上チェック
	if(y -1 < 0 || field[y -1][x] === WORK_LAND) {
		cnt = cnt + 1;
	}
	// 右チェック
	if(x +1 >= gameBoard.FIELD_SIZE_X || field[y][x +1] === WORK_LAND) {
		cnt = cnt + 1;
	}
	// 下チェック
	if(y +1 >= gameBoard.FIELD_SIZE_Y || field[y +1][x] === WORK_LAND) {
		cnt = cnt + 1;
	}
	// 二つ以上開拓中エリアが隣接している場合
	if(cnt >= 2) {
		return 2;
	}
	// 一つ開拓中エリアが隣接している場合
	if(cnt === 1) {
		return 1;
	}
	// 開拓中エリアの隣接無しで戻す
	return 0;
};


/**
* スペースキーが押されておらず開拓中の戻る先を確認
* @param field ゲーム盤情報
* @param x 現在位置X座標
* @param y 現在位置Y座標
* @param landType チェック対象の土地種別
* @return 戻る先がある場合はx,y座標情報
*/
const chkReturn = (field, nowX, nowY, landType) => {
	
	const dest = {
		nextX  : nowX
	  , nextY  : nowY
	};

	if(nowX -1 >= 0 && field[nowY][nowX -1] === landType) {
		dest.nextX = nowX -1;
		return dest;
	}
	if(nowX +1 < gameBoard.FIELD_SIZE_X && field[nowY][nowX +1] === landType) {
		dest.nextX = nowX +1;
		return dest;
	}
	if(nowY -1 >= 0 && field[nowY -1][nowX] === landType) {
		dest.nextY = nowY -1;
		return dest;
	}
	if(nowY +1 < gameBoard.FIELD_SIZE_Y && field[nowY +1][nowX] === landType) {
		dest.nextY = nowY +1;
		return dest;
	}
	return null;
};


/**
* 敵と衝突したときに、開拓を始めた初期の外延部に戻すために、対象の座標は開拓地がいくつ隣接しているか調査する
* @param field ゲーム盤情報
* @param noxX 調査対象X座標
* @param nowY 調査対象Y座標
* @param landType チェック対象の土地種別
* @return 開拓地（指定種類）の隣接数
*/
const chkIniPosi = (field, nowX, nowY, landType) => {
	
	let cnt = 0;
	if(nowX -1 >= 0 && field[nowY][nowX -1] === landType) {
		cnt = cnt + 1;
	}
	if(nowX +1 < gameBoard.FIELD_SIZE_X && field[nowY][nowX +1] === landType) {
		cnt = cnt + 1;
	}
	if(nowY -1 >= 0 && field[nowY -1][nowX] === landType) {
		cnt = cnt + 1;
	}
	if(nowY +1 < gameBoard.FIELD_SIZE_Y && field[nowY +1][nowX] === landType) {
		cnt = cnt + 1;
	}
	return cnt;
};


/**
* 衝突判定
* @param field ゲーム盤情報
* @param my 自分の位置情報
* @param obj 衝突判定相手の位置,サイズ情報
* @return 1以上は衝突/0は衝突してない
*/
const hitJudge = (field, my, obj) => {
	let cnt = 0;
	let posi = 4;

	// 現在位置が自分の土地の外周部でない場合（外周部は安全地帯）
	if(field[my.nowY][my.nowX] != MY_LAND) {
		// 自分の位置と、オブジェクトの位置からサイズ分膨れたのを考慮した位置が重なっていれば衝突扱い
		if (my.nowX >= obj.nowX - (Math.floor(obj.sizeX / posi)) && my.nowX <= obj.nowX + (Math.floor(obj.sizeX / posi))
				&& my.nowY >= obj.nowY - (Math.floor(obj.sizeY / posi)) && my.nowY <= obj.nowY + (Math.floor(obj.sizeY / posi))) {
			// 衝突時
			cnt = cnt + 1;
		}

		// 開拓中の土地でも衝突扱い
		for(let i=obj.nowY - (Math.floor(obj.sizeY / posi)); i <= obj.nowY + (Math.floor(obj.sizeY / posi)); i++) {
			for(let j=obj.nowX - (Math.floor(obj.sizeX / posi)); j <= obj.nowX + (Math.floor(obj.sizeX / posi)); j++) {
				if(i >= 0 && i < gameBoard.FIELD_SIZE_Y
					&& j >= 0 && j < gameBoard.FIELD_SIZE_X && field[i][j] == WORK_LAND) {
					cnt = cnt + 1;
				}
			}
		}
	}

	return cnt;
};


/**
* アイテム取得判定
* @param field ゲーム盤情報
* @param my 自分の位置情報
* @param obj アイテムの位置,サイズ情報
* @return true(取得した)/false(取得ではない)
*/
const getItemJudge = (field, my, obj) => {
	let cnt = 0;
	let posi = 2;

	// 自分の位置と、アイテムの位置からサイズ分膨れたのを考慮した位置が重なっていれば衝突扱い
	if (my.nowX >= obj.nowX - (Math.floor(obj.sizeX / posi)) && my.nowX <= obj.nowX + (Math.floor(obj.sizeX / posi))
			&& my.nowY >= obj.nowY - (Math.floor(obj.sizeY / posi)) && my.nowY <= obj.nowY + (Math.floor(obj.sizeY / posi))) {
		// 衝突時
		return true;
	}

	// 開拓中またはの土地でも衝突扱い
	for(let i=obj.nowY - (Math.floor(obj.sizeY / posi)); i <= obj.nowY + (Math.floor(obj.sizeY / posi)); i++) {
		for(let j=obj.nowX - (Math.floor(obj.sizeX / posi)); j <= obj.nowX + (Math.floor(obj.sizeX / posi)); j++) {
			if(i >= 0 && i < gameBoard.FIELD_SIZE_Y
				&& j >= 0 && j < gameBoard.FIELD_SIZE_X && (field[i][j] == WORK_LAND || field[i][j] == RENTAL_LAND)) {
				return true;
			}
		}
	}

	return false;
};


/**
* 塗りつぶし箇所走査処理
* 　boss位置を基点に平地箇所の判定を行う
* @param field ゲーム盤情報
* @param x boss現在位置X座標
* @param y boss現在位置Y座標
* @param landType チェック対象の土地種別
* @return 意味はない TODO
*/
const paintScan = (field, targetX, targetY) => {
	if(scanBuffIdx === 0) {
		scanBuff[1000-1] = null;
	} else {
		scanBuff[scanBuffIdx-1] = null;
	}

	// 走査済み土地の場合打ち切り
	if(field[targetY][targetX] === PAINT_LAND) {
		scanBuff[scanBuffIdx-1] = null;
		return;
	}

	const scanInfo = {
	  	upChkSkipFlg   : false
	  ,	downChkSkipFlg : false
	  ,	leftX          : targetX
	  ,	rightX         : targetX
	  ,	minY           : 0
	  ,	maxY           : gameBoard.FIELD_SIZE_Y
	};

	// 左端まで調査
	for(let i=targetX; i>=0; i--) {
		// 平地または開拓中の土地の場合
		if(field[targetY][i] === 0 || field[targetY][i] === 2) {
			// 一時的に書き換え対象土地として設定
			field[targetY][i] = PAINT_LAND;
			// 左端更新
			scanInfo.leftX = i;
		} else {
			// 左端調査終了
			break;
		}
	}

	// 右端まで調査
	for(let i=targetX+1; i<gameBoard.FIELD_SIZE_X; i++) {
		// 平地または開拓中の土地の場合
		if(field[targetY][i] === 0 || field[targetY][i] === 2) {
			// 一時的に書き換え対象土地として設定
			field[targetY][i] = PAINT_LAND;
			// 右端更新
			scanInfo.rightX = i;
		} else {
			// 左端調査終了
			break;
		}
	}

	// 左端から右端まで上下の調査を行い、塗りつぶし箇所を登録する
	for (let i=scanInfo.leftX; i<=scanInfo.rightX; i++) {
		// 上方向の検索
		if(targetY-1 >= scanInfo.minY) {
			if(scanInfo.upChkSkipFlg === true && !(field[targetY-1][i] === 0 || field[targetY-1][i] === 2)) {
				scanInfo.upChkSkipFlg = false;
			} else if(scanInfo.upChkSkipFlg === false && (field[targetY-1][i] === 0 || field[targetY-1][i] === 2)) {			
				const position = {
					targetX  : i
				  , targetY  : targetY-1
				};
				scanBuff[scanBuffSetIdx] = position;
				if(scanBuffSetIdx < 1000-1) {
					scanBuffSetIdx = scanBuffSetIdx + 1;
				} else {
					scanBuffSetIdx = 0;
				}
				// scanBuffSetIdx = scanBuffSetIdx + 1;
				scanInfo.upChkSkipFlg = true;
			}
		}

		// 下方向の検索
		if(targetY+1 < scanInfo.maxY) {
			if(scanInfo.downChkSkipFlg === true && !(field[targetY+1][i] === 0 || field[targetY+1][i] === 2)) {
				scanInfo.downChkSkipFlg = false;
			} else if(scanInfo.downChkSkipFlg === false && (field[targetY+1][i] === 0 || field[targetY+1][i] === 2)) {			
				const position = {
					targetX  : i
				  , targetY  : targetY+1
				};
				scanBuff[scanBuffSetIdx] = position;
				if(scanBuffSetIdx < 1000-1) {
					scanBuffSetIdx = scanBuffSetIdx + 1;
				} else {
					scanBuffSetIdx = 0;
				}
				// scanBuffSetIdx = scanBuffSetIdx + 1;
				scanInfo.downChkSkipFlg = true;
			}
		}		
	}

	// 次の走査対象に移行
	// TODO
	if (scanBuff[scanBuffIdx] != undefined && scanBuff[scanBuffIdx] != null
			&& field[scanBuff[scanBuffIdx].targetY][scanBuff[scanBuffIdx].targetX] != PAINT_LAND) {
		if(scanBuffIdx < 1000-1) {
			scanBuffIdx = scanBuffIdx + 1;
			paintScan(field, scanBuff[scanBuffIdx-1].targetX, scanBuff[scanBuffIdx-1].targetY);
		} else {
			scanBuffIdx = 0;
			paintScan(field, scanBuff[1000-1].targetX, scanBuff[1000-1].targetY);
		}
	}
	// if (scanBuffIdx != undefined && scanBuffIdx != null
	// 	) {
	// 	scanBuffIdx = scanBuffIdx + 1;
	// 	paintScan(field, scanBuff[scanBuffIdx-1].targetX, scanBuff[scanBuffIdx-1].targetY);
	// }

	return null;
};


/**
* ゲーム盤の平地走査処理後の値を描画可能状態に書き換える
* @param field ゲーム盤情報
*/
const paint = (field) => {
	if(paintFlg != true) {
		return null;
	}

	paintScan(field, arrChrObj[29].nowX, arrChrObj[29].nowY);

	/*
	 TODO 内部の円と外周で分断された状態で何らかの問題のより外周にテレポートした場合、領域を増やせなくなるので削除予定
	 		ただし、基本的に外にテレポートされる事態はないはずなのでとりあえずそのまま様子見
	*/
	// 外周は固定で自分の土地の外周部とする
	for(let i = 1; i < gameBoard.FIELD_SIZE_Y -1; i++) {
		for(let j = 1; j < gameBoard.FIELD_SIZE_X -1; j++) {
			if(field[i][j] != PAINT_LAND) {
				// PAINT_LANDでなく かつ 上下左右にPAINT_LANDがなければ RENTAL_LAND
				field[i][j] = RENTAL_LAND;
			}
		}
	}

	// PAINT_LANDではなく かつ 上下左右斜めにも PAINT_LANDがある場合 MY_LAND
	for(let i = 1; i < gameBoard.FIELD_SIZE_Y -1; i++) {
		for(let j = 1; j < gameBoard.FIELD_SIZE_X -1; j++) {
			if(field[i][j] === RENTAL_LAND) {

				// TODO 外周は固定で自分の土地の外周部としているので、+1や-1した先が盤上かのチェックを省いている
				// TODO for文に直す
				if((        field[i   ][j -1] === PAINT_LAND) // 左
						|| (field[i   ][j +1] === PAINT_LAND) // 右
						|| (field[i -1][j   ] === PAINT_LAND) // 上
						|| (field[i +1][j   ] === PAINT_LAND) // 下
						|| (field[i -1][j -1] === PAINT_LAND) // 左上
						|| (field[i -1][j +1] === PAINT_LAND) // 右上
						|| (field[i +1][j -1] === PAINT_LAND) // 左下
						|| (field[i +1][j +1] === PAINT_LAND) // 右下
						) {
					field[i][j] = MY_LAND;
				}
			}
		}
	}


	// PAINT_LANDを描画用にNORMAL_LANDに書き換え
	for(let i = 1; i < gameBoard.FIELD_SIZE_Y -1; i++) {
		for(let j = 1; j < gameBoard.FIELD_SIZE_X -1; j++) {
			if(field[i][j] === PAINT_LAND) {
				field[i][j] = NORMAL_LAND;
			}
		}
	}

	paintFlg = false;
};


/**
* オブジェクト達(ボスとアイテム)の移動
*   盤上内で収まるよう随時移動させる
* @param field ゲーム盤情報
*/
const moveObject = (field) => {
	for (let i=0; i<arrChrObj.length; i++) {
		// 自機とアイテムのいずれでもない場合は自動移動
		if(arrChrObj[i] != null && arrChrObj[i] != undefined && arrChrObj[i].chrType != undefined && arrChrObj[i].chrType != 0 && arrChrObj[i].chrType != 10 && arrChrObj[i].chrType != 20 && arrChrObj[i].chrType != 21) {

			// オブジェクトX座標に動かす
			for(let j=0; j<Math.abs(arrChrObj[i].vectorX); j++){
				// 移動前衝突判定
				hitCnt = hitCnt + hitJudge(field, arrChrObj[0], arrChrObj[i]);

				arrChrObj[i].nowX = arrChrObj[i].nowX + Math.sign(arrChrObj[i].vectorX);

				if (arrChrObj[i].nowX < 0) {
					// 盤上外(左)まで移動してないか判定
					// 盤外まで移動している場合盤内に戻す
					arrChrObj[i].nowX = 0;
					// 進む方向を逆方向に変更する
					arrChrObj[i].vectorX = Math.sign(arrChrObj[i].vectorX * -1 ) * (Math.floor( Math.random() * 6 ) + 3);
					break;
				} else if (arrChrObj[i].nowX >= gameBoard.FIELD_SIZE_X) {
					// 盤上外(右)まで移動していないか判定
					// 盤外まで移動している場合盤内に戻す
					arrChrObj[i].nowX = gameBoard.FIELD_SIZE_X - 1;
					// 進む方向を逆方向に変更する
					arrChrObj[i].vectorX = Math.sign(arrChrObj[i].vectorX * -1 ) * (Math.floor( Math.random() * 6 ) + 3);
					break;
				} else if (field[arrChrObj[i].nowY][arrChrObj[i].nowX] === MY_LAND
						|| field[arrChrObj[i].nowY][arrChrObj[i].nowX] === RENTAL_LAND) {
					// 土地外周部,内部の場合も引き返す
					arrChrObj[i].nowX = arrChrObj[i].nowX - Math.sign(arrChrObj[i].vectorX);
					// 進む方向を逆方向に変更する
					arrChrObj[i].vectorX = Math.sign(arrChrObj[i].vectorX * -1 ) * (Math.floor( Math.random() * 6 ) + 3);
				}
				
				// 移動後衝突判定
				hitCnt = hitCnt + hitJudge(field, arrChrObj[0], arrChrObj[i]);

			}

			// オブジェクトY座標に動かす	
			for(let j=0; j<Math.abs(arrChrObj[i].vectorY); j++){
				// 移動前衝突判定
				hitCnt = hitCnt + hitJudge(field, arrChrObj[0], arrChrObj[i]);

				arrChrObj[i].nowY = arrChrObj[i].nowY + Math.sign(arrChrObj[i].vectorY);
				if (arrChrObj[i].nowY < 0) {
					// 盤上外(上)まで移動してないか判定
					// 盤外まで移動している場合盤内に戻す
					arrChrObj[i].nowY = 0;
					// 進む方向を逆方向に変更する
					arrChrObj[i].vectorY = Math.sign(arrChrObj[i].vectorY * -1 ) * (Math.floor( Math.random() * 6 ) + 3);
					break;
				} else if (arrChrObj[i].nowY >= gameBoard.FIELD_SIZE_Y) {
					// 盤上外(下)まで移動していないか判定

					// 盤外まで移動している場合盤内に戻す
					arrChrObj[i].nowY = gameBoard.FIELD_SIZE_Y - 1;
					// 進む方向を逆方向に変更する
					arrChrObj[i].vectorY = Math.sign(arrChrObj[i].vectorY * -1 ) * (Math.floor( Math.random() * 6 ) + 3);
					break;
				} else if (field[arrChrObj[i].nowY][arrChrObj[i].nowX] === MY_LAND
						|| field[arrChrObj[i].nowY][arrChrObj[i].nowX] === RENTAL_LAND) {
							// 土地外周部,内部の場合も引き返す

					arrChrObj[i].nowY = arrChrObj[i].nowY - Math.sign(arrChrObj[i].vectorY);
					// 進む方向を逆方向に変更する
					arrChrObj[i].vectorY = Math.sign(arrChrObj[i].vectorY * -1 ) * (Math.floor( Math.random() * 6 ) + 3);

				}
				
				// 移動後衝突判定
				hitCnt = hitCnt + hitJudge(field, arrChrObj[0], arrChrObj[i]);

			}
		}

		// 勉強ポイント!! #007 ショートサーキット評価の書き方
		// アイテムの場合は移動無しで接触判定のみ
		if(arrChrObj[i] != null 
				&& arrChrObj[i] != undefined 
				&& arrChrObj[i].chrType != undefined 
				&& arrChrObj[i].chrType != 0 
				&& arrChrObj[i].chrType != 10 
				&& arrChrObj[i].chrType != 70 
				&& arrChrObj[i].chrType != 71 
				&& arrChrObj[i].chrType != 72 
				&& arrChrObj[i].chrType != 73) {

			if(getItemJudge(field, arrChrObj[0], arrChrObj[i]) === true) {
				
				// アイテムゲット音
				if(muteFlg === false) {
					sound.itemgetMusic = document.getElementById("itemgetMusic");
					sound.itemgetMusic.muted = false;
					sound.itemgetMusic.pause();
					sound.itemgetMusic.currentTime = 0;
					sound.itemgetMusic.play();
				}

				// ゲットの場合アイテム種別判定
				if(arrChrObj[i].chrType === 20) {
					// ライフアップ
					gameBoard.LIFE = gameBoard.LIFE + 1;

				} else if(arrChrObj[i].chrType === 21) {
					// スピードアップ
					arrChrObj[0].mySpeed = arrChrObj[0].mySpeed +5;
				}
				// アイテム取得済み設定
				arrChrObj[i] = undefined;
			}
		}
	}
	// 衝突発生時ペナルティ
	if (hitCnt >= 1) {
		// 衝突音
		if (muteFlg === false) {
			sound.workMusic = document.getElementById("workMusic");
			sound.workMusic.pause();
			sound.crashMusic = document.getElementById("crashMusic");
			sound.crashMusic.muted = false;
			sound.crashMusic.pause();
			sound.crashMusic.currentTime = 0;
			sound.crashMusic.play();
		}

		// ライフ減らす
		gameBoard.LIFE = gameBoard.LIFE - 1;

		// 墓状態に設定
		haka.flg = true;
		haka.count = 0;
		haka.nowX = arrChrObj[0].nowX;
		haka.nowY = 0;
		haka.hakaX = arrChrObj[0].nowX;
		haka.hakaY = arrChrObj[0].nowY;
	}
};



/**
* 敵と衝突したときは開拓初期値に戻す
* @param field ゲーム盤情報
*/
const moveIniPosi = (field) => {
	
	// 外周部と開拓中の土地が並びあっているところを探す
	for(let i = 0; i  < gameBoard.FIELD_SIZE_Y; i++) {
		for(let j = 0; j < gameBoard.FIELD_SIZE_X; j++) {
			if(field[i][j] === MY_LAND && chkIniPosi(field, j, i, WORK_LAND) === 1) {
				// 安全地帯の開拓初期横の外周部に現在位置を移動する
				arrChrObj[0].nowX = j;
				arrChrObj[0].nowY = i;
			}
		}
	}
};



/*
	TODO 現在こっち使用中（確認取れたらコメント等消す）
*/
/**
* 一番近い外周部（安全地帯）を探す
* @param field ゲーム盤情報
*/
const searchSafety = (field) => {
	// 基準地点(今)
	const sts = {
	      baseX  :  arrChrObj[0].nowX
	    , baseY  :  arrChrObj[0].nowY
	};

	// 自分の現在位置を自分の土地の外周部の近いところに移動させる
	/*
		下記のような順でサーチ
		　13
		24５14
	　2312１６15
	2211４今２７16
	　2110３８17
		20９18
		　19
	*/

	let idxX =  0;
	let idxY = -1;
	let loopCnt = 1;
	// 固定で一つ上を先にサーチしておく
	if(field[sts.baseY + idxY][sts.baseX + idxX] === MY_LAND) {
		arrChrObj[0].nowX = sts.baseX + idxX;
		arrChrObj[0].nowY = sts.baseY + idxY;
		return sts;
	}

	// 本探索処理
	movePositionSearch:
	while (true) {

		// 右下方向に検索
		// loopCnt分だけ繰り返すという意味で、このカウント値は他に何も使わない
		for(let rd=0; rd<loopCnt; rd++) {
			idxX = idxX + 1;
			idxY = idxY + 1;
			if(field[sts.baseY + idxY][sts.baseX + idxX] === MY_LAND) {
				arrChrObj[0].nowX = sts.baseX + idxX;
				arrChrObj[0].nowY = sts.baseY + idxY;
				break movePositionSearch;
			}
		}

		// 左下方向に検索
		// loopCnt分だけ繰り返すという意味で、このカウント値は他に何も使わない
		for(let ld=0; ld<loopCnt; ld++) {
			idxX = idxX - 1;
			idxY = idxY + 1;
			if(field[sts.baseY + idxY][sts.baseX + idxX] === MY_LAND) {
				arrChrObj[0].nowX = sts.baseX + idxX;
				arrChrObj[0].nowY = sts.baseY + idxY;
				break movePositionSearch;
			}
		}

		// 左上方向に検索
		// loopCnt分だけ繰り返すという意味で、このカウント値は他に何も使わない
		for(let lu=0; lu<loopCnt; lu++) {
			idxX = idxX - 1;
			idxY = idxY - 1;
			if(field[sts.baseY + idxY][sts.baseX + idxX] === MY_LAND) {
				arrChrObj[0].nowX = sts.baseX + idxX;
				arrChrObj[0].nowY = sts.baseY + idxY;
				break movePositionSearch;
			}
		}

		// 右上方向に検索
		// loopCnt分だけ繰り返すという意味で、このカウント値は他に何も使わない
		for(let ru=0; ru<loopCnt; ru++) {
			if (ru + 1 === loopCnt) {
				// 最後の移動は上にさらに移動
				idxX = idxX + 1;
				idxY = idxY - 1 -1;
			} else {
				// 通常移動
				idxX = idxX + 1;
				idxY = idxY - 1;
			}
			if(field[sts.baseY + idxY][sts.baseX + idxX] === MY_LAND) {
				arrChrObj[0].nowX = sts.baseX + idxX;
				arrChrObj[0].nowY = sts.baseY + idxY;
				break movePositionSearch;
			}
		}

		loopCnt = loopCnt + 1;
	}

	return sts;
};


/*
	TODO 没にしたのである程度確認取れたら消す
*/
/**
* 一番近い外周部（安全地帯）を探す
* @param field ゲーム盤情報
*/
const oldsearchSafety = (field) => {
	const sts = {
	      baseX  :  arrChrObj[0].nowX
	    , baseY  :  arrChrObj[0].nowY
	};
	// 自分の現在位置を自分の土地の外周部の近いところに移動させる
	/*
		下記のような順でサーチ
		９1011
		８１２
		７今３
		６５４
	*/
	let idxX = -1;
	let idxY =  0;
	let loopCnt = 1;
	movePositionSearch:
	while (true) {
		// 上方向に検索
		idxX = idxX + 1;
		idxY = idxY - 1;
		for(let u=0; u<loopCnt; u++) {
			if(field[sts.baseY + idxY][sts.baseX + idxX] === MY_LAND) {
				arrChrObj[0].nowX = sts.baseX + idxX;
				arrChrObj[0].nowY = sts.baseY + idxY;
				break movePositionSearch;
			}
			idxY = idxY - 1;
		}

		// 右方向に検索
		idxX = idxX + 1;
		idxY = idxY + 1;
		for(let r=0; r<loopCnt; r++) {
			if(field[sts.baseY + idxY][sts.baseX + idxX] === MY_LAND) {
				arrChrObj[0].nowX = sts.baseX + idxX;
				arrChrObj[0].nowY = sts.baseY + idxY;
				break movePositionSearch;
			}
			idxX = idxX + 1;
		}

		loopCnt = loopCnt + 1;

		// 下方向に検索
		idxX = idxX - 1;
		idxY = idxY + 1;
		for(let d=0; d<loopCnt; d++) {
			if(field[sts.baseY + idxY][sts.baseX + idxX] === MY_LAND) {
				arrChrObj[0].nowX = sts.baseX + idxX;
				arrChrObj[0].nowY = sts.baseY + idxY;
				break movePositionSearch;
			}
			idxY = idxY + 1;
		}

		// 左方向に検索
		idxX = idxX - 1;
		idxY = idxY - 1;
		for(let l=0; l<loopCnt; l++) {
			if(field[sts.baseY + idxY][sts.baseX + idxX] === MY_LAND) {
				arrChrObj[0].nowX = sts.baseX + idxX;
				arrChrObj[0].nowY = sts.baseY + idxY;
				break movePositionSearch;
			}
			idxX = idxX - 1;
		}

		loopCnt = loopCnt + 1;
	}

	return sts;
};


/**
* ゲーム盤初期化
*   ゲーム盤情報を0埋めで初期化
*   外周だけ陣地陣地(2)で埋める
* @param field ゲーム盤情報
* @return 初期化後ゲーム盤情報
*/
const iniField = (field) => {
	// 盤用の変数を生成
	field = new Array(gameBoard.FIELD_SIZE_Y);
	for(let j = 0; j < gameBoard.FIELD_SIZE_X; j++) {
		field[j] = new Array(gameBoard.FIELD_SIZE_X).fill(0);	
	}

	// 生成した盤外周を自分の陣地に設定
	for(let i = 0; i  < gameBoard.FIELD_SIZE_Y; i++) {
		for(let j = 0; j < gameBoard.FIELD_SIZE_X; j++) {
			if (i === 0 
				|| i === gameBoard.FIELD_SIZE_Y-1 
				|| j === 0 
				|| j === gameBoard.FIELD_SIZE_X-1) {
				
				// 外周のドットは自分の陣地として初期設定
				field[i][j] = MY_LAND;
			}
		}
	}

	return field;
};


/**
* フィールド状態を描画する 
* @param field 描画対象のゲーム盤情報
*/
const drawFieldSts = (field) => {

	// 盤上の陣地状態を出力
	// TODO 重たくて一旦廃止
	// for(let i = 0; i  < gameBoard.FIELD_SIZE_Y; i++) {
	// 	for(let j = 0; j < gameBoard.FIELD_SIZE_X; j++) {
	// 		// 土地のステータスによって色を付ける
	// 		switch (field[i][j]){
	// 			// 開拓中の土地
	// 			case WORK_LAND:
	// 				context.fillStyle = "white";
	// 				context.fillRect(j, i, 1, 1);
	// 				break;
	// 			// 自分の土地の端
	// 			case MY_LAND:
	// 				context.fillStyle = "blue";
	// 				context.fillRect(j, i, 1, 1);
	// 				break;
	// 			// レンタル済みの自分の土地（内側）
	// 			case RENTAL_LAND:
	// 				context.fillStyle = "yellow";
	// 				context.fillRect(j, i, 1, 1);
	// 				break;
	// 		}
	// 	}
	// }

	// 盤上の陣地状態を出力
	if(gameBoard.TERRITORY <= 50) {
		// 前半戦
		for(let i = 0; i  < gameBoard.FIELD_SIZE_Y; i++) {
			for(let j = 0; j < gameBoard.FIELD_SIZE_X; j++) {

				let sameColorArea = 0;
				// 右横に同じ色が続いていないか調べる
				for(let k=1; j+k < gameBoard.FIELD_SIZE_X; k++) {
					if(field[i][j] === field[i][j+k]) {
						// 同じ色の場合そのまま一度に塗る情報格納
						sameColorArea = sameColorArea + 1;
					} else {
						// 別の色の場合は探索処理終了
						break;
					}
				}

				// 土地のステータスによって色を付ける
				if (field[i][j] === WORK_LAND) {
					// 開拓中の土地
					context.fillStyle = "white";
					// 指定範囲色塗り
					context.fillRect(j, i, 1 + sameColorArea, 1);
				} else if (field[i][j] === MY_LAND) {
					// 自分の土地の端
					context.fillStyle = "blue";
					// 指定範囲色塗り
					context.fillRect(j, i, 1 + sameColorArea, 1);
				} else if (field[i][j] === RENTAL_LAND) {
					// レンタル済みの自分の土地（内側）
					context.fillStyle = "yellow";
					// 指定範囲色塗り
					context.fillRect(j, i, 1 + sameColorArea, 1);
				}

				// 複数右横に一度に塗った分位置を調整
				j = j + sameColorArea;
			}
		}
	} else {
		// 後半戦
		for(let i = 0; i  < gameBoard.FIELD_SIZE_Y; i++) {
			for(let j = 0; j < gameBoard.FIELD_SIZE_X; j++) {

				let sameColorArea = 0;
				// 右横に同じ色が続いていないか調べる
				for(let k=1; j+k < gameBoard.FIELD_SIZE_X; k++) {
					if(field[i][j] === field[i][j+k]) {
						// 同じ色の場合そのまま一度に塗る情報格納
						sameColorArea = sameColorArea + 1;
					} else {
						// 別の色の場合は探索処理終了
						break;
					}
				}

				// 土地のステータスによって色を付ける
				if (field[i][j] === WORK_LAND) {
					// 開拓中の土地
					context.fillStyle = "white";
					// 指定範囲色塗り
					context.fillRect(j, i, 1 + sameColorArea, 1);
				} else if (field[i][j] === MY_LAND) {
					// 自分の土地の端
					context.fillStyle = "blue";
					// 指定範囲色塗り
					context.fillRect(j, i, 1 + sameColorArea, 1);
				} else if (field[i][j] === NORMAL_LAND) {
					// レンタル済みの自分の土地（内側）
					context.fillStyle = "pink";
					// 指定範囲色塗り
					context.fillRect(j, i, 1 + sameColorArea, 1);
				}

				// 複数右横に一度に塗った分位置を調整
				j = j + sameColorArea;
			}
		}
	}
};


/**
* オブジェクトを描画する 
* @param field 描画対象のゲーム盤情報
*/
const drawObjImage = (field) => {
	let objDraw = {
		 image : null,
		 sizeX : null, // TODO 使ってない
		 sizeY : null  // TODO 使ってない
	};

	// 従来の書き方だとこうなる
	// for (let i=0; i<arrChrObj.length; i++) {
	// 	if(arrChrObj[i] != null && arrChrObj[i] != undefined && arrChrObj[i].chrType != null && arrChrObj[i].chrType != undefined) {
	// 		// 各オブジェクト描画
	// 		switch (arrChrObj[i].chrType){
	// 			case 10:
	// 				// 自分
	// 				objDraw.image = objImage.my;
	// 				break;
	// 			case 20:
	// 				// ライフ回復
	// 				objDraw.image = objImage.lifeUp
	// 				break;
	// 			case 21:
	// 				// スピードアップ
	// 				objDraw.image = objImage.speedUp
	// 				break;
	// 			case 22:
	// 				// ボス拘束
	// 				objDraw.image = objImage.bossStop
	// 				break;
	// 			case 70:
	// 				// 敵
	// 				bossImgChgCnt = bossImgChgCnt + 1;
	// 				if(bossImgChgCnt >= 40) bossImgChgCnt = 0;
	// 				if(bossImgChgCnt < 10) objDraw.image = objImage.boss.boss1;
	// 				else if(bossImgChgCnt < 20) objDraw.image = objImage.boss.boss2;
	// 				else if(bossImgChgCnt < 30) objDraw.image = objImage.boss.boss3;
	// 				else if(bossImgChgCnt < 40) objDraw.image = objImage.boss.boss4;
					
	// 				break;
	// 			case 71:
	// 				// 敵攻撃1
	// 				objDraw.image = objImage.bossAtack1
	// 				// 回転時に位置調整してるのでこの場合は調整不要
	// 				// imageRotate(arrChrObj[i].nowX - (arrChrObj[i].sizeX / 2), arrChrObj[i].nowY - (arrChrObj[i].sizeY / 2), bossAtk1Angle, objDraw)
	// 				imageRotate(arrChrObj[i].nowX, arrChrObj[i].nowY, bossAtk1Angle, objDraw)
					
	// 				// 右回転
	// 				bossAtk1Angle = bossAtk1Angle + 12;
	// 				if(bossAtk1Angle >= 360) {
	// 					bossAtk1Angle = 0;
	// 				}
	// 				// 個別表示した為、nullに設定
	// 				objDraw.image = null;
	// 				break;
	// 			case 72:
	// 				// 敵攻撃2
	// 				objDraw.image = objImage.bossAtack2
	// 				// 回転時に位置調整してるのでこの場合は調整不要
	// 				// imageRotate(arrChrObj[i].nowX - (arrChrObj[i].sizeX / 2), arrChrObj[i].nowY - (arrChrObj[i].sizeY / 2), bossAtk2Angle, objDraw)
	// 				imageRotate(arrChrObj[i].nowX, arrChrObj[i].nowY, bossAtk2Angle, objDraw)
					
	// 				// 右回転
	// 				bossAtk2Angle = bossAtk2Angle - 24;
	// 				if(bossAtk2Angle <= 0) {
	// 					bossAtk2Angle = 360;
	// 				}
	// 				// 個別表示した為、nullに設定
	// 				objDraw.image = null;
	// 				break;
	// 			case 73:
	// 				// 敵攻撃3
	// 				objDraw.image = objImage.bossAtack3
	// 				break;
	// 		}

	// 		// 指定位置にオブジェクトを描画する
	// 		if(objDraw.image != null) {
	// 			// オブジェクトを描画
	// 			context.drawImage(objDraw.image, arrChrObj[i].nowX - (arrChrObj[i].sizeX / 2), arrChrObj[i].nowY - (arrChrObj[i].sizeY / 2)); // TODO 指定座標が真ん中になるように画像を表示させないとダメな気がする
	// 		}
	// 	}
	// }
	// 勉強ポイント!! #013 forEachおまけ(ラムダ組み合わせ)の書き方
	arrChrObj.forEach((value) => {
		if(value != null && value != undefined && value.chrType != null && value.chrType != undefined) {
			// 各オブジェクト描画
			switch (value.chrType){
				case 10:
					// 自分
					objDraw.image = objImage.my;
					break;
				case 20:
					// ライフ回復
					objDraw.image = objImage.lifeUp
					break;
				case 21:
					// スピードアップ
					objDraw.image = objImage.speedUp
					break;
				case 22:
					// ボス拘束
					objDraw.image = objImage.bossStop
					break;
				case 70:
					// 敵
					bossImgChgCnt = bossImgChgCnt + 1;
					if(bossImgChgCnt >= 40) bossImgChgCnt = 0;
					if(bossImgChgCnt < 10) objDraw.image = objImage.boss.boss1;
					else if(bossImgChgCnt < 20) objDraw.image = objImage.boss.boss2;
					else if(bossImgChgCnt < 30) objDraw.image = objImage.boss.boss3;
					else if(bossImgChgCnt < 40) objDraw.image = objImage.boss.boss4;
					
					break;
				case 71:
					// 敵攻撃1
					objDraw.image = objImage.bossAtack1
					// 回転時に位置調整してるのでこの場合は調整不要
					// imageRotate(value.nowX - (value.sizeX / 2), value.nowY - (value.sizeY / 2), bossAtk1Angle, objDraw)
					imageRotate(value.nowX, value.nowY, bossAtk1Angle, objDraw)
					
					// 右回転
					bossAtk1Angle = bossAtk1Angle + 12;
					if(bossAtk1Angle >= 360) {
						bossAtk1Angle = 0;
					}
					// 個別表示した為、nullに設定
					objDraw.image = null;
					break;
				case 72:
					// 敵攻撃2
					objDraw.image = objImage.bossAtack2
					// 回転時に位置調整してるのでこの場合は調整不要
					// imageRotate(value.nowX - (value.sizeX / 2), value.nowY - (value.sizeY / 2), bossAtk2Angle, objDraw)
					imageRotate(value.nowX, value.nowY, bossAtk2Angle, objDraw)
					
					// 右回転
					bossAtk2Angle = bossAtk2Angle - 24;
					if(bossAtk2Angle <= 0) {
						bossAtk2Angle = 360;
					}
					// 個別表示した為、nullに設定
					objDraw.image = null;
					break;
				case 73:
					// 敵攻撃3
					objDraw.image = objImage.bossAtack3
					break;
			}

			// 指定位置にオブジェクトを描画する
			if(objDraw.image != null) {
				// オブジェクトを描画
				context.drawImage(objDraw.image, value.nowX - (value.sizeX / 2), value.nowY - (value.sizeY / 2)); // TODO 指定座標が真ん中になるように画像を表示させないとダメな気がする
			}
		}
	});

	// 墓状態であれば墓表示
	if (haka.flg === true) {
		// 墓画像
		objDraw.image = objImage.haka;
		context.drawImage(objDraw.image, haka.nowX - (objDraw.image.width / 2), haka.nowY - (objDraw.image.height / 2));
		
		if (haka.nowY < haka.hakaY) {
			haka.nowY = haka.nowY + 20;
		}
		if (haka.nowY > haka.hakaY) {
			haka.nowY = haka.hakaY;
		}
		haka.count++;

		// 墓解除判定
		if(haka.count >= 120) {
			haka.count = 0;
			haka.flg = false;

			// 自機を安全地帯に移動
			moveIniPosi(field);

			// 開拓中の土地をすべて平地に戻す
			for(let k = 1; k < gameBoard.FIELD_SIZE_Y -1; k++) {
				for(let l = 1; l < gameBoard.FIELD_SIZE_X -1; l++) {
					if(field[k][l] === WORK_LAND) {
						field[k][l] = NORMAL_LAND;
					}
				}
			}

			// 衝突判定初期化
			hitCnt = 0;
		}
	}
};


/* 
	  TODO 今使ってない
*/
/**
* オブジェクトを描画する 
* @param field 描画対象のゲーム盤情報
*/
const oldDrawObjImage = (field) => {
	for(let i = 0; i < gameBoard.FIELD_SIZE_Y ; i++) {
		for (let j = 0; j < gameBoard.FIELD_SIZE_X; j++) {
			let objDraw = {
				 image : null,
				 sizeX : null, // TODO 使ってない
				 sizeY : null  // TODO 使ってない
			};

			// ボールを描画
			switch (field[i][j]){
				case 10:
					// 自分
					objDraw.image = objImage.my;
					break;
				case 20:
					// ライフ回復
					objDraw.image = objImage.lifeUp
					break;
				case 21:
					// スピードアップ
					objDraw.image = objImage.speedUp
					break;
				case 22:
					// ボス拘束
					objDraw.image = objImage.bossStop
					break;
				case 70:
					// 敵
					objDraw.image = objImage.boss
					break;
				case 71:
					// 敵攻撃1
					objDraw.image = objImage.bossAtack1
					break;
				case 72:
					// 敵攻撃2
					objDraw.image = objImage.bossAtack2
					break;
				case 73:
					// 敵攻撃3
					objDraw.image = objImage.bossAtack3
					break;
			}

			// 指定位置にオブジェクトを描画する
			if(objDraw.image != null) {
				// オブジェクトを描画
				context.drawImage( objDraw.image, j, i); // TODO 指定座標が真ん中になるように画像を表示させないとダメな気がする
			}
		}
	}
};


/**
* 残ライフを描画する
*/
const drawLife = () => {
	// 表示フォント設定
	context.font = "12px Arial";
	context.fillStyle = "purple";
	// ライフを描画(大体左上の方)
	let dispText = "LIFE:" + gameBoard.LIFE;
	context.fillText( dispText, 150, 20) ;
	// 残ライフ無しによるゲームオーバー
	if (gameBoard.LIFE <= 0) {
		gameOverFlg = true;
	}

};


/**
*	残り時間を描画する
*/
const drawTime = () => {
	// 表示フォント設定
	context.font = "12px Arial";
	context.fillStyle = "purple";

	// 残り時間を描画(真ん中上の方)
	gameBoard.TIME = 180 -(Math.floor((performance.now() - startTime) / 1000));
	let dispText = "TIME:" + ( '000' + (gameBoard.TIME)).slice(-3);
	// 残タイム無しによるゲームオーバー
	if (180 -(Math.floor((performance.now() - startTime) / 1000)) < 0) {
		gameOverFlg = true;
	}
	let textWidth = context.measureText(dispText).width;
	context.fillText( dispText, (gameBoard.FIELD_SIZE_X - textWidth) / 2, 20);
};


/**
* 取得テリトリー(%)を描画する
* @param field 描画対象のゲーム盤情報
*/
const drawTerritory = (field) => {	
	let count = 0;
	let alldot = gameBoard.FIELD_SIZE_Y * gameBoard.FIELD_SIZE_X;
	// 盤上のテリトリーをカウント
	for(let i = 0; i  < gameBoard.FIELD_SIZE_Y; i++) {
		for(let j = 0; j < gameBoard.FIELD_SIZE_X; j++) {
			// 土地のステータスによって色を付ける
			if(field[i][j] != NORMAL_LAND){
				count = count + 1;
			}
		}
	}

	// 表示フォント設定
	context.font = "12px Arial";
	context.fillStyle = "purple";

	// テリトリー率を描画(左上)
	gameBoard.TERRITORY = Math.floor(count / alldot * 100);
	let dispText = "TERRITORY:" + ('000' + gameBoard.TERRITORY).slice(-3) + "%";
	// テリトリー80%超えによりクリア
	if (gameBoard.TERRITORY >= 80) {
		endFlg = true;
	}
	// テリトリー値設定

	// 左上に描画
	context.fillText( dispText, 10, 20);
};


/**
* FPSを描画する
*/
const frameDisp = () => {
	// フレーム描画終了時刻を取得
	fps.finishTime = performance.now();
	
	// FPS計算処理(毎回新しい値を描画すると速すぎて見えないため0.x秒くらいに一回)
	if(fps.fpsCount > 30) {
		// １秒あたりの描画回数を求めて、小数点２位までを保存toFixed(2)後、先頭0埋め.sliceで右からn文字を取得
		fps.dispFPS = (("00" + (1000 / (fps.finishTime - fps.startTime)).toFixed(2))).slice(-6);
		// fps表示カウントを初期化
		fps.fpsCount = 0;
	}

	// 次のフレーム開始時間を保存
	fps.startTime = fps.finishTime;
	// 表示フォント設定
	context.font = "12px Arial";
	context.fillStyle = "black";
	// FPSを描画(大体右上の方)
	context.fillText(fps.dispFPS + "fps", gameBoard.FIELD_SIZE_X - 60, 20);
	// FPS表示カウントを加算
	fps.fpsCount++;
};


/**
*	ゲームオーバー表示
*/
const gameOver = () => {
	// 画面を緑に塗りつぶし
	context.fillStyle = "orange";
	context.fillRect(0, 0, gameBoard.FIELD_SIZE_X, gameBoard.FIELD_SIZE_Y);
	
	// ゲームオーバーループ突入
	requestAnimationFrame(gameOverLoop);
};

/**
*	ゲームオーバーアニメーション表示
*/
const gameOverLoop = () => {
	let objDraw = {
		 image : null
	};
	let image = Math.floor( Math.random() * 3 );
	objDraw.image = objImage.bossAtack1;

	// 指定位置にオブジェクトを描画する
	if(objDraw.image != null) {
		context.save();
		// 基準位置変える
		context.translate(Math.floor( Math.random() * 600 ), Math.floor( Math.random() * 400 ));
		// 回転する
		context.rotate(Math.floor( Math.random() * 360) * (Math.PI/180));
		context.drawImage(objDraw.image, -(objDraw.image.width/2), -(objDraw.image.height/2));
		context.restore();

		// 回転画像表示
		imageRotate(Math.random() * 600, Math.random() * 400, Math.random() * 360, objDraw);
	}

	// ゲームオーバーループ再起呼び出し
	if(gameOverCnt < 150) {
		gameOverCnt++;
		requestAnimationFrame(gameOverLoop);
		objDraw.image = objImage.gameover;
		context.drawImage(objDraw.image, gameBoard.FIELD_SIZE_X/2 -324/2, gameBoard.FIELD_SIZE_Y/2 - 77/2);
	} else {
		// ゲームオーバーなのでリロードしてメニュー画面に戻る
		location.reload();
	}
};


/**
* 画像回転表示
* @param baseX 基準X座標
* @param baseY 基準Y座標
* @param angle 回転角度
* @param objDraw 描画対象の画像情報
*/
const imageRotate = (baseX, baseY, angle, objDraw) => {
	context.save();
	// 基準位置変える
	context.translate(Math.floor(baseX), Math.floor(baseY));
	// 回転する
	context.rotate(Math.floor(angle) * (Math.PI/180));
	context.drawImage(objDraw.image, -(objDraw.image.width/2), -(objDraw.image.height/2));
	// 基準戻す
	context.restore();
};


/**
* 画像回転表示サイズ指定あり
* @param baseX 基準X座標
* @param baseY 基準Y座標
* @param sizeX 画像サイズ横
* @param sizeY 画像サイズ縦
* @param angle 回転角度
* @param objDraw 描画対象の画像情報
*/
const imageRotateSize = (baseX, baseY, sizeX, sizeY, angle, objDraw) => {
	context.save();
	// 基準位置変える
	context.translate(Math.floor(baseX), Math.floor(baseY));
	// 回転する
	context.rotate(Math.floor(angle) * (Math.PI/180));
	context.drawImage(objDraw.image, -(sizeX/2), -(sizeY/2), sizeX, sizeY);
	// 基準戻す
	context.restore();
};


/**
* 音量変更
* @param newSoundVolume 新しい音量値
*/
function volumeChange(newSoundVolume){
	// 音量変数を新しい値に更新
	sound.volume = Number(newSoundVolume);
	// 新しい音量を設定
	for(let i=0; i<sound.music.length; i++) {
		document.getElementById(sound.music[i]).volume = sound.volume;
	}
	// ミュート判定
	if(sound.volume === 0) {
		// ミュートの場合
		document.getElementById("volumeIcon").src = "./images/muteIcon.png";
		// document.getElementById("topMusic").muted = true;
		//音楽とめたほうがいいか？
		//document.getElementById("topMusic").pause();
	} else {
		// ミュートでない場合
		document.getElementById("volumeIcon").src = "./images/musicIcon.png";
		document.getElementById("topMusic").muted = false;
		//音楽とめてたら再生する感じにするか？
		//document.getElementById("topMusic").play();
	}
}


/**
* ミュートボタンが押された時のミュート処理
*/
function volumeMute() {
	// ミュート判定
	if(document.getElementById("topMusic").muted === true) {
		// ミュートの場合ミュート解除
		document.getElementById("volumeIcon").src = "./images/musicIcon.png";
		document.getElementById("topMusic").muted = false;
		document.getElementById("battleMusic").muted = false;
		document.getElementById("crashMusic").muted = false;
		document.getElementById("decisionMusic").muted = false;
		document.getElementById("gameclearMusic").muted = false;
		document.getElementById("gameoverMusic").muted = false;
		document.getElementById("moveMusic").muted = false;
		document.getElementById("itemgetMusic").muted = false;
		document.getElementById("territorygetMusic").muted = false;
		document.getElementById("workMusic").muted = false;
		muteFlg = false;
		//音楽とめてたら再生する感じにするか？
		//document.getElementById("topMusic").play();
	} else {
		// ミュートでない場合ミュートに変更
		document.getElementById("volumeIcon").src = "./images/muteIcon.png";
		document.getElementById("topMusic").muted = true;
		document.getElementById("battleMusic").muted = true;
		document.getElementById("crashMusic").muted = true;
		document.getElementById("decisionMusic").muted = true;
		document.getElementById("gameclearMusic").muted = true;
		document.getElementById("gameoverMusic").muted = true;
		document.getElementById("moveMusic").muted = true;
		document.getElementById("itemgetMusic").muted = true;
		document.getElementById("territorygetMusic").muted = true;
		document.getElementById("workMusic").muted = true;

		muteFlg = true;
		//音楽とめたほうがいいか？
		//document.getElementById("topMusic").pause();
	}
}


/**
*	ゲームクリア表示
*/
const gameClear = () => {
	// 画面を緑に塗りつぶし
	context.fillStyle = "green";
	context.fillRect(0, 0, gameBoard.FIELD_SIZE_X, gameBoard.FIELD_SIZE_Y);
	
	if(muteFlg === false) {
		sound.battleMusic = document.getElementById("battleMusic");
		sound.battleMusic.pause();
		sound.gameclearMusic = document.getElementById("gameclearMusic");
		sound.gameclearMusic.muted = false;
		sound.gameclearMusic.pause();
		sound.gameclearMusic.currentTime = 0;
		sound.gameclearMusic.play();
	}

	// ゲームクリアループ突入
	requestAnimationFrame(gameClearLoop);
};


/**
*	ゲームクリアアニメーション表示
*/
const gameClearLoop = () => {
	let objDraw = {
		 image : null
	};
	let image = Math.floor( Math.random() * 3 );
	if(image === 0) objDraw.image = objImage.boss.boss1;
	else if(image === 1) objDraw.image = objImage.boss.boss2;
	else if(image === 2) objDraw.image = objImage.boss.boss3;
	else if(image === 3) objDraw.image = objImage.boss.boss4;

	// 指定位置にオブジェクトを描画する
	if(objDraw.image != null) {
		context.save();
		// 基準位置変える
		context.translate(Math.floor( Math.random() * 600 ), Math.floor( Math.random() * 400 ));
		// 回転する
		context.rotate(Math.floor( Math.random() * 360) * (Math.PI/180));
		context.drawImage(objDraw.image, -(objDraw.image.width/2), -(objDraw.image.height/2));
		context.restore();
	}

	// ゲームクリアループ再起呼び出し
	if(gameClearCnt < 150) {
		gameClearCnt++;
		objDraw.image = objImage.gameclear;
		context.drawImage(objDraw.image, gameBoard.FIELD_SIZE_X/2 -356/2, gameBoard.FIELD_SIZE_Y/2 - 77/2);
		requestAnimationFrame(gameClearLoop);
	} else if(gameClearCnt < 180) {
		gameClearCnt++;
		requestAnimationFrame(staffRoll);
	}
};


/**
* スタッフロール出力準備
*/
const staffRoll = () => {

	// 画面を黒く塗りつぶし
	context.fillStyle = "black";
	context.fillRect(0, 0, gameBoard.FIELD_SIZE_X, gameBoard.FIELD_SIZE_Y);
	
	// エンディング表示情報設定
	scrollString(1, "PRODUCER", 			    700);
	scrollString(2, "uaaaaaaaa", 		        750);

	scrollString(1, "DIRECTORES",			   1000);
	scrollString(2, "uaaaaaaaa",			   1050);

	scrollString(1, "PROGRAMMER",			   1300);
	scrollString(2, "uaaaaaaaa",			   1350);

	scrollString(1, "STAFF",			       1600);
	scrollString(2, "uaaaaaaaa",	 		   1650);

	scrollString(1, "PRODUCTION DESIGNER",	   1900);
	scrollString(2, "uaaaaaaaa",	 		   1950);

	scrollString(1, "CHARACTER DESIGNER",	   2200);
	scrollString(3, "@icchinakka",	 		   2250);

	scrollString(1, "EDITOR",				   2500);
	scrollString(2, "uaaaaaaaa",	 		   2550);

	scrollString(1, "PRESENTS",				   2800);
	scrollString(2, "uaaaaaaaa",	 		   2850);

	scrollString(1, "勉強会来てね",				3100);
	scrollString(3, "ジャンルなしオンラインもくもく会", 3150);
	scrollString(3, "https://no-genre-mokumoku.connpass.com/", 3200);

	scrollString(9, "THE END",				   3800);
	
	// 作成者表示ループ突入
	requestAnimationFrame(staffRollLoop);
};


/**
* スタッフロールの文字列設定
* @param dispPattern 役職別表示パターン
						1:役職
						2:通常氏名
						3:アピール氏名
						9:締め
* @param dispString 出力文字列
* @param dispY 出力文字列Y座標
*/
const scrollString = (dispPattern, dispString, dispY) => {
	// 勉強ポイント!! #010 Map(キーと値がセットのコレクションでmap関数とは全く異なる)の書き方
	let endingInfo = new Map();					// スタッフロール用マップ
	endingInfo.set("dispPattern", dispPattern); // スタッフロール情報にx座標,フォント設定
	endingInfo.set("dispString", dispString);	// スタッフロール情報に表示文字列設定
	endingInfo.set("dispY", dispY);				// スタッフロール情報にy座標設定
	endDisp.push(endingInfo);					// 表示する文字を設定
};
const staffRollLoop = () => {
	// 画面を黒く塗りつぶし
	context.fillStyle = "black";
	context.fillRect(0, 0, gameBoard.FIELD_SIZE_X, gameBoard.FIELD_SIZE_Y);

	// 表示位置格納
	let tmpX;
	// 文字列描画処理
	for(let i = 0; i<endDisp.length; i++) {		
		// フォント、位置情報設定
		switch (endDisp[i].get("dispPattern")){
		  case 1:
			context.textAlign = 'center';	// 中央寄せ
			context.fillStyle = "yellow";
			//context.fillStyle = 'rgb(255, 30, 30)';	//RGBもできる
			context.font = "24px Arial";// フォントの設定
		    tmpX = gameBoard.FIELD_SIZE_X / 2;	// 文字表示位置設定
		    break;
		  case 2:
			context.textAlign = 'center';	// 中央寄せ
			context.fillStyle = "white";
			context.font = "18px Arial";// フォントの設定
		    tmpX = gameBoard.FIELD_SIZE_X / 2;	// 文字表示位置設定
		    break;
		  case 3:
			context.textAlign = 'center';	// 中央寄せ
			context.fillStyle = "silver";
			context.font = "19px Arial";// フォントの設定
			tmpX = gameBoard.FIELD_SIZE_X / 2;	// 文字表示位置設定
			break;
		  case 9:
			context.textAlign = 'center';	// 中央寄せ
			context.fillStyle = "white";
			context.font = "oblique 48px sans-serif";// フォントの設定
		    tmpX = gameBoard.FIELD_SIZE_X / 2;	// 文字表示位置設定
		    break;
		}
		
		context.fillText(endDisp[i].get("dispString"), tmpX, endDisp[i].get("dispY"));
		// 表示されきっていなかったらスクロール
		if(endDisp[i].get("dispY") > - 100) {
			endDisp[i].set("dispY", endDisp[i].get("dispY") - 2);	// Y座標を移動してスクロール(エンディングスクロール速度)
		}
		// スタッフロール終了判定
		if(endDisp[i].get("dispPattern") == 9) {
			if(endDisp[i].get("dispY") <= gameBoard.FIELD_SIZE_Y / 2) {
				srEndFlg = true;
			}
		}
	}

	// 終了判定
	if(srEndFlg === false) {
		// 再起呼び出し
		requestAnimationFrame(staffRollLoop);
	} else {
		// 終了
	}
};
