import firebase from "firebase"

import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyA-ZuDcaO1xEJONItUI-qXqzGD9fJFrYXs",
    authDomain: "myapp-e52de.firebaseapp.com",
    projectId: "myapp-e52de",
    storageBucket: "myapp-e52de.appspot.com",
    messagingSenderId: "37404030543",
    appId: "1:37404030543:web:6d227ac114e22fa9b69c3a"
};

const app = firebase.initializeApp(firebaseConfig)

// export function getFirebase(){
//     return app
// }

export function getFirestore(){    
    return firebase.firestore(app)
}
