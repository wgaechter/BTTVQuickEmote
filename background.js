chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && /^http/.test(tab.url)) {
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            files: ["content.js"]
        });
        // console.log("Jquery loaded")
        // chrome.scripting.executeScript({
        //     target: { tabId: tabID },
        //     files: ["content.js"]
        // });
        // console.log("content loaded")
    };
});

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
    console.log(response.farewell);
    });
});

//$("img.chat-line__message--emote").click(function() {
//});

