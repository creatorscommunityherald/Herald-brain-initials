export default function Anouncement(){ 
 return ( 

<div className="Anouncement col-md-10 col-lg-8">
                        <header></header>
                        <p>Announcement :&nbsp;</p>
                        <div className="post-preview" style={{ width: '601px', fontSize: "13px" }}><a href="#">
                            <h2 className="post-title">Growth project ep 3:&nbsp;</h2>
                            <h3 className="post-subtitle">A platform to&nbsp; do things</h3>
                        </a>
                            <p className="post-meta">Posted by&nbsp;<a href="#">creator community&nbsp;</a></p>
                            <button className="btn btn-primary btn-sm text-end" type="button" style={{ fontSize: '14px', background: '#11253b' }}>register</button>
                            <hr />
                        </div>
                        <div className="post-preview" style={{ width: "601px", fontSize: '13px' }}><a href="#">
                            <h2 className="post-title">Another another event&nbsp;</h2>
                            <h3 className="post-subtitle">A platform to&nbsp; do things</h3>
                        </a>
                            <p className="post-meta">Posted by&nbsp;<a href="#">AI community&nbsp;</a>
                            </p><button className="btn btn-primary btn-sm text-end" type="button" style={{ fontSize: '14px', background: '#11253b' }}>register</button>
                            <hr></hr>
                        </div>
                        <div className="clearfix"></div>
            </div>

 ) 
}