$(document).ready(function() {
    console.log("BTTVQuickEmote Loaded");
});

var emote = $("img.chat-line__message--emote")
var emoteName = $("img.chat-line__message--emote").attr('alt');

console.log(emoteName)

emote.click(function() {
        var EmoteCode = $(this).attr('alt');
        console.log(EmoteCode)
}); 