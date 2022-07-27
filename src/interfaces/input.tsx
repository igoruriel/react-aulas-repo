export interface PropsInput {
    nome: string,
    titulo: string, 
    inputType: string,
    valor?: string,
    aoAlterado?: React.ChangeEventHandler<HTMLInputElement>,
    placeholder?:string,
    step?:string | number, 
    min?:string, 
    max?: string
}