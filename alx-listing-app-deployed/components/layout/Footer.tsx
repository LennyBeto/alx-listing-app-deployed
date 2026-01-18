import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1A1A] text-gray-300 text-sm">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div className="col-span-1 sm:col-span-2 md:col-span-1">
          <div className="mb-4">
            <Image
              src="/images/logo2.png"
              alt="ALX Logo"
              width={50}
              height={16}
              priority
            />
          </div>
          <p className="leading-relaxed text-gray-400">
            ALX is a platform where travelers can discover and book unique,
            comfortable, and affordable lodging options worldwide. From cozy
            city apartments and tranquil countryside retreats to exotic
            beachside villas, ALX connects you with the perfect place to stay
            for any trip.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-base font-semibold text-white mb-4">Explore</h3>
          <ul className="space-y-2">
            <li className="hover:text-emerald-400 cursor-pointer">
              Apartments in Dubai
            </li>
            <li className="hover:text-emerald-400 cursor-pointer">
              Hotels in New York
            </li>
            <li className="hover:text-emerald-400 cursor-pointer">
              Villa in Spain
            </li>
            <li className="hover:text-emerald-400 cursor-pointer">
              Mansion in Indonesia
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-base font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-2">
            <li className="hover:text-emerald-400 cursor-pointer">About us</li>
            <li className="hover:text-emerald-400 cursor-pointer">Blog</li>
            <li className="hover:text-emerald-400 cursor-pointer">Career</li>
            <li className="hover:text-emerald-400 cursor-pointer">Customers</li>
            <li className="hover:text-emerald-400 cursor-pointer">Brand</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-base font-semibold text-white mb-4">Help</h3>
          <ul className="space-y-2">
            <li className="hover:text-emerald-400 cursor-pointer">Support</li>
            <li className="hover:text-emerald-400 cursor-pointer">
              Cancel booking
            </li>
            <li className="hover:text-emerald-400 cursor-pointer">
              Refunds Process
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700"></div>

      {/* Bottom Disclaimer & Links */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-400">
        <p className="text-center md:text-left">
          Some hotel requires you to cancel more than 24 hours before check-in.
          Details{" "}
          <span className="text-emerald-400 hover:underline cursor-pointer">
            here
          </span>
        </p>
        <div className="flex flex-wrap justify-center md:justify-end gap-4">
          <span className="hover:text-white cursor-pointer">
            Terms of Service
          </span>
          <span className="hover:text-white cursor-pointer">
            Policy service
          </span>
          <span className="hover:text-white cursor-pointer">
            Cookies Policy
          </span>
          <span className="hover:text-white cursor-pointer">Partners</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
