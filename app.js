/**
 * Created by Administrator on 2017-05-18 018.
 */
(function () {
    function init() {

        var recoder =  new Recoder();
        document.querySelector(".recoderButton").onclick = function () {
            recoder.recoder();
            alert("开始录制");
        };
        document.querySelector(".stopRecoderButton").onclick = function () {
            recoder.stop();
            alert("已停止录制");
        };

    }
    init();
})();