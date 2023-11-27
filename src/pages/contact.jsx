import { MapPin, Mail, Phone } from "lucide-react";

export const ContactPage = () => {
  return (
    <>
      <section>
        <div className="py-28 container mx-auto">
          <div className="grid grid-rows-1 md:grid-cols-2 gap-x-12">
            <div className="grid gap-6">
              <div className="my-auto">
                <h1 className="text-6xl font-extrabold text-zinc-950 max-w-md leading-tight">
                  We&apos;d love to hear from you
                </h1>
                <p className="text-lg leading-7">
                  Questions or concerns? Don&apos;t hesitate to contact us. Our
                  team is here to assist you. We value your feedback and are
                  committed to providing timely and helpful responses. Feel free
                  to reach out for any assistance you may need.
                </p>
              </div>
            </div>

            <div className="max-w-lg bg-white rounded-3xl shadow-lg p-12 z-10">
              <h6 className="text-3xl font-bold">Send us a message</h6>
              <div className="mt-6 space-y-3">
                <div>
                  <label htmlFor="name" className="font-medium">
                    Name
                  </label>
                  <input
                    placeholder="Aayush"
                    id="name"
                    type="text"
                    className="w-full rounded-xl p-3 border mt-3"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="font-medium">
                    Email
                  </label>
                  <input
                    placeholder="aayush@gmail.com"
                    id="email"
                    type="email"
                    className="w-full rounded-xl p-3 border mt-3"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="font-medium">
                    Phone number
                  </label>
                  <input
                    placeholder="+91 (123) 456-7890"
                    id="phone"
                    type="phone"
                    className="w-full rounded-xl p-3 border mt-3"
                  />
                </div>
                <div>
                  <label htmlFor="name" className="font-medium">
                    Message
                  </label>
                  <textarea
                    placeholder="Your message"
                    id="name"
                    type="text"
                    className="w-full rounded-xl p-3 border mt-3 resize-none"
                  />
                </div>
                <button className="bg-green-300 rounded-3xl flex justify-center items-center max-w-fit py-3 px-6">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white -translate-y-52 -mb-52">
        <div className="pt-40 pb-28 container mx-auto">
          <h4 className="text-4xl font-bold text-zinc-950 max-w-lg">
            Contact information
          </h4>
          <div className="grid grid-cols-3 gap-6 py-6">
            <div className="bg-green-200 rounded-3xl p-6 flex">
              <span className="bg-green-300 rounded-2xl w-16 h-16 flex justify-center items-center">
                <MapPin className="w-8 h-8 text-zinc-600" />
              </span>
              <div className="flex-1 pl-2 my-auto">
                <h5 className="font-semibold">Address</h5>
                <p className="text-sm leading-3">
                  Plot Nos 8-11, Greater Noida 201310
                </p>
              </div>
            </div>

            <div className="bg-sky-200 rounded-3xl p-6 flex">
              <span className="bg-sky-300 rounded-2xl w-16 h-16 flex justify-center items-center">
                <Mail className="w-8 h-8 text-zinc-600" />
              </span>
              <div className="flex-1 pl-2 my-auto">
                <h5 className="font-semibold">Email</h5>
                <p className="text-sm leading-3">admissions@bennett.edu.in</p>
              </div>
            </div>

            <div className="bg-teal-200 rounded-3xl p-6 flex">
              <span className="bg-teal-300 rounded-2xl w-16 h-16 flex justify-center items-center">
                <Phone className="w-8 h-8 text-zinc-600" />
              </span>
              <div className="flex-1 pl-2 my-auto">
                <h5 className="font-semibold">Phone</h5>
                <p className="text-sm leading-3">1800-103-8484</p>
              </div>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.959192591856!2d77.5841978!3d28.4506465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cbf94deb6bc39%3A0x7ba6bedc9a2b537f!2sBennett%20University%20(Times%20of%20India%20Group)!5e0!3m2!1sen!2sin!4v1701095129367!5m2!1sen!2sin"
            width="100%"
            height="600"
            allowfullscreen=""
            loading="lazy"
            className="rounded-3xl"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
};
