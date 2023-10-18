import React from 'react';
import avatar from '../Ideas.png';

// function Logo(props:any){
//     const userPic = <img src={avatar}/>
//     return userPic;
// }
// function Header(props: any) {
//     return (
//         <>
//             <h1>{props.title}</h1>
//             <p>{props.desc}</p>
//             <Logo/>
//         </>
//     )
// }

// function ModeToggler(){
//     let darkModeOn = false;
//     const darkMode = <h1>Dark Mode is On</h1>
//     const lightMode = <h1>Light Mode is On</h1>

//     function handleClick(){
//         darkModeOn = !darkModeOn;
//         if(darkModeOn === true){
//             console.log("dark mode is on");
//         }else{
//             console.log("light mode is on");
            
//         }
//     }

//     return (
//         <div>
//             {darkModeOn ? darkMode : lightMode}
//             <button onClick={handleClick}>Dark Mode</button>
//         </div>
//     )
// }
import {useContext} from 'react';

import BlogInfoProvider,{blogInfoContext} from '../providers/blogInfoProvider';
import BlogGraphQL from '../providers/blogGraghQL';
function WeatherApp(){
    return (
        <>
            <h1>provider tests</h1>

                <BlogInfoProvider value={blogInfoContext}>
                    <BlogGraphQL/>
                </BlogInfoProvider>

                {/* <ParentComponent/> */}

            {/* <ModeToggler/> */}
            {/* <Header title="Such a lovely day!" desc="today sun will shine!"/>
            <Header title="It's a windy day!" desc="today wind will flow!"/> */}
        </>
    )
}
export default WeatherApp;