import React from "react"
import { useGlobalContext } from "./context"
import phone from './phone.svg'

export default function Hero(){
    const {closeModal}=useGlobalContext();
    return(
        <section className="hero" onMouseOver={closeModal}>
            <div className="hero-center">
                <article className="hero-info">
                    <h1>Payment Infrastructure
                        <br />
                        for the internet
                    </h1>
                    <p>
                    Millions of companies of all sizes—from startups to Fortune 500s—use
                    Stripes software and APIs to accept payments, send payouts, and
                    manage their businesses online.
                    </p>
                    <button className="btn">Start Now</button>
                </article>
                <article className="hero-img">
                    <img src={phone} alt="phone" />
                </article>
            </div>

        </section>
    )
}