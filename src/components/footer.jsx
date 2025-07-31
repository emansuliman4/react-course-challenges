import "../styles/footer.css";
export function Footer({ list }) {
  const totalNum = list.length;
  const completedNum = list.filter((item) => item.completed).length;
  const precentage = (completedNum / totalNum) * 100;
  return (
    <div className="footer">
      {list.length === 0 ? (
        <h2>Let's Start adding our Tasks! 😍</h2>
      ) : (
        <h3>
          {precentage === 100
            ? "You got every thing, congrats 🥳"
            : `You have ${totalNum} items on your list, and you already completed
        ${completedNum} (${precentage}%)`}
        </h3>
      )}
    </div>
  );
}
