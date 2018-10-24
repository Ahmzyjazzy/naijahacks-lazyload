import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { listing } from '../../store/listing';
import naijahacks from '../../assets/images/naijahacks.png';

export default class extends React.Component {

    modal = ''
    componentDidMount(){
        const elems = document.querySelectorAll('.materialboxed');
        const instances = M.Materialbox.init(elems, {});

        const elems2 = document.querySelectorAll('.modal');
        this.modal = M.Modal.init(elems2, {});

        const elems3 = document.querySelectorAll('.collapsible');
        const instances2 = M.Collapsible.init(elems3 , {});
    }
    

  render(){
    
    const user = window.localStorage.getItem('userInfo') ? JSON.parse(window.localStorage.getItem('userInfo')) : "";
    return (
      <Fragment>
        <Header />
            <section className="banner" style={{backgroundImage: `url(${naijahacks})`, backgroundRepeat:'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover'}}>
    
                <i></i>
                <img className="profileImg materialboxed" src="https://vignette.wikia.nocookie.net/joke-battles/images/5/54/User-icon.png/revision/latest?cb=20180819120210" />
               
                <div>
                    <h2>{user.fullName}</h2>
                </div>

            </section>


            <section className="profileSection">
                {/* profile body */}
                <div className="about">
                    <ul className="collapsible">
                        <li>
                            <div className="collapsible-header"><i className="material-icons">filter_drama</i>Service Offer</div>
                            <div className="collapsible-body">
                                <ul className="collection" style={{padding:'0 0'}}>
                                    <li className="collection-item">Fullstack Training on web development</li>
                                    <li className="collection-item">Mathematics</li>
                                    <li className="collection-item">Post Utme Weekend Class</li>
                                    <li className="collection-item">Teach kids scratch programming</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="collapsible-header"><i className="material-icons">place</i>Location</div>
                            <div className="collapsible-body">
                                <ul className="collection" style={{padding:'0 0'}}>
                                    <li className="collection-item">Lagos, Nigeria</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="collapsible-header"><i className="material-icons">whatshot</i>Certification</div>
                            <div className="collapsible-body">
                                <ul className="collection" style={{padding:'0 0'}}>
                                    <li className="collection-item">National Diploma</li>
                                    <li className="collection-item">Higher National Diploma</li>
                                    <li className="collection-item">Sololearn Certificate of C#</li>
                                    <li className="collection-item">Andela Mobile web specialist</li>
                                    <li className="collection-item">Mobile web specialist udacity</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="collapsible-header"><i className="material-icons">whatshot</i>Social Media</div>
                            <div className="collapsible-body">
                                <ul className="collection" style={{padding:'0 0'}}>
                                    <li className="collection-item"><a to="https://www.facebook.com/AhmzyJazzy">Facebook</a></li>
                                    <li className="collection-item"><a to="https://twitter.com/ahmzyjazzy">Twitter</a></li>                                
                                </ul>                            
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="review">
                    <ul className="collection">
                        <li className="collection-item avatar">
                            <img src="http://www.kentforklifttraining.co.uk/images/InstructorTraining.jpg" alt="" className="circle" />
                            <span className="title">Solution Tutors</span>
                            <p>The point of using Lorem Ipsum is that it has a more-or-less ormal distribution of letters, 
                                as opposed to using 'Content here, content here', making it look like readable English.
                            </p>
                            <a className="secondary-content">
                                <i className="material-icons">grade</i>
                                <i className="material-icons">grade</i>
                                <i className="material-icons">grade</i>
                                <i className="material-icons">grade</i>
                            </a>
                        </li>
                        <li className="collection-item avatar">
                            <img src="http://www.kentforklifttraining.co.uk/images/InstructorTraining.jpg" alt="" className="circle" />
                            <span className="title">Magna Institute</span>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.

                            </p>
                            <a className="secondary-content">
                                <i className="material-icons">grade</i>
                                <i className="material-icons">grade</i>
                                <i className="material-icons">grade</i>
                            </a>
                        </li>
                        <li className="collection-item avatar">
                            <img src="http://www.kentforklifttraining.co.uk/images/InstructorTraining.jpg" alt="" className="circle" />
                            <span className="title">Duis Sit Institute</span>
                            <p>The point of using Lorem Ipsum is that it has a more-or-less
                                ormal distribution of letters, as opposed to using 'Content here, content here', making 
                                it look like readable English</p>
                            <a className="secondary-content">
                                <i className="material-icons">grade</i>
                                <i className="material-icons">grade</i>
                                <i className="material-icons">grade</i>
                                <i className="material-icons">grade</i>
                                <i className="material-icons">grade</i>
                            </a>
                        </li>
                        <li className="collection-item avatar">
                            <img src="http://www.kentforklifttraining.co.uk/images/InstructorTraining.jpg" alt="" className="circle" />
                            <span className="title">Pretium Et Rutrum Company</span>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a 
                                page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
                                ormal distribution of letters, as opposed to using 'Content here, content here', making 
                                it look like readable English.
                            </p>
                            <a className="secondary-content">
                                <i className="material-icons">grade</i>
                                <i className="material-icons">grade</i>
                                <i className="material-icons">grade</i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="related_search">

                </div>

            </section>
        <Footer />
      </Fragment>  
    )
  }
  
};