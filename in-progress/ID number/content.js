/* sorting function for unique values */
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function checkRun(){
    let arrayId = document.querySelectorAll('[essfield="campaign_id"]'),
        arrayIdSorted = [],
        uniqueArrayId;

/* pushing innerText value into new array and cutting of empty strings */ 
    for(let i=1; i<arrayId.length; i++){
        if(arrayId[i].innerText !== ""){
        arrayIdSorted.push(arrayId[i].innerText)
        }
    } 


    uniqueArrayId = arrayIdSorted.filter(onlyUnique);

    chrome.runtime.sendMessage({ad: uniqueArrayId}, (response) => {
        console.log("ok")
    })
}

checkRun();