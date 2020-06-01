import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCFt6lKskpkTAn5jnJmUOsRXjPdjHZS7x8",
    authDomain: "next-blog-acf1a.firebaseapp.com",
    databaseURL: "https://next-blog-acf1a.firebaseio.com",
    projectId: "next-blog-acf1a",
    storageBucket: "next-blog-acf1a.appspot.com",
    messagingSenderId: "591469504891",
    appId: "1:591469504891:web:974ce1f4809c41938db5de",
    measurementId: "G-Y3M4KVQX9Q"}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

db.collection('posts').get().then(snapshot=>{
    snapshot.forEach(post=>{
        console.log(post.data())
    })
})