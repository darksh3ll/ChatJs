import Rebase from "re-base"
import firebase from "firebase/app"
import "firebase/database"
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAmoJtsB5r0gN1P5wJWSSkIP5rSDUUkkIY",
    authDomain: "formulaires-1e7b6.firebaseapp.com",
    databaseURL: "https://formulaires-1e7b6.firebaseio.com",
});
const base = Rebase.createClass(firebase.database());

export {firebaseApp} ;
export default base