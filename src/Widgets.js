import React from 'react';
import "./Widgets.css";

function Widgets() {
    return (
            <div className="widgets">
                <iframe 
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100059458155923&tabs=timeline&width=320&height=1500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                    width="320"
                    height="100%"
                    style={{border:"none",overflow:"hidden"}}
                    frameBorder="0"
                    scrolling="no"
                    allowtransparency="true"
                    allow="encrypted-media"
                    title="widget"
                ></iframe>
            </div>
    )
}

export default Widgets;
