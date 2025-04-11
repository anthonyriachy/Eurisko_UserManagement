export enum ButtonVariant {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    DANGER = "danger",
}

export enum ButtonSize {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large",
}

type HtmlButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
    children: React.ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    className?: string;
} & HtmlButtonProps

