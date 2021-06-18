
import artileimage1 from '../assets/img/quantum.jpg';
import artileimage2 from '../assets/img/TypesOfregister.png'
import Pagination from './Pagination';
export default function Articles(){ 
 return ( 
 

<div className="Articles col" style={{ width: '100%', height: '100%' }}>
                        <p>Articles:&nbsp;</p>
                        
                        
                        
                        <div className="post-preview" style={{ width: '100%', fontSize: '13px', height: '100%' }}><a href="#">
                            <h2 className="text-start post-title">Assembly language: Just a trip to somewhere no one want to go.&nbsp;</h2>
                            <h3 className="post-subtitle"></h3>
                        </a>
                            <p className="text-start" style={{margin: '0px'}}>by: Hukum Gosain</p>
                            <p className="text-start">La la la la&nbsp; la la la la la la la la la la ala ala ala al</p>
                            <img className="img-thumbnail d-lg-flex" src={artileimage2} />
                            <p className="text-end post-meta">Posted by&nbsp;<a href="#">AI community&nbsp;</a></p>
                            <hr />
                        </div>
                     
                     

                        <div className="post-preview" style={{width: '100%',fontSize: '13px',height: '100%'}}><a href="#">
                            <h2 className="text-start post-title">Quantum Computing: Trip to future.&nbsp;</h2>
                            <h3 className="post-subtitle"></h3>
                              </a>
                            <p className="text-start" style={{ margin: '0px' }}>by: Saumya&nbsp;</p>
                            <p className="text-start">La la la la&nbsp; la la la la la la la la la la ala ala ala al</p>
                            <img className="img-thumbnail d-lg-flex" src={artileimage1} />
                            <p className="text-end post-meta">Posted by&nbsp;<a href="#">Creators&nbsp;</a></p>
                            <hr />
                        </div>
                        <Pagination />

</div>


 ) 
}