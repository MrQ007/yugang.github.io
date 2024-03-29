/*
 * version.js used to dynamically update the content
 * shown on the main site, including the home page and any
 * content loaded from documentation/, contribute/.
 *
 * Client side replacement occurs in xwalk.js replace_version_string
 *
 * To see which pages from the main site are using this replacement:

   grep -ricE '[^!]\${XWALK(-[^-]+){3}}' * | grep -v '0$'

 *
 * The following pattern is replaced:
 *
 * ${XWALK-<CHANNEL>-<PLATFORM>-<ARCH>}
 *
 * To prevent replacement (eg., for a wiki page documenting
 * this process, prefix the ${XWALK...} with an exclamation (!)
 *
 * For example:
 *
 *   crosswalk-${XWALK-BETA-ANDROID-X86}.zip
 *   crosswalk-!${XWALK-BETA-ANDROID-X86}.zip
 *
 * would result in:
 *
 *   crosswalk-2.31.27.0.zip
 *   crosswalk-${XWALK-BETA-ANDROID-X86}.zip
 *
 * See './site.sh promote' for a script to update this file
 * and push it to the website without pushing an entirely new
 * website (eg., without needing to run './site.sh mklive').
 *
 */
var versions = {
    stable: {
        android: {
            x86: "13.42.319.12",
            arm: "13.42.319.12"
        },
        'android-webview': {
            x86: "13.42.319.12",
            arm: "13.42.319.12"
        },
        cordova: {
            x86: "13.42.319.12",
            arm: "13.42.319.12"
        },
        tizen: {
            x86: "13.42.319.12"
        }
    },
    beta: {
        android: {
            x86: "14.43.343.9",
            arm: "14.43.343.9"
        },
        'android-webview': {
            x86: "14.43.343.9",
            arm: "14.43.343.9"
        },
        cordova: {
            x86: "14.43.343.9",
            arm: "14.43.343.9"
        },
        tizen: {
            x86: "14.43.343.9"
        }
    },
    canary: {
      android: {
          x86: "15.44.367.0",
          arm: "15.44.367.0"
      },
      'android-webview': {
          x86: "15.44.367.0",
          arm: "15.44.367.0"
      },
      cordova: {
          x86: "15.44.367.0",
          arm: "15.44.367.0"
      },
      tizen: {
          x86: "15.44.367.0"
      }
    }
};
