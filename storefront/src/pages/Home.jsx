import PageSlider from "../components/PageSlider";
import FeaturedCategories from "../components/FeaturedCategories";

export default function Home(){

    return(
        <>
            <section className="page_section slider_section">
                <PageSlider />
            </section>
            <section className="page_section featured_section">
                <div className="page_section_header">
                    <h2>Featured Categories</h2>
                </div>
                <FeaturedCategories />
            </section>
        </>
    )
}