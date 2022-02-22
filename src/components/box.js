
import React from 'react'


const style = {
	border: "2px solid #292828",
	fontSize: "40px",
	color:'#292828'
}   



export const Box = (props) => <button  name={props.name}  style={style}  onClick={props.onClick}> {props.value}  </button>


export default Box