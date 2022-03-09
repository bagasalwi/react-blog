import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BlogDetail() {

    const params = useParams();
    // use state for object {}
    const [article, setArticle] = useState({});
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    useEffect(function () {
        async function getArticle() {
            const request = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${params.id}`);

            // checker for request ok or not
            if (!request.ok) {
                console.log('set notfound false')
                return setNotFound(true);
            }

            // parsing json
            const response = await request.json();

            document.title = `${response.title} - Blog`;
            setArticle(response);
            setLoading(false);
        }

        getArticle();
    }, [params]);

    // if article not found pass by const notFound
    if (notFound) {
        document.title = 'Artikel tidak ditemukan!';
        return <h4>Artikel tidak ditemukan!</h4>
    }


    return (
        <section className="section">
            {/* ternary loading */}
            {loading ? <i>Loading Article</i>
                : (
                    <article className="article">
                        <h1 className="article-title">{article.title}</h1>
                        <time className="article-time">{new Date(article.publishedAt).toLocaleDateString()}</time>
                        <img className="article-image" src={article.imageUrl} alt={article.title} />
                        <p className="article-summary">{article.summary}</p>
                        <p>{article.newsSite}</p>
                        <p className="article-source">Source : <a href={article.url} rel='noreferrer' target='_blank'>{article.newsSite}</a></p>
                    </article>
                )}
        </section>
    )
}