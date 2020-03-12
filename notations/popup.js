
// let time = Date.now();
// time += 1000000;
// setTimeout(function(){
//     let notifOpt = {
//         type: 'basic',
//         title: 'limit reached',
//         iconUrl: 'icon.jpg',
//         message: 'notification works!',
//     }
//     chrome.notifications.create('notificationOne', notifOpt, function(id){
//         alert(new Date(time));
//     })
// }, 3000);

// chrome.alarms.create('notify alarm', {when: Date.now() + 4000})

const buttonClicked = () => {
    chrome.tabs.query({active:true, currentWindow:true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {createAlarm: true, message: document.getElementById('messageInput').value}, (response) => {
            console.log('message arrived');
        })
    })
}

document.getElementById('submitButton').addEventListener('click', buttonClicked);








