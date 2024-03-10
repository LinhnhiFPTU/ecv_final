import "./App.css";
import KanbanBoard from "./components/KanbanBoard";
import SidebarData from "./components/Sidebar/SidebarData";

function App() {
 return (
    <div className="flex">
      <SidebarData />
      <KanbanBoard />
    </div>
  );
}

export default App;
