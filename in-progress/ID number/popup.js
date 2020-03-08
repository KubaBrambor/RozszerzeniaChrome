function executeContent() {
    chrome.tabs.executeScript({
      file: 'content.js'
    }); 
    console.log(window.localStorage.getItem('url'))
  }
  
function clearArray() {
    chrome.runtime.sendMessage({clear: true});
}

  document.getElementById('getCampaign').addEventListener('click', executeContent);
  document.getElementById('clearCampaign').addEventListener('click', clearArray);

  chrome.runtime.onMessage.addListener(
      function(request, sender, sendResponse){
          if(request.message){
            console.log(request.message);
            document.getElementById("textarea").innerText = request.message;
          } 
      }
  )

  chrome.runtime.onMessage.addListener(
      function (request, sender, sendResponse){
          if(request.cleared){
              console.log(request.cleared)
              document.getElementById("textarea").innerText = "Cleared!";
          }
      }
  )

  