/* eslint-env node */
'use strict';

module.exports = function(/* environment, appConfig */) {
  // See https://github.com/san650/ember-web-app#documentation for a list of
  // supported properties

  return {
    name: "Cloudrm",
    short_name: "Cloudrm",
    description: "cloudrm.pro PWA client.",
    start_url: "/",
    display: "standalone",
    background_color: "#343a40",
    theme_color: "#343a40",
    icons:
      [

        {
          "src": "/appimages/android/android-launchericon-512-512.png",
          "sizes": "512x512"
        },
        {
          "src": "/appimages/android/android-launchericon-192-192.png",
          "sizes": "192x192"
        },
        {
          "src": "/appimages/android/android-launchericon-144-144.png",
          "sizes": "144x144"
        },
        {
          "src": "/appimages/android/android-launchericon-96-96.png",
          "sizes": "96x96"
        },
        {
          "src": "/appimages/android/android-launchericon-72-72.png",
          "sizes": "72x72"
        },
        {
          "src": "/appimages/android/android-launchericon-48-48.png",
          "sizes": "48x48"
        },
        {
          "src": "/appimages/ios/ios-appicon-1024-1024.png",
          "sizes": "1024x1024"
        },
        {
          "src": "/appimages/ios/ios-appicon-180-180.png",
          "sizes": "180x180"
        },
        {
          "src": "/appimages/ios/ios-appicon-152-152.png",
          "sizes": "152x152"
        },
        {
          "src": "/appimages/ios/ios-appicon-120-120.png",
          "sizes": "120x120"
        },
        {
          "src": "/appimages/ios/ios-appicon-76-76.png",
          "sizes": "76x76"
        },
        {
          "src": "/appimages/ios/ios-launchimage-750-1334.png",
          "sizes": "750x1334"
        },
        {
          "src": "/appimages/ios/ios-launchimage-1334-750.png",
          "sizes": "1334x750"
        },
        {
          "src": "/appimages/ios/ios-launchimage-1242-2208.png",
          "sizes": "1242x2208"
        },
        {
          "src": "/appimages/ios/ios-launchimage-2208-1242.png",
          "sizes": "2208x1242"
        },
        {
          "src": "/appimages/ios/ios-launchimage-640-960.png",
          "sizes": "640x960"
        },
        {
          "src": "/appimages/ios/ios-launchimage-640-1136.png",
          "sizes": "640x1136"
        },
        {
          "src": "/appimages/ios/ios-launchimage-1536-2048.png",
          "sizes": "1536x2048"
        },
        {
          "src": "/appimages/ios/ios-launchimage-2048-1536.png",
          "sizes": "2048x1536"
        },
        {
          "src": "/appimages/ios/ios-launchimage-768-1024.png",
          "sizes": "768x1024"
        },
        {
          "src": "/appimages/ios/ios-launchimage-1024-768.png",
          "sizes": "1024x768"
        },
        {
          "src": "/appimages/chrome/chrome-extensionmanagementpage-48-48.png",
          "sizes": "48x48"
        },
        {
          "src": "/appimages/chrome/chrome-favicon-16-16.png",
          "sizes": "16x16"
        },
        {
          "src": "/appimages/chrome/chrome-installprocess-128-128.png",
          "sizes": "128x128"
        }
      ]
    ,
    ms: {
      tileColor: '#fff'
    }
  };
}
