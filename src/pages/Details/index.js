import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"
import { key } from "../../config/APIKey/key";
import { Container } from "./styles";

export default function Details(){
    const imagePath = 'https://image.tmdb.org/t/p/w500/'
    const {id} = useParams();
    const [movie,setMovie] = useState({});
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`)
        .then(response => response.json())
        .then(data => {
            const movie = {
                id,
                title: data.title,
                sinopse: data.overview,
                image: `${imagePath}${data.poster_path}`,
                releaseDate: data.release_date
            }
            setMovie(movie);
        })
    },[id])

    return(
        <Container>
            <div className="movie">
                <img src={movie.image} alt={movie.title}/>
                <div className="details">
                    <h1>{movie.title}</h1>
                    <span>Sinopse: {movie.sinopse}</span>
                    <span className="realeaseDate">Release Date: {movie.releaseDate}</span>
                    <Link to={"/"}>
                        <button>Go back</button>
                    </Link>
                    
                </div>
            </div>
        </Container>
    )
}