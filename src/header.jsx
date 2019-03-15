import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

class Header extends Component {
render() {
return(

 <div>
<header class="header">
        <div class="container">

            <div class="top-links">
                <ul class="right reset">
                    <li>
                        <a href="#"> <i class="flaticon-phone-call"></i> (987) 654-3210</a>
                    </li>
                    <li><a href="#">Order Status</a></li>
                    <li><a href="#">Live Chat</a></li>
                    <li><a href="#">DIY Articles</a></li>
                    <li><a href="#">Help</a></li>
                     <li><div></div></li>
                </ul>
            </div>
          
    <div class="top-body">
<div class="search-large">
<div class="recent-search-list">
<h4>Tranding Search</h4>
<ul class="reset">
<li><a href="">Steel Kitchen</a></li>
<li><a href="">Stainless Steel Kitchen</a></li>
<li><a href="">Steel Kitchen Sink</a></li>
<li><a href="">Spray Kitchen</a></li>
<li><a href="">Undermount Kitchen Sink</a></li>
<li><a href="">Kitchen Faucet Includes</a></li>
<li><a href="">Handle Kitchen</a></li>
<li><a href="">Handle Kitchen Faucet</a></li>
<li><a href="">Basic Undermount Kitchen</a></li>

</ul>
</div>

</div>
              <div class="logo">
                    <a href=""><img src={require('./img/logo.png')} /></a>
                </div>
                <div class="search">
                    <form>
                        <input type="text" placeholder="What are you shopping for?" />
                        <button class="search-btn"><i class="flaticon-search"></i></button>
                    </form>
                </div>

                <div class="login-cart">
                    <ul class="reset right">
                   
                        <li class="dropdown">
                            <a href="javascript:void(0);" data-toggle="dropdown" aria-haspopup="true"> <i class="flaticon-user"></i> Hi! Mohana <span>My Profile</span> </a>
                            <ul class="dropdown-menu">
                            <li><a href=""><i class="material-icons">widgets</i> Orders and Returns</a></li>
                            <li><a href=""><i class="material-icons">work</i> Projects</a></li>
                            <li class="active"><a href=""><i class="material-icons">favorite</i> Favorites</a></li>
                            <li><a href=""><i class="material-icons">account_circle</i> Account Details</a></li>
                            <li><a href=""><i class="material-icons">notifications</i> Notifications</a></li>
                            <li class="logout"><a href=""><i class="material-icons">exit_to_app</i> Log Out</a></li>
                          </ul>
                            </li>
                        
                            
                        <li>
                            <a href=""> <i class="flaticon-shopping-bag"></i> Cart <span>2 Items</span> </a>
                        </li>
                    </ul>
                </div>
            </div>
           

            <div class="top-navigation relative">
                <a href="javascript:void(0);" class="categories-btn"> <i class="flaticon-menu"></i> Categories</a>
                <ul class="site_menu reset">
                    <li> <Link to="/list">List</Link> </li>
                    <li> <Link to="/Bathroom">Bathroom </Link></li>
                    <li> <a href="listing.html"> Kitchen</a></li>
                    <li> <a href="listing.html"> Lighting</a></li>
                    <li> <a href="listing.html"> Fans </a></li>
                    <li> <a href="listing.html"> Hardware </a></li>
                    <li> <a href="listing.html"> Appliances </a></li>
                    <li> <a href="listing.html"> Decor </a></li>
                    <li> <a href="listing.html"> Outdoor </a></li>
                    <li> <a href="listing.html">HVAC </a></li>
                    <li> <a href="listing.html"> Flooring</a></li>
                    <li> <a href="listing.html">Commercial </a></li>
                </ul>


                <div class="all-categories">
                <ul class="reset">
                <li>
                <a href="listing.html" class="text-center">
                    <img src={require('./img/cat1.png')} />
                    <span class="text-black w100 mt10 dinb f14">Bathroom</span>
                </a>
                 </li>
                   <li>
                <a href="listing.html" class="text-center">
                   <img src={require('./img/cat2.png')} /> 
                    <span class="text-black w100 mt10 dinb f14">Kitchen</span>
                </a>
                 </li>
                   <li>
                <a href="listing.html" class="text-center">
                    <img src={require('./img/cat3.png')} />
                    <span class="text-black w100 mt10 dinb f14">Lighting</span>
                </a>
                 </li>
                   <li>
                <a href="listing.html" class="text-center">
                   <img src={require('./img/cat4.png')} />
                    <span class="text-black w100 mt10 dinb f14">Fans</span>
                </a>
                 </li>
                   <li>
                <a href="listing.html" class="text-center">
                  <img src={require('./img/cat5.png')} />
                    <span class="text-black w100 mt10 dinb f14">Hardware</span>
                </a>
                 </li>
                   <li>
                <a href="listing.html" class="text-center">
                  <img src={require('./img/cat6.png')} />
                    <span class="text-black w100 mt10 dinb f14">Appliances</span>
                </a>
                 </li>
                   <li>
                <a href="listing.html" class="text-center">
                    <img src={require('./img/cat7.png')} />
                    <span class="text-black w100 mt10 dinb f14">Decor</span>
                </a>
                 </li>
                   <li>
                <a href="listing.html" class="text-center">
                  <img src={require('./img/cat8.png')} />
                    <span class="text-black w100 mt10 dinb f14">Outdoor</span>
                </a>
                 </li>

                 <li>
                <a href="listing.html" class="text-center">
                   <img src={require('./img/cat9.png')} />
                    <span class="text-black w100 mt10 dinb f14">HVAC</span>
                </a>
                 </li>
                   <li>
                <a href="listing.html" class="text-center">
                  <img src={require('./img/cat10.png')} />
                    <span class="text-black w100 mt10 dinb f14">Flooring</span>
                </a>
                 </li>
                   <li>
                <a href="listing.html" class="text-center">
                    <img src={require('./img/cat11.png')} />
                    <span class="text-black w100 mt10 dinb f14">Commercial</span>
                </a>
                 </li>
                   <li>
                <a href="listing.html" class="text-center">
                  <img src={require('./img/cat1.png')} />
                    <span class="text-black w100 mt10 dinb f14">Bathroom</span>
                </a>
                 </li>
                   <li>
                <a href="listing.html" class="text-center">
                   <img src={require('./img/cat2.png')} />
                    <span class="text-black w100 mt10 dinb f14">Kitchen</span>
                </a>
                 </li>
                   <li>
                <a href="listing.html" class="text-center">
                  <img src={require('./img/cat3.png')} />
                    <span class="text-black w100 mt10 dinb f14">Lighting</span>
                </a>
                 </li>
                   <li>
                <a href="listing.html" class="text-center">
                <img src={require('./img/cat4.png')} />
                    <span class="text-black w100 mt10 dinb f14">Fans</span>
                </a>
                 </li>
                   <li>
                <a href="listing.html" class="text-center">
                  <img src={require('./img/cat5.png')} />
                    <span class="text-black w100 mt10 dinb f14">Hardware</span>
                </a>
                 </li>
                </ul>
                </div>
        </div>
</div>
        
    </header>

      </div>
         );
    }

}

export default Header;