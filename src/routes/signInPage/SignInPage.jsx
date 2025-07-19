import './SignInPage.css';
import { SignIn } from '@clerk/clerk-react'

const SignInPage = () => {
    return (
        <div className="sign-in-page">
            <SignIn path="/sign-in" signUpUrl='/sign-up' forceRedirectUrl="/dashboard"/>
        </div>
    );
};

export default SignInPage;