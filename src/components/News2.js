import React from "react";
import Navbar from "./Navbarr";
import "./news1.css";
import Footer from "./Footer";

const News2 = () => {
    return (
        <>
            <section className="news1-main">
                <img src={require("../images/news2-np.jpg")} />
                <h1>Top 5 Interior Design Trends for 2023</h1>
                <p>09/03/2023  .By Interia</p>
                <p>As we head into 2023, interior design trends are shifting towards creating comfortable and functional spaces that reflect our individuality. Here are the top five interior design trends you can expect to see in 2023:
                    <ol>
                        <br />
                        <li>Biophilic Design
                            Biophilic design is all about bringing the natural world indoors. This trend incorporates elements like plants, natural materials, and organic shapes to create a space that is both calming and energizing. Expect to see more greenery, natural wood finishes, and earthy tones in 2023.
                        </li>
                        <br />
                        <li>
                            Maximalism
                            After years of minimalism dominating the interior design world, maximalism is making a comeback. This trend is all about embracing bold colors, patterns, and textures to create a space that is fun and playful. Expect to see eclectic furniture pieces, mixed patterns, and maximalist art and decor in 2023.
                        </li>
                        <br />
                        <li>
                            Sustainable Design
                            As we become more aware of our impact on the environment, sustainable design is becoming increasingly popular. This trend incorporates eco-friendly materials, recycled products, and energy-efficient technology to create a space that is both stylish and sustainable. Expect to see more sustainable furniture and decor options in 2023.
                        </li>
                        <br />
                        <li>
                            Comfortable Spaces
                            2022 brought on a shift towards creating comfortable and cozy spaces, and this trend is set to continue in 2023. Expect to see more plush furniture, soft textures, and comfortable seating options. The focus is on creating a space that is both functional and inviting.
                        </li>
                        <br />
                        <li>
                            Tech-Enabled Design
                            Technology is becoming increasingly integrated into our homes, and interior design is no exception. In 2023, expect to see more tech-enabled design features, such as smart lighting, voice-activated assistants, and home automation systems. These features not only add convenience but also enhance the overall design aesthetic.
                        </li>
                        <br />
                    </ol>
                    In conclusion, 2023 interior design trends are all about creating functional, comfortable, and personalized spaces. Whether you’re embracing the natural world with biophilic design or incorporating bold colors with maximalism, these trends offer plenty of inspiration to create a space that reflects your individuality.</p>
            </section>
            <Footer />
        </>
    );
};

export default News2;