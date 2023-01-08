import React from 'react'
import vg from "../Assets/two.webp";
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from 'react-icons/ai'
function Home() {
  return (
    <>
    <div className="home" id='home' >
        <main>
            <h1>TechStar</h1>
            <p>for all your tech needs.</p>
        </main>
    </div>
    <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
            <p>
                TechStar is a pioneer in reliable tech management. Our services are the most reliable in industry and come qith 3 level quality checsks! Many notable MNCs rely on us for their local manaegment needs. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptatum nulla minus vitae ab cumque! Laborum pariatur, ut aliquid deserunt blanditiis qui optio eaque!
            </p>
        </div>
    </div>
    <div className="home3" id="about">
        <div>
            <h1>Who we are</h1>
            <p>
                We are Mumbai based serive company that provides local tech-assistance to comapnies, be it local server maintainance or development of new products. Obcaecati exercitationem in ex facere rem ad quo ut, necessitatibus dolores tenetur iusto facilis quibusdam ea similique ratione laborum, dolore officia nobis sint provident quos esse, labore nam magni. Consectetur, ipsum facere. Dolores magni placeat optio vitae delectus, deleniti praesentium nobis odio nihil voluptatibus? Quasi eum itaque nemo ut!
            </p>
        </div>
    </div>
    <div className="home4" id='brands'>
        <div>
            <h1>Brands</h1>
            <article>
                <div style={
                    {animationdelay: "0.3s"}
                }>
                <AiFillGoogleCircle/>
                <p>Google</p>
                </div>
                <div style={
                    {animationdelay: "0.5s"}
                }>
                <AiFillAmazonCircle/>
                <p>Amazon</p>
                </div>
                <div style={
                    {animationdelay: "0.7s"}
                }>
                <AiFillInstagram/>
                <p>Instagram</p>
                </div>
                <div style={
                    {animationdelay: "1s"}
                }>
                <AiFillYoutube/>
                <p>YouTube</p>
                </div>
            </article>
        </div>
    </div>
    </>
  )
}

export default Home