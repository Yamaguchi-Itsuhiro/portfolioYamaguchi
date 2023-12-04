const quiz = [
    {
        question: "OW2から新たに追加されたキャラクターは誰？",
        answers: [
            "キリコ",
            "アッシュ",
            "ゼニヤッタ",
            "キャスディ"
        ],
        correct: "キリコ"   
    },{
        question: "OWにてフランカーではないキャラは？",
        answers: [
            "ゲンジ",
            "ウィンストン",
            "ウィドウメーカー",
            "トレーサー"
        ],
        correct: "ウィドウメーカー"
    },{
        question: "この中でタンクロールではないキャラは？",
        answers: [
            "ロードホッグ",
            "ザリア",
            "ルシオ",
            "ザリア"
        ],
        correct: "ルシオ"
    }
];
const quizLengs = quiz. length;
let quizIndex = 0
let score = 0;
const $button = document.getElementsByTagName("button")
let buttonIndex = 0;
let buttonLength = $button. length;

//クイズの問題、選択肢を定義
const setupQUiz= () => {
    document.getElementById("main").textContent = quiz[quizIndex].question;
    let buttonIndex = 0;    
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}

setupQUiz()

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e. target. textContent){
        window. alert("正解！");
        score++;
    } else {
        window. alert("不正解...");
    }

    quizIndex++;

    if(quizIndex < quizLengs){
        setupQUiz();
    } else {
        window.alert("修了！あなたの成功数は"+ score + "/" + quizLengs + "です！")
    }
};

//正誤判定
let handlerIndex = 0;
while(handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener("click", (e)=>{clickHandler(e)
    });
    handlerIndex++;
};