// function write_element(exists_click_event) {
// }

// window.addEventLister('load', function(){
// });

window.onload = function() {
    click_event = document.getElementsByClassName("click");
    id_click_event = document.getElementById("click");
    document.getElementById("click").addEventListener("click", function() {
	alert("拡張機能によって登録されたイベントだよ");
    });

    document.body.style.backgroundColor = 'red';
    exists_click_event = localStorage.getItem("date_of_final_push_button")
    if (exists_click_event === null) {
	document.body.insertAdjacentHTML('beforebegin', '<h1>今日は打刻してないよ</h1>');
    } else {
	exists_click_event = localStorage.getItem("date_of_final_push_button")
	document.body.insertAdjacentHTML('beforebegin', '<h1>time:' + exists_click_event + '</h1>');
    }

    // write_element(exists_click_event);
}
