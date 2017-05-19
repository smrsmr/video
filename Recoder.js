/**
 * Created by Administrator on 2017-05-18 018.
 */
(function () {
    function Recoder() {
        this.getMadiaStream();
    }
    Recoder.prototype.getMadiaStream = function () {
        var config = {audio:true,video:true};
        var self = this;
        //缓存数组
        this.buffers = [];
        function success(stream) {
           self.mediaRecoder = new MediaRecorder(stream);
           self.mediaRecoder.ondataavailable =  function (event) {
               self.buffers.push(event.data);
               console.log(event);
           };
            var video = document.createElement("video");
            video.src = window.URL && window.URL.createObjectURL(stream) || stream;
            video.autoplay = true;
            document.body.appendChild(video);
            video.onended = function () {
                document.body.removeChild(this);
            };
            self.addEventListener();
        };
        function fail(error) {
            console.log(error);
        }
        navigator.mediaDevices.getUserMedia(config).then(success).catch(fail);
    };
    Recoder.prototype.addEventListener = function () {
        var self = this;
        this.mediaRecoder.onstop = function () {
            var blob = new Blob(self.buffers);
            var url = URL.createObjectURL(blob);
            var downloadButton = document.createElement("a");
            downloadButton.textContent = "保存到本地";
            downloadButton.href = url;
            downloadButton.download = url;
            document.body.appendChild(downloadButton);
        };
    };
    Recoder.prototype.start = function () {
        if ( this.mediaRecoder.state == "recording") {
            return;
        }
        this.mediaRecoder.start();
    }
    Recoder.prototype.recoder = function () {

        if ( this.mediaRecoder.state == "paused") {
            this.mediaRecoder.resume();

        } else {
            this.start();
        }
    };
    Recoder.prototype.pause = function () {
        this.mediaRecoder.pause();

    };
    Recoder.prototype.stop = function () {
        this.mediaRecoder.stop();

    };
    window.Recoder = Recoder;
})();