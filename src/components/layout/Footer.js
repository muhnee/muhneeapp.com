import React from 'react';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">About Us</h2>
        <p className="mt-5">Muhnee is an exciting and simpler way to help you manage your money.</p>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Important Links</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="#" disabled>
              Pricing
            </a>
          </li>
          <li>
            <a href="https://www.notion.so/muhnee/Terms-of-Use-a10d1dd98f044d1b9799f39fca4e387a">
              Terms &amp; Conditions
            </a>
          </li>
          <li>
            <a href="https://www.notion.so/Privacy-13ae75755f0e49c28a1a19a607931665">
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Social Media</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://twitter.com/MuhneeApp">Twitter</a>
            <a href="https://facebook.com/MuhneeApp">Facebook</a>
            <a href="https://linkedin.com/company/Muhnee">LinkedIn</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
