all: android-run

install:
	cordova plugin add cordova-plugin-whitelist
	cordova plugin add cordova-plugin-statusbar

add-android:
	ionic platform add android

android:
	ionic build android

android-run:
	adb install -r platforms/android/build/outputs/apk/android-debug.apk
	adb shell am start -n com.ionicframework.fillit377607/.MainActivity
