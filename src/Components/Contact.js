import React, { Component } from "react";
import { Fade, Slide } from "react-awesome-reveal";

class Contact extends Component{

    constructor(){
        super()
        this.state = {
        pesanBerhasil: false,
        shouldAnimate:true
       }
    }
 
      
    handleFormSubmit = (e) => {
        e.preventDefault();
        // Simulasi pengiriman data atau tindakan lainnya
        
        setTimeout(()=>{
            this.setState({shouldAnimate:true},()=>{
                this.setState({pesanBerhasil : true})
            });
        })
      }

      handleChange = (e)=>{
        e.preventDefault();

        this.setState({pesanBerhasil:false})
      }

   

  

    

    render(){
        if(!this.props.data) return null //kalo misalkan data nya gak ada/kosong return null
        const nama = this.props.data.name;
        const street = this.props.data.address.street;
        const city = this.props.data.address.city;
        const state  =this.props.data.address.state;
        const phone = this.props.data.phone;
        const zip =  this.props.data.address.zip;
        const contactMassage = this.props.data.contactMassage;
        const pesanijo = this.state.pesanBerhasil;
        // const shouldAnimate = this.state.shouldAnimate;

        return (
            <section id="contact">
                <Fade bottom duration={1000}>
                    <div className="row section-head">
                        <div className="two columns header-col">
                            <h1>
                                <span>Get In Touch</span>
                            </h1>
                        </div>


                        <div className="ten columns">
                            <p className="lead">{contactMassage}</p>
                        </div>
                    </div>
                    </Fade>

                    <div className="row">
                        
                            <div className="eight columns">
                                <form method="post" id="contactForm" name="contactForm">
                                    <fieldset>
                                    <Slide left duration={1000}>
                                        <div>
                                            <label htmlFor="contactName">
                                                Name <span className="required"> :</span>
                                            </label>
                                            <input
                                            className="borderradius"
                                            type="text"
                                            defaultValue=""
                                            size="35"
                                            id="contactName"
                                            name="contactName"
                                            onChange={this.handleChange}>
                                            </input>
                                        </div>
                                        </Slide>
                                 
                                        <Slide direction="right" duration={1000}>
                                        <div>
                                <label htmlFor="contactEmail">
                                    Email <span className="required"> :</span>
                                </label>
                                   <input
                                   className="borderradius"
                                    type="text"
                                    defaultValue=""
                                    size="35"
                                    id="contactEmail"
                                    name="contactEmail"
                                    onChange={this.handleChange}
                                />
                            </div>
                            </Slide>

                            <Slide right duration={1000}>
                            <div>
                                <label htmlFor="contactSubject">Subject <span className="required"> :</span></label>
                                <input
                                className="borderradius"
                                type="text"
                                defaultValue=""
                                size="35"
                                id="contactSubject"
                                name="contactSubject"
                                onChange={this.handleChange}
                                />
                            </div>
                            </Slide>
                            

                            

                        
                            <Slide direction="right" duration={1000}>
                            <div>
                                <label htmlFor="contactMessage">
                                Message <span className="required"> :</span>
                                </label>
                                <textarea
                                className="borderradius"
                                cols="50"
                                rows="15"
                                id="contactMessage"
                                name="contactMessage"
                                onChange={this.handleChange}
                                ></textarea>
                            </div>
                            </Slide>

                            <div>
                            <button onClick={this.handleFormSubmit} className="mysubmit">Submit</button>

                           
                            
                                
                            
{/*       
                                 {shouldAnimate && (
                                <span id="image-loader">
                              
                                <img alt="" src="images/loader.gif"/>
                                
                                </span>)}  */}
                                
                                   {pesanijo &&( 
                                 <>&nbsp;&nbsp;<i className="fa fa-check color-green"></i>Your message was sent, thank you!</>
                                 )}
                                    
                               
                            </div>


                                        
                                    </fieldset>

                                </form>

                                 {/* <div id="message-warning"> Error boy</div>
                                 <div id="message-success">
                                 <i className="fa fa-check"></i>Your message was sent, thank you!
                                      <br />
                                 </div> */}

                            </div>
                           
                           <Slide direction="right" duration={2000}>
                            <aside className="four columns footer-widgets">
                                <div className="alamat">
                                    <h4>Adress and Phone</h4>
                                    <div className="address">
                                    {nama}<br/>
                                    {street}<br/>
                                    {city},{state} {zip}<br/>
                                    {phone}
                                    </div>
                
                                   


                                </div>

                            </aside>
                            </Slide>

                        
                        


                        
                        </div> 



            </section>
        )


    }

}

export default Contact;