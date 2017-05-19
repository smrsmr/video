/**
 * Created by Administrator on 2017-05-18 018.
 */
(function () {
    function init() {
        var recoder =  new Recoder();
        document.querySelector(".recoderButton").onclick = function () {
            recoder.recoder();
            // recoder.getMadiaStream();
        };
        document.querySelector(".stopRecoderButton").onclick = function () {
            recoder.stop();
        };

    }
    init();
})();