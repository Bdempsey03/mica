import {React, useState} from 'react';
import {CNavItem,CNavbar,CNavbarNav,CContainer,CNavbarBrand,CNavLink,CNavbarToggler,CCollapse} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function Banner(props){
    const [visible, setVisible] = useState(false)
    return (
      <>
        <CNavbar expand="lg" className="bg-body-tertiary">
          <CContainer fluid>
            <CNavbarBrand href="#">Navbar</CNavbarBrand>
            <CNavbarToggler
              aria-label="Toggle navigation"
              aria-expanded={visible}
              onClick={() => setVisible(!visible)}
            />
            <CCollapse className="navbar-collapse" visible={visible}>
              <CNavbarNav>
                <CNavItem>
                  <CNavLink href="#" active>
                    Home
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#">Features</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#">Pricing</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#" disabled>
                    Disabled
                  </CNavLink>
                </CNavItem>
              </CNavbarNav>
            </CCollapse>
          </CContainer>
        </CNavbar>
      </>
    )
}

export default Banner;