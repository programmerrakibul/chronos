import MyContainer from "@/components/MyContainer/MyContainer";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaTwitter,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export const metadata = {
  title: "Contact Us | Chronos",
  description:
    "Get in touch with the Chronos team. We'd love to hear from you!",
};

export default function Contact() {
  const contactMethods = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email Us",
      description: "Send us an email anytime",
      details: "hello@chronos.com",
      link: "mailto:hello@chronos.com",
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Call Us",
      description: "Mon to Fri from 9am to 6pm",
      details: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Visit Us",
      description: "Come say hello at our office",
      details: "123 Blog Street, Digital City, DC 10101",
      link: "https://maps.google.com",
    },
  ];

  const socialLinks = [
    {
      icon: <FaTwitter className="text-xl" />,
      name: "Twitter",
      url: "https://twitter.com/chronos",
      color: "hover:text-blue-400",
    },
    {
      icon: <FaGithub className="text-xl" />,
      name: "GitHub",
      url: "https://github.com/chronos",
      color: "hover:text-gray-700",
    },
    {
      icon: <FaLinkedin className="text-xl" />,
      name: "LinkedIn",
      url: "https://linkedin.com/company/chronos",
      color: "hover:text-blue-600",
    },
  ];

  return (
    <section className="min-h-screen bg-base-100 py-8">
      <MyContainer>
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            Have questions about Chronos? We&apos;re here to help. Get in touch
            with our team.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="flex-1">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-6">Get in Touch</h2>

                {/* Contact Methods */}
                <div className="space-y-6 mb-8">
                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.link}
                      className="flex items-start gap-4 p-4 rounded-lg bg-base-200 hover:bg-base-300 transition-colors duration-200 group"
                    >
                      <div className="p-3 bg-primary text-primary-content rounded-lg group-hover:scale-110 transition-transform duration-200">
                        {method.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">
                          {method.title}
                        </h3>
                        <p className="text-base-content/70 text-sm mb-1">
                          {method.description}
                        </p>
                        <p className="text-primary font-medium">
                          {method.details}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        className={`p-3 bg-base-200 rounded-lg transition-all duration-200 ${social.color} hover:bg-base-300 hover:scale-110`}
                        aria-label={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold">
                          First Name
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="John"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold">
                          Last Name
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Doe"
                        className="input input-bordered"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="input input-bordered"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Subject</span>
                    </label>
                    <select className="select select-bordered" required>
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="writing">Write for Us</option>
                      <option value="advertising">Advertising</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Message</span>
                    </label>
                    <textarea
                      className="textarea textarea-bordered h-32"
                      placeholder="Tell us how we can help you..."
                      required
                    ></textarea>
                  </div>

                  <div className="form-control">
                    <button type="submit" className="btn btn-primary btn-lg">
                      <FaPaperPlane className="mr-2" />
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </MyContainer>
    </section>
  );
}
