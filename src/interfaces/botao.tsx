export interface PropsBotao {
    children?: React.ReactNode;
    type?: 'submit' | 'reset' | 'button' | undefined;
    aoClicado?: () => void;
}