// Type definitions for onesignal-cordova-plugin 2.6
// Project: https://github.com/onesignal/OneSignal-Cordova-SDK#readme
// Definitions by: David Broder-Rodgers <https://github.com/broder>
//                Vaclav Novotny <https://github.com/vaclavnovotny>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

type FIXME = any

interface Window {
    plugins: CordovaPlugins;
}

interface CordovaPlugins {
    OneSignal: OneSignalCordovaPlugin.OneSignalCordovaPlugin;
}

declare namespace OneSignalCordovaPlugin {
    interface OneSignalCordovaPlugin {
        OSInFocusDisplayOption: { None: 0; InAppAlert: 1; Notification: 2 };
        OSNotificationPermission: { NotDetermined: 0; Authorized: 1; Denied: 2 };
        addEmailSubscriptionObserver(
            callback: (change: { from: OSEmailSubscriptionState; to: OSEmailSubscriptionState }) => void,
        ): void;
        /**
         *  The passed in function will be fired when a notification permission
         *  setting changes.
         */
        addPermissionObserver(callback: (change: { from: OSPermissionState; to: OSPermissionState }) => void): void;
        /**
         *  The passed in function will be fired when a notification subscription
         *  property changes.
         */
        addSubscriptionObserver(
            callback: (change: { from: OSSubscriptionState; to: OSSubscriptionState }) => void,
        ): void;
        /**
         *  Add a trigger, may show an In-App Message if its triggers conditions
         *  were met.
         */
        addTrigger(key: string, value: string | number): void;
        /**
         *  Add a key-value Object of triggers, may show an In-App Message if
         *  its triggers conditions were met.
         *  @see https://documentation.onesignal.com/docs/cordova-30-api-reference#clearonesignalnotifications-function
         */
        addTriggers(triggers: Record<string, string | number>): void;
        /**
         *  (Android only) use this function to manually remove all OneSignal
         *  notifications from the Notification Shade.
         */
        clearOneSignalNotifications(): void;
        /**
         *  Deletes a single tag that was previously set on a user with sendTag
         *  or sendTags. Use deleteTags if you need to delete more than one.
         */
        deleteTag(key: string): void;
        /**
         *  Deletes one or more tags that were previously set on a user with
         *  sendTag or sendTags.
         */
        deleteTags(keys: string[]): void;
        /**
         *  Use this function to opt users out of receiving all notifications
         *  through OneSignal.
         *  @see https://documentation.onesignal.com/docs/cordova-30-api-reference#disablepush-function
         */
        disablePush(disable: boolean): void;
        enableNotificationsWhenActive(enable: boolean): void;
        getIds(IdsReceivedCallBack: (id: { userId: string; pushToken: string }) => void): void;
        /**
         *  Returns an OSDeviceState object with device info.
         *
         *  WARNING: Do not cache OSDeviceState object. This method returns a
         * "snapshot" of the device state for when it was called. Make sure to
         *  call getDeviceState again to get the latest state.
         */
        getDeviceState(callback: (status: OSDeviceState) => void): void;
        /**
         *  Retrieve a list of tags that have been set on the user from the
         *  OneSignal server.
         */
        getTags(callback: (tags: any) => void): void;
        /** Gets a trigger value for a provided trigger key. */
        getTriggerValueForKey(key: string, callback: (value: any) => void): void;
        /**
         *  Sets a In-App Message clicked handler. The instance will be called
         *  when an In-App Message action is tapped on.
         */
        handleInAppMessageClicked(handler: (action: OSNotificationAction) => void): void;
        /**
         *  If your app implements logout functionality, you can call logoutEmail
         *  to dissociate the email from the device:
         */
        logoutEmail(onSuccess: (success: any) => void, onFailure: (error: any) => void): void;
        /**
         *  Allows you to temporarily pause all In-App Messages. You may want to
         *  do this while the user is watching a video playing a match in your
         *  game to make sure they don't get interrupted at a bad time.
         */
        pauseInAppMessages(pause: boolean): void;
        /**
         *  Allows you to send notifications from user to user or schedule ones
         *  in the future to be delivered to the current device.
         */
        postNotification(
            notificationObj: Partial<OSNotification>,
            onSuccess: (json: any) => void,
            onFailure: (json: any) => void,
        ): void;
        /**
         *  Prompt the user for notification permissions. Callback fires as soon
         *  as the user accepts or declines notifications.
         */
        promptForPushNotificationsWithUserResponse(callback: (accepted: boolean) => void): void;
        /**
         *  Prompts the user for location permissions. This allows for
         *  geotagging so you can send notifications to users based on location.
         */
        promptLocation(): void;
        /**
         *  If your application is set to require the user's privacy consent,
         *  you can provide this consent using this method. Until you call
         *  provideUserConsent(true), the SDK will not fully initialize and will
         *  not send any data to OneSignal.
         */
        provideUserConsent(granted: boolean): void;
        registerForPushNotifications(): void;
        /**
         *  If your user logs out of your app and you would like to disassociate
         *  their custom user ID from your system with their OneSignal user ID,
         *  you will want to call this method.
         */
        removeExternalUserId(): void;
        /**
         *  (Android Only) use this function to manually cancel a single
         *  OneSignal notification based on its Android notification integer ID.
         *  @see https://documentation.onesignal.com/docs/cordova-30-api-reference#removenotification-function
         */
        removeNotification(androidNotificationId: string): void;
        /**
         *  Removes a single trigger for the given key, may show an In-App
         *  Message if its triggers conditions were met.
         */
        removeTriggerForKey(key: string): void;
        /**
         *  Removes a list of triggers based on a collection of keys, may show
         *  an In-App Message if its triggers conditions were met.
         */
        removeTriggersForKeys(keys: string[]): void;
        /**
         *  (iOS only) use this function to retrieve a boolean that indicates if
         * the user-provided provisional authorization.
         * @see https://documentation.onesignal.com/docs/cordova-30-api-reference#registerforprovisionalauthorization-function
         * @see https://documentation.onesignal.com/docs/ios-customizations
         */
        registerForProvisionalAuthorization(callback: (accepted: boolean) => void): void;
        /**
         *  Use this function to retrieve a boolean that indicates the
         *  application requires privacy consent.
         *  @see https://documentation.onesignal.com/docs/cordova-30-api-reference#requiresuserprivacyconsent-function
         */
        requiresUserPrivacyConsent(callback: (require: boolean) => void): void;
        /**
         *  Tag a user based on an app event of your choosing so later you can
         *  create segments in Segments to target these users. Use sendTags if
         *  you need to set more than one tag on a user at a time.
         */
        sendTag(key: string, value: string): void;
        /**
         *  Tag a user based on an app event of your choosing so later you can
         *  create segments in Segments to target these users.
         */
        sendTags(tags: { [key: string]: string }): void;
        setAppId(onesignalAppId: string): void;
        /** Allows you to set the user's email address with the OneSignal SDK */
        setEmail(email: string): void;
        /**
         *  If you have a backend server, we strongly recommend using Identity
         *  Verification with your users. Your backend can generate an email
         *  authentication token and send it to your app. The following code
         *  also includes callbacks:
         */
        setEmail(
            email: string,
            emailAuthToken: string,
            onSuccess: (success: any) => void,
            onFailure: (error: any) => void,
        ): void;
        /**
         *  If your system assigns unique identifiers to users, it can be
         *  annoying to have to also remember their OneSignal user ID's as well.
         *  To make things easier, OneSignal now allows you to set an
         *  external_id for your users. Simply call this method, pass in your
         *  custom user ID (as a string), and from now on when you send a push
         *  notification, you can use include_external_user_ids instead of
         *  include_player_ids.
         */
        setExternalUserId(userId: string): void;
        /**
         *  Set the callback to run on an In-App Message click.
         *  @see https://documentation.onesignal.com/docs/cordova-30-api-reference#setinappmessageclickhandler-function
         */
        setInAppMessageClickHandler(jsonData: {
            /**
             *  An optional click name entered defined by the app developer when
             *  creating the IAM.
             */
            click_name?: string
            /**
             *  An optional URL that opens when the action takes place.
             */
            click_url?: string
            /**
             *  Whether tapping on the element closed the In-App Message.
             */
            closes_message: boolean;
            /**
             *  Whether this was the first action taken on the in app message.
             */
            first_click: boolean;
        }): void;
        setInFocusDisplaying(displayType: OSDisplayType): void;
        setLocationShared(shared: any): void;
        /**
         *  Enable logging to help debug if you run into an issue setting up
         *  OneSignal.
         */
        setLogLevel(logLevel: { logLevel: OSLogLevel; visualLevel: OSLogLevel }): void;
        /**
         *  Runs before displaying a notification while the app is in focus.
         *  Use this handler to decide if the notification should show or not.
         *  @see https://documentation.onesignal.com/docs/cordova-30-api-reference#setnotificationopenedhandler-function
         */
        setNotificationOpenedHandler(notificationReceivedEvent: {
            /**
             *  The action the user took on the notification.
             */
            action: FIXME;
            /**
             *  Show Notification:
             *  Pass the notification to this function in order to display it
             *  while the app is in the foreground.
             *
             *  Silence Notification:
             *  If you would like to silence the notification, call complete(null) with a null argument.
             */
            complete: (notification: OSNotification) => void;
            /**
             * Retrieves the notification object.
             */
            notification: OSNotification;
        }): void
        /**
         *  Allows you to delay the initialization of the SDK until the user
         *  provides privacy consent. The SDK will not be fully initialized
         *  until the provideUserConsent(true) method is called. If you set this
         *  to be true, the SDK will not fully initialize until consent is
         *  provided. You can still call OneSignal methods, but nothing will
         *  happen, and the user will not be registered for push notifications.
         */
        setRequiresUserPrivacyConsent(required: boolean): void;
        /**
         *  Starts initialization of OneSignal, call this from the deviceready
         *  event.
         */
        startInit(appId: string, googleProjectNumber?: string): OneSignalBuilder;
        syncHashedEmail(email: string): void;
        /**
         *  (Android Only) use this function to unsubscribe the user from
         *  OneSignal when notifications are disabled.
         *  @see https://documentation.onesignal.com/docs/cordova-30-api-reference#unsubscribewhennotificationsaredisabled-function
         */
        unsubscribeWhenNotificationsAreDisabled(unsubscribe: boolean): void
        /**
         *  Accepts a callback, which returns a boolean variable indicating if
         *  the user has given privacy consent yet.
         */
        userProvidedPrivacyConsent(callback: (providedConsent: boolean) => void): void;
    }

