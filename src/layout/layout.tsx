import { Outlet } from "react-router-dom";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

function Layout() {
  return (
    <div className="bg-primary w-full h-[100vh] overflow-hidden overflow-x-hidden relative">
      <div className="bg-white w-[100%] mx-auto max-w-[1380px] m-4 h-[95vh] rounded-3xl  overflow-hidden overflow-x-hidden">
        <Header />
        <main className="px-4">
          <Outlet />
        </main>
        <Footer/>
      </div>
    </div>
  );
}

export default Layout;
