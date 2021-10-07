function OneSignalInit() {
    // Uncomment to set OneSignal device logging to VERBOSE
    // window.plugins.OneSignal.setLogLevel(6, 0);

    // NOTE: Update the setAppId value below with your OneSignal AppId.
    window.plugins.OneSignal.setAppId("YOUR_ONESIGNAL_APP_ID");
    window.plugins.OneSignal.setNotificationOpenedHandler(function(jsonData) {
        console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
    });

    // iOS - Prompts the user for notification permissions.
    //    * Since this shows a generic native prompt, we recommend instead using an In-App Message to prompt for notification permission (See step 6) to better communicate to your users what notifications they will get.
    window.plugins.OneSignal.promptForPushNotificationsWithUserResponse(function(accepted) {
        console.log("User accepted notifications: " + accepted);
    });
}
window.plugins.OneSignal.promptForPushNotificationsWithUserResponse((accepted) => {
    console.log("User accepted notifications: " + accepted);
});

window.plugins.OneSignal.addPermissionObserver((state) => {
    console.log("Notification permission state changed: " + JSON.stringify(state));
});

window.plugins.OneSignal.addSubscriptionObserver((state) => {
    if (!state.to.subscribed) {
        console.log("Subscribed for OneSignal push notifications!");
    }
    console.log("Push Subscription state changed: " + JSON.stringify(state));
});

window.plugins.OneSignal.getTags((tags) => {
    console.log('Tags Received: ' + JSON.stringify(tags));
});

window.plugins.OneSignal.sendTag("key", "value");

window.plugins.OneSignal.deleteTag("key");

window.plugins.OneSignal.sendTags({ key1: "value", key2: "value2" });

window.plugins.OneSignal.deleteTags(["key1", "key2"]);

window.plugins.OneSignal.promptLocation();

window.plugins.OneSignal.syncHashedEmail("John.Smith@example.com");

window.plugins.OneSignal.getIds((ids) => {
    const notificationObj = {
        contents: { en: "message body" },
        include_player_ids: [ids.userId]
    };
    window.plugins.OneSignal.postNotification(notificationObj,
        (successResponse) => {
            console.log("Notification Post Success:", successResponse);
        },
        (failedResponse) => {
            console.log("Notification Post Failed: ", failedResponse);
        }
    );
});

window.plugins.OneSignal.clearOneSignalNotifications();

window.plugins.OneSignal.setLogLevel({ logLevel: 4, visualLevel: 4 });
