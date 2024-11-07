interface ContainerProps {
    className?: string;
    children: React.ReactNode;
}

export const Container = (props: ContainerProps) => {
    const { className, children } = props;

    return (
        <div className={`mx-auto max-w-[1200px] w-full px-2 ${className}`}>
            {children}
        </div>
    );
};
