var Background = (function(self){

    let whitelist = ['attack', 'button', '/c/', 'summon', 'abilit', 'status', 'mode_gauge_yel', '/item/', 'raid_parts_target', 'presage', '/be.png', '/assets/npc/quest/', '/assets/leader/quest/', '/assets/npc/quest/skin/'];

    function urlcheck(url){
        var index = url.indexOf("?s=");
        if(index == -1) index = url.length;
        if(url.indexOf(".png") == index - 4 || url.indexOf(".jpg") == index - 4)
        {
            for(var i = 0; i < whitelist.length; ++i)
                if(url.indexOf(whitelist[i]) != -1) return false;
            return true;
        }
        return false;
    }

    chrome.webRequest.onBeforeRequest.addListener(
        function(detail){
            if(urlcheck(detail.url)) return {cancel: true};
        },
        {urls: ["*://game-a.granbluefantasy.jp/*",
           "*://game-a1.granbluefantasy.jp/*",
           "*://game-a2.granbluefantasy.jp/*",
           "*://game-a3.granbluefantasy.jp/*",
           "*://game-a4.granbluefantasy.jp/*",
           "*://game-a5.granbluefantasy.jp/*"]},
        ["blocking"]
    );
})(window);