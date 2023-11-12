export default interface InputBoxProps{
type:string,
id?:string,
name:string,
placeholder:string,
value:any,
onChange?:(e:any)=>void
onClick?:(e:any)=>void
onFocus?:(e:any)=>void
onKeyUp?:(e:any)=>void
}