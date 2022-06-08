import  styled  from "styled-components";

export const Container = styled.div`

    padding: 5rem 0;

    h1{
        margin: 3rem 0;
    }

    .movie{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img{
        width: 300px;
        border: 1rem;
    }

    .details{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 4rem;
        max-width: 50%;
    }

    button{
        border: none;
        background-color: #cc3d42;
        cursor: pointer;
        border-radius: 1rem;
        color: white;
        padding: 0.8rem 2rem;
        font-size: 100%;
        transition: all 0.3s;
        margin-top: 1rem;
    }

    button:hover{
        background-color: #a8272b;
    }

    span{
        line-height: 150%;
        margin-bottom: 1rem;
        font-size: 120%;
    }

    .realeaseDate{
        opacity: 0.5;
    }
`

