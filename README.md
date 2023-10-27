# mcp-frontend

hi! welcome to the frontend repo

# kakao login proccess for **android**

0. Kakao Dev > 내 애플리케이션 > 앱 설정 > 앱 키 > 네이티브 앱 키 확인

   - 내 애플리케이션 > 앱 설정> > 플랫폼 > 안드로이드 플랫폼 등록

     - package명 : build.gradle에 namespace 값
     - 키 해시 : 아래명령어를 통해 2개 추가

     ```
     // 1. 라이브러리 공식에서 설명한 키 해시 찾는 명령어 (root 폴더에서 진행)
     keytool -exportcert -alias androiddebugkey -keystore ~/android/app/debug.keystore -storepass android -keypass android | openssl sha1 -binary | openssl base64

     // 2. android/app 폴더에서 아래 명령어 실행한다.
     keytool -exportcert -alias androiddebugkey -keystore debug.keystore -storepass android -keypass android | openssl sha1 -binary | openssl base64
     ```

1. android\app\src\main\AndroidManifest.xml

   아래 코드 추가

   ```
   <activity
       android:name="com.kakao.sdk.auth.AuthCodeHandlerActivity"
       android:exported="true">
       <intent-filter>
         <action android:name="android.intent.action.VIEW" />
         <category android:name="android.intent.category.DEFAULT" />
         <category android:name="android.intent.category.BROWSABLE" />

         <!-- Redirect URI: "kakao${NATIVE_APP_KEY}://oauth" -->
         <data android:host="oauth"
                 android:scheme="kakao{네이티브 앱 키}" />
       </intent-filter>
     </activity>
   ```

2. android\app\src\main\res\values\strings.xml

   아래 코드 추가

   ```
   <string name="kakao_app_key">{네이티브 앱 키}</string>
   ```

# reat-native-config

[env를 활용하여 API Key 숨기기](https://ssilook.tistory.com/entry/React-Native-RN-%ED%99%98%EA%B2%BD-%EB%B3%80%EC%88%98%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-API-key-%EC%88%A8%EA%B8%B0%EA%B8%B0)
