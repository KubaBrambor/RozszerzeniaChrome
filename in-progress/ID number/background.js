/* sorting function for unique values */
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

let partArray = [];
let completeArray = [];

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
        window.localStorage.setItem('url', sender.tab.url)
        if(request.ad){
            for(let i=0; i<request.ad.length; i++){
                partArray.push(request.ad[i])
            }

            completeArray = partArray.filter(onlyUnique);

            chrome.runtime.sendMessage({message: completeArray})
        }
    }
)

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
        if(request.clear){
            completeArray = [];
            partArray = [];
            chrome.runtime.sendMessage({cleared: 'cleared'})
        }
    }
)