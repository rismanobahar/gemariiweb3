
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">TENTANG KAMI</span>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrpmx_u0iIwRUKllnrPNgdKDIhQ0La7vkSbg&usqp=CAU"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">KATEGORI</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">European</li>
          <li className="sidebarListItem">Asian</li>
          <li className="sidebarListItem">Africa</li>
          <li className="sidebarListItem">American</li>
          <li className="sidebarListItem">Australian</li>
          <li className="sidebarListItem">Best Models</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW KAMI</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
