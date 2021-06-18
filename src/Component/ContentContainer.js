import ArticleList from "./ArticleList"
import Anouncement from "./Anouncement"
import OnGoingEvents from "./OnGoingEvents"


export default function ContentContainer(){ 
 return ( 

         
     <div className="ContentContainer container">

          <div className="row">
                    {/* ANNOUNCE MENT */}
                <Anouncement />
               {/* ongoing events */}
               <OnGoingEvents />
             </div>

              <div className="row" style={{ marginTop: '2em', width: '100%', height: '100%' }}>
                  
                  
                <ArticleList />                  

                  

                      
                  </div>
              </div>





 ) 
}