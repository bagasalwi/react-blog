import { useEffect } from "react";

export default function Profile () {

    // set title home
    useEffect(function(){
        document.title = 'Profile';
    },[]);

    return (
        <section className="section">
            <h1 className="sect-title">Profile page</h1>
            <p className="sect-desc">ini ya isinya profile doangan sih, jadinya gapapa yaudah terserah</p>
        </section>
    )
}