"use client";



export default function ContactsSection() {

    return (
        <section id="contacts" className=" section-background min-h-screen px-16 py-32 flex flex-col mt-9">
            <h2 id="contacts-header" className="font-[Fasdeco]">Contact me</h2>
            <div className="contacts-info flex flex-row">

                <div className="mycont-container">

                    <div className="mycont-strings">
                    <div className="mycont-string1 font-[Fasdeco]"> mycontactsmycontac</div>
                    <div className="mycont-string2 font-[Fasdeco]"> mycontactsm</div>
                    </div>

                    <div className="card-content-box">
                        <div className="mycont-info">
                            <img className="mycont-icon" src="/static/phone.png" alt="phone-icon" />
                            <div className="mycont-text">+359 878 41 6610</div>
                        </div>

                        <div className="mycont-info">
                            <img className="mycont-icon" src="/static/mail.png" alt="mail-icon" />
                            <div className="mycont-text"> chrissi09005@gmail.com</div>
                        </div>

                        <div className="mycont-info">
                            <img className="mycont-icon" src="/static/in.png" alt="linkin-icon" />
                            <div className="mycont-text">....</div>
                        </div>


                        <div className="mycont-info">
                            <img className="mycont-icon" src="/static/insta.png" alt="insta-icon" />
                            <div className="mycont-text">_k_petrovva_444</div>
                        </div>

                     </div>
                </div>

                <div className="contme-form">

                    <div className="contme-strings">
                     <div className="contme-string1 font-[Fasdeco]">contactmeco</div>
                     <div className="contme-string2 font-[Fasdeco]">contactmecontactme</div>
                    </div>

                    <div className="card-content-box">
                        <form>
                            <div>
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" name="name" placeholder="Your Name" required />
                            </div>

                            <div>
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" placeholder="Your Email" required />
                            </div>

                            <div>
                                <label htmlFor="subject">Subject:</label>
                                <input type="text" id="subject" name="subject" placeholder="Subject" />
                            </div>

                            <div>
                                <label htmlFor="message">Message:</label>
                                <textarea id="message" name="message" rows={5} placeholder="Write your message here..." required></textarea>
                            </div>

                            <button id="send-btn" type="submit">Send</button>
                        </form>
                    </div>


                </div>

            </div>
        </section>
    );
}