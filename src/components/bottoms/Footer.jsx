import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        // <div className='bg-black text-white'>
        //     <div className='flex justify-center items-center gap-15'>
        //         <div className='flex flex-col max-w-100 gap-5'>
        //             <h1 className='text-4xl'>DigitalTools</h1>
        //             <p className='text-sm break-word'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p></div>
        //         <div>
        //             <ul>
        //                 <li className='font-bold'>Products</li>
        //                 <li>Features</li>
        //                 <li>Pricing</li>
        //                 <li>Templates</li>
        //                 <li>Integration</li> 
        //             </ul>
        //         </div>
        //         <div>
        //             <ul>
        //                 <li className='font-bold'>Company</li>
        //                 <li>Features</li>
        //                 <li>Pricing</li>
        //                 <li>Templates</li>
        //                 <li>Integration</li> 
        //             </ul>
        //         </div>
        //         <div>
        //             <ul>
        //                 <li className='font-bold'>Resources</li>
        //                 <li>Features</li>
        //                 <li>Pricing</li>
        //                 <li>Templates</li>
        //                 <li>Integration</li> 
        //             </ul>
        //         </div>
        //         <div>
        //             <ul>
        //                 <li className='font-bold'>Social Links</li>
        //                 <li>Features</li>
        //                 <li>Pricing</li>
        //                 <li>Templates</li>
        //                 <li>Integration</li> 
        //             </ul>
        //         </div>
        //     </div>
        //     <hr className='border'/>
        //     <div className='flex justify-between items-center px-50 py-10'>
        //        <div>
        //         <p className='text-sm'>Copyright DigiTools</p>
        //         </div>
        //        <div className='flex text-sm'>
        //         <p>Privacy Policy</p>
        //         <p>Terms and Services</p>
        //         <p>Cookies</p>
        //        </div>
        //     </div>
        // </div>
    <footer className="bg-[#0B1220] text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-white mb-4">DigiTools</h2>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Features</li>
              <li className="hover:text-white cursor-pointer">Pricing</li>
              <li className="hover:text-white cursor-pointer">Templates</li>
              <li className="hover:text-white cursor-pointer">Integrations</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Press</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Documentation</li>
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">Community</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Social Links</h3>
            <div className="flex gap-4">
              <div className="bg-gray-700 p-3 rounded-full">
                <FontAwesomeIcon icon={faInstagram} />
              </div>
              <div className="bg-gray-700 p-3 rounded-full">
                <FontAwesomeIcon icon={faFacebook} />
              </div>
              <div className="bg-gray-700 p-3 rounded-full">
                <FontAwesomeIcon icon={faTwitter} />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 my-10"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <p>© 2026 Digitools. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
    );
};

export default Footer;