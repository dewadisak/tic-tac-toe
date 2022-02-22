import React from 'react'

const style = {
	width: "300px",
	margin: "0 auto",
	marginTop: "70px",
	display: "grid",
    fontSize: "40px",
	fontWeight: "800",
	textAlign:'center',
	color:'#292828'
};

const Message = (props) => <h1 name={"msg"} style={style}>{props.value}</h1>	

export default Message