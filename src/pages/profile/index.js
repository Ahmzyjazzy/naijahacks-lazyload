import React, {Fragment} from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { listing } from '../../store/listing';

export default class extends React.Component {

    modal = ''

    componentDidMount(){
        const elems = document.querySelectorAll('.materialboxed');
        const instances = M.Materialbox.init(elems, {});

        const elems2 = document.querySelectorAll('.modal');
        this.modal = M.Modal.init(elems, options);
        
    }

  render(){
    
    this.modal.open()

    return (
      <Fragment>
        <Header />
            <section className="banner">
                <i></i>
                <img className="profileImg materialboxed" src="https://pbs.twimg.com/profile_images/1033783498744705024/b5PwJnpq_400x400.jpg" />
                <div>
                    <h2>Ahmed Olanrewaju</h2>
                    <div>
                        <div className="chip">
                            Javascript
                        </div>
                        <div className="chip">
                            Reactjs
                        </div>
                        <div className="chip">
                            Python
                        </div>
                        <div className="chip">
                            Node
                        </div>
                        <div className="chip">
                            Data structure
                        </div>
                    </div>
                </div>
                <div style={{display:'flex', alignItems:'center'}}>
                    <button className="right btn waves-effect waves-light" type="submit" name="action" style={{marginBottom:'20px'}}>Request Connect</button>
                </div>
            </section>
            <section className="profileSection">
                {/* profile body */}
                <div className="about">
                    <p>
                    I am [...full-stack web architect, javascript lover and mobile web specialist] campus ambassador 
                    </p>
                    <ul>
                        <li><i className="material-icons">location_on</i>Lagos, Nigeria</li>
                        <li><i className="material-icons">location_on</i>Lagos, Nigeria</li>
                        <li><i className="material-icons">location_on</i>Lagos, Nigeria</li>
                        <li><i className="material-icons">location_on</i>Lagos, Nigeria</li>
                        <li><i className="material-icons">location_on</i>Lagos, Nigeria</li>
                    </ul>
                </div>
                <div className="review">
                    <h3>Reviews</h3>
                    <ul className="collection">
                        <li className="collection-item avatar">
                            <img src="https://pbs.twimg.com/profile_images/1033783498744705024/b5PwJnpq_bigger.jpg" alt="" className="circle" />
                            <span className="title">Title</span>
                            <p>First Line <br/>
                                Second Line
                            </p>
                            <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                        </li>
                        <li className="collection-item avatar">
                            <img src="https://pbs.twimg.com/profile_images/1033783498744705024/b5PwJnpq_bigger.jpg" alt="" className="circle" />
                            <span className="title">Title</span>
                            <p>First Line <br/>
                                Second Line
                            </p>
                            <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                        </li>
                        <li className="collection-item avatar">
                            <img src="https://pbs.twimg.com/profile_images/1033783498744705024/b5PwJnpq_bigger.jpg" alt="" className="circle" />
                            <span className="title">Title</span>
                            <p>First Line <br/>
                                Second Line
                            </p>
                            <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                        </li>
                        <li className="collection-item avatar">
                            <img src="https://pbs.twimg.com/profile_images/1033783498744705024/b5PwJnpq_bigger.jpg" alt="" className="circle" />
                            <span className="title">Title</span>
                            <p>First Line <br/>
                                Second Line
                            </p>
                            <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                        </li>
                        <li className="collection-item avatar">
                            <img src="https://pbs.twimg.com/profile_images/1033783498744705024/b5PwJnpq_bigger.jpg" alt="" className="circle" />
                            <span className="title">Title</span>
                            <p>First Line <br/>
                                Second Line
                            </p>
                            <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                        </li>
                        <li className="collection-item avatar">
                            <img src="https://pbs.twimg.com/profile_images/1033783498744705024/b5PwJnpq_bigger.jpg" alt="" className="circle" />
                            <span className="title">Title</span>
                            <p>First Line <br/>
                                Second Line
                            </p>
                            <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                        </li>
                        <li className="collection-item avatar">
                            <img src="https://pbs.twimg.com/profile_images/1033783498744705024/b5PwJnpq_bigger.jpg" alt="" className="circle" />
                            <span className="title">Title</span>
                            <p>First Line <br/>
                                Second Line
                            </p>
                            <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                        </li>
                        <li className="collection-item avatar">
                            <img src="https://pbs.twimg.com/profile_images/1033783498744705024/b5PwJnpq_bigger.jpg" alt="" className="circle" />
                            <span className="title">Title</span>
                            <p>First Line <br/>
                                Second Line
                            </p>
                            <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                        </li>
                        <li className="collection-item avatar">
                            <img src="https://pbs.twimg.com/profile_images/1033783498744705024/b5PwJnpq_bigger.jpg" alt="" className="circle" />
                            <span className="title">Title</span>
                            <p>First Line <br/>
                                Second Line
                            </p>
                            <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                        </li>
                        <li className="collection-item avatar">
                            <img src="https://pbs.twimg.com/profile_images/1033783498744705024/b5PwJnpq_bigger.jpg" alt="" className="circle" />
                            <span className="title">Title</span>
                            <p>First Line <br/>
                                Second Line
                            </p>
                            <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                        </li>
                    </ul>
                </div>
            </section>
        <Footer />
      </Fragment>  
    )
  }
  
};