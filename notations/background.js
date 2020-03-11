import Notification from './notification';

chrome.alarms.onAlarm.addListener(function( alarm ) {
    console.log("Got an alarm!", alarm);
    let notifOpt = {
                type: 'basic',
                title: 'limit reached',
                iconUrl: 'icon.jpg',
                message: alarm.name
            }
            
            chrome.notifications.create('notificationOne', notifOpt, function(id){
            })
  });
 
