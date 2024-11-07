import cls from './PageLoader.module.scss';

export const PageLoader = () => {
    return (
        <div className={cls.wrapper}>
            <div className={cls.spinner}></div>
        </div>
    );
};
