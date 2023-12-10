import PageSlider from "../components/PageSlider";
import FeaturedCategories from "../components/FeaturedCategories";
import HomeServices from "../components/HomeServices";
import { HomeServiceData } from "../services/HomeServiceData";

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
            <section className="page_section">
                <article className="page_section_content text_centered">
                    <p>SA Flooring is your first choice for laminate flooring, vinyl flooring, blinds and much more.</p>
                    <p>Our expert advice is backed by more than 20 years experience in the industry, which sets us apart from the rest. We also do skirting, vinyl flooring, cornices, architraves, dado rails and self- levelling screed.</p>
                    <div className="page_section_content page_section_home_services">
                        <HomeServices homeservicedata={ HomeServiceData }/>
                    </div>
                </article>
            </section>
        </>
    )
}