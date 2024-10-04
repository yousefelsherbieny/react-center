const Footer = () => {
    return (
        <div className="footer mt-0">
            <div className="container">
                <div className="row py-1 py-md-2 px-lg-0">
                    <div className="col-lg-4 footer-col1">
                        <div className="row flex-column flex-md-row flex-lg-column">
                            <div className="col-md col-lg-auto">
                                <div className="footer-logo">
                                    {/* Correctly referencing the image from the public folder */}
                                    <img src="Project/images/footer-logo.png" alt="Footer Logo" className="img-fluid" />
                                </div>
                                <div className="mt-2 mt-lg-0"></div>
                                <div className="footer-social d-none d-md-block d-lg-none">
                                    <a href="https://www.facebook.com/" target="_blank" className="hovicon"><i className="icon-facebook-logo"></i></a>
                                    <a href="https://www.twitter.com/" target="_blank" className="hovicon"><i className="icon-twitter-logo"></i></a>
                                    <a href="https://plus.google.com/" target="_blank" className="hovicon"><i className="icon-google-logo"></i></a>
                                    <a href="https://www.instagram.com/" target="_blank" className="hovicon"><i className="icon-instagram"></i></a>
                                </div>
                            </div>
                            <div className="col-md">
                                <div className="footer-text mt-1 mt-lg-2">
                                    <p>To receive email releases, simply provide us with your email below</p>
                                    <form action="#" className="footer-subscribe">
                                        <div className="input-group">
                                            <input name="subscribe_mail" type="text" className="form-control" placeholder="Your Email" />
                                            <span><i className="icon-black-envelope"></i></span>
                                        </div>
                                    </form>
                                </div>
                                <div className="footer-social d-md-none d-lg-block">
                                    <a href="https://www.facebook.com/" target="_blank" className="hovicon"><i className="icon-facebook-logo"></i></a>
                                    <a href="https://www.twitter.com/" target="_blank" className="hovicon"><i className="icon-twitter-logo"></i></a>
                                    <a href="https://plus.google.com/" target="_blank" className="hovicon"><i className="icon-google-logo"></i></a>
                                    <a href="https://www.instagram.com/" target="_blank" className="hovicon"><i className="icon-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <h3>Blog Posts</h3>
                        <div className="h-decor"></div>
                        <div className="footer-post d-flex">
                            <div className="footer-post-photo"><img src="Project/images/content/footer-post-author-03.jpg" alt="" className="img-fluid" /></div>
                            <div className="footer-post-text">
                                <div className="footer-post-title"><a href="post.html">Medications & Oral Health</a></div>
                                <p>September 26, 2018</p>
                            </div>
                        </div>
                        <div className="footer-post d-flex">
                            <div className="footer-post-photo"><img src="Project/images/content/footer-post-author-01.jpg" alt="" className="img-fluid" /></div>
                            <div className="footer-post-text">
                                <div className="footer-post-title"><a href="post.html">Smile For Your Health!</a></div>
                                <p>August 22, 2018</p>
                            </div>
                        </div>
                        <div className="footer-post d-flex">
                            <div className="footer-post-photo"><img src="Project/images/content/footer-post-author-02.jpg" alt="" className="img-fluid" /></div>
                            <div className="footer-post-text">
                                <div className="footer-post-title"><a href="post.html">Tooth Fairy Traditions...</a></div>
                                <p>July 25, 2018</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <h3>Our Contacts</h3>
                        <div className="h-decor"></div>
                        <ul className="icn-list">
                            <li><i className="icon-placeholder2"></i>1560 Holden Street San Diego, CA 92139
                                <br />
                                <a href="contact.html" className="btn btn-xs btn-gradient"><i className="icon-placeholder2"></i><span>Get directions on the map</span><i className="icon-right-arrow"></i></a>
                            </li>
                            <li><i className="icon-telephone"></i><b><span className="phone"><span className="text-nowrap">1-800-267-0000</span>, <span className="text-nowrap">1-800-267-0001</span></span></b>
                                <br />(24/7 General inquiry)
                            </li>
                            <li><i className="icon-black-envelope"></i><a href="mailto:info@dentco.net">info@dentco.net</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row text-center text-md-left">
                        <div className="col-sm">Copyright © 2018 <a href="#">DentCo</a><span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
                            <a href="#">Privacy Policy</a>
                        </div>
                        <div className="col-sm-auto ml-auto"><span className="d-none d-sm-inline">For emergency cases&nbsp;&nbsp;&nbsp;</span><i className="icon-telephone"></i>&nbsp;&nbsp;<b>1-800-267-0000</b></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
