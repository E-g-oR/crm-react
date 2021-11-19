import { getAuth, User } from '@firebase/auth';
import React, { ReactElement, useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { onAuthStateChanged } from 'firebase/auth';
import { Store } from '../../utils/store';

function protectedComponent(Component: React.FC, store: Store) {

    const AuthenticatedComponent: React.FC = (props) => {
        const authStore = store.authStore;
        const User = authStore.user;

        return (<>
            {User && <Component {...props} />}
        </>)
    }

    return AuthenticatedComponent;
}

export default protectedComponent
