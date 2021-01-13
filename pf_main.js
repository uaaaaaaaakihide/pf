/* 画面初期表示処理 */
const iniDisp = () => {
    // 不要オブジェクト非表示
	document.getElementById("gamePage").style.display="block";
    document.getElementById("profile").style.display="none";
};

/* 自己紹介表示 */
const chgContents = () => {
    // 不要オブジェクト表示切替
    document.getElementById("gamePage").style.display="block";
    if(document.getElementById("profile").style.display === "block") {
        document.getElementById("profile").style.display="none";
    } else {
        document.getElementById("profile").style.display="block";
    }
};
