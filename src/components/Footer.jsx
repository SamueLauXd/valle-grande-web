import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
 
export function Footer() {
  return (
    <footer className="w-full bg-white p-8 mt-32">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <img src="/src/assets/vallegrande-logo.svg" alt="logo-ct" className="w-20" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-green-dark focus:text-green-dark"
            >
              <Link to="/about">
                Acerca de nosotros
              </Link>
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-green-dark focus:text-green-dark"
            >
              <Link to="/products">
                Productos
              </Link>
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-green-dark focus:text-green-dark"
            >
              <Link to="/contact">
                Contáctanos
              </Link>
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2023 Productos Valle Grande SAS
      </Typography>
    </footer>
  );
}