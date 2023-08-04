import React, { useState, useEffect, ChangeEvent,  } from "react";
import type { HeadFC, PageProps } from "gatsby"
import '../style.css'
import { Link } from "gatsby"
import image1 from "../images/lab0/image1.png"
import image2 from "../images/lab0/image2.png"
import image3 from "../images/lab0/image3.png"
import image4 from "../images/lab0/image4.png"
import image5 from "../images/lab0/image5.png"
import image6 from "../images/lab0/image6.png"
import image7 from "../images/lab0/image7.png"
import image8 from "../images/lab0/image8.png"
import image9 from "../images/lab0/image9.png"
import image10 from "../images/lab0/image10.png"
import image11 from "../images/lab0/image11.png"


const Lab0: React.FC<PageProps> = () => {

  return (
    <html>
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Karla&family=Permanent+Marker&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <div className="title">Unity Setup</div>
        <div><Link to="/">Labs</Link></div>
        <hr></hr>
        <div className="labcontents">
            <h1></h1>
        </div>
      </body>
    </html>
  )
}

export default Lab0

export const Head: HeadFC = () => <title>lab 0</title>