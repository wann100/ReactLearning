import React from "react";
import ReactDOM from "react-dom";
import styles from "./styles.css";

function App() {
	return (
		<div className="App">
			<h1>Welcome to my Test Page</h1>
			<h2>I will be using this to learn ReactJs</h2>
			<h3> But first let's make things pretty </h3>
		</div>
	);
}
function formatName(user) {
	return user.firstName + " " + user.lastName;
}
function Avatar(props) {
	return (
		<img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
	);
}
const user = {
	firstName: "Mamadou",
	lastName: "Wann"
};
function formatDate(date) {
	return date.toLocaleDateString();
}
// /** */Returns avatar Image(Which is just a url)
function Avatar(props) {
	return (
		<img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
	);
}

function UserInfo(props) {
	const usermessagestyle = {
		fontSize: "15px",
		textAlign: "center"
	};
	return (
		<div className="UserInfo">
			<Avatar user={props.user} />
			<div className="userm">{props.user.message}</div>
		</div>
	);
}

function Idcardbox(props) {
	return (
		<div className="idcardbox">
			<div className="Comment">
				<div className="usermessage">
					<h1>
						{" "}
						<UserInfo user={props.author} />
					</h1>
				</div>
				<p>{props.text}</p>
				<p>{formatDate(props.date)}</p>
			</div>
		</div>
	);
}

const idcardbox = {
	date: new Date(),
	text: "React is just the start",
	author: {
		message: "This is Blue",
		avatarUrl:
			"https://static.wixstatic.com/media/2b328e_daba88939bbe467295c6083beccc532e~mv2.jpg/v1/fill/w_280,h_280,al_c,lg_1,q_80/2b328e_daba88939bbe467295c6083beccc532e~mv2.webp"
	}
};
ReactDOM.render(
	<Idcardbox
		date={idcardbox.date}
		text={idcardbox.text}
		author={idcardbox.author}
	/>,
	document.getElementById("avatar")
);

const element = <h1>Hello, {formatName(user)}!</h1>;

ReactDOM.render(element, document.getElementById("myname"));

const rootElement = document.getElementById("root");
//const nameElement = document.getElementById("myname");
ReactDOM.render(<App />, rootElement);
