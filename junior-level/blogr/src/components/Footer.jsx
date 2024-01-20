//data
import { footer } from "../data/footer";

//assets
import logo from "../assets/icons/logo.svg";

const Footer = () => {
  return (
    <>
      <footer className="footer py-8 text-center px-5 md:text-left md:grid md:grid-cols-2 lg:py-10">
        <div>
          <img
            className="pointer-events-none select-none block mx-auto md:mx-0"
            src={logo}
            alt="blogr logo"
          />
        </div>

        <div className="md:grid md:grid-cols-2 lg:grid-cols-3">
          {footer.map(({ id, title, links }) => (
            <ul key={id}>
              <h4 className="mt-10 mb-5 lg:mt-0 text-lg">{title}</h4>

              {links.map((link) => (
                <li key={link} className="py-1">
                  <p
                    className="cursor-pointer hover:underline inline-block
                    "
                  >
                    {link}
                  </p>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </footer>
    </>
  );
};

export default Footer;
