import "../index.css";
import "../App.css";
import { useState } from "react";

const initialFriends = [
  {
    name: "eman",
    img: "https://i.pravatar.cc/48/1",
    balance: -66,
    id: 1,
  },
  {
    name: "mai",
    img: "https://i.pravatar.cc/48/2",
    balance: 0,
    id: 2,
  },
  {
    name: "ahmed",
    img: "https://i.pravatar.cc/48/3",
    balance: 22,
    id: 3,
  },
];

// components
function Btn({ onClick, children, style }) {
  return (
    <div className="btn ">
      <button onClick={onClick} style={style}>
        {children}
      </button>
    </div>
  );
}

export function Input({ children, type, ...rest }) {
  return (
    <div className="input">
      <label>{children}</label>
      <input type={type} {...rest} />
    </div>
  );
}
// exported Functions
export function FullCycle() {
  const [addFriend, setAddFriend] = useState(false);
  function handelAddFriend() {
    setAddFriend((openForm) => !openForm);
  }
  return (
    <div className="App">
      <div className="mainPage">
        <Friends />
        <SplitBill />
      </div>
      <div className="billContainer">
        {addFriend && <AddFriend />}

        <Btn style={{ marginLeft: "115px" }} onClick={handelAddFriend}>
          {addFriend ? "Close" : "Add friend"}
        </Btn>
      </div>
    </div>
  );
}

export function Friends() {
  return (
    <div className="friends">
      <ul>
        <Friend friends={initialFriends} />
      </ul>
    </div>
  );
}

export function AddFriend() {
  return (
    <div className="addFriendContainer">
      <div className="addFriend">
        <Input type="text"> Friend Name</Input>
        <Input type="text"> Image URL</Input>
        <Btn className="btnAdd">Add</Btn>
      </div>
    </div>
  );
}

export function SplitBill() {
  return (
    <div className="billContainer">
      <div className="splitBill">
        <Input type="number"> Bill Value</Input>
        <Input type="number"> Your expensee</Input>
        <Input type="number" disabled>
          x's expensee
        </Input>
        <Btn>Spilt Bill</Btn>
      </div>
    </div>
  );
}

// logic functions
function Friend({ friends }) {
  return (
    <div>
      {friends.map((friend) => (
        <li key={friend.id}>
          <img src={friend.img} alt={friend.name} />
          <div>
            <h3 className="name">{friend.name}</h3>
            {friend.balance == 0 ? (
              <p className="balance">you and eman are even</p>
            ) : friend.balance > 0 ? (
              <p style={{ color: "green" }}>eman owes you {friend.balance}</p>
            ) : (
              <p style={{ color: "red" }}>
                you owe eman {Math.abs(friend.balance)}
              </p>
            )}
          </div>

          <Btn>Select</Btn>
        </li>
      ))}
    </div>
  );
}
