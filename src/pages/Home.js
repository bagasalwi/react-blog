import { useEffect } from "react"

export default function Home() {

    // set title home
    useEffect(function(){
        document.title = 'Home';
    },[]);
    
    return (
        <section className="section">
            <h1 className="sect-title">Welcome to home page</h1>
            <p className="sect-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit molestiae provident iste quod id explicabo neque sequi ratione unde harum deserunt, deleniti ex laudantium, obcaecati veniam est adipisci recusandae qui!</p>
        </section>
    )
}