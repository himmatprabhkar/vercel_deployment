import { NavLink } from 'react-router-dom';

export const SideBarImage = () => {
  return (
    <div
      className="main-menu menu-fixed menu-light menu-accordion menu-shadow"
      data-scroll-to-active="true"
    >
      <div className="shadow-bottom" />
      <div className="main-menu-content">
        <ul
          className="navigation navigation-main"
          id="main-menu-navigation"
          data-menu="menu-navigation"
        >
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                (isActive ? 'active' : '') + ' d-flex text-center'
              }
              data-toggle="tooltip"
              data-placement="right"
              title="Service Request"
              to={'/'}
            >
              <i className="fas fa-tools" />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                (isActive ? 'active' : '') + ' d-flex text-center'
              }
              data-toggle="tooltip"
              data-placement="right"
              title="Complaint"
              to={'/complaints'}
            >
              <i className="fas fa-comments" />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                (isActive ? 'active' : '') + ' d-flex text-center'
              }
              data-toggle="tooltip"
              data-placement="right"
              title="Order Request"
              to={'/orders'}
            >
              <i className="fas fa-cart-arrow-down" />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                (isActive ? 'active' : '') + ' d-flex text-center'
              }
              data-toggle="tooltip"
              data-placement="right"
              title="Testimonial"
              to={'/testimonial'}
            >
              <i className="fas fa-quote-left" />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                (isActive ? 'active' : '') + ' d-flex text-center'
              }
              data-toggle="tooltip"
              data-placement="right"
              title="Events"
              to={'/events'}
            >
              <i className="fas fa-calendar-week" />
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                (isActive ? 'active' : '') + ' d-flex text-center'
              }
              data-toggle="tooltip"
              data-placement="right"
              title="Gallery"
              to={'/gallary'}
            >
              <i className="fas fa-images" />
            </NavLink>
          </li>

          {/* <li className="nav-item">
                        <a
                            className="d-flex text-center"
                            data-toggle="tooltip"
                            data-placement="right"
                            title="Manage House Plane"
                            href="manageHousePlane.html"
                        >
                            <i className="fas fa-drafting-compass" />
                        </a>
                    </li> */}
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                (isActive ? 'active' : '') + ' d-flex text-center'
              }
              data-toggle="tooltip"
              data-placement="right"
              title="Manage Video"
              to={'/videos'}
            >
              <i className="fas fa-video" />
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                (isActive ? 'active' : '') + ' d-flex text-center'
              }
              data-toggle="tooltip"
              data-placement="right"
              title="Manage Banner"
              to={'/banners'}
            >
              <i className="fas fa-image" />
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                (isActive ? 'active' : '') + ' d-flex text-center'
              }
              data-toggle="tooltip"
              data-placement="right"
              title="Notification Manage"
              to={'/notification'}
            >
              <i className="fas fa-bell" />
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                (isActive ? 'active' : '') + ' d-flex text-center'
              }
              data-toggle="tooltip"
              data-placement="right"
              title="Referr and earn"
              to={'/referr'}
            >
              <i className="fas fa-user-plus" />
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                (isActive ? 'active' : '') + ' d-flex text-center'
              }
              data-toggle="tooltip"
              data-placement="right"
              title="Manage YouTube Videos"
              to={'/manageSales'}
            >
              <i className="fab fa-youtube" />
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                (isActive ? 'active' : '') + ' d-flex text-center'
              }
              data-toggle="tooltip"
              data-placement="right"
              title="House Plans"
              to={'/housePlans'}
            >
              <i className="fas fa-home" />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
