import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, UncontrolledTooltip, Progress, Card, CardBody, Media } from "reactstrap";

//Import Icons
import FeatherIcon from 'feather-icons-react';

//Import Images
import imgbg from "../../../assets/images/account/bg.jpg";
import profile from "../../../assets/images/client/05.jpg";
import blog1 from "../../../assets/images/blog/01.jpg";
import blog2 from "../../../assets/images/blog/02.jpg";
import exp1 from "../../../assets/images/job/Circleci.svg";
import exp2 from "../../../assets/images/job/Codepen.svg";
import exp3 from "../../../assets/images/job/Gitlab.svg";
import client1 from "../../../assets/images/client/01.jpg";
import client2 from "../../../assets/images/client/02.jpg";
import client3 from "../../../assets/images/client/03.jpg";
import client4 from "../../../assets/images/client/04.jpg";
import client5 from "../../../assets/images/client/05.jpg";
import client6 from "../../../assets/images/client/06.jpg";
import client7 from "../../../assets/images/client/07.jpg";
import client8 from "../../../assets/images/client/08.jpg";

//Import Images
import logolight from "../../../assets/images/logo-light.png";
import logodark from "../../../assets/images/logo-dark.png";

class PageProfile extends Component {
    state = {
        blogs : [
            { id : 1, title : "Design your apps in your own way", image : blog1, likes : "33", blogComments :"08", author : "Krishta Joseph", date : "13th August, 2019" },
            { id : 2, title : "How apps is changing the IT world", image : blog2, likes : "33", blogComments :"08", author : "Krishta Joseph", date : "13th August, 2019" }
        ],
        experiences : [
            { id : 1, image : exp1, designation : "Senior Web Developer", duration : "3 Years", companyName : "Gitlab", location : "London, UK"},
            { id : 2,image : exp2, designation : "Web Designer", duration : "2 Years", companyName : "CircleCi", location : "Washington D.C, USA"},
            { id : 3,image : exp3, designation : "UI Designer", duration : "2 Years", companyName : "Codepen", location : "Perth, Australia"},
        ],
        clients : [
            { id : 1, image : client1, name : "Calvin" },
            { id : 2, image : client2, name : "Meriam" },
            { id : 3, image : client3, name : "Janelia" },
            { id : 4, image : client4, name : "Cristino" },
            { id : 5, image : client5, name : "Rukshar" },
            { id : 6, image : client6, name : "Rambo" },
            { id : 7, image : client7, name : "Beardo" },
            { id : 8, image : client8, name : "Gogo" },
        ]
    }
    
    componentDidMount() {
        document.body.classList = "";
        document.getElementById('top-menu').classList.add('nav-light');
        document.getElementById('buyButton').className="btn btn-light";
        document.getElementById('brandLogo').src=logolight;
        window.addEventListener("scroll", this.scrollNavigation, true);
      }
       // Make sure to remove the DOM listener when the component is unmounted.
       componentWillUnmount() {
        window.removeEventListener("scroll",this.scrollNavigation, true);
     }
  
      scrollNavigation = () => {
          var doc = document.documentElement;
          var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
          if(top > 80)
          {
               document.getElementById('topnav').classList.add('nav-sticky');
               document.getElementById('buyButton').className="btn btn-primary";
               document.getElementById('brandLogo').src=logodark;
          }
          else
          {
            document.getElementById('topnav').classList.remove('nav-sticky');
            document.getElementById('buyButton').className="btn btn-light";
            document.getElementById('brandLogo').src=logolight;
          }
      }

