
import './App.css'

function App() {

    return (

        <>

            {/* header ============================ */}
            <header className="s-header">

                <div className="header-logo">
                    <a className="site-logo" href="index.html"><img src="images/logo.png" alt="Homepage"/></a>
                </div>

                <nav className="header-nav-wrap">
                    <ul className="header-nav">
                        <li className="current"><a className="smoothscroll"  href="#home" title="home">Home</a></li>
                        <li><a className="smoothscroll"  href="#about" title="about">About</a></li>
                        <li><a className="smoothscroll"  href="#works" title="works">Works</a></li>
                        <li><a className="smoothscroll"  href="#blog" title="blog">Blog</a></li>
                        <li><a className="smoothscroll"  href="#contact" title="contact">Contact</a></li>
                    </ul>
                </nav>

            <a className="header-menu-toggle" href="#0"><span>Menu</span></a>

            </header> 
            {/* end s-header */}

            {/* home ============================ */}
            <section id="home" className="s-home page-hero target-section" data-parallax="scroll" data-image-src="images/hero-bg.jpg" data-natural-width={3000} data-natural-height={2000} data-position-y="center">

                <div className="overlay"></div>
                <div className="shadow-overlay"></div>

                <div className="home-content">

                    <div className="row home-content__main">

                        <h3>Hello There</h3>

                        <h1>
                            I am Sidney John. <br/>
                            I am the CEO<br/>
                            of your HEART.
                        </h1>

                        <div className="home-content__buttons">
                            <a href="#works" className="smoothscroll btn btn--stroke">
                                Latest Projects
                            </a>
                            <a href="#about" className="smoothscroll btn btn--stroke">
                                More About Me
                            </a>
                        </div>

                        <div className="home-content__scroll">
                            <a href="#about" className="scroll-link smoothscroll">
                                <span>Scroll Down</span>
                            </a>
                        </div>

                    </div>

                </div> {/* end home-content */}

                <ul className="home-social">
                    <li>
                        <a href="#"><i className="im im-facebook" aria-hidden="true"></i><span>Facebook</span></a>
                    </li>
                    <li>
                        <a href="#"><i className="im im-twitter" aria-hidden="true"></i><span>Twiiter</span></a>
                    </li>
                    <li>
                        <a href="#"><i className="im im-instagram" aria-hidden="true"></i><span>Instagram</span></a>
                    </li>
                    <li>
                        <a href="#"><i className="im im-behance" aria-hidden="true"></i><span>Behance</span></a>
                    </li>
                    <li>
                        <a href="#"><i className="im im-pinterest" aria-hidden="true"></i><span>Pinterest</span></a>
                    </li>
                </ul> {/* end home-social */}
            </section>  
            {/* end s-section */}

                {/* about ============================ */}
                <section id="about" className="s-about target-section">

                <div className="row narrow section-intro has-bottom-sep">
                    <div className="col-full text-center">
                        <h3>About</h3>
                        <h1>More About Me</h1>
                        <p className="lead">Lorem ipsum Dolor adipisicing nostrud et aute Excepteur amet commodo ea dolore irure esse Duis nulla sint fugiat cillum ullamco proident aliquip quis qui voluptate dolore veniam Ut laborum non est in officia.</p>
                    </div>
                </div>

                <div className="row about-content">

                    <div className="col-six tab-full left">
                        <h3>Howdy!</h3>

                        <p>Lorem ipsum Ut eiusmod ex magna sit dolor esse adipisicing minim ad cupidatat eu veniam nostrud mollit laboris sunt magna velit culpa consectetur nostrud consectetur labore sed do.</p>

                        <p>
                        Lorem ipsum Nisi officia Duis irure voluptate dolor commodo pariatur occaecat aliquip adipisicing voluptate Ut in qui ea sint occaecat in commodo in in in incididunt ut sunt in Ut Duis in ut ex qui anim cupidatat cupidatat ex in non dolore labore ea amet cillum ea qui dolor nisi sed velit mollit exercitation ex fugiat labore in deserunt culpa laborum culpa anim dolore laboris amet irure mollit proident velit fugiat aute ea elit magna consequat qui officia quis elit Duis dolor esse cupidatat tempor proident voluptate aliqua ex cupidatat do eiusmod veniam irure laborum ut magna nostrud dolore ullamco commodo elit sit magna aliqua laborum veniam officia dolor.	
                        </p>
                    </div>

                    <div className="col-six tab-full right">
                        <h3>I've Got Some skills.</h3>

                        <ul className="skill-bars">
                            <li>
                            <div className="progress percent90"><span>90%</span></div>
                            <strong>HTML5</strong>
                            </li>
                            <li>
                            <div className="progress percent85"><span>85%</span></div>
                            <strong>CSS3</strong>
                            </li>
                            <li>
                            <div className="progress percent70"><span>70%</span></div>
                            <strong>JQuery</strong>
                            </li>
                            <li>
                            <div className="progress percent95"><span>95%</span></div>
                            <strong>PHP</strong>
                            </li>
                            <li>
                            <div className="progress percent75"><span>75%</span></div>
                            <strong>Wordpress</strong>
                            </li>   
                            <li>
                            <div className="progress percent90"><span>90%</span></div>
                            <strong>Angular JS</strong>
                            </li>   
                        </ul>
                    </div>

                </div> {/* end about-content */}

                <div className="row about-content about-content--buttons">

                    <div className="col-six tab-full left">
                        <a href="#0" className="btn btn--primary full-width">Download My CV</a>
                    </div>
                    <div className="col-six tab-full right">
                        <a href="#0" className="btn full-width">Hire Me Now</a>
                    </div>

                </div> {/* end about-content buttons */}

                <div className="row about-content about-content--timeline">

                    <div className="col-full text-center">
                        <h3>My Work Experience.</h3>
                    </div>

                    <div className="col-six tab-full left">
                        <div className="timeline">

                            <div className="timeline__block">
                                <div className="timeline__bullet"></div>
                                <div className="timeline__header">
                                    <p className="timeline__timeframe">Since Birth - Present</p>
                                    <h3>Handsome Productions</h3>
                                    <h5>CEO</h5>
                                </div>
                                <div className="timeline__desc">
                                    <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.</p>
                                </div>
                            </div> {/* end timeline__block */}

                            <div className="timeline__block">
                                <div className="timeline__bullet"></div>
                                <div className="timeline__header">
                                    <p className="timeline__timeframe">September 2022 - Present</p>
                                    <h3>Wise Mind Solutions</h3>
                                    <h5>Fullstack Developer</h5>
                                </div>
                                <div className="timeline__desc">	
                                    <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi incididunt.</p>
                                </div>
                            </div> {/* end timeline__block */}

                        </div> {/* end timeline */}
                    </div> {/* end left */}

                    <div className="col-six tab-full right">
                        <div className="timeline">

                            <div className="timeline__block">
                                <div className="timeline__bullet"></div>
                                <div className="timeline__header">
                                    <p className="timeline__timeframe">September 2022 - Present</p>
                                    <h3>Great Design Studio</h3>
                                    <h5>Web Designer</h5>
                                </div>
                                <div className="timeline__desc">
                                    <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.</p>
                                </div>
                            </div> {/* end timeline__block */}

                            <div className="timeline__block">
                                <div className="timeline__bullet"></div>
                                <div className="timeline__header">
                                    <p className="timeline__timeframe">September 2022 - Present</p>
                                    <h3>Epic Design Agency</h3>
                                    <h5>Web Designer</h5>
                                </div>
                                <div className="timeline__desc">
                                    <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi incididunt.</p>
                                </div>
                            </div> {/* end timeline__block */}

                        </div> {/* end timeline */}
                    </div> {/* end right */}

                </div> {/* end about-content timeline */}

                </section> {/* end about */}


                {/* works ============================= */}
                <section id="works" className="s-works target-section">

                <div className="row narrow section-intro has-bottom-sep">
                    <div className="col-full">
                        <h3>Portfolio</h3>
                        <h1>See My Latest Projects.</h1>
                        
                        <p className="lead">Lorem ipsum Dolor adipisicing nostrud et aute Excepteur amet commodo ea dolore irure esse Duis nulla sint fugiat cillum ullamco proident aliquip quis qui voluptate dolore veniam Ut laborum non est in officia.</p>
                    </div>
                </div>

                <div className="row masonry-wrap">
                    <div className="masonry">

                        <div className="masonry__brick">
                            <div className="item-folio">

                                <div className="item-folio__thumb">
                                    <a href="images/portfolio/gallery/g-beetle.jpg" className="thumb-link" title="The Beetle Car" data-size="1050x700">
                                        <img src="images/portfolio/beetle.jpg" 
                                            srcset="images/portfolio/beetle.jpg 1x, images/portfolio/beetle@2x.jpg 2x" alt=""/>
                                        <span className="shadow-overlay"></span>
                                    </a>
                                </div>

                                <div className="item-folio__text">
                                    <h3 className="item-folio__title">
                                        The Beetle
                                    </h3>
                                    <p className="item-folio__cat">
                                        Web Development
                                    </p>
                                </div>

                                <a href="https://www.behance.net/" className="item-folio__project-link" title="Project link">
                                    <i className="im im-link"></i>
                                </a>

                                <div className="item-folio__caption">
                                    <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
                                </div>

                            </div> {/* end item-folio */}
                        </div> {/* end masonry__brick */}

                        <div className="masonry__brick">
                            <div className="item-folio">

                                <div className="item-folio__thumb">
                                    <a href="images/portfolio/gallery/g-lighthouse.jpg" className="thumb-link" title="Lighthouse" data-size="1050x700">
                                        <img src="images/portfolio/lighthouse.jpg" 
                                            srcset="images/portfolio/lighthouse.jpg 1x, images/portfolio/lighthouse@2x.jpg 2x" alt=""/>
                                        <span className="shadow-overlay"></span>
                                    </a>
                                </div>

                                <div className="item-folio__text">
                                    <h3 className="item-folio__title">
                                        Lighthouse
                                    </h3>
                                    <p className="item-folio__cat">
                                        Web Design
                                    </p>
                                </div>

                                <a href="https://www.behance.net/" className="item-folio__project-link" title="Project link">
                                    <i className="im im-link"></i>
                                </a>

                                <div className="item-folio__caption">
                                    <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
                                </div>

                            </div> {/* end item-folio */}
                        </div> {/* end masonry__brick */}

                        <div className="masonry__brick">
                            <div className="item-folio">

                                <div className="item-folio__thumb">
                                    <a href="images/portfolio/gallery/g-salad.jpg" className="thumb-link" data-size="1050x700">
                                        <img src="images/portfolio/salad.jpg" 
                                            srcset="images/portfolio/salad.jpg 1x, images/portfolio/salad@2x.jpg 2x" alt=""/>
                                        <span className="shadow-overlay"></span>
                                    </a>
                                </div>

                                <div className="item-folio__text">
                                    <h3 className="item-folio__title">
                                        Salad
                                    </h3>
                                    <p className="item-folio__cat">
                                        Branding
                                    </p>
                                </div>

                                <a href="https://www.behance.net/" className="item-folio__project-link" title="Project link">
                                    <i className="im im-link"></i>
                                </a>

                                <span className="item-folio__caption">
                                    <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
                                </span>

                            </div> {/* end item-folio */}
                        </div> {/* end masonry__brick */}

                        <div className="masonry__brick">
                            <div className="item-folio">

                                <div className="item-folio__thumb">
                                    <a href="images/portfolio/gallery/g-woodcraft.jpg" className="thumb-link" data-size="1050x700">
                                        <img src="images/portfolio/woodcraft.jpg"
                                            srcset="images/portfolio/woodcraft.jpg 1x, images/portfolio/woodcraft@2x.jpg 2x" alt=""/>
                                        <span className="shadow-overlay"></span>
                                    </a>
                                </div>

                                <div className="item-folio__text">
                                    <h3 className="item-folio__title">
                                        Woodcraft
                                    </h3>
                                    <p className="item-folio__cat">
                                        Branding
                                    </p>
                                </div>

                                <a href="https://www.behance.net/" className="item-folio__project-link" title="Project link">
                                    <i className="im im-link"></i>
                                </a>

                                <span className="item-folio__caption">
                                    <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
                                </span>

                            </div> {/* end item-folio */}
                        </div> {/* end masonry__brick */}

                        <div className="masonry__brick">
                            <div className="item-folio">

                                <div className="item-folio__thumb">
                                    <a href="images/portfolio/gallery/g-skaterboy.jpg" className="thumb-link" data-size="1050x700">
                                        <img src="images/portfolio/skaterboy.jpg"
                                            srcset="images/portfolio/skaterboy.jpg 1x, images/portfolio/skaterboy@2x.jpg 2x" alt=""/>
                                        <span className="shadow-overlay"></span>
                                    </a>
                                </div>

                                <div className="item-folio__text">
                                    <h3 className="item-folio__title">
                                        Skaterboy
                                    </h3>
                                    <p className="item-folio__cat">
                                        Web Development
                                    </p>
                                </div>

                                <a href="https://www.behance.net/" className="item-folio__project-link" title="Project link">
                                    <i className="im im-link"></i>
                                </a>

                                <span className="item-folio__caption">
                                    <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
                                </span>

                            </div> {/* end item-folio */}
                        </div> {/* end masonry__brick */}

                        <div className="masonry__brick">
                            <div className="item-folio">

                                <div className="item-folio__thumb">
                                    <a href="images/portfolio/gallery/g-liberty.jpg" className="thumb-link" data-size="1050x700">
                                        <img src="images/portfolio/liberty.jpg"
                                            srcset="images/portfolio/liberty.jpg 1x, images/portfolio/liberty@2x.jpg 2x" alt=""/>
                                        <span className="shadow-overlay"></span>
                                    </a>
                                </div>

                                <div className="item-folio__text">
                                    <h3 className="item-folio__title">
                                        Liberty
                                    </h3>
                                    <p className="item-folio__cat">
                                        Branding
                                    </p>
                                </div>

                                <a href="https://www.behance.net/" className="item-folio__project-link" title="Project link">
                                    <i className="im im-link"></i>
                                </a>

                                <span className="item-folio__caption">
                                    <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
                                </span>

                            </div> {/* end item-folio */}
                        </div> {/* end masonry__brick */}

                        <div className="masonry__brick">
                            <div className="item-folio">

                                <div className="item-folio__thumb">
                                    <a href="images/portfolio/gallery/g-minimalismo.jpg" className="thumb-link" data-size="1050x700">
                                        <img src="images/portfolio/minimalismo.jpg"
                                            srcset="images/portfolio/minimalismo.jpg 1x, images/portfolio/minimalismo@2x.jpg 2x" alt=""/>
                                        <span className="shadow-overlay"></span>
                                    </a>
                                </div>

                                <div className="item-folio__text">
                                    <h3 className="item-folio__title">
                                        Minimalismo
                                    </h3>
                                    <p className="item-folio__cat">
                                        Web Design
                                    </p>
                                </div>

                                <a href="https://www.behance.net/" className="item-folio__project-link" title="Project link">
                                    <i className="im im-link"></i>
                                </a>

                                <span className="item-folio__caption">
                                    <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
                                </span>

                            </div> {/* end item-folio */}
                        </div> {/* end masonry__brick */}

                        <div className="masonry__brick">
                            <div className="item-folio">

                                <div className="item-folio__thumb">
                                    <a href="images/portfolio/gallery/g-shutterbug.jpg" className="thumb-link" data-size="1050x700">
                                        <img src="images/portfolio/shutterbug.jpg"
                                            srcset="images/portfolio/shutterbug.jpg 1x, images/portfolio/shutterbug@2x.jpg 2x" alt=""/>
                                        <span className="shadow-overlay"></span>
                                    </a>
                                </div>

                                <div className="item-folio__text">
                                    <h3 className="item-folio__title">
                                        Lady Shutterbug
                                    </h3>
                                    <p className="item-folio__cat">
                                        Branding
                                    </p>
                                </div>

                                <a href="https://www.behance.net/" className="item-folio__project-link" title="Project link">
                                    <i className="im im-link"></i>
                                </a>

                                <span className="item-folio__caption">
                                    <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
                                </span>

                            </div> {/* end item-folio */}
                        </div> {/* end masonry__brick */}

                    </div>
                </div> {/* end masonry */}

                </section> 
                {/* end works */}



                {/* testimonials ============================ */}
                <div className="s-testimonials">

                <div className="overlay"></div>

                <div className="row testimonials-header">
                    <div className="col-full">
                        <h1 className="h02">What People Say.</h1>
                    </div>
                </div>

                <div className="row testimonials">

                    <div className="col-full testimonials__slider">

                        <div className="testimonials__slide">
                            <img src="images/avatars/user-01.jpg" alt="Author image" className="testimonials__avatar"/>
                            <p>Qui ipsam temporibus quisquam velMaiores eos cumque distinctio nam accusantium ipsum. 
                            Laudantium quia consequatur molestias delectus culpa facere hic dolores aperiam. Accusantium quos qui praesentium corpori.</p>
                            <div className="testimonials__author h06">
                                Tim Cook
                                <span>CEO, Apple</span>
                            </div>
                        </div>

                        <div className="testimonials__slide">
                            <img src="images/avatars/user-05.jpg" alt="Author image" className="testimonials__avatar"/>
                            <p>Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam quos repellat voluptas animi adipisci.
                            Nisi eaque consequatur. Quasi voluptas eius distinctio. Atque eos maxime. Qui ipsam temporibus quisquam vel.</p>
                            <div className="testimonials__author h06">
                                Sundar Pichai
                                <span>CEO, Google</span>
                            </div>
                        </div>

                        <div className="testimonials__slide">
                            <img src="images/avatars/user-02.jpg" alt="Author image" className="testimonials__avatar"/>
                            <p>Repellat dignissimos libero. Qui sed at corrupti expedita voluptas odit. Nihil ea quia nesciunt. Ducimus aut sed ipsam.  
                            Autem eaque officia cum exercitationem sunt voluptatum accusamus. Quasi voluptas eius distinctio.</p>
                            <div className="testimonials__author h06">
                                Satya Nadella
                                <span>CEO, Microsoft</span>
                            </div>
                        </div>
                        
                    </div> {/* end testimonials__slider */}

                </div> {/* end testimonials */}

                </div> 
                {/* end s-testimonials */}


                {/* blog ============================ */}
                <section id="blog" className="s-blog target-section">

                <div className="row narrow section-intro has-bottom-sep">
                    <div className="col-full">
                        <h3>Journal</h3>
                        <h1>Latest From The Blog.</h1>
                        <p className="lead">Lorem ipsum Dolor adipisicing nostrud et aute. 
                        Excepteur amet commodo ea dolore irure esse Duis nulla sint fugiat cillum 
                        ullamco proident aliquip quis qui voluptate dolore veniam Ut laborum non est in officia.</p>
                    </div>
                </div>

                <div className="row blog-content">
                    <div className="col-full">

                        <div className="blog-list block-1-2 block-tab-full">
                            <article className="col-block">
                                        
                                <div className="blog-date">
                                    <a href="blog-single.html">Sept 16, 2017</a>
                                </div>  
                                
                                <h2 className="h01"><a href="blog-single.html">The 10 Golden Rules of Clean Simple Design.</a></h2>
                                <p>
                                Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh..
                                </p>

                                <div className="blog-cat">
                                        <a href="blog.html">Branding</a><a href="blog.html">Design</a>
                                </div>

                                
                            </article>
                            <article className="col-block">
                                        
                                <div className="blog-date">
                                    <a href="blog-single.html">Sept 15, 2017</a>
                                </div>  
                                
                                <h2 className="h01"><a href="blog-single.html">Photography Can Improve Your Graphic Design.</a></h2>
                                <p>
                                Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh..
                                </p>

                                <div className="blog-cat">
                                    <a href="blog.html">Photography</a>
                                </div>

                                
                            </article>
                            <article className="col-block">
                                
                                <div className="blog-date">
                                    <a href="blog-single.html">Sept 14, 2017</a>
                                </div>

                                <h2 className="h01"><a href="blog-single.html">Workspace Design Trends and Ideas.</a></h2>
                                <p>
                                Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh dolore irure esse Duis nulla sint.
                                </p>

                                <div className="blog-cat">
                                    <a href="blog.html">Branding</a><a href="blog.html">Wordpress</a>
                                </div>
                            </article>
                            <article className="col-block">
                                
                                <div className="blog-date">
                                    <a href="blog-single.html">Sept 12, 2017</a>
                                </div>    
                                <h2 className="h01"><a href="blog-single.html">Using Patterns in your Branding.</a></h2>
                                <p>
                                Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh.
                                </p>

                                <div className="blog-cat">
                                    <a href="blog.html">Design</a><a href="blog.html">Branding</a>
                                </div>
                            </article>
                        </div> {/* end blog-list */}

                    </div> {/* end col-full */}
                </div> {/* end blog-content */}

                </section> 
                {/* end s-blog */}


                {/* s-cta ============================ */}
                <section className="s-cta">

                <div className="row narrow cta">

                    <div className="col-full cta__content">

                        <h2 className="h01"><a href="http://www.dreamhost.com/r.cgi?287326|STYLESHOUT">Styleshout Recommends Dreamhost.</a></h2>

                        <p className="lead">
                        Looking for an awesome and reliable webhosting? Try <a href="http://www.dreamhost.com/r.cgi?287326|STYLESHOUT">DreamHost</a>.
                        Get <span>$50 off</span> when you sign up with the promocode <span>styleshout</span>.
                        </p>

                        <div className="cta__action">
                            <a className="btn btn--primary btn--large" href="http://www.dreamhost.com/r.cgi?287326|STYLESHOUT">Sign Up Now</a>
                        </div>	

                    </div>

                </div> {/* end cta */}

                </section>


                {/* s-stats =========================== */}
                <section id="stats" className="s-stats">
                <div className="row block-1-4 block-tab-1-2 block-mob-full stats">

                    <div className="col-block stats__col ">
                        <div className="stats__count">
                            128
                        </div>
                        <h4>Awards Received</h4>
                    </div>
                    <div className="col-block stats__col">
                        <div className="stats__count">
                            1500
                        </div>
                        <h4>Cups of Coffee</h4>
                    </div>
                    <div className="col-block stats__col stats__col--highlight">
                        <div className="stats__upsign">
                            <a href="#"><i className="im im-arrow-up" aria-hidden="true"></i></a>
                        </div>
                        <div className="stats__count">
                            110
                        </div>
                        <h4>Projects Completed</h4>
                    </div>
                    <div className="col-block stats__col">
                        <div className="stats__count">
                            101
                        </div>
                        <h4>Happy Clients</h4> 
                    </div>

                </div>
                </section> 
                {/* end s-stats */}


                {/* s-stats ================================ */}
                <section id="contact" className="s-contact target-section">

                <div className="overlay"></div>

                <div className="row narrow section-intro">
                    <div className="col-full">
                        <h3>Contact</h3>
                        <h1>Say Hello.</h1>
                        
                        <p className="lead">Lorem ipsum Dolor adipisicing nostrud et aute Excepteur amet commodo ea dolore irure esse Duis nulla sint fugiat cillum ullamco proident aliquip quis qui voluptate dolore veniam Ut laborum non est in officia.</p>
                    </div>
                </div>

                <div className="row contact__main">
                    <div className="col-eight tab-full contact__form">
                        <form name="contactForm" id="contactForm" method="post" action="">
                            <fieldset>

                            <div className="form-field">
                                <input name="contactName" type="text" id="contactName" placeholder="Name" value="" minlength="2" required="" aria-required="true" className="full-width"/>
                            </div>
                            <div className="form-field">
                                <input name="contactEmail" type="email" id="contactEmail" placeholder="Email" value="" required="" aria-required="true" className="full-width"/>
                            </div>
                            <div className="form-field">
                                <input name="contactSubject" type="text" id="contactSubject" placeholder="Subject" value="" className="full-width"/>
                            </div>
                            <div className="form-field">
                                <textarea name="contactMessage" id="contactMessage" placeholder="message" rows="10" cols="50" required="" aria-required="true" className="full-width"></textarea>
                            </div>
                            <div className="form-field">
                                <button className="full-width btn--primary">Submit</button>
                                <div className="submit-loader">
                                    <div className="text-loader">Sending...</div>
                                    <div className="s-loader">
                                        <div className="bounce1"></div>
                                        <div className="bounce2"></div>
                                        <div className="bounce3"></div>
                                    </div>
                                </div>
                            </div>

                            </fieldset>
                        </form>

                        {/* contact-warning */}
                        <div className="message-warning">
                            Something went wrong. Please try again.
                        </div> 
                    
                        {/* contact-success */}
                        <div className="message-success">
                            Your message was sent, thank you!<br/>
                        </div>
                                
                    </div>
                    <div className="col-four tab-full contact__infos">
                        <h4 className="h06">Phone</h4>
                        <p>Phone: (+63) 555 1212<br/>
                        Mobile: (+63) 555 0100<br/>
                        Fax: (+63) 555 0101
                        </p>

                        <h4 className="h06">Email</h4>
                        <p>someone@holawebsite.com<br/>
                        info@holawebsite.com
                        </p>

                        <h4 className="h06">Address</h4>
                        <p>
                        1600 Amphitheatre Parkway<br/>
                        Mountain View, CA<br/>
                        </p>
                    </div>

                </div>

            </section> 
            {/* end s-contact */}

            {/*footer ============================== */}
            <footer>
                <div className="row">
                    <div className="col-full">

                        <div className="footer-logo">
                            <a className="footer-site-logo" href="#0"><img src="images/logo.png" alt="Homepage"/></a>
                        </div>

                        <ul className="footer-social">
                            <li><a href="#0">
                                <i className="im im-facebook" aria-hidden="true"></i>
                                <span>Facebook</span>
                            </a></li>
                            <li><a href="#0">
                                <i className="im im-twitter" aria-hidden="true"></i>
                                <span>Twitter</span>
                            </a></li>
                            <li><a href="#0">
                                <i className="im im-instagram" aria-hidden="true"></i>
                                <span>Instagram</span>
                            </a></li>
                            <li><a href="#0">
                                <i className="im im-behance" aria-hidden="true"></i>
                                <span>Behance</span>
                            </a></li>
                            <li><a href="#0">
                                <i className="im im-pinterest" aria-hidden="true"></i>
                                <span>Pinterest</span>
                            </a></li>
                        </ul>
                            
                    </div>
                </div>

                <div className="row footer-bottom">

                    <div className="col-twelve">
                        <div className="copyright">
                            <span>© Copyright Hola 2017</span> 
                            <span>Design by <a href="https://www.styleshout.com/">styleshout</a></span>	
                        </div>

                        <div className="go-top">
                        <a className="smoothscroll" title="Back to Top" href="#top"><i className="im im-arrow-up" aria-hidden="true"></i></a>
                        </div>
                    </div>

                </div> {/* end footer-bottom */}

            </footer> {/*  end footer */}

            {/* photoswipe background ================================== */}
            <div aria-hidden="true" className="pswp" role="dialog" tabindex="-1">

                <div className="pswp__bg"></div>
                <div className="pswp__scroll-wrap">

                    <div className="pswp__container">
                        <div className="pswp__item"></div>
                        <div className="pswp__item"></div>
                        <div className="pswp__item"></div>
                    </div>

                    <div className="pswp__ui pswp__ui--hidden">
                        <div className="pswp__top-bar">
                            <div className="pswp__counter"></div><button className="pswp__button pswp__button--close" title="Close (Esc)"></button> <button className="pswp__button pswp__button--share" title=
                            "Share"></button> <button className="pswp__button pswp__button--fs" title="Toggle fullscreen"></button> <button className="pswp__button pswp__button--zoom" title=
                            "Zoom in/out"></button>
                            <div className="pswp__preloader">
                                <div className="pswp__preloader__icn">
                                    <div className="pswp__preloader__cut">
                                        <div className="pswp__preloader__donut"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                            <div className="pswp__share-tooltip"></div>
                        </div><button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button> <button className="pswp__button pswp__button--arrow--right" title=
                        "Next (arrow right)"></button>
                        <div className="pswp__caption">
                            <div className="pswp__caption__center"></div>
                        </div>
                    </div>

                </div>

            </div> {/* end photoSwipe background */}

        </>
    );
}

export default App;
