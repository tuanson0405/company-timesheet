# company-timesheet
I Cài đặt môi trường:
1. Cài đặt Node.js. (bắt buộc)
    Cordova hoạt động dựa trên Node.js nên phải cài đặt NodeJS trước mới có thể cài đặt cordova. Đến trang http://nodejs.org/ tải file cài đặt và thực thi để cài đặt Node.js
2. Cài đặt git client. (bắt buộc)
    Cordova phụ thuộc vào git nên phải cài đặt git client. Đến trang http://git-scm.com/ tải file cài đặt và thực thi để cài đặt git client.
3. Cài đặt Cordova trên nền Node.js sử dụng CLI (Command Line Interface).
    Trên Windows khởi chạy command line (cmd) tại dấu nhắc lệnh thực thi lệnh npm install -g cordova để cài đặt cordova.
    Trên OSX và Linux khởi chạy terminal tại dấu nhắc lệnh thực thi lệnh sudo npm install -g cordova để cài đặt cordova.
4. Cài đặt Apache Ant.
    Apache Ant là build tool dùng để build ứng dụng Android và Blackberry. Đến trang http://ant.apache.org/ tải và cài đặt ANT_HOME vào biến môi trường.
5. Cài đặt Ruby.
    Droigap build tool phụ thuộc vào Ruby. Nếu chạy trên OSX hoặc Linux, nên cần cài đặt thêm Ruby. Tại trang chủ https://www.ruby-lang.org/en/downloads/
6. Cài đặt các bộ SDK của từng platform cụ thể.
    IOS SDK: https://developer.apple.com/resources/
    Android SDK: http://developer.android.com/sdk/index.html
    Blackberry SDK: http://developer.blackberry.com/
    Windows Phone SDK: http://dev.windows.com/en-us

II Chạy ứng dụng.
1. Add platform.
  Terminal:   company-timesheet MAC$ cordova platform add android
              company-timesheet MAC$ cordova platform add ios
2. Chạy ứng dụng:
  Terminal:   company-timesheet MAC$ cordova run android
              company-timesheet MAC$ cordova run ios 
