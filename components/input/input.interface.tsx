export default interface InputBoxProps{
type:string,
id?:string,
name:string,
placeholder:string,
value:any,
onChange?:()=>void
}