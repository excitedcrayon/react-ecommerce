
export default function HomeServices({ homeservicedata }){

    return(
        <>
            {homeservicedata.map(service => (
                <div key={service.id} className="home_service_card">
                    <img src={service.image} />
                    <div className="home_service_card_title">
                        <strong>{service.title}</strong>
                    </div>
                    <div className="home_service_card_sub_title">
                        <span>{service.subtitle}</span>
                    </div>
                </div>
            ))}
        </>
    )
}