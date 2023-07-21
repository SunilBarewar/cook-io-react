import './heroSection.css'
const HeroSection = () => {
    return (
        <>
            <section class="hero" aria-label="banner">
                <div class="banner-card">

                    <h1 class="display-large">Your desired dish?</h1>

                    <div class="search-wrapper" data-search-form>
                        <span class="material-symbols-outlined leading-icon" aria-hidden="true">local_dining</span>

                        <input type="search" name="search" aria-label="Search recipes" placeholder="Search recipes..."
                            class="search-field body-medium" autoComplete='off' data-search-field />

                        <button class="search-submit" aria-label="Submit" data-search-btn>
                            <span class="material-symbols-outlined" aria-hidden="true">search</span>
                        </button>
                    </div>


                    <p class="label-medium">
                        Search any recipe e.g: burger, pizza, sandwitch , toast.
                    </p>


                </div>
            </section>
        </>
    )
}

export default HeroSection