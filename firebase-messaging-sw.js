importScripts('config.js','https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js','https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');
firebase.initializeApp(FIREBASE_CONFIG);
firebase.messaging();
self.addEventListener('fetch',()=>{});
