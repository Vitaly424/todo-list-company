import cls from './ErrorPage.module.scss';

export const ErrorPage = () => {
    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={cls.ErrorPage}>
            <p>Произошла непредвиденная ошибка</p>
            <button onClick={reloadPage}>Обновить страницу</button>
        </div>
    );
};
