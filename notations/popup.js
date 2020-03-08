
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

chrome.alarms.create('notify alarm', {when: Date.now() + 4000})



