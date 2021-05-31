import React, { Component } from "react";
import { Cell, Grid } from "react-mdl";

class Beranda extends Component {
     render(){
          return(
               <div style = {{width : '100%', margin : 'auto' }} >
                    <Grid className = "beranda-grid">
                         <Cell col={12}>
                              <img  
                              src= "data:image/jpeg;base64,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"
                              alt = "profil"
                              className = "avatar-img"
                              />

                              <div className = "banner-text">
                                   <h1> Mau Tamvan Seperti Saya </h1>
                                   <hr/>
                                   <p> HTML/CSS | PHP | MySQL | Bootstrap | Javascript | React | React Native | Codeigniter | Laravel </p>

                                   <div className = "social-links">
                                        <a href = "https://www.facebook.com/" rel = "noopener noreferrer" target = "_blank">
                                             <i className= "fa fa-facebook-square" aria-hidden="true"/>
                                        </a>
                                        <a href = "https://twitter.com/" rel = "noopener noreferrer" target = "_blank">
                                             <i className= "fa fa-twitter-square" aria-hidden="true"/>
                                        </a>
                                        <a href = "https://github.com/" rel = "noopener noreferrer" target = "_blank">
                                             <i className= "fa fa-github-square" aria-hidden="true"/>
                                        </a>
                                        <a href = "https://www.linkedin.com/" rel = "noopener noreferrer" target = "_blank">
                                             <i className= "fa fa-linkedin-square" aria-hidden="true"/>
                                        </a>
                                        <a href = "https://www.youtube.com/" rel = "noopener noreferrer" target = "_blank">
                                             <i className= "fa fa-youtube-square" aria-hidden="true"/>
                                        </a>
                                   </div>
                              </div>
                         </Cell>
                    </Grid> 
               </div>
          )
     }
}

export default Beranda;