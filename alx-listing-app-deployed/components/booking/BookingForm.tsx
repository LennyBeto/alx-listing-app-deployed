import { useState } from "react";
import axios from "axios";
import { FaCheck, FaRegCreditCard, FaChevronDown, FaLock } from "react-icons/fa";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    street: "",
    apt: "",
    city: "",
    state: "",
    zip: "",
    country: "ghana",
    sms: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // update state on input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  // simple validation
  const validateForm = () => {
    if (!formData.firstName || !formData.lastName || !formData.email) {
      return "First name, last name, and email are required.";
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      return "Please enter a valid email address.";
    }
    if (!formData.cardNumber || !formData.expiry || !formData.cvv) {
      return "Payment details are required.";
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);

    try {
      await axios.post("/api/bookings", formData);
      setSuccess("🎉 Booking confirmed successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        cardNumber: "",
        expiry: "",
        cvv: "",
        street: "",
        apt: "",
        city: "",
        state: "",
        zip: "",
        country: "ghana",
        sms: false,
      });
    } catch (err) {
      setError("❌ Failed to submit booking. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md">
      {/* Contact Detail */}
      <section>
        <h2 className="text-lg font-semibold mb-4">Contact Detail</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
            <input type="text" id="firstName" value={formData.firstName} onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-green-600 focus:ring-green-600"/>
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
            <input type="text" id="lastName" value={formData.lastName} onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-green-600 focus:ring-green-600"/>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" value={formData.email} onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-green-600 focus:ring-green-600"/>
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone number</label>
            <input type="tel" id="phone" value={formData.phone} onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-green-600 focus:ring-green-600"/>
          </div>
        </div>

        <div className="flex items-start space-x-2 mt-4 text-sm text-gray-700">
          <input id="sms" type="checkbox" checked={formData.sms} onChange={handleChange} className="hidden peer"/>
          <div className="h-5 w-5 rounded-md border border-gray-300 flex items-center justify-center peer-checked:bg-green-600 peer-checked:border-green-600">
            <FaCheck className="text-white text-xs hidden peer-checked:block"/>
          </div>
          <label htmlFor="sms" className="cursor-pointer">Receive text message updates about your booking.</label>
        </div>
      </section>

      {/* Payment Section */}
      <section>
        <h2 className="text-lg font-semibold mb-4">Pay with</h2>
        <div className="border rounded-md p-3 flex justify-between items-center text-sm text-gray-700">
          <div className="flex items-center space-x-2">
            <FaRegCreditCard className="text-gray-500"/>
            <span>Credit or debit card</span>
          </div>
          <FaChevronDown className="text-gray-500"/>
        </div>

        <div className="mt-4 space-y-4">
          <div>
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card number</label>
            <div className="relative">
              <input type="text" id="cardNumber" placeholder="1234 5678 9012 3456" value={formData.cardNumber} onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 pr-10 focus:border-green-600 focus:ring-green-600"/>
              <FaLock className="absolute right-3 top-3 text-gray-400 text-sm"/>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">Expiration date</label>
              <input type="text" id="expiry" placeholder="MM/YY" value={formData.expiry} onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-green-600 focus:ring-green-600"/>
            </div>
            <div>
              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
              <input type="text" id="cvv" placeholder="123" value={formData.cvv} onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-green-600 focus:ring-green-600"/>
            </div>
          </div>
        </div>
      </section>

      {/* Billing Address */}
      <section>
        <h2 className="text-lg font-semibold mb-4">Billing Address</h2>
        <div className="space-y-4">
          <input type="text" id="street" placeholder="Street Address" value={formData.street} onChange={handleChange}
            className="block w-full rounded-md border border-gray-300 p-2 focus:border-green-600 focus:ring-green-600"/>
          <input type="text" id="apt" placeholder="Apt or suite number" value={formData.apt} onChange={handleChange}
            className="block w-full rounded-md border border-gray-300 p-2 focus:border-green-600 focus:ring-green-600"/>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" id="city" placeholder="City" value={formData.city} onChange={handleChange}
              className="block w-full rounded-md border border-gray-300 p-2 focus:border-green-600 focus:ring-green-600"/>
            <input type="text" id="state" placeholder="State" value={formData.state} onChange={handleChange}
              className="block w-full rounded-md border border-gray-300 p-2 focus:border-green-600 focus:ring-green-600"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" id="zip" placeholder="Zip Code" value={formData.zip} onChange={handleChange}
              className="block w-full rounded-md border border-gray-300 p-2 focus:border-green-600 focus:ring-green-600"/>
            <select id="country" value={formData.country} onChange={handleChange}
              className="block w-full rounded-md border border-gray-300 p-2 focus:border-green-600 focus:ring-green-600">
              <option value="ghana">Ghana</option>
              <option value="usa">United States</option>
              <option value="uk">United Kingdom</option>
            </select>
          </div>
        </div>
      </section>

      {/* Submit */}
      <div className="pt-6">
        <button type="submit" disabled={loading}
          className="w-full bg-green-600 text-white py-3 rounded-md font-medium hover:bg-green-700 transition disabled:opacity-50">
          {loading ? "Processing..." : "Confirm & Pay"}
        </button>
        {error && <p className="text-red-500 mt-3">{error}</p>}
        {success && <p className="text-green-600 mt-3">{success}</p>}
      </div>
    </form>
  );
};

export default BookingForm;