    interface OSDeviceState {
        emailAddress?: string;
        emailUserId?: string;
        hasNotificationPermission: boolean;
        isEmailSubscribed: boolean;
        isPushDisabled: boolean;
        isSubscribed: boolean;
        notificationPermissionStatus: FIXME;
        pushToken: string;
        userId: string;

    }

    interface OSNotification {
        adm_big_picture?: string;
        adm_group?: string;
        adm_group_message?: any;
        adm_large_icon?: string;
        adm_small_icon?: string;
        adm_sound?: string;
        amazon_background_data?: boolean;
        androidNotificationId?: number;
        android_accent_color?: string;
        android_group?: string;
        android_group_message?: any;
        android_led_color?: string;
        android_sound?: string;
        android_visibility?: number;
        app_id?: string;
        app_ids?: string[];
        big_picture?: string;
        buttons?: any;
        chrome_big_picture?: string;
        chrome_icon?: string;
        chrome_web_icon?: string;
        content_available?: boolean;
        contents: any;
        data?: any;
        delayed_option?: string;
        delivery_time_of_day?: string;
        displayType: OSDisplayType;
        excluded_segments?: string[];
        firefox_icon?: string;
        groupedNotifications?: OSNotificationPayload[];
        headings?: any;
        include_amazon_reg_ids?: string[];
        include_android_reg_ids?: string[];
        include_chrome_reg_ids?: string[];
        include_chrome_web_reg_ids?: string[];
        include_ios_tokens?: string[];
        include_player_ids?: string[];
        include_wp_uris?: string[];
        include_wp_wns_uris?: string[];
        included_segments?: string[];
        ios_badgeCount?: number;
        ios_badgeType?: string;
        ios_category?: string;
        ios_sound?: string;
        isAdm?: boolean;
        isAndroid?: boolean;
        isAnyWeb?: boolean;
        isAppInFocus: boolean;
        isChrome?: boolean;
        isChromeWeb?: boolean;
        isIos?: boolean;
        isSafari?: boolean;
        isWP?: boolean;
        isWP_WNS?: boolean;
        large_icon?: string;
        payload: OSNotificationPayload;
        priority?: number;
        send_after?: string;
        shown: boolean;
        small_icon?: string;
        tags?: any[];
        template_id?: string;
        ttl?: number;
        url?: string;
        wp_sound?: string;
        wp_wns_sound?: string;
    }

