# RN Android 错误

# [React Native FAILURE: Build failed with an exception. Could not resolve ':classpath'. Could not find com.android.tools.build:gradle:3.0.1](https://stackoverflow.com/questions/47455411/react-native-failure-build-failed-with-an-exception-could-not-resolve-classp)

```diff
// Top-level build file where you can add configuration options common to all sub-projects/modules.

buildscript {
    repositories {
        jcenter()
+        google()
    }
    dependencies {
        classpath 'com.android.tools.build:gradle:3.0.1'

        // NOTE: Do not place your application dependencies here; they belong
        // in the individual module build.gradle files
    }
}

allprojects {
    repositories {
+        google()
        mavenLocal()
        jcenter()
        maven {
            // All of React Native (JS, Obj-C sources, Android binaries) is installed from npm
            url "$rootDir/../node_modules/react-native/android"
        }
    }
}

```

