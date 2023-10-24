import img from '../../assets/images/login/login.svg'

const Login = () => {

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col justify-between gap-20 lg:flex-row">
                <div className="w-1/2">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-1/2 max-w-sm p-6 border">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-5xl font-bold text-center">Login</h1>
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
                            <input className="btn bg-orange-600 normal-case text-white" type="submit" value="Login" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;