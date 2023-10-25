import About from "../About/About";
import Banner from "../Banner/Banner";
import Info from "../Info/Info";
import Services from "../Services/Services";
import Team from "../Team/Team";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Info></Info>
            <Team></Team>
        </div>
    );
};

export default Home;