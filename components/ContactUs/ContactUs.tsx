import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "../Button";
import logo from "@/Public/images/Logo.png";

export const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const data = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    const formattedMessage =
      `Name: ${data.name}\nEmail: ${data.email}\nSubject: ${data.subject}\nMessage: ${data.message}`.trim();
    // In a real application, you would handle form submission here
    console.log("Form submitted:", formattedMessage);
    const phoneNumber = "923188644065";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(formattedMessage)}`;
    window.open(whatsappUrl, "_blank");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="bg-base min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary text-white pt-40 pb-24 object-cover overflow-hidden">
        {/* Background Image Setup (Requires a URL to look best) */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
            alt="Corporate Office Cover"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            {/* Logo Placeholder */}
            <div className="mb-8 w-48 h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-sm flex items-center justify-center">
              <span className="text-white/80 text-sm font-bold tracking-widest uppercase">
                <img src={logo} />
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed max-w-2xl">
              We provide tailored solutions and strategic oversight. Connect
              with our global team to discuss how we can partner on your next
              initiative.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Col - Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-black text-primary mb-6">
                  Contact Information
                </h2>
                <p className="text-textSecondary text-lg font-light leading-relaxed">
                  Have a question or want to discuss a potential partnership?
                  Reach out to us using the form provided or via the details
                  below.
                </p>
              </div>

              <div className="space-y-8">
                {/* Contact Items */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/5 rounded-sm flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      Global Headquarters
                    </h3>
                    <p className="text-textSecondary leading-relaxed">
                      Dubai – UAE
                      <br />
                      Karachi – Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/5 rounded-sm flex items-center justify-center flex-shrink-0">
                    <Phone className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      Phone Number
                    </h3>
                    <p className="text-textSecondary leading-relaxed">
                      +923 47 027 6700 (Pak)
                      <br />
                      +971 56 238 9733 (UAE)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/5 rounded-sm flex items-center justify-center flex-shrink-0">
                    <Mail className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      Email Address
                    </h3>
                    <p className="text-textSecondary leading-relaxed">
                      info@apexresilience.org
                      <br />
                      naeem@apexresilience.org
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/5 rounded-sm flex items-center justify-center flex-shrink-0">
                    <Clock className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      Hours of Operation
                    </h3>
                    <p className="text-textSecondary leading-relaxed">24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col - Contact Form */}
            <div className="bg-base p-8 md:p-12 rounded-sm border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-black text-primary mb-8">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold text-primary uppercase tracking-wider mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-primary uppercase tracking-wider mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-bold text-primary uppercase tracking-wider mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold text-primary uppercase tracking-wider mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                    placeholder="Provide details about your inquiry..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  variant="accent"
                  fullWidth
                  className="py-4 text-sm font-bold tracking-widest uppercase shadow-[4px_4px_0px_0px_rgba(15,44,76,0.1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
