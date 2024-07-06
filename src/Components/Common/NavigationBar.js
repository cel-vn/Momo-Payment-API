import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavigationBar = () => {
  return (
    <Navbar bg="primary" expand="lg" fixed="top" variant="dark" className="navbar navbar--fixed-top navbarHideable_jvwV navbar--primary">
      <Container>
        <Navbar.Brand href="/v3/">
          <img
            src="/images/momo/svg/logo.svg"
            alt="My Site Logo"
            className="d-inline-block align-top logo"
          />
          <b className="navbar__title text--truncate">Developers</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Payment Solutions" id="payment-solutions-dropdown">
              <NavDropdown.Item href="/v3/docs/payment/guides/home">
                Product Guides
              </NavDropdown.Item>
              <NavDropdown.Item href="/v3/docs/payment/api/wallet/onetime">
                Documentation
              </NavDropdown.Item>
              <NavDropdown.Item href="/v3/docs/payment/branding/brand-usage-agreement">
                Branding Guidelines
              </NavDropdown.Item>
              <NavDropdown.Item href="/v3/docs/payment/onboarding/overall">
                Onboarding Process
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Mini App" id="mini-app-dropdown">
              <NavDropdown.Item href="/v3/docs/app-center/intro/what-is-mini-app">
                Mini App Introduction
              </NavDropdown.Item>
              <NavDropdown.Item href="/v3/docs/app-center/development-guideline/introduction/process-overview">
                Development Guideline
              </NavDropdown.Item>
              <NavDropdown.Item href="/v3/docs/app-center/design-guideline/design-guideline-overview">
                Design Guideline
              </NavDropdown.Item>
              <NavDropdown.Item href="/v3/docs/app-center/open-capabilities/open-capabilities-introduction">
                Open Capabilities
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Marketing Solutions" id="marketing-solutions-dropdown">
              <NavDropdown.Item href="/v3/docs/business-page/overall/">
                Business Page
              </NavDropdown.Item>
              <NavDropdown.Item href="/v3/docs/voucher-distribution/home">
                Voucher Distribution
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/v3/download">Download</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Item className="searchBox_ZlJk">
              <Nav.Link href="#">
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1p4q3qm"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="SearchIcon"
                  width="24"
                  height="24"
                >
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                </svg>
                <span className="css-1iasb52">Search docs</span>
                <div className="css-blkcio">⌘K</div>
              </Nav.Link>
            </Nav.Item>
            <NavDropdown title="English" id="language-dropdown">
              <NavDropdown.Item href="/v3/docs/payment/guides/home" lang="en">
                English
              </NavDropdown.Item>
              <NavDropdown.Item href="/v3/vi/docs/payment/guides/home" lang="vi">
                Tiếng Việt
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              href="https://github.com/momo-wallet/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub repository"
            >
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 Z M14.4620824,16.8843547 L14.2441233,16.90525 C13.5186491,16.9677526 12.767915,17 12,17 C11.1547949,17 10.3304031,16.9609345 9.53759717,16.88546 C10.1246909,19.3708098 11.1006107,21 12,21 C12.8993893,21 13.8753091,19.3708098 14.4620824,16.8843547 Z M3.64169598,15.3451588 L3.70726461,15.5032062 C4.640313,17.7091803 6.42787836,19.4657225 8.65500314,20.3578752 C8.11981529,19.3256577 7.70012215,18.0380801 7.41726703,16.582781 C5.96191989,16.2998778 4.67434228,15.8801847 3.64169598,15.3451588 Z M20.3578752,15.3449969 L20.2864995,15.3819675 C19.2662181,15.8994577 18.0045393,16.3063969 16.582781,16.582733 C16.2998778,18.0380801 15.8801847,19.3256577 15.3451588,20.358304 C17.6251087,19.4444967 19.4444967,17.6251087 20.3578752,15.3449969 Z M12,9 C11.0093584,9 10.0589741,9.06215519 9.17158477,9.17274875 C9.06207523,10.0601972 9,11.0099958 9,12 C9,12.9900042 9.06207523,13.9398028 9.17253533,14.8267022 C10.0589741,14.9378448 11.0093584,15 12,15 C12.9906416,15 13.9410259,14.9378448 14.8284152,14.8272512 C14.9379248,13.9398028 15,12.9900042 15,12 C15,11.0099958 14.9379248,10.0601972 14.8274647,9.17329782 C13.9410259,9.06215519 12.9906416,9 12,9 Z M7.11451324,9.53787806 L7.10181119,9.54118835 C4.623149,10.1283128 3,11.1022798 3,12 C3,12.8993893 4.62919022,13.8753091 7.11564526,14.4620824 C7.03905624,13.6694022 7,12.8451053 7,12 C7,11.1548947 7.03905624,10.3305978 7.11451324,9.53787806 Z M16.8843547,9.53791756 L16.9053741,9.75731733 C16.9677952,10.4823447 17,11.2325933 17,12 C17,12.8451053 16.9609438,13.6694022 16.8854868,14.4621219 C19.3708098,13.8753091 21,12.8993893 21,12 C21,11.1006107 19.3708098,10.1246909 16.8843547,9.53791756 Z M8.65484124,3.64169598 L8.49679384,3.70726461 C6.29081968,4.640313 4.5342775,6.42787836 3.64212484,8.65500314 C4.67434228,8.11981529 5.96191989,7.70012215 7.41721899,7.41726703 C7.70012215,5.96191989 8.11981529,4.67434228 8.65484124,3.64169598 Z M15.3449969,3.64212484 L15.3819675,3.71350051 C15.8994577,4.73378194 16.3063969,5.99546071 16.582733,7.41721899 C18.0380801,7.70012215 19.3256577,8.11981529 20.358304,8.65484124 C19.4444967,6.37489125 17.6251087,4.55550334 15.3449969,3.64212484 Z M12,3 C11.1006107,3 10.1246909,4.62919022 9.53791756,7.11564526 C10.3304031,7.03906546 11.1547949,7 12,7 C12.8452051,7 13.6695969,7.03906546 14.4624028,7.11453998 C13.8753091,4.62919022 12.8993893,3 12,3 Z"
                />
              </svg>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
