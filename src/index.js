import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

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

function Avatar(props) {
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: "React is just the start",
  author: {
    name: "Welcome to my page",
    avatarUrl:
      "https://static.wixstatic.com/media/2b328e_daba88939bbe467295c6083beccc532e~mv2.jpg/v1/fill/w_280,h_280,al_c,lg_1,q_80/2b328e_daba88939bbe467295c6083beccc532e~mv2.webp"
  }
};
ReactDOM.render(
  <Comment date={comment.date} text={comment.text} author={comment.author} />,
  document.getElementById("avatar")
);

const element = <h1>Hello, {formatName(user)}!</h1>;

ReactDOM.render(element, document.getElementById("myname"));

const rootElement = document.getElementById("root");
//const nameElement = document.getElementById("myname");
ReactDOM.render(<App />, rootElement);
