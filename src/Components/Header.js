import { Component } from "react";
import {Fade}from "react-awesome-reveal";
import ParticlesBg from "particles-bg";
class Header extends Component{
    render(){
        if(!this.props.data) return null; // jadi kalo gak ada data di json maka nulllin aja 

        const project  = this.props.data.project;//ngambil data dari json
        const github   = this.props.data.github;
        const name     = this.props.data.name;
        const deskripsi = this.props.data.deskripsi;
        const linkedin = this.props.data.linkedin;

        return (
            <header
            id="home">
                {/* untuk membverikan animasi dilatar belakang berbentuk circle dan ditempatkan di latarbelakang */}
                <ParticlesBg type="circle" bg={true} /> 

                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="show-navigation">
                        Show Navigation
                        </a>
                    <a className="mobile-btn" title="hide-navigation" href="#home">
                        Hide Navigation
                        </a>

                        <ul id="nav" className="nav">
                            <li className="current">
                                <a className="smoothscroll" href="#home">
                                    Home
                                </a>
                            </li>

                            <li >
                                <a className="smoothscroll" href="#about">
                                    About
                                </a>
                            </li>

                            
                            <li >
                                <a className="smoothscroll" href="#resume">
                                    Resume
                                </a>
                            </li>

                                
                            <li >
                                <a className="smoothscroll" href="#portfolio">
                                    Works
                                </a>
                            </li>

                                
                            <li >
                                <a className="smoothscroll" href="#contact">
                                    Kontak
                                </a>
                            </li>
                        </ul>
                </nav>
                <div className="row banner">
                    <div className="banner-text">
                        <Fade bottom>
                            {/* Fade berfungsi sebagai animasi muncul misal dari bawah atau dari mana */}
                            <h1 className="responsive-headline nama-baner">{name}</h1>

                        </Fade>

                        <Fade bottom duration={1200}>
                            <h3>{deskripsi}</h3>

                        </Fade>
                 {/* Note: Wahai diriku dimasa depan yang membuka projek ini kalo misalkan Fade nya gak aktif coba cek package.lock.json nya */}
                        <Fade bottom duration={2000}>
                            <ul className="social">


                                <a href={project} className="button btn project-btn">
                                    <i className="fa fa-book"></i>Project&nbsp;&nbsp;&nbsp;
                                </a>

                                <a href={github} className="button btn github-btn">
                                    <i className="fa fa-github"></i>Github&nbsp;&nbsp;&nbsp;&nbsp;
                                </a>

                                <a href={linkedin} className="button btn linkedin-btn">
                                    <i className="fa fa-linkedin"></i>LinkedIn
                                </a>

    
                            </ul>

                        </Fade>
                    </div>

                </div>

                <p className="scrolldown">
                    <a className="smoothscroll" href="#about">
                        <i className="icon-down-circle"></i>
                    </a>
                </p>


            </header>
        )
    }

}

export default Header;