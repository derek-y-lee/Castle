import React, { useState } from 'react';
import classes from './Main.module.scss';
// import { NavLink, Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { landingIcon } from '../../FillerImages.js';

const { layout, userUI, terminal, activeLink, restLink, enterBtn, login, slogan } = classes;

const Main = (props) => {

    const [isToggled, setToggled] = useState(true);
    const toggle = () => setToggled(!isToggled);

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleEnter = () => {
        if(isToggled){
            //handle login
            fetch("/api/login",{
                method:"POST",
                body: JSON.stringify({
                    email:email,
                    password:password
                }),
                headers:{
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            }).then(res => res.json())
            .then((res)=>{
                console.log(res)
                if(res.length > 0){
                    alert("authenticated")
                    props.history.push("/dashboard")
                }
                else
                    alert("bad log in")
            })
            .catch(res=> alert(res))

        }else{
            //handle signup
            fetch("/api/newUser",{
                method:"POST",
                body: JSON.stringify({
                    email:email,
                    password:password
                }),
                headers:{
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            }).then(res => res.text())
            .then((res)=>{
                alert(res)
            })
        }
    }

    return (
        <div className={layout}>
            <section className={userUI}>
                <div className={terminal}>
                    <button href="/"
                        className={isToggled ? activeLink : restLink}
                        onClick={toggle}>
                        log in
                    </button>
                    <button href="/"
                        className={isToggled ? restLink : activeLink}
                        onClick={toggle}>
                        sign up
                    </button>
                </div>
                {/* <div className={terminal}>
                    <NavLink exact to="/" activeClassName={activeLink}>log in</NavLink>
                    <NavLink to="/signUp" activeClassName={activeLink}>sign up</NavLink>
                </div> */}
                <div style={{ marginTop: "5em" }}>
                    <form className={login}>
                        <input value={email} type="email" name="email" onChange={(event)=>setEmail(event.target.value)} placeholder="email" />
                        <input value={password} type="password" name="password" onChange={(event)=>setPassword(event.target.value)} placeholder="password" />
                    </form>
                </div>
                <div style={{ marginTop: "5em", marginBottom: "8em" }}>
                    <button onClick={handleEnter} className={enterBtn}>enter</button>
                </div>
            </section>
            <section>
              <div style={{ marginTop: "20em" }}>
                <p>Castle</p>
              </div>
            </section>
            <section className={slogan}>
                <img src={landingIcon} alt="icon"/>
                <p>Rally The Kingdom with your friends.</p>
            </section>
        </div>
    );
};

// script



export default Main;
