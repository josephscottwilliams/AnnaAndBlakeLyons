import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import pic from './images/AnnaAndBlake.jpg';
import './css/style.css';
import bbb from './images/bbb.png';
import amazon from './images/amazon-logo.png';
import heart from './images/heart.png';


class Hello extends React.Component {
    render() {
        return (
            <div className="body">
                <div className="jumbotron-fluid" id="jumbotron">
                    <img
                    // src={pic} 
                    // id="jumbotron"
                    ></img>
                    <div className="title" id="main-title">
                        <h1 className="title">Anna Glover &amp; Blake Lyons</h1>
                        <p id="wedding-subtitle">Wedding Reception</p>

                    </div>
                </div>

                <div 
                // className="container"
                >
                    <div className="row custom-row" id="info-row">
                        <div className="col-lg-4 center small-column">
                            <div>
                            <iframe src="https://calendar.google.com/calendar/embed?height=300&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FChicago&amp;src=YWhkNDhkZGtxM2RqZWVwdm85bzZoYnVsamdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23E4C441&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0" width="95%" height="300" frameborder="0" scrolling="no"></iframe>
                            </div>
                           
                    <br></br>
                            
                    <br></br>

                    
                    <a href="https://calendar.google.com/calendar?cid=YWhkNDhkZGtxM2RqZWVwdm85bzZoYnVsamdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ" target="_blank">
                        <button className="btn btn-primary">Add to Calendar</button></a>
                            <br></br>
                            <br></br>
                            This date may change, please check back for updates!

                        </div>
                        <div className="col-lg-8">
                            <h2>Family and Friends</h2>
                            <p>We hope you and your families are safe and healthy. 
                            We were so looking forward to celebrating with you on April 23, 
                            but COVID-19 has changed our plans!</p>
                            <p>We still intend on getting married April 23, but will most likely be postponing our reception until the danger of COVID-19 has passed. We will update this website as we have more information, 
                            so check back here! Thank you for your love and support!</p>
                            <p className="closing">
                            <img src={heart} id="heart"></img>
                                 Anna &amp; Blake</p>
                        </div>

                    </div>
                </div>
                <div 
                // className="container"
                >
                    <div className="row">

                        <div className="col-12" style={{margin: 0}}>

                        
                        <div className="wedding-title-div">
                            <h2 className="center wedding-reg-title">Wedding Registry</h2>
                            <h2 id="wedding-reg-subtitle">Click below to view registry</h2>
                        </div>
                        <br></br>

                        <div id="registry-div">
                            <a href="https://www.amazon.com/wedding/registry/240HZCLT9UBZX?ref=wr_search_page_result_2">
                                <img src={amazon} id="amazon"></img>
                            </a>
                            <a href="https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/548313671">
                                <img src={bbb} id="bbb"></img>
                            </a>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Hello;