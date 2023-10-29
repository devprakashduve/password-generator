export default interface SelectProps{
    id?:string,
    name:string,
    placeholder:string,
    options:string[],
    defaultOptions:string,
    onChange?:()=>void
    }