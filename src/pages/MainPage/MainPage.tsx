import { Container } from '@/components/common/Container/Container';
import { AddTasks } from '@/components/common/AddTasks/AddTasks';
import { TasksList } from '@/components/common/TasksList/TasksList';

const MainPage = () => {
    return (
        <Container>
            <AddTasks className="mb-2" />
            <TasksList />

            {/* <div className="flex justify-center">
                <LoginForm />
            </div> */}
        </Container>
    );
};

export default MainPage;
