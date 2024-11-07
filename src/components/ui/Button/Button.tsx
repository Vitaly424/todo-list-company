import { ButtonHTMLAttributes, ForwardedRef, ReactNode } from 'react';
import cn from 'classnames';

type ButtonVariant = 'blue' | 'red' | 'green';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: ReactNode;
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
    variant?: ButtonVariant;
}

export const Button = (props: ButtonProps) => {
    const {
        className,
        variant = 'blue',
        iconLeft,
        iconRight,
        children,
        ...otherProps
    } = props;

    return (
        <button
            className={cn(
                'text-white text-center px-4 py-2 rounded-xl flex items-center justify-center gap-2 transition-all',
                className,
                {
                    'bg-slate-700': variant === 'blue',
                    'bg-red-400': variant === 'red',
                    'bg-emerald-700': variant === 'green',
                },
            )}
            type="button"
            {...otherProps}
        >
            {iconLeft && iconLeft}
            {children}
            {iconRight && iconRight}
        </button>
    );
};
