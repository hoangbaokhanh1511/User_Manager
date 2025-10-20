// "use client";
// export default function Header() {
//     return (
//         <header style={{
//             backgroundColor: "#0070f3",
//             padding: "16px",
//             color: "white", 
//             textAlign: "center"
//         }}>
//             <h1> MINI NEXT.JS APP </h1>
//             <p> EXAMPLES OF USING COMPONENTS</p>
//         </header>
//     );
// }

// Component: Tìm kiếm người dùng
"use client"
import "../css/search_input.css"

export default function searchBar({onSearchChange}) {
    return (
        <input type="text" 
               placeholder="Tìm kiếm...." 
               className="search-Input bg-amber-100 p-4 font-bold text-l rounded-sm" 
               onChange={(e) => onSearchChange(e.target.value)}
        />
    );
}