import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { FaCross } from "react-icons/fa";

const images = [
    "http://localhost:3000/image/furniture1",
    "http://localhost:3000/image/furniture1",
    "http://localhost:3000/image/furniture1",
    "http://localhost:3000/image/furniture1",
    "http://localhost:3000/image/furniture1",
    "http://localhost:3000/image/furniture1",
    "http://localhost:3000/image/furniture1",
    "http://localhost:3000/image/furniture1",
    "http://localhost:3000/image/furniture1",
    "http://localhost:3000/image/furniture1",
    "http://localhost:3000/image/furniture1",
];

const ImageGallery = () => {

    const [data, setData] = useState({ img: '', i: 0 });

    const viewImage = (img, i) => {
        setData({ img, i })
    }
    return (
        <>
            {data.img &&
                <div style={{
                    width: '100%',
                    height: '100vh',
                    background: 'black',
                    position: 'fixed',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden'
                }}>
                    <button style={{ position: 'absolute', top: 0, right: 0 }}><FaCross /></button>
                    <img src={data.img} style={{ width: 'auto', maxWidth: '90%', maxHeight: '90%' }} />
                </div>
            }
            <div className="imgGallery">
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                >
                    <Masonry>
                        {images.map((image, i) => (
                            <img
                                key={i}
                                src={image}
                                style={{ width: "100%", display: "block" }}
                                alt=""
                                onClick={() => viewImage(image, i)}
                            />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </>
    );
}

export default ImageGallery;