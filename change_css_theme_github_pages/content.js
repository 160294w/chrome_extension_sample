// function write_element(exists_click_event) {
// }

// window.addEventLister('load', function(){
// });

window.onload = function () {
    // "ボタンをクリック(イベントをローカルストレージに保存)"にイベントを埋め込む
    click_event = document.getElementsByClassName("click");
    id_click_event = document.getElementById("click");
    document.getElementById("click").addEventListener("click", function () {
        alert("拡張機能によって登録されたイベントだよ");
        localStorage.setItem("hoge", "hoge");
    });
    // "localStorageからデータを削除"にイベントを埋め込んでローカルストレージからデータを消す
    click_event = document.getElementsByClassName("delete");
    id_click_event = document.getElementById("delete");
    document.getElementById("delete").addEventListener("click", function () {
        alert("拡張機能によって登録されたイベントだよ(deleteだよ)");
        localStorage.removeItem("hoge", "hoge");
    });

    document.body.style.backgroundColor = 'red';
    exists_click_event = localStorage.getItem("date_of_final_push_button")
    if (exists_click_event === null) {
        document.body.insertAdjacentHTML('beforebegin', '<h1>今日は打刻してないよ</h1>');
        document.body.insertAdjacentHTML('beforebegin', hoge);
        location.reload();
    } else {
        exists_click_event = localStorage.getItem("date_of_final_push_button")
        document.body.insertAdjacentHTML('beforebegin', '<h1>time:' + exists_click_event + '</h1>');
        document.body.insertAdjacentHTML('beforebegin', hoge);
        location.reload();
    }

    // write_element(exists_click_event);
}