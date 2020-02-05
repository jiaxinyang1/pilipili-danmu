var enabled=false;

setInterval("deleteall()",1000)
function deleteall(){
    chrome.storage.sync.get({enabled: false}, function(items) {
        enabled=items.enabled;
    });
    if(enabled==true){
        if($('.bilibili-player-video-danmaku')!=undefined){
            $('.bilibili-player-video-danmaku').remove()
        }
        if($('.bilibili-player-video-sendbar')!=undefined){
            $('.bilibili-player-video-sendbar').remove()
        }
        if($('.bilibili-player-video-control-bottom-center')!=undefined){
            $('.bilibili-player-video-control-bottom-center').remove()
        }
    }
}

