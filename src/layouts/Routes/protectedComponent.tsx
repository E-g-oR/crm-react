import { getAuth, User } from '@firebase/auth';
import React, { ReactElement, useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { onAuthStateChanged } from 'firebase/auth';
import { Store } from '../../utils/store';

function protectedComponent(Component: React.FC, store: Store) {

    const AuthenticatedComponent: React.FC = (props) => {
        const history = useHistory();
        const [IsAuthenticated, setIsAuthenticated] = useState(false);
        const [User, setUser] = useState<User | null>(null);
        const auth = getAuth();

        // useEffect(() => {
        //     setUser(auth.currentUser);
        // }, [])

        const authStore = store.authStore;
        // useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user)
            authStore.setUser(user);
            if (user) {
                history.push('/');
            } else {
                history.push('/login');
            }
        })
        // }, [])

        return (<>
            {User && <Component {...props} />}
        </>)
    }

    return AuthenticatedComponent;
}

export default protectedComponent
