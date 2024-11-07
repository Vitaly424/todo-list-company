import { Container } from '@/components/common/Container/Container';
import { LoginForm } from '@/components/common/LoginForm/LoginForm';

const LoginPage = () => {
    return (
        <Container>
            <div className="flex justify-center">
                <LoginForm />
            </div>
        </Container>
    );
};

export default LoginPage;
