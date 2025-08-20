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
  const [isStarFilled, setIsStarFilled] = useState(false);
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

  function handleStarClick() {
    setIsStarFilled((prev) => !prev); // تبديل حالة النجمة
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-star"
        viewBox="0 0 16 16"
        onClick={handleStarClick}
        style={{ cursor: "pointer" }}
        className="text-danger bi bi-star"
      >
        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
      </svg>
    </div>
  );
}

export function SplitBill({ friend }) {
  const [billValue, setBillValue] = useState(0);
  const [yourExpense, setYourExpense] = useState(0);
  function handleBillChange(e) {
    setBillValue(Number(e.target.value));
  }

  function handleYourExpenseChange(e) {
    setYourExpense(Number(e.target.value));
  }
  const friendExpense = billValue - yourExpense;

  function handleForm(e) {
    e.preventDefault();
  }
  return (
    <div className="billContainer">
      {friend && (
        <form className="splitBill" onSubmit={handleForm}>
          <h2>SPLIT A BILL WITH {friend.name}</h2>
          <Input
            type="number"
            min="0"
            value={billValue}
            onChange={handleBillChange}
          >
            Bill Value
          </Input>
          <Input
            type="number"
            min="0"
            value={yourExpense}
            onChange={handleYourExpenseChange}
          >
            Your expensee
          </Input>

          <Input type="number" disabled value={friendExpense}>
            {friend.name}'s expensee
          </Input>
          <div className="input ">
            <label style={{ width: "10vw" }}>who is paying the bill</label>
            <select className="select">
              <option value="">You</option>
              <option value="">{friend.name}</option>
            </select>
          </div>
          {billValue >= yourExpense && <Btn>Spilt Bill</Btn>}
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
