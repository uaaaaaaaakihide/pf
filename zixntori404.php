<html>
	<head>
		<!-- <meta charset="UTF-8"> -->
		<head lang="ja">
		<meta http-equiv="Content-Type" content="text/html: charset=utf8">
		<!-- StyleSheetの呼び出し -->
		<link rel="stylesheet" href="./pf_main.css" type="text/css">
		<!-- javaScriptの呼び出し -->
		<script type="text/javascript" src="./pf_main.js"></script>
		<script type="text/javascript" src="./pf_game.js"></script>
		<title>自己紹介</title>
	</head>

	<body onLoad="iniDisp();startDisplay()"; onkeydown="inputKeyDown(event.keyCode)"; onkeyup="inputKeyUp(event.keyCode)"; onMouseDown="inputMouseDown(event)"; onMouseMove="inputMouseMove(event)";>
		<div id="gamePage">
			<h1>陣取りゲーム</h1>
			<canvas id="battleField" width=600px height=400px>画像読み込み中</canvas>
			<audio src="./sounds/top.m4a"          preload="auto"  id="topMusic"           muted="muted"   loop></audio>
			<audio src="./sounds/battle.m4a"       preload="auto"  id="battleMusic"        muted="muted"   crossorigin></audio>
			<audio src="./sounds/crash.m4a"        preload="auto"  id="crashMusic"         muted="muted"   crossorigin></audio>
			<audio src="./sounds/decision.m4a"     preload="auto"  id="decisionMusic"      muted="muted"   crossorigin></audio>
			<audio src="./sounds/gameclear.m4a"    preload="auto"  id="gameclearMusic"     muted="muted"   crossorigin></audio>
			<audio src="./sounds/gameover.m4a"     preload="auto"  id="gameoverMusic"      muted="muted"   crossorigin></audio>
			<audio src="./sounds/move.m4a"         preload="auto"  id="moveMusic"          muted="muted"   crossorigin></audio>
			<audio src="./sounds/itemget.m4a"      preload="auto"  id="itemgetMusic"       muted="muted"   crossorigin></audio>
			<audio src="./sounds/territoryget.m4a" preload="auto"  id="territorygetMusic"  muted="muted"   crossorigin></audio>
			<audio src="./sounds/work.m4a"         preload="auto"  id="workMusic"          muted="muted"   crossorigin></audio>
			<br>
			<label>音量
				<img src="./images/muteIcon.png" id="volumeIcon" onclick="volumeMute()";>
				<font size=1>min</font>
				<input type="range" step="0.05" min="0" max="1" value="0" id="setVolume" onChange="volumeChange(this.value)";>
				<font size=1>max</font>
			</label>
		</div>
		<input type="button" value="自己紹介" onclick="chgContents();">
		<div id="profile" class="cover">
			<h1>自己紹介</h1>
			<table border="1" width="500" cellspacing="0" cellpadding="5" bordercolor="#333333">
				<tr>
					<th width="80">名前</th>
					<td width="400">uaaaaaaaa</td>
					<th width="80">住所</th>
					<td width="400">東京都（東京近辺出社可）</td>
				</tr>
				<tr>
					<th rowspan="4">対応言語</th>
					<td>Java</td>
					<th rowspan="4">保有資格</td>
					<td>応用情報技術者</th>
				</tr>
				<tr>
					<td>SQL</td>
					<td>ORACLE MASTER Gold Oracle Dtabase 12c</td>
				</tr>
				<tr>
					<td>PL/SQL</td>
					<td>　</td>
				</tr>
				<tr>
					<td>※他言語,スクリプトも可能ですが生産性は落ちます</td>
					<td>　</td>
				</tr>
				<tr>
					<th rowspan="6">仕事内容</th>
					<td>調査</td>
					<th rowspan="2">連絡先<br>Twitter</th>
					<td rowspan="2">@uaaaaaaaakihide<br><a href="https://twitter.com/uaaaaaaaakihide">https://twitter.com/uaaaaaaaakihide</a></td>
				</tr>
				<tr>
					<td>設計(基本, 詳細, プログラム)</td>
				</tr>
				<tr>
					<td>開発</td>
					<th rowspan="4">その他</th>
					<td rowspan="4">朝活してます。<br>ドタキャンや無断欠席など気にせず、お気軽にご参加ください。<br><a href="https://no-genre-mokumoku.connpass.com/">https://no-genre-mokumoku.connpass.com/</a></td>
				</tr>
				<tr>
					<td>テスト(単体, 結合, システム)</td>
				</tr>
				<tr>
					<td>リリース</td>
				</tr>
				<tr>
					<td>改修, 改善(パフォーマンスなど)</td>
				</tr>
			</table>
			<br>
		</div>
	</body>

</html>
