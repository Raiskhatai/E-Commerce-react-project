import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="px-25 py-5 text-justify w-full">
      <h1 className="text-red-500 text-xl my-5 "> About Us</h1>
      <p>
        {" "}
        Welcome to [Company Name], a professionally managed e-commerce platform
        dedicated to providing customers with a secure, convenient, and
        high-quality online shopping experience. Since our establishment, we
        have focused on delivering excellence through carefully selected
        products, transparent business practices, and customer-centered
        services. Our platform offers a wide assortment of products across
        multiple categories, including fashion, electronics, home essentials,
        personal care, and lifestyle goods. Each product listed on our website
        undergoes a quality verification process to ensure that it meets our
        standards of reliability and performance. We believe that online
        shopping should be efficient, trustworthy, and accessible to everyone.
        Therefore, we continuously invest in technology, logistics, and customer
        support systems to enhance the overall shopping journey. Our Mission Our
        mission is to simplify digital commerce by providing: High-quality and
        authentic products Competitive and transparent pricing Secure payment
        gateways Fast and reliable shipping solutions Easy return and refund
        policies Responsive customer support We are committed to maintaining
        integrity, transparency, and professionalism in every aspect of our
        operations. Our Core Values At [Company Name], our business operations
        are guided by the following core values: Customer First Approach – We
        prioritize customer satisfaction in every decision we make. Quality
        Assurance – We ensure that all products meet defined quality benchmarks.
        Integrity & Transparency – Honest communication and ethical practices
        form the foundation of our business. Innovation
      </p>
      <h1 className="text-red-500 text-xl my-5">Our Mission</h1>
      <p>
        Our mission is to provide customers with: Premium quality products
        Transparent pricing Secure and convenient payment options Timely and
        reliable delivery services Efficient customer support We aim to build
        long-term relationships based on trust, reliability, and satisfaction.
      </p>
      <h1 className="text-red-500 text-xl my-5">Our Commitment</h1>
      <p>
        {" "}
        Customer satisfaction is at the core of our business operations. We
        continuously work towards improving our platform, enhancing user
        experience, and ensuring safe and secure transactions. Our team is
        dedicated to maintaining transparency, professionalism, and excellence
        in every interaction.
      </p>
      <h1 className="text-red-500 text-xl my-5">Our Vision</h1>
      <p>
        To become a leading e-commerce platform recognized for integrity,
        innovation, and customer-centric services while expanding our reach
        across diverse markets.
      </p>
      <h1 className="text-red-500 text-xl my-5">Contact Information</h1>
      <p>
        {" "}
        For any inquiries, support, or feedback, please feel free to reach out
        to our customer service team. We are always here to assist you.
      </p>
      <button className=" text-white bg-red-500 px-3 py-2 hover:scale-105 cursor-pointer my-5 w-fit block rounded-l capitalize font-semibold text-xl m-auto ">
        <Link to={"/product"}> click</Link>
      </button>
    </div>
  );
};

export default AboutUs;
