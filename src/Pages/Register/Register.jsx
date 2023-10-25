import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';

const Register = () => {

    const {createUser} = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password);

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(err => {
            console.error(err);
        })
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col justify-between gap-20 lg:flex-row">
                <div className="w-1/2">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-1/2 max-w-sm p-6 border">
                    <form onSubmit={handleRegister} className="card-body">
                        <h1 className="text-5xl font-bold text-center">Register</h1>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-orange-600 normal-case text-white" type="submit" value="Register" />
                        </div>
                    </form>
                    <p className='text-center my-4'>Already have an account? <Link className='text-orange-600 font-bold' to={'/login'}>Login</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Register;