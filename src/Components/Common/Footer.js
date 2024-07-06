import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
                          <footer class="develop-FooterSection-root ">
                   <div class="container develop-MuiContainer-root develop-MuiContainer-fixed develop-MuiContainer-maxWidthLg">
                       <div class="d-flex develop-MuiGrid-root develop-FooterSection-footerInfo develop-MuiGrid-container">
                           <div class="col-12 col-md-3 develop-MuiGrid-root develop-MuiGrid-container develop-MuiGrid-item develop-MuiGrid-grid-xs-6 develop-MuiGrid-grid-sm-3">
                               <div class="develop-MuiGrid-root">
                                   <p class="develop-FooterSection-content develop-FooterSection-contentBig">PAYMENT SOLUTIONS</p>
                                   <p class="develop-MuiTypography-root develop-FooterSection-content develop-FooterSection-contentMenu"><a class="develop-MuiTypography-root develop-MuiLink-root develop-MuiLink-underlineHover developer-FooterSection-link develop-MuiTypography-colorPrimary" href="/v3/docs/payment/guides/home">Product Guides</a></p>
                                   <p class="develop-MuiTypography-root develop-FooterSection-content develop-FooterSection-contentMenu"><a class="develop-MuiTypography-root develop-MuiLink-root develop-MuiLink-underlineHover developer-FooterSection-link develop-MuiTypography-colorPrimary" href="/v3/docs/payment/api/wallet/onetime">Documentation</a></p>
                                   <p class="develop-MuiTypography-root develop-FooterSection-content develop-FooterSection-contentMenu"><a class="develop-MuiTypography-root develop-MuiLink-root develop-MuiLink-underlineHover developer-FooterSection-link develop-MuiTypography-colorPrimary" href="/v3/docs/payment/branding/brand-usage-agreement">Branding Guidelines</a></p>
                                   <p class="develop-MuiTypography-root develop-FooterSection-content develop-FooterSection-contentMenu"><a class="develop-MuiTypography-root develop-MuiLink-root develop-MuiLink-underlineHover developer-FooterSection-link develop-MuiTypography-colorPrimary" href="/v3/docs/payment/onboarding/merchant-profile">Onboarding Process</a></p>
                               </div>
                           </div>
                           <div class="col-12 col-md-3 develop-MuiGrid-root develop-MuiGrid-container develop-MuiGrid-item develop-MuiGrid-grid-xs-6 develop-MuiGrid-grid-sm-3">
                               <div class="develop-MuiGrid-root">
                                   <p class="develop-FooterSection-content develop-FooterSection-contentBig">MINI APP</p>
                                   <p class="develop-MuiTypography-root develop-FooterSection-content develop-FooterSection-contentMenu"><a class="develop-MuiTypography-root develop-MuiLink-root develop-MuiLink-underlineHover developer-FooterSection-link develop-MuiTypography-colorPrimary" href="/v3/docs/app-center/intro/what-is-mini-app">Mini App Introduction</a></p>
                                   <p class="develop-MuiTypography-root develop-FooterSection-content develop-FooterSection-contentMenu"><a class="develop-MuiTypography-root develop-MuiLink-root develop-MuiLink-underlineHover developer-FooterSection-link develop-MuiTypography-colorPrimary" href="/v3/docs/app-center/development-guideline/introduction/process-overview">Development Guideline</a></p>
                               </div>
                           </div>
                           <div class="col-12 col-md-3 develop-MuiGrid-root develop-FooterSection-marginMobile develop-MuiGrid-container develop-MuiGrid-item develop-MuiGrid-grid-xs-12 develop-MuiGrid-grid-sm-3">
                               <div class="develop-MuiGrid-root"><span class="develop-MuiTypography-root develop-FooterSection-content develop-FooterSection-contentBig">CONTACT US</span>
                                   <p class="develop-MuiTypography-root develop-FooterSection-content develop-FooterSection-contentSmall develop-MuiTypography-body1"> Hotline: <b> <a href="tel:1900 636 652" >1900 636 652</a> </b> </p>
                                   <p class="develop-MuiTypography-root develop-FooterSection-content develop-FooterSection-contentSmall develop-MuiTypography-body1"> Email: <b> <a href="mailto:merchant.care@momo.vn">merchant.care@momo.vn</a> </b> </p>
                               </div>
                           </div>
                           <div class="col-12 col-md-3 develop-MuiGrid-root develop-FooterSection-marginMobile develop-MuiGrid-item develop-MuiGrid-grid-xs-12 develop-MuiGrid-grid-sm-3">
                               <div class="develop-MuiGrid-root develop-MuiGrid-item develop-MuiGrid-grid-xs-12"><span class="develop-MuiTypography-root develop-FooterSection-content develop-FooterSection-contentBig">DOWNLOAD APP</span></div>
                               <div class="develop-MuiGrid-root develop-MuiGrid-item develop-MuiGrid-direction-xs-column develop-MuiGrid-grid-xs-12">
                                   <div class="develop-MuiGrid-root develop-FooterSection-contentSmall develop-MuiGrid-item develop-MuiGrid-grid-xs-12"><a class="develop-MuiTypography-root develop-MuiLink-root develop-MuiLink-underlineHover develop-MuiTypography-colorPrimary" href="https://itunes.apple.com/vn/app/id918751511" rel="noreferrer" target="_blank"><img src="data:image/webp;base64,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" class="develop-FooterSection-storeIcon" alt="Google play"/></a></div>
                                   <div class="develop-MuiGrid-root develop-FooterSection-contentSmall develop-MuiGrid-item develop-MuiGrid-grid-xs-12"><a class="develop-MuiTypography-root develop-MuiLink-root develop-MuiLink-underlineHover develop-MuiTypography-colorPrimary" href="https://play.google.com/store/apps/details?id=com.mservice.momotransfer" rel="noreferrer" target="_blank"><img src="data:image/webp;base64,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" class="develop-FooterSection-storeIcon" alt="Google play"/></a></div>
                               </div>
                           </div>
                       </div>
                       <hr class="develop-MuiDivider-root"/>
                       <p class="develop-MuiTypography-root develop-FooterSection-copyright">©Copyright M_Service 2021</p>
                   </div>
               </footer>
        </footer>
    );
};

export default Footer;
