all: android-run

install:
	npm install
	bower install
	cordova plugin add cordova-plugin-whitelist
	cordova plugin add cordova-plugin-statusbar

run:
	gulp sass

add-android:
	ionic platform add android

add-ios:
	ionic platform add ios

ios: run
	ionic build ios

ios-run: ios
	ionic emulate ios

android: run
	ionic build android

android-run: android
	adb install -r platforms/android/build/outputs/apk/android-debug.apk
	adb shell am start -n com.one.one/.MainActivity

icons:
	ionic resources --icon

serve: run
	ionic serve
