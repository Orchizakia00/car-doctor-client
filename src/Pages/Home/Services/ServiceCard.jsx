

const ServiceCard = ({ service }) => {
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={service.img} className="h-[200px] w-full" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{service.title}</h2>
                <p className="text-red-600 font-semibold">Price: ${service.price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;