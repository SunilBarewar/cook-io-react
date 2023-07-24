import { useRef } from 'react'
import './heroSection.css'
import { useNavigate } from 'react-router-dom';
const HeroSection = () => {
    const searchQuery = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const handleSearchBtnClick = () =>{
        const query = searchQuery.current?.value.trim();
        if(query){
            navigate(`/recipes?q=${query}`)
        }
    }
    return (
        <>
            <section className="hero" aria-label="banner">
                <div className="banner-card">

                    <h1 className="display-large">Your desired dish?</h1>

                    <div className="search-wrapper" data-search-form>
                        <span className="material-symbols-outlined leading-icon" aria-hidden="true">local_dining</span>

                        <input
                            type="search"
                            name="search"
                            aria-label="Search recipes"
                            placeholder="Search recipes..."
                            className="search-field body-medium"
                            autoComplete='off'
                            ref={searchQuery}
                            onKeyDown={(e)=>{if(e.key === 'Enter') handleSearchBtnClick()}}
                        />

                        <button className="search-submit" aria-label="Submit" onClick={handleSearchBtnClick} >
                            <span className="material-symbols-outlined" aria-hidden="true">search</span>
                        </button>
                    </div>


                    <p className="label-medium">
                        Search any recipe e.g: burger, pizza, sandwitch , toast.
                    </p>


                </div>
            </section>
        </>
    )
}

export default HeroSection