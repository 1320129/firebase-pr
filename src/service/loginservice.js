import firebase from 'firebase';
import firebaseApp from '../service/firebase';

class AuthService{
    login(providerName){
        const authprovider = new firebase.auth[`${providerName}AuthProvider`]();
        return firebaseApp.auth().signInWithPopup(authprovider)
    }
}

export default AuthService;