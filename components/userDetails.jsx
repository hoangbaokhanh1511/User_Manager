
"use client"

export default function userDetails({user}) {
  if(user) 
  return (
    <div className="p-3 border rounded bg-amber-200">
      <h2 className="font-bold text-lg mb-2">{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>City: {user.city}</p>
    </div>
  );
}



