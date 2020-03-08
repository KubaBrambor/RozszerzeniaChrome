let changeColor = document.getElementById('changeColor');
  chrome.storage.sync.get('color', function(data) {
    // console.log(data.color);
    // changeColor.style.backgroundColor = data.color;
    // changeColor.setAttribute('value', data.color);
  });

changeColor.onclick = function(element) {

    
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: "const classMo = "},
        function(results){
          document.getElementById("avgCpc").innerHTML = results[0];
        });
});
};