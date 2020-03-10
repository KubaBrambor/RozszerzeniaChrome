chrome.alarms.onAlarm.addListener(function( alarm ) {
    console.log("Got an alarm!", alarm);
    let notifOpt = {
                type: 'basic',
                title: 'limit reached',
                iconUrl: 'icon.jpg',
                message: alarm.name
            }
            chrome.tabs.query({active:true, currentWindow:true}, (tabs) => {
                chrome.tabs.sendMessage(tabs[0].id, {createAlarm: true, message: 'sending to extension'}, (response) => {
                    console.log('message arrived');
                })
            })
            chrome.notifications.create('notificationOne', notifOpt, function(id){
            })
  });
 
