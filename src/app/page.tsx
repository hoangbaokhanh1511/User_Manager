// import Header from "../../components/header";
// import Main from "../../components/main";
// import Footer from "../../components/userList";

// export default function HomePage() {
//   return (
//     <div>
//       <Header />
//       <Main />
//       <Footer />
//     </div>
//   );
// }



// "use client";
// import { useState } from "react";

// export default function Counter() {
//   const [count, setCount] = useState(0);

//   function increment() { setCount(c => c + 1); }
//   function decrement() { setCount(c => c - 1); }
//   function reset() { setCount(0); }

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         gap: "12px",
//         marginTop: "40px",
//         fontFamily: "sans-serif",
//       }}
//     >
//       <h3 style={{ fontSize: "24px", color: "#333" }}>Counter: {count}</h3>

//       <div style={{ display: "flex", gap: "10px" }}>
//         <button style={btnStyle} onClick={decrement}>-</button>
//         <button style={btnStyle} onClick={increment}>+</button>
//         <button style={btnStyle} onClick={reset}>Reset</button>
//         <button
//           style={{ ...btnStyle, backgroundColor: "#4CAF50" }}
//           onClick={() => alert(`Giá trị hiện tại: ${count}`)}
//         >
//           Show
//         </button>
//       </div>
//     </div>
//   );
// }

// const btnStyle = {
//   padding: "8px 16px",
//   borderRadius: "8px",
//   border: "none",
//   backgroundColor: "#0070f3",
//   color: "white",
//   cursor: "pointer",
//   fontSize: "16px",
//   transition: "background 0.3s",
// };

// "use client";
// import { useState } from "react";

// export default function TogglePanel() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setOpen(!open)}>
//         {open ? "Đóng" : "Mở"} panel
//       </button>

//       {open && (
//         <div style={{ border: "1px solid #ddd", padding: 8, marginTop: 8 }}>
//           Nội dung panel: có thể là form, thông tin, hoặc component khác.
//         </div>
//       )}
//     </div>
//   );
// }

"use client"
import UserManager from "../../components/userManager";

export default function HomePage() {
  return (
    <div>
      <UserManager/>
    </div>
  );
}

// "use client"
// import { useState } from "react";

// export default function SingleForm() {
//   const [email, setEmail] = useState("")
//   const [error, setError] = useState("");
  
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault(); // Ngăn reload trang
//     if(!email.includes("@")) {
//       setError("Email không hợp lệ !!!!!");
//     } else {
//       setError("");
//       alert(`Gửi thành công: ${email}`);
//     }
//   };
//   return (
//     <form onSubmit={handleSubmit} className="space-y-3">
//       <input type="text"
//              value={email}
//              onChange={(e) => setEmail(e.target.value)}
//              placeholder="Nhập email...."
//              className="border p-2 rounded w-full"
//       />
//       {error && <p className="text-red-500">{error} </p>}
//       <button className="bg-blue-500 text-white px-4 py-2 rounded">
//         Gửi
//       </button>
//     </form>
//   );
// }
