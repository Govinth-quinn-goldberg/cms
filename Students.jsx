import './Student.css';

import { Link } from "react-router-dom";
function Student(){
    return(
        <div>
            <nav>
                <div className="navlink"><li><a href="#">Home</a></li></div>
                {/* <div className="navlink"><li><a href="#">Complaint</a></li></div> */}
                <div className="navlink"><li><Link to="/Complaint">Complaint</Link></li></div>
                <div className="navlink"><li><a href="#">Contact</a></li></div>
            </nav>
            
            <br></br>
            <br></br>
            <br></br>
            <div className="container">
                <h2 className='te1'>The Most Trusted Platform Across <span style={{color:"red"}}>Vit University</span></h2>
                <br></br>
                <h1 className='te2'>Resolv<span style={{color:"red"}}>X</span></h1>
                <br></br>
                <h3 className='h3'>Report. Resolve. Rebuild.</h3>
                <br></br>
                <p><q><b>Let us be the bridge between your problem and resolutions — for you, your hostel and your campus</b></q></p>
                {/* <p>At ResolvX, we make sure every concer is heard,tracked and resoved---safely and effeciently.<br></br>Our platform offers a seamless, transparent, and secure way for users to report issues and stay informed throughout the resolution process.<br></br> Empowering accountability, trust, and peace of mind for individuals and organizations alike. </p> */}
                {/* <div className='but'>
                    <div className='te'>Allow Us To Help You →</div>
                    <div><button className='bt' onclick="">Complaint</button></div>
                </div> */}
                <br></br>
                <br></br>
                <hr></hr>
                <br></br>
                <br></br>
                <div className="smal">
                    <div className='t1'>Report<br></br><br></br>Grievances, repairs and issues. </div>
                    <div className='t1'>Track<br></br><br></br>Real-time updates and progress.</div>
                    <div className='t1'>Build<br></br><br></br>A better hostel and campus life.</div>
                </div>
            </div>
        </div>
    );
}
export default Student