export default interface SelectProps{
    id?:string,
    name:string,
    placeholder:string,
    options:string[],
    defaultOptions?:string,
    value?:any,
    onChange?:(e: any) => void;
    onClick?:(e: any) => void;
    }