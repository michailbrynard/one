all: android-run

install:
	npm install
	bower install
	cordova plugin add cordova-plugin-whitelist
	cordova plugin add cordova-plugin-statusbar

add-android:
	ionic platform add android

add-ios:
	ionic platform add ios

ios:
	ionic build ios

ios-run: ios
	ionic emulate ios

android:
	ionic build android

android-run: android
	adb install -r platforms/android/build/outputs/apk/android-debug.apk
	adb shell am start -n com.ionicframework.starter/.MainActivity
