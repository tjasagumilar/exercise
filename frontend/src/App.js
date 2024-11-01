import Sidebar from "./components/Sidebar/Sidebar";
import UserDetails from "./components/UserDetails/UserDetails";
import { useState } from "react";

function App() {
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleSelectUser = (userId) => {
    setSelectedUserId(userId); 
  }

  return (
    <div className="flex items-center h-full w-full">
      <Sidebar onSelectUser={handleSelectUser}/>
      <UserDetails userId={selectedUserId}/>
    </div>

  );
}

export default App;
