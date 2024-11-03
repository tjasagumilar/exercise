import Sidebar from "./components/Sidebar/Sidebar";
import UserDetails from "./components/UserDetails/UserDetails";
import { useState } from "react";

function App() {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleSelectUser = (userId) => {
    setSelectedUserId(userId);
  }

  const handleUserUpdated = () => {
    setRefresh(!refresh); 
  } 

  return (
    <div className="flex h-screen font-madefor">
      <Sidebar onSelectUser={handleSelectUser} refresh={refresh}/>
      <UserDetails userId={selectedUserId} onUserUpdated={handleUserUpdated}/>
    </div>

  );
}

export default App;
