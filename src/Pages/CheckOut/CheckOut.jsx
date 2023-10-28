import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import toast, { Toaster } from "react-hot-toast";


const CheckOut = () => {

    const service = useLoaderData();

    const { title, price, _id, img } = service;
    const { user } = useContext(AuthContext);

    const handleOrder = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;

        // console.log(name, date, email);
        const booking = {
            customerName: name,
            service: title,
            img,
            date,
            email,
            price: price,
            service_id: _id
        };

        console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success('Successfully booked!')
                }
            })
    }

    return (
        <div>
            <h2>Book: {title} </h2>
            <form onSubmit={handleOrder} className="my-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} name="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" defaultValue={user?.email} name="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due amount</span>
                        </label>
                        <input type="text" defaultValue={'$' + price} className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn bg-orange-600 text-white normal-case btn-block" type="submit" value="Confirm Order" />
                </div>
            </form>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default CheckOut;