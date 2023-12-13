import React from 'react'
import './Sleeve.css';
import pic from './images/ArtCarolinePolachek (1).jpg';
import pic1 from './images/ArtChelseaCutler.jpg';
import pic2 from './images/ArtPetitBiscuit.jpg';
import pic3 from './images/ArtSlowMagic.jpg';
import boxpic from './images/ThemeUIActive@2x.png';
import boxpic1 from './images/ThemeFile@2x.png';
import scrol1 from './images/Artwork1@2x.jpg';
import scrol2 from './images/Artwork2@2x.jpg';
import scrol3 from './images/Artwork3@2x.jpg';
import scrol4 from './images/Typography1@2x.jpg';
import scrol5 from './images/Settings1@2x.jpg'



const Sleeve = () => {
    return (
        <div className='container'>
            <h1 className='heading'> Sleeve  <span>2</span></h1>
            <p className='sub-heading'> The ultimate music accessory for your Mac.</p>
            <p className='sub-sub-heading'> Sleeve sits on the desktop, displaying and controlling the music you’re <br />currently playing in

                Apple Music,

                Spotify, and

                Doppler.</p>
            <div>
                <div className=' buttons'>


                    <button className='apple-button'> Map App Store</button>&nbsp;&nbsp;&nbsp;
                    <button className='apple-button1'> By Directly <span className='cash'> $5.99</span></button>



                </div>
            </div>
            <div className='light-text'> No subscriptions. No in-app<br /> purchases. Requires macOS 11 Big Sur <br />or later.</div>
            <div className='buttons'>
                <div className='navigation '> Now updated with support for macOS Sonoma. See What's new in Sleeve2.2
                </div>
            </div>
            <div className='text-primary text-center py-3 fw-bold'>  New In 2.0</div>

            <p className='sub-heading'> Themes. Unlimited themes.</p>
            <p className='sub-sub-heading'> Themes in Sleeve make creating and switching between customizations easy. Share your own creations with friends and install as many themes as you like with just a double-click.</p>
            <div class="row  main">
                <div class="col-3 text-center" style={{ paddig: "40px" }}>
                    <div class="card" >
                        <div class="card-body">
                            <img src={pic3} style={{ width: "12rem" }}
                            />
                            <h5 class="card-title pt-2">Eternal Sunshine</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Forgotten Feels</h6>

                        </div>
                    </div>
                </div>
                <div class="col-3 text-center" style={{ paddig: "40px" }}>
                    <div class="card" >
                        <div class="card-body">
                            <img src={pic} style={{ width: "12rem" }}
                            />


                            <h5 class="card-title mt-3" style={{ fontSize: "12px" }}>Bunn Is a Rider</h5>
                            <h6 style={{ fontSize: "12px" }}>Desire, I Want to Turn Into You</h6>
                            <p style={{ fontSize: "12px" }}>Caroline Polachek</p>
                            <svg viewBox="0 0 65 21" xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="17"
                                class="transform-gpu">
                                <path
                                    d="M61.59 16.578c.625 0 .922-.297.922-.922V5.07c0-.648-.297-.93-.922-.93h-1.727c-.625 0-.93.305-.93.93v5c-.078-.273-.273-.5-.609-.703l-8.031-4.719c-.273-.156-.523-.265-.805-.265-.531 0-1 .406-1 1.195v9.555c0 .789.469 1.195 1 1.195.282 0 .54-.101.805-.265l8.031-4.72c.328-.202.531-.429.61-.702v5.015c0 .625.304.922.93.922h1.726ZM30.426 17.65c.694 0 1.037-.334 1.037-1.037V4.704c0-.73-.343-1.046-1.037-1.046h-1.951c-.695 0-1.038.343-1.038 1.046v11.91c0 .702.343 1.036 1.038 1.036h1.95Zm6.1 0c.694 0 1.036-.334 1.036-1.037V4.704c0-.73-.342-1.046-1.037-1.046h-1.95c-.695 0-1.038.343-1.038 1.046v11.91c0 .702.343 1.036 1.037 1.036h1.951ZM5.144 16.578c.617 0 .921-.297.921-.922v-5.015c.079.273.282.5.618.703l8.03 4.719c.266.164.516.265.798.265.539 0 1-.406 1-1.195V5.578c0-.789-.461-1.195-1-1.195-.282 0-.532.11-.797.265l-8.031 4.72c-.336.202-.54.429-.618.702v-5c0-.648-.304-.93-.921-.93H3.41c-.617 0-.922.305-.922.93v10.586c0 .625.305.922.922.922h1.735Z">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="col-3 text-center" style={{ paddig: "40px" }}>
                    <div class="card" >
                        <div class="card-body">
                            <img src={pic1} style={{ width: "12rem" }}
                            />
                            <svg viewBox="0 0 65 21" xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="16"
                                class="transform-gpu">
                                <path
                                    d="M61.59 16.578c.625 0 .922-.297.922-.922V5.07c0-.648-.297-.93-.922-.93h-1.727c-.625 0-.93.305-.93.93v5c-.078-.273-.273-.5-.609-.703l-8.031-4.719c-.273-.156-.523-.265-.805-.265-.531 0-1 .406-1 1.195v9.555c0 .789.469 1.195 1 1.195.282 0 .54-.101.805-.265l8.031-4.72c.328-.202.531-.429.61-.702v5.015c0 .625.304.922.93.922h1.726ZM30.426 17.65c.694 0 1.037-.334 1.037-1.037V4.704c0-.73-.343-1.046-1.037-1.046h-1.951c-.695 0-1.038.343-1.038 1.046v11.91c0 .702.343 1.036 1.038 1.036h1.95Zm6.1 0c.694 0 1.036-.334 1.036-1.037V4.704c0-.73-.342-1.046-1.037-1.046h-1.95c-.695 0-1.038.343-1.038 1.046v11.91c0 .702.343 1.036 1.037 1.036h1.951ZM5.144 16.578c.617 0 .921-.297.921-.922v-5.015c.079.273.282.5.618.703l8.03 4.719c.266.164.516.265.798.265.539 0 1-.406 1-1.195V5.578c0-.789-.461-1.195-1-1.195-.282 0-.532.11-.797.265l-8.031 4.72c-.336.202-.54.429-.618.702v-5c0-.648-.304-.93-.921-.93H3.41c-.617 0-.922.305-.922.93v10.586c0 .625.305.922.922.922h1.735Z">
                                </path>
                            </svg>

                            <h5 class="card-tex text-center">Are You Listening</h5>
                            <p>How To Be Human
                                Chelsea Cutler</p>
                        </div>
                    </div>
                </div>
                <div class="col-3 text-center" style={{ paddig: "40px" }}>
                    <div class="card" >
                        <div class="card-body">
                            <img src={pic2} style={{ width: "12rem" }}
                            />


                            <h5 class="card-tex text-center">Creation Comes Alive
                            </h5>
                            <p>Petit Biscuit</p>
                        </div>
                    </div>
                </div>
            </div>



            <div className='row buttons pt-5'>
                <div className='col-12 col-md-5 col-lg-5 col-xl-5 box '>
                    <div className='row'>
                        <div className='col-6 col-md-6 col-lg-6 col-xl-6 '>
                            <h4> Change it up</h4>
                            <h6 className='box-content'> Switch between themes with just a click.<br /><br />

                                Modify the built-in themes or create your own using Sleeve’s extensive preferences.</h6>
                        </div>
                        <div className='col-6 col-md-6 col-lg-6 col-xl-6 d-flex align-items-center'>
                            <img src={boxpic} alt="" className='w-100 ' />
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-5 col-lg-5 col-xl-5 box1 ms-5'>
                    <div className='row'>
                        <div className='col-6 col-md-6 col-lg-6 col-xl-6'>
                            <h4> Shareable</h4>
                            <h6 className='box-content'> Export your themes and share them with friends using the handy new Sleeve Theme file format.<br /><br />

                                Install themes from anywhere with a double-click or a drag and drop.</h6>
                        </div>
                        <div className='col-6 col-md-6 col-lg-6 col-xl-6'>
                            <img src={boxpic1} alt="" className='w-100 ' />

                        </div>
                    </div>

                </div>

            </div>
            <div className='customization'>CUSTOMIZATION </div>
            <p className='sub-heading'>Countless ways to customize.</p>
            <p className='sub-sub-heading'> Customization is at the core of the Sleeve experience — choose from any combination of design choices, behaviors and settings to make Sleeve at home on your desktop.</p>
            <div class="sticky top-0 w-full h-screen bg-[#80A73C] sonoma-wallpaper-banner z-0">
                <div className='row margin'>
                    <div className='col-12 col-md-6 col-lg-6 col-xl-6'>
                        <p className='scroll-heading'>At Work</p>
                        <p className='scroll-para'>Scale artwork all the way up or all the way down. Round the corners or leave them square. </p>

                        <p className='scroll-para'> Choose shadow and lighting effects to bring your album artwork to life.</p>
                        <p className='scroll-para'> Or hide it completely.</p>
                    </div>
                    <div className='col-12 col-md-6 col-lg-6 col-xl-6 text-center'>
                        <img src={scrol1} className='w-75 py-1 px-5' />
                        <img src={scrol2} className='w-75 py-1 px-5' />
                        <img src={scrol3} className='w-75 py-1 px-5' />
                    </div>
                </div>
                <div className='row  margin'>
                    <div className='col-12 col-md-6 col-lg-6 col-xl-6 d-flex justify-content-center align-items-center'>
                        <img src={scrol4} className='w-75 py-1 px-5' />
                    </div>
                    <div className='col-12 col-md-6 col-lg-6 col-xl-6  '>

                        <p className='scroll-heading'>Typography</p>
                        <p className='scroll-para'>Pick the track info you want to display, and then exactly how to display it. </p>

                        <p className='scroll-para'> Choose the fonts, weights, sizes, and transparency to use for each line, along with customizing color and shadow.</p>


                    </div>
                </div>
                <div className='row margin'>
                    <div className='col-12 col-md-6 col-lg-6 col-xl-6 '>
                        <p className='scroll-heading'>Settings</p>
                        <p className='scroll-para'>Decide if Sleeve stays out of the way, behind windows, or in front of them — or only when you need to see it. </p>

                        <p className='scroll-para'>Show it in the Dock, choose from custom icons, or keep it on the Desktop only.</p>

                    </div>
                    <div className='col-12 col-md-6 col-lg-6 col-xl-6 d-flex justify-content-center align-items-center'>
                        <img src={scrol5} className='w-75 py-1 px-5' />

                    </div>
                </div>
            </div>

            <div className='customization'>INTEGRATION</div>
            <p className='sub-heading'>Like, Scrobble. </p>
        </div >




    )
}

export default Sleeve