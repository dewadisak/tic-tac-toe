import React from 'react'

const style = {
	width: "250px",
	margin: "0 auto",
	marginTop: "20px",
	display: "grid",
	fontSize: "40px",
	fontWeight: "800",
	color:'#292828'
};

const Refresh = (props) => <button name={"btn"} style={style} onClick={props.onClick}>{props.value}</button>

export default Refresh