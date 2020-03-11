chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        if(request.createAlarm){
            console.log('message recived!');
            alert(request.message);
        }
    }
)

console.log('working content.js')