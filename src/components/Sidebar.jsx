import { ImCross } from "react-icons/im";
import sidebarOverlay from "../assets/mobileoverlay.png";
const Sidebar = ({ children, isOpen, onClose }) => {
  return (
    <div className={isOpen ? "" : `hidden`}>
      <div
        className={`z-50 fixed w-[60%] h-full top-0 right-0 bg-[#050E2B] transition transform duration-500 overflow-hidden ${
          isOpen ? "translate-x-0" : "translate-x-full relative"
        }`}
      >
        <button onClick={onClose} className="absolute top-4 right-2 p-2">
          <ImCross className="text-white" />
        </button>
        {children}
        <div className="absolute w-[213px] h-[172px] z-[52] -left-10 -top-32">
          <img src={sidebarOverlay} alt="sidebar overlay" />
        </div>
        <div className="absolute z-[52] md:w[314px] md:h-[252px] -right-16 -bottom-4">
          <img src={sidebarOverlay} alt="sidebar overlay" />
        </div>
      </div>
      {isOpen && (
        <div className="fixed left-0 top-0 z-40 h-full w-full bg-black opacity-70" />
      )}
    </div>
  );
};
export default Sidebar;
