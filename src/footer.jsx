import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Footer extends Component {
render() {
 return(

<footer class="site_footer full_row">
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="row">
                        <div class="col-md-4">
                            <h3>Company Info</h3>
                            <div class="expand_footer">
                                <ul class="quick_links">
                                    <li><a href="">About Us</a></li>
                                    <li><a href="">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <h3>Customer Service</h3>
                            <div class="expand_footer">
                                <ul class="quick_links">
                                    <li><a href="">Help Center</a></li>
                                    <li><a href="">Returns</a></li>
                                    <li><a href="">Shipping Policy</a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <h3>Resources</h3>
                            <div class="expand_footer">
                                <ul class="quick_links">
                                    <li><a href="">Coupons</a></li>
                                    <li><a href="">Security & Privacy</a></li>
                                    <li><a href="">Terms of Use</a></li>
                                </ul>

                            </div>
                        </div>
                    </div>

                </div>

                <div class="col-md-4">
                    <h3>Contact Info</h3>
                    <div class="expand_footer">
                        <ul class="contact_footer reset">
                            <li> <i class="flaticon-facebook-placeholder-for-locate-places-on-maps"></i> 2400 Armory Road, Fayetteville, NC 28301</li>
                            <li> <i class="flaticon-phone-call"></i> (987) 654-3210 </li>
                            <li> <i class="flaticon-mail"></i> info@constructionsupplydepot.com</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="copyrights">
                <p>© 2018 Constructionsupplydepot.com. All Rights Reserved.</p>
                <img src={require('./img/pay_footer.png')} />
            </div>

        </div>
    </footer>


    );

    }
  }
  
  export default Footer;  