    interface OSNotificationPayload {
        actionButtons: OSActionButton[];
        additionalData?: any;
        backgroundImageLayout?: OSBackgroundImageLayout;
        bigPicture?: string;
        body: string;
        fromProjectNumber?: string;
        groupKey?: string;
        groupMessage?: string;
        largeIcon?: string;
        launchURL?: string;
        ledColor?: string;
        lockScreenVisibility?: OSLockScreenVisibility;
        notificationID: string;
        priority?: number;
        rawPayload: string;
        smallIcon?: string;
        smallIconAccentColor?: string;
        sound: string;
        title: string;
    }

    interface OSNotificationAction {
        type: 'Opened' | 'ActionTaken';
        actionID: string;
    }

    interface OSEmailSubscriptionState {
        emailUserId: string;
        emailAddress: string;
    }

    interface OSActionButton {
        id: string;
        text: string;
        icon: string;
    }

    interface OSPermissionState {
        hasPrompted: boolean;
        provisional: boolean;
        state: OSNotificationPermissionState;
        status: OSNotificationPermission;
    }

    interface OSSubscriptionState {
        subscribed: boolean;
        userSubscriptionSetting: boolean;
        userId: string;
        pushToken: string;
    }

    interface OSPermissionSubscriptionState {
        emailSubscriptionStatus: OSEmailSubscriptionState;
        permissionStatus: OSPermissionState;
        subscriptionStatus: OSSubscriptionState;
    }

    interface OSBackgroundImageLayout {
        image: string;
        titleTextColor: string;
        bodyTextColor: string;
    }

    interface OSNotificationOpenedResult {
        action: {
            type: OSActionType;
            actionID?: string | undefined;
        };
        notification: OSNotification;
    }

    const enum OSLockScreenVisibility {
        Public = 1,
        Private = 0,
        Secret = -1,
    }

    const enum OSDisplayType {
        None = 0,
        InAppAlert = 1,
        Notification = 2,
    }

    const enum OSActionType {
        Opened = 0,
        ActionTake = 1,
    }

    const enum OSInFocusDisplayOption {
        None = 0,
        InAppAlert = 1,
        Notification = 2,
    }

    /**
     * iOS only
     */
    const enum OSNotificationPermission {
        NotDetermined = 0,
        Denied = 1,
        Authorized = 2,
    }

    /**
     *  Android only
     */
    const enum OSNotificationPermissionState {
        Authorized = 1,
        Denied = 2,
    }

    const enum OSLogLevel {
        None,
        Fatal,
        Errors,
        Warnings,
        Info,
        Debug,
        Verbose,
    }
}
