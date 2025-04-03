import logo from './images/logo.svg'

const Footer = () =>{
    return(
        <footer>
            <section>
                <div className="company-info">
                    <img src={logo} alt=""/>
                    <p>We are family based Mediterranean restaurant, focused on traditional recipes served with modern twist.</p>
                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>About</a></li>
                        <li><a href='/'>Menu</a></li>
                        <li><a href='/'>Reservations</a></li>
                        <li><a href='/'>Order Online</a></li>
                        <li><a href='/'>Login</a></li>
                    </ul>
                </div>

                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: <br/>123 Lemon city, USA</li>
                        <li>Phone: <br/>+1234 456777</li>
                        <li>Email: <br/>little@lemon.com</li>
                    </ul>
                </div>
                <div>
                    <h3>Social Midea Links</h3>
                    <ul>
                        <li><a href='/'>Facebook</a></li>
                        <li><a href='/'>Instagram</a></li>
                        <li><a href='/'>X</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    );
};

export default Footer;