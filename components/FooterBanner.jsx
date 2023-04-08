import React from 'react';
import Link from 'next/link';
import herochicha from './Hero-page.png';

import { urlFor } from '../lib/client';

const FooterBanner = ({ footerBanner: { discount, largeText1, largeText2, saleTime, smallText, midText, desc, product, buttonText, image } }) => {
  return (
    <>
    

    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>

        {/* <img 
          src={urlFor(image)} className="footer-banner-image"
        /> */}
      </div>
    </div>
    <br/>
    <br/>
    <div className=".footer-banner-container2">
    <div className="banner-desc">
    <iframe
  src="https://jarv-ixify.vercel.app/"
  style={{ border: "0px #ffffff none", textAlign: "center", alignItems: "center", justifyContent: "center", borderRadius: "20px" }}
  name="myiFrame"
  scrolling="no"
  frameBorder={0}
  marginHeight="0px"
  marginWidth="0px"
  height="500px"
  width="500px"
  allowFullScreen=""
/>
<div className="right">
          <p style={{color:"white"}}>Ask Any</p>
          <h3 style={{color:"white"}}>Queries You want to ask</h3>
          <p style={{color:"white"}}>Our chatbot will answer them alll for you...instantly</p>
          <a href="https://jarv-ixify.vercel.app/">
            <button type="button">Ask Krishi🤖</button>
          </a>
        </div>
    </div>
    </div>
    </>
  )
}

export default FooterBanner