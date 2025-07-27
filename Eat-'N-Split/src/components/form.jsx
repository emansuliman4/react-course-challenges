import "../index.css";
import "../App.css";
import { useState } from "react";

const initialFriends = [
  {
    name: "eman",
    img: "https://people.com/thmb/CmROfB5Fw4H3oJmGwr7qJTGDCGg=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(509x0:511x2)/people-headshot-lindsay-kimble-9855440283c440159d1684a4befaa97d.jpg",
    balance: -66,
    id: 1,
  },
  {
    name: "mai",
    img: "https://people.com/thmb/sEU4QSHyCBepK9-6JwNVUGZAgtY=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(449x0:451x2)/people-headshot-lauren-lieberman-830b33fdd4cc4c4bbc6e71ebd84dd633.jpg",
    balance: 0,
    id: 2,
  },
  {
    name: "ahmed",
    img: "https://people.com/thmb/gzHtG_UnZBsUuHVJx9xjB5yAfIQ=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(399x0:401x2)/people-headshot-nick-maslow-f21ef38676504bc89a091ec9a5c95e4b.jpg",
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

export function Input({ children, type }) {
  return (
    <div className="input">
      <label>{children}</label>
      <input type={type} />
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
