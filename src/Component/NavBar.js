export default function NavBar(){ 
 return ( 

     <nav className="NavBar navbar navbar-light navbar-expand-lg fixed-top" id="mainNav" style={{ fontSize: "27px" }}>
                <div className="container-fluid"><a className="navbar-brand" href="index.html">HeraldBrain</a>
                    <button data-bs-toggle="collapse" data-bs-target="#navbarResponsive" className="navbar-toggler" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars"></i></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive" style={{ fontSize: '31px' }}>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link" href="index.html" style={{ fontSize: '16px' }}>Ideas&nbsp;</a></li>
                            <li className="nav-item"><a className="nav-link" href="about.html" style={{ fontSize: '16px' }}>Events</a></li>
                            <li className="nav-item"><a className="nav-link" href="contact.html" style={{ fontSize: '16px' }}>podcast</a></li>
                            <li className="nav-item"><a className="nav-link" href="post.html" style={{ fontSize: '16px' }}>Devcorps Book</a></li>
                            <li className="nav-item"><a className="nav-link" href="users.html" style={{ fontSize: '16px' }}>Users</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
 
 ) 
}