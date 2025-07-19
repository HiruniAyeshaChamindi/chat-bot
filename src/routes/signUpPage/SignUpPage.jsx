import './SignUpPage.css';
import { SignUp } from '@clerk/clerk-react';

const SignUpPage = () => {
    return (
        <div className="sign-up-page">
            <SignUp path="/sign-up" signInUrl='/sign-in'/>
        </div>
    );
};

export default SignUpPage;