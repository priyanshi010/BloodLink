import React from 'react';
import g1 from "../../assets/donation/g1.jpg";
import g2 from "../../assets/donation/g2.jpg";
import g3 from "../../assets/donation/g3.jpg";
import g4 from "../../assets/donation/g4.jpg";

const AboutDonation = () => {
    const data = [
        { title: "Registration", img: g1, description: "Registering for blood donation ensures you're eligible and prepared for the process." },
        { title: "Screening", img: g2, description: "A thorough screening checks your health to ensure safe blood donation for both the donor and recipient." },
        { title: "Donation", img: g3, description: "The blood donation process involves the collection of blood to save lives and make a difference." },
        { title: "Life Saving", img: g4, description: "Your donation could save lives, making a significant impact on those in need of blood transfusions." },
    ];

    return (
        <section className="grid place-items-center dark:text-white-900">
            <div className="container">
                <div className="text-center"><br />
                    <h2 className='text-3xl font-bold'>Donation Process</h2>
                    <code>The donation process from the time you arrive at the center until you leave</code><br /><br />
                </div>
                <div className='grid grid-cols-4 place-items-center gap-4'>
                    {data.map((e, i) => (
                        <div key={i} className='border-metal shadow-md rounded-lg overflow-hidden max-w-[90%] select-none'>
                            <img src={e.img} draggable={false} width="100%" alt={e.title} />
                            <div className='m-4'>
                                <h1 className='font-bold text-lg text-midnight'>{i + 1} - {e.title}</h1>
                                <p className='text-justify'>{e.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutDonation;