    render() {
        return (
            <React.Fragment>
                <section className="bg-profile d-table w-100" style={{background: `url(${imgbg}) center center`}}>
                    <Container>
                        <Row>
                            <Col lg="12">
                                <Card className="public-profile border-0 rounded shadow" style={{zIndex:"1"}}>
                                    <CardBody>
                                        <Row className="align-items-center">
                                            <Col lg="2" md="3" className="text-md-left text-center">
                                                <img src={profile} className="avatar avatar-large rounded-circle shadow d-block mx-auto" alt=""/>
                                            </Col>

                                            <Col lg="10" md="9">
                                                <Row className="align-items-end">
                                                    <Col md="7" className="text-md-left text-center mt-4 mt-sm-0">
                                                        <h3 className="title mb-0">Krista Joseph</h3>
                                                        <small className="text-muted h6 mr-2">Web Developer</small>
                                                        <ul className="list-inline mb-0 mt-3">
                                                            <li className="list-inline-item mr-2"><Link to="#" className="text-muted" title="Linkedin"><i><FeatherIcon icon="instagram" className="fea icon-sm mr-2" /></i>krista_joseph</Link></li>
                                                            <li className="list-inline-item ml-1"><Link to="#" className="text-muted" title="Skype"><i><FeatherIcon icon="linkedin" className="fea icon-sm mr-2" /></i>krista_joseph</Link></li>
                                                        </ul>
                                                    </Col>
                                                    <Col md="5" className="text-md-right text-center">
                                                        <ul className="list-unstyled social-icon social mb-0 mt-4">
                                                            <li className="list-inline-item mr-1"><Link to="#" className="rounded"><i><FeatherIcon icon="user-plus" className="fea icon-sm fea-social" /></i></Link></li>
                                                            <li className="list-inline-item mr-1"><Link to="#" className="rounded"><i><FeatherIcon icon="message-circle" className="fea icon-sm fea-social" /></i></Link></li>
                                                            <li className="list-inline-item mr-1"><Link to="#" className="rounded"><i><FeatherIcon icon="bell" className="fea icon-sm fea-social" /></i></Link></li>
                                                            <li className="list-inline-item mr-1"><Link to="/page-profile-edit" className="rounded"><i><FeatherIcon icon="settings" className="fea icon-sm fea-social" /></i></Link></li>
                                                        </ul>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>
                
                
                <section className="section mt-60">
                    <Container className="mt-lg-3">
                        <Row>
                            <Col lg="4" md="5" xs="12">
                                <div className="sidebar sticky-bar p-4 rounded shadow">
                                    <div className="widget">
                                        <h5 className="widget-title">Projects :</h5>
                                        <div className="progress-box mt-4">
                                            <h6 className="title text-muted">Progress</h6>
                                            <Progress value={50} color="primary" barClassName="position-relative">
                                                    <div className="progress-value d-block text-muted h6">24 / 48</div>
                                            </Progress>
                                        </div>
                                    </div>
                                    
                                    <div className="widget mt-4 pt-2">
                                        <h5 className="widget-title">Members :</h5>
                                        <div className="text-center">
                                            {
                                                this.state.clients.map((client, key) =>
                                                    <Link to="#" key={key}>
                                                        <img src={client.image} className="avatar avatar-small rounded-pill mt-3 ml-1" id={"client" + client.id} alt=""/>
                                                        <UncontrolledTooltip placement="top" target={"client" + client.id}>
                                                            {client.name}
                                                        </UncontrolledTooltip>
                                                    </Link>
                                                )
                                            }                                            
                                        </div>
                                    </div>
                                    
                                    <div className="widget mt-4 pt-2">
                                        <h5 className="widget-title">Followers :</h5>
                                        <Row className="mt-4">
                                            <Col xs="6" className="text-center">
                                                <i><FeatherIcon icon="user-plus" className="fea icon-ex-md text-primary mb-1" /></i>
                                                <h5 className="mb-0">2588</h5>
                                                <p className="text-muted mb-0">Followers</p>
                                            </Col>

                                            <Col xs="6" className="text-center">
                                                <i><FeatherIcon icon="users" className="fea icon-ex-md text-primary mb-1" /></i>
                                                <h5 className="mb-0">454</h5>
                                                <p className="text-muted mb-0">Following</p>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="widget mt-4 pt-2">
                                        <h5 className="widget-title">Follow me :</h5>
                                        <ul className="list-unstyled social-icon mb-0 mt-4">
                                            <li className="list-inline-item mr-1"><Link to="#" className="rounded"><i><FeatherIcon icon="facebook" className="fea icon-sm fea-social" /></i></Link></li>
                                            <li className="list-inline-item mr-1"><Link to="#" className="rounded"><i><FeatherIcon icon="instagram" className="fea icon-sm fea-social" /></i></Link></li>
                                            <li className="list-inline-item mr-1"><Link to="#" className="rounded"><i><FeatherIcon icon="twitter" className="fea icon-sm fea-social" /></i></Link></li>
                                            <li className="list-inline-item mr-1"><Link to="#" className="rounded"><i><FeatherIcon icon="linkedin" className="fea icon-sm fea-social" /></i></Link></li>
                                            <li className="list-inline-item mr-1"><Link to="#" className="rounded"><i><FeatherIcon icon="github" className="fea icon-sm fea-social" /></i></Link></li>
                                            <li className="list-inline-item mr-1"><Link to="#" className="rounded"><i><FeatherIcon icon="youtube" className="fea icon-sm fea-social" /></i></Link></li>
                                            <li className="list-inline-item mr-1"><Link to="#" className="rounded"><i><FeatherIcon icon="gitlab" className="fea icon-sm fea-social" /></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>

                            <Col lg="8" md="7" xs="12" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <div className="border-bottom pb-4">
                                        <h5>Krista Joseph</h5>
                                        <p className="text-muted mb-0">I have started my career as a trainee and prove my self and achieve all the milestone with good guidance and reach up to the project manager. In this journey, I understand all the procedure which make me a good developer, team leader, and a project manager.</p>
                                    </div>
                                    
                                    <div className="border-bottom pb-4">
                                        <Row>
                                            <Col lg="6" className="mt-4">
                                                <h5>Personal Details :</h5>
                                                <div className="mt-4">
                                                    <Media className="align-items-center">
                                                        <i><FeatherIcon icon="mail" className="fea icon-ex-md text-muted mr-3" /></i>
                                                        <Media body>
                                                            <h6 className="text-primary mb-0">Email :</h6>
                                                            <Link to="#" className="text-muted">kristajoseph0203@mail.com</Link>
                                                        </Media>
                                                    </Media>
                                                    <Media className="align-items-center mt-3">
                                                    <i><FeatherIcon icon="bookmark" className="fea icon-ex-md text-muted mr-3" /></i>
                                                        <Media body>
                                                            <h6 className="text-primary mb-0">Skills :</h6>
                                                            <Link to="#" className="text-muted">html</Link>, <Link to="#" className="text-muted">css</Link>, <Link to="#" className="text-muted">js</Link>, <Link to="#" className="text-muted">mysql</Link>
                                                        </Media>
                                                    </Media>
                                                    <Media className="align-items-center mt-3">
                                                    <i><FeatherIcon icon="italic" className="fea icon-ex-md text-muted mr-3" /></i>
                                                        <Media body>
                                                            <h6 className="text-primary mb-0">Language :</h6>
                                                            <Link to="#" className="text-muted">English</Link>, <Link to="#" className="text-muted">Japanese</Link>, <Link to="#" className="text-muted">Chinese</Link>
                                                        </Media>
                                                    </Media>
                                                    <Media className="align-items-center mt-3">
                                                    <i><FeatherIcon icon="globe" className="fea icon-ex-md text-muted mr-3" /></i>
                                                        <Media body>
                                                            <h6 className="text-primary mb-0">Website :</h6>
                                                            <Link to="#" className="text-muted">www.kristajoseph.com</Link>
                                                        </Media>
                                                    </Media>
                                                    <Media className="align-items-center mt-3">
                                                    <i><FeatherIcon icon="gift" className="fea icon-ex-md text-muted mr-3" /></i>
                                                        <Media body>
                                                            <h6 className="text-primary mb-0">Birthday :</h6>
                                                            <p className="text-muted mb-0">2nd March, 1996</p>
                                                        </Media>
                                                    </Media>
                                                    <Media className="align-items-center mt-3">
                                                    <i><FeatherIcon icon="map-pin" className="fea icon-ex-md text-muted mr-3" /></i>
                                                        <Media body>
                                                            <h6 className="text-primary mb-0">Location :</h6>
                                                            <Link to="#" className="text-muted">Beijing, China</Link>
                                                        </Media>
                                                    </Media>
                                                    <Media className="align-items-center mt-3">
                                                        <i><FeatherIcon icon="phone" className="fea icon-ex-md text-muted mr-3" /></i>
                                                        <Media body>
                                                            <h6 className="text-primary mb-0">Cell No :</h6>
                                                            <Link to="#" className="text-muted">(+12) 1254-56-4896</Link>
                                                        </Media>
                                                    </Media>
                                                </div>
                                            </Col>
            
                                            <Col lg="6" className="mt-4 pt-2 pt-sm-0">
                                                <h5>Experience :</h5>
            
                                                <ul className="list-inline mb-0 mt-4">
                                                    {
                                                        this.state.experiences.map((experience, key) =>
                                                        <Media key={key} className="key-feature align-items-center p-3 rounded shadow mt-4">
                                                            <img src={experience.image} className="avatar avatar-ex-sm" alt=""/>
                                                            <Media body className="content ml-3">
                                                                <h4 className="title mb-0">{experience.designation}</h4>
                                                                <p className="text-muted mb-0">{experience.duration} Experience</p>
                                                                <p className="text-muted mb-0"><Link to="#" className="text-primary">{experience.companyName}</Link> @{experience.location}</p>    
                                                            </Media>
                                                        </Media>
                                                        )
                                                    }
                                                </ul>
                                            </Col>
                                        </Row>
                                    </div>

                                    <h5 className="mt-4 mb-0">Posts & News :</h5>
                                    <Row>
                                        {
                                            this.state.blogs.map((blog, key) =>
                                                <Col lg="6" key={key} className="mt-4 pt-2">
                                                    <Card className="blog rounded border-0 shadow">
                                                        <div className="position-relative">
                                                            <img src={blog.image} className="card-img-top rounded-top" alt=""/>
                                                            <div className="overlay rounded-top bg-dark"></div>
                                                        </div>
                                                        <CardBody className="content">
                                                            <h5><Link to="#" className="card-title title text-dark">{blog.title}</Link></h5>
                                                            <div className="post-meta d-flex justify-content-between mt-3">
                                                                <ul className="list-unstyled mb-0">
                                                                    <li className="list-inline-item mr-2 mb-0"><Link to="#" className="text-muted like"><i className="mdi mdi-heart-outline mr-1"></i>{blog.likes}</Link></li>
                                                                    <li className="list-inline-item"><Link to="#" className="text-muted comments"><i className="mdi mdi-comment-outline mr-1"></i>{blog.blogComments}</Link></li>
                                                                </ul>
                                                                <Link to="#" className="text-muted float-right readmore">Read More <i className="mdi mdi-chevron-right"></i></Link>
                                                                
                                                            </div>
                                                        </CardBody>
                                                        <div className="author">
                                                            <small className="text-light user d-block"><i className="mdi mdi-account"></i> {blog.author}</small>
                                                            <small className="text-light date"><i className="mdi mdi-calendar-check"></i> {blog.date}</small>
                                                        </div>
                                                    </Card>
                                                </Col>
                                            )
                                        }
                                        <Col xs="12" className="mt-4 pt-2">
                                            <Link to="/page-blog" className="btn btn-primary">See More <i className="mdi mdi-chevron-right"></i></Link>
                                        </Col>
                                    </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default PageProfile;