import initializeFireBase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
initializeFireBase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    //REGISTER A NEW USER
    const registerUser = (email, password, history, name) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newuser = { email, displayName: name };
                setUser(newuser);
                //save user to the database
                saveUser(email, name, 'POST')

                //send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });

                history.replace('/');

            })
            .catch((error) => {
                setAuthError(error.message);

            })
            .finally(() => setIsLoading(false))
    }

    //LOGIN A NEW USER
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('')
            })
            .catch((error) => {
                setAuthError("Your Password Or Email Was Wrong!!!");
            })
            .finally(() => setIsLoading(false))
    }

    //Persisting an user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User

                setUser(user);



                // ...
            } else {
                // User is signed out
                // ...
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;

    }, [auth])

    // Admin
    useEffect(() => {

        fetch(`https://frozen-journey-31409.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin);

            })
    }, [user.email])



    // SIGN IN WITH GOOGLE 
    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setAuthError('')
                //save user to the database
                saveUser(user.email, user.displayName, 'PUT')
                const destination = location?.state?.from || '/';
                history.replace(destination);
            }).catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false))

    }

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://frozen-journey-31409.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("New User Created Successfully")

                }
            })

    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false))
    }

    return {
        registerUser,
        isLoading,
        authError,
        user,
        loginUser,
        logOut,
        signInWithGoogle,
        admin,




    }

}

export default useFirebase;