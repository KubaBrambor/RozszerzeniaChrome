chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        if(request.createAlarm){
            console.log('message recived!')
        }
    }
)

console.log('working content.js')