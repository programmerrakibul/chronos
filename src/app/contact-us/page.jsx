import Heading from "@/components/Heading/Heading";
import MyContainer from "@/components/MyContainer/MyContainer";
import MyInput from "@/components/MyInput/MyInput";
import MyLabel from "@/components/MyLabel/MyLabel";
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
  title: "Contact Us | CHRONOS",
  description:
    "Get in touch with the CHRONOS team. We'd love to hear from you!",
};

export default function Contact() {
  const contactMethods = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email Us",
      description: "Send us an email anytime",
      details: "rakibul00206@gmail.com",
      link: "mailto:rakibul00206@gmail.com",
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Call Us",
      description: "Mon to Fri from 9am to 6pm",
      details: "+880 188841-9206",
      link: "tel:+880 188841-9206",
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
      url: "https://x.com/innocentboy206",
      color: "hover:text-blue-400",
    },
    {
      icon: <FaGithub className="text-xl" />,
      name: "GitHub",
      url: "https://github.com/programmerrakibul",
      color: "hover:text-gray-700",
    },
    {
      icon: <FaLinkedin className="text-xl" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/programmer-rakibul/",
      color: "hover:text-blue-600",
    },
  ];

  return (
    <section className="py-10 md:py-16">
      <MyContainer className="space-y-10">
        <Heading
          title="Contact Us"
          subTitle="Have questions about Chronos? We're here to help. Get in touch
            with our team."
        />

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          <div className="flex-1">
            <div className="card bg-primary/5 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-6">Get in Touch</h2>

                <div className="space-y-6 mb-8">
                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.link}
                      className="flex items-start flex-wrap gap-4 p-4 rounded-lg bg-accent/20 hover:bg-base-300 transition-colors duration-200 group shadow-xl"
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

          <div className="flex-1">
            <div className="card bg-primary/5 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                      <MyLabel htmlFor="firstName" label="First Name" />
                      <MyInput
                        id="firstName"
                        placeholder="John"
                        required={true}
                      />
                    </div>
                    <div className="form-control">
                      <MyLabel htmlFor="lastName" label="Last Name" />
                      <MyInput
                        id="lastName"
                        placeholder="Doe"
                        required={true}
                      />
                    </div>
                  </div>

                  <div className="form-control">
                    <MyLabel htmlFor="email" label="Email" />
                    <MyInput
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required={true}
                    />
                  </div>

                  <div className="form-control">
                    <MyLabel htmlFor="subject" label="Subject" />
                    <select
                      id="subject"
                      className="select select-bordered"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="writing">Write for Us</option>
                      <option value="advertising">Advertising</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-control">
                    <MyLabel htmlFor="message" label="Message" />
                    <textarea
                      id="message"
                      className="textarea textarea-bordered h-32"
                      placeholder="Tell us how we can help you..."
                      required
                    ></textarea>
                  </div>

                  <div className="form-control">
                    <button className="btn btn-primary btn-block">
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
