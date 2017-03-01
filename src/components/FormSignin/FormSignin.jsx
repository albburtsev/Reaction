// import styles from './FormSignin.styl';

import React from 'react';
import {PATH_SIGNUP} from 'paths';

import {Link} from 'react-router';
import Button from 'components/Button/Button.jsx';

const FormSignin = () =>
    <form>
        <p>
            Don't have an account?
            <Link to={PATH_SIGNUP}>Sign up</Link>
        </p>
        <Button>Sign in</Button>
    </form>
;

export default FormSignin;