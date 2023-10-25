import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div>
            <div className="text-center mt-6">
                <h2 className="text-xl text-orange-500 font-bold mb-3">Services</h2>
                <h1 className="text-5xl font-bold mb-3">Our Service Area</h1>
                <p className="w-1/2 mx-auto mb-10">
                    The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-6">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <div className="my-8 text-center">
                <button className="btn btn-outline border-orange-600 normal-case text-orange-600 hover:bg-orange-600 hover:text-white hover:border-none">More Services</button>
            </div>
        </div>
    );
};

export default Services;