import firebase from "./firebase";

class FirebaseService{
    setFirebaseDatabase(dbName) {
        return firebase.database().ref(dbName);
    }
}
export default FirebaseService
