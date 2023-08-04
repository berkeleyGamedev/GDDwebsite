import React, { useState, useEffect, ChangeEvent,  } from "react";
import type { HeadFC, PageProps } from "gatsby"
import '../style.css'
import { Link } from "gatsby"


const IndexPage: React.FC<PageProps> = () => {


  return (
    <html>
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Karla&family=Permanent+Marker&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <div className="title"> Video Game Design and Development Decal</div>
        <hr></hr>
        <div className="labs">
          <div className="labtitle"> Unity Labs</div>
          <div className="lablinks">
            <div></div><Link to="/lab0"> Lab 0: Unity Setup</Link>
            <div></div><Link to="/lab1"> Lab 1: Intro to Unity Basics</Link>
            <div></div><Link to="/lab2"> Lab 2: Basic Scripting</Link>
            <div></div><Link to="/lab3"> Lab 3: Pixel Art / Spriting</Link>
            <div></div><Link to="/lab4"> Lab 4: Advanced Scripting</Link>
            <div></div><Link to="/lab5"> Lab 5: Animation</Link>
            <div></div><Link to="/lab6"> Lab 6: Colliders / Rigidbodies</Link>
            <div></div><Link to="/lab7"> Lab 7: Tilesets</Link>
            <div></div><Link to="/lab8"> Lab 8: Animator and Blend Trees</Link>
            <div></div><Link to="/lab9"> Lab 9: UI / Layering</Link>
            <div></div><Link to="/lab10"> Lab 10: UI Asset Creation</Link>
            <div></div> <Link to="/lab11"> Lab 11: Coroutines</Link>
            <div></div><Link to="/lab12"> Lab 12: Enviorment Design</Link>
            <div></div><Link to="/lab13"> Lab 13: Transitioning Saving and Building</Link>
            <div></div><Link to="/lab14"> Lab 14: </Link>
            <div></div><Link to="/lab15"> Lab 15: Raycasting</Link>
            <div></div><Link to="/lab16"> Lab 16: Lighting</Link>
            <div></div><Link to="/lab17"> Lab 17: Delegates and Events</Link>
          </div>
        </div>
      </body>
    </html>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Video Game Design and Development</title>
