import { Button } from "@/components/ui/button";
import {
  IconMapPin as MapPin,
  IconPhone as Phone,
  IconMail as Mail,
  IconClock as Clock,
  IconBrandInstagram as Instagram,
  IconBrandFacebook as Facebook,
  IconBrandTwitter as Twitter,
} from "@tabler/icons-react";
import Map from "@/components/Map";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6">
            <span className="text-gray-800">GET IN</span>{" "}
            <span className="text-gray-400 outline-text !text-6xl">TOUCH</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to begin your bespoke fashion journey? Contact us to schedule
            a consultation and discuss your vision.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">
                <span className="text-gray-800">SEND US A</span>{" "}
                <span className="text-gray-400 outline-text !text-3xl">
                  MESSAGE
                </span>
              </h2>

              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">
                <span className="text-gray-800">CONTACT</span>{" "}
                <span className="text-gray-400 outline-text !text-3xl">
                  INFORMATION
                </span>
              </h2>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-teal-700 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">
                      Studio Address
                    </h3>
                    <p className="text-gray-600">
                      123 Fashion Avenue
                      <br />
                      New York, NY 10001
                      <br />
                      Fashion District
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-teal-700 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-teal-700 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Email</h3>
                    <p className="text-gray-600">hello@anyasatelier.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-teal-700 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">
                      Business Hours
                    </h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                      <p className="text-sm text-teal-700 mt-2">
                        *Appointments required
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <h3 className="font-bold text-gray-800 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white hover:bg-pink-600 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="p-3">
        <div className="w-full">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="text-gray-800">VISIT OUR</span>{" "}
            <span className="text-gray-400">STUDIO</span>
          </h2>
          <div className="w-full min-h-[400px] h-full flex items-center justify-center">
            <Map />
          </div>
        </div>
      </section>
    </div>
  );
}
