import './Banner.css'


function Banner (){
    //JSX = como o react le isso e transforma em elemento no DOM, parece html mas não é, é JSX
    return(
        <header className="banner">
            <img src="/imagens/banner.png" alt="Banner principal da página do Organo"/>
        </header>
    )
}

export default Banner;