// export default function Footer() {
//   return (
//     <footer>
//       <em
//         style={{
//           width: "100%",
//           backgroundColor: "#BEE9E8",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           padding: "0",
//           margin: "0",
//           minHeight: "60px",
//         }}
//       >
//         You have X tasks on your list, and you already packed X (x%)
//       </em>
//     </footer>
//   );
// }
import "../styles/footer.css";
export function Footer() {
  return (
    <div className="footer">
      <h3>You have x items on your list, and you already packed X (x%)</h3>
    </div>
  );
}
