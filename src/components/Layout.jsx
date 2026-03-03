import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children }) => (
  <div className="flex">
    <Sidebar />
    <div className="flex-1 bg-gray-100 min-h-screen">
      <Header />
      {children}
    </div>
  </div>
);

export default Layout;