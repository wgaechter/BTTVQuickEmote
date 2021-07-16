console.log("Script is running")

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
      if (request.greeting === "hello")
        sendResponse({farewell: "goodbye"});
    }
);



// function tagGrab() {
//     $("img.chat-line__message--emote").each(function() {
//         console.log($(this).attr('alt'))
//     });
// };

// $(document).ready(function() {
//     console.log("BTTVQuickEmote Loaded");
//     //var emote = $("img.chat-line__message--emote")
//     //var emoteName = $("img.chat-line__message--emote").attr('alt');

//     // $("img.chat-line__message--emote").each(function() {
//     //     console.log($(this).attr('alt'))
//     // });

//     // emote.click(function() {
//     //     var EmoteCode = $(this).attr('alt');
//     //     console.log(EmoteCode)
//     // }); 
// });

// $('body').on('click', "img.chat-line__message--emote", function() {
//     console.log("Click Detected")
//     console.log($(this).attr('alt'));
// });

//window.setInterval(tagGrab, 1000);
