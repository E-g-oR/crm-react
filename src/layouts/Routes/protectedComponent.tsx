import React, { ReactElement, useEffect, useState } from 'react'
import { useHistory } from 'react-router';

function protectedComponent(Component: typeof React.Component) {

    const AuthenticatedComponent: React.FC = (props) => {
        const history = useHistory();
        const [IsAuthenticated, setIsAuthenticated] = useState(false);

        useEffect(() => (IsAuthenticated) ? history.push('/') : history.push('/login'), [IsAuthenticated])

        return (<>
            {IsAuthenticated ? <Component {...props} /> : null}
        </>)
    }

    return AuthenticatedComponent;
}

export default protectedComponent
