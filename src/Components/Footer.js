import React,{Component} from "react"
import { Fade } from "react-awesome-reveal";

class Footer extends  Component{
    constructor(){
        super()
        this.state={}
    }

    render(){
        if(!this.props.data) return null

        const social = this.props.data.social.map(function(social){
            return (
                <li key={social.name}>
                    <a href={social.url}>
                        <i className={social.className}></i>
                    </a>
                </li>
            )
        });


        return(
            <footer>
                <div className="row">
                    <Fade bottom>
                        <div className="twelve columns">
                            <ul className="social-links">{social}</ul>
                            <ul className="copyright">
                                <li>
                                  Copyright 2023 Fahrel Ardzaky Eriyanputra
                                </li>

                            </ul>

                        </div>

                    </Fade>

                </div>

                <div id="go-top">
                    <a className="smoothscroll" title="Back to Top" href="#home">
                        <i className="icon-up-open"></i>
                    </a>

                </div>
                
            </footer>
        )

    }

}

export default Footer;