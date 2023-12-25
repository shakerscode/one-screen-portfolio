import { Outlet } from "react-router-dom";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

function Layout() {
  return (
    <div className="bg-primary w-full md:h-[100vh] overflow-hidden overflow-x-hidden relative">
      <div className="w-[100%] mx-auto max-w-[1380px] m-4 md:h-[95vh] rounded-3xl  overflow-hidden overflow-x-hidden">
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
