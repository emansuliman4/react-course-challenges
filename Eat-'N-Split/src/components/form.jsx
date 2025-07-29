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
  const [friends, setFriends] = useState(initialFriends);
  const [friendBill, setFriendBill] = useState(null);

  function handleAddFriend() {
    setAddFriend((openForm) => !openForm);
  }
  function handleAddNewFriend(friend) {
    setFriends([...friends, friend]);
    setAddFriend(false);
  }

  function handleBill(friend) {
    setFriendBill(friend);
  }
  return (
    <div className="App">
      <div className="mainPage">
        <Friends friends={friends} handleBill={handleBill} />
        <SplitBill friend={friendBill} />
      </div>
      <div className="billContainer">
        {addFriend && <AddFriend onAddFriend={handleAddNewFriend} />}
        <Btn style={{ marginLeft: "115px" }} onClick={handleAddFriend}>
          {addFriend ? "Close" : "Add friend"}
        </Btn>
        ِ
      </div>
    </div>
  );
}

export function Friends({ friends, handleBill }) {
  return (
    <div className="friends">
      <ul>
        <Friend friends={friends} handleBill={handleBill} />
      </ul>
    </div>
  );
}

export function AddFriend({ onAddFriend }) {
  const [friendName, setFriendName] = useState("");
  const [imgURL, setImageURL] = useState("https://i.pravatar.cc/48/2");
  function handleForm(e) {
    e.preventDefault();
    const newFriend = {
      name: friendName,
      img: imgURL,
      balance: 0,
      id: crypto.randomUUID(),
    };
    onAddFriend(newFriend);
    setFriendName("");
    setImageURL("https://i.pravatar.cc/48/2");
  }
  function handleFriendInput(e) {
    setFriendName(e.target.value);
  }
  function handleImgURLInput(e) {
    setImageURL(e.target.value);
  }
  return (
    <div className="addFriendContainer">
      <div className="addFriend">
        <form onSubmit={handleForm}>
          <Input type="text" value={friendName} onChange={handleFriendInput}>
            Friend Name
          </Input>
          <Input type="text" value={imgURL} onChange={handleImgURLInput}>
            Image URL
          </Input>
        </form>

        <Btn type="submit" className="btnAdd" onClick={handleForm}>
          Add
        </Btn>
      </div>
    </div>
  );
}

export function SplitBill({ friend }) {
  function handleForm(e) {
    e.preventDefault();
  }
  return (
    <div className="billContainer">
      {friend && (
        <form className="splitBill" onSubmit={handleForm}>
          <h2>SPLIT A BILL WITH {friend.name}</h2>
          <Input type="number"> Bill Value</Input>
          <Input type="number"> Your expensee</Input>
          <Input type="number" disabled>
            {friend.name}'s expensee
          </Input>
          <div className="input ">
            <label style={{ width: "10vw" }}>who is paying the bill</label>
            <select className="select">
              <option value="">You</option>
              <option value="">{friend.name}</option>
            </select>
          </div>

          <Btn>Spilt Bill</Btn>
        </form>
      )}
    </div>
  );
}

// logic functions
function Friend({ friends, handleBill }) {
  return (
    <div>
      {friends.map((friend) => (
        <li key={friend.id}>
          <img src={friend.img} alt={friend.name} />
          <div>
            <h3 className="name">{friend.name}</h3>
            {friend.balance == 0 ? (
              <p className="balance">you and {friend.name} are even</p>
            ) : friend.balance > 0 ? (
              <p style={{ color: "green" }}>
                {friend.name} owes you {friend.balance}
              </p>
            ) : (
              <p style={{ color: "red" }}>
                you owe {friend.name} {Math.abs(friend.balance)}
              </p>
            )}
          </div>

          <Btn onClick={() => handleBill(friend)}>Select</Btn>
        </li>
      ))}
    </div>
  );
}
