import Companies from "../components/Companies";
import Contact from "../components/Contact";
import Groups from "../components/Groups";
import Header from "../components/Header";
import Message from "../components/Message";
import Footer from "../components/footer";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [items, setItems] = useState([
    { name: "HOME", url: "#header" },
    { name: "ABOUT US", url: "#about" },
    { name: "OUR COMPANIES", url: "#companies" },
    { name: "OUR GROUPS", url: "#groups" },
  ]);
  return (
    <div className="overflow-hidden">
      <Header onClickButton={() => setIsSidebarOpen(true)} />
      <Message />
      <Companies />
      <Groups />
      <Contact />
      <Footer />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}>
        <div className="my-32 mx-9">
          <ul className="space-y-10 text-white font-normal cursor-pointer">
            {items.map((item, i) => (
              <li
                className="hover:text-[#D47E43] active:text-[#D47E43] transform duration-300 ease-in-out"
                key={i}
              >
                <a onClick={() => setIsSidebarOpen(false)} href={`${item.url}`}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Sidebar>
    </div>
  );
};
export default Home;
