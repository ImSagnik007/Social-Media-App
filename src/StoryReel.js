import React from 'react';
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
    return (
        <div className="storyReel">
            <Story 
                src="https://www.apple.com/newsroom/images/product/ipad/standard/apple_ipad-pro-spring21_hero_04202021_big.jpg.large.jpg"
                profileSrc="https://e7.pngegg.com/pngimages/310/159/png-clipart-apple-electric-car-project-logo-business-apple-heart-logo.png"
                title="Apple India"
            />
            <Story 
                src="https://s.yimg.com/uu/api/res/1.2/CnDOMGd2E0KuAoL85eujeQ--~B/aD0xMDAwO3c9MTYwMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2021-03/cb118990-8190-11eb-a7cb-0209a9b20bc6.cf.jpg"
                profileSrc="https://icon2.cleanpng.com/20180610/ihp/kisspng-republic-of-gamers-asus-laptop-logo-computer-asus-eee-pc-5b1ddc198cce27.2212376615286835455768.jpg"
                title="ASUS ROG"
            />
            <Story 
                src="https://images.firstpost.com/wp-content/uploads/2020/11/3-HP-Omen-15.jpg"
                profileSrc="https://w7.pngwing.com/pngs/269/315/png-transparent-hewlett-packard-laptop-intel-hp-pavilion-linear-tape-open-hewlett-packard-text-trademark-logo-thumbnail.png"
                title="HP India"
            />
            <Story 
                src="https://i01.appmifile.com/webfile/globalimg/7/CAD99B30-A77A-34CE-BF8D-7D12D14BD68F.jpg"
                profileSrc="https://www.citypng.com/public/uploads/preview/-11597186552glxhsxjcli.png"
                title="Mi India"
            />
            <Story 
                src="https://cdn.motor1.com/images/mgl/zO14L/s3/tesla-roadster-commercial.jpg"
                profileSrc="https://e7.pngegg.com/pngimages/732/884/png-clipart-tesla-logo-transport-cars.png"
                title="Tesla Motors"
            />
        </div>
    )
}

export default StoryReel;
