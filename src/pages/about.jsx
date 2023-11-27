import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import about3 from "../assets/about3.jpg";
import about4 from "../assets/about4.jpg";
import about5 from "../assets/about5.jpg";
import about6 from "../assets/about6.jpg";

export const AboutPage = () => {
  return (
    <>
      {/* <div className="h-28 bg-gradient-to-b from-[#f4f0fc] to-green-200"></div> */}

      <section className="py-28">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl font-bold text-zinc-950 text-center">
              Why Bennett
            </h2>

            <p className="text-lg text-center pt-6 px-3">
              The university features six schools with 30+ programs and 70+
              leading specialisations in Engineering, Management, Media, Law and
              Liberal Arts, and has positioned itself as one the top
              universities in India.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 py-20">
            <img src={about1} className="w-full h-full rounded-3xl shadow-lg" />
            <img src={about2} className="w-full h-full rounded-3xl shadow-lg" />
            <img src={about3} className="w-full h-full rounded-3xl shadow-lg" />
            <img src={about4} className="w-full h-full rounded-3xl shadow-lg" />
            <img src={about5} className="w-full h-full rounded-3xl shadow-lg" />
            <img src={about6} className="w-full h-full rounded-3xl shadow-lg" />
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-center pt-6 px-3">
              The group established it&apos;s footprint in education sector by
              launching Bennett University with multi-disciplinary education to
              make students life and industry ready. It then launched Bennett
              University, a state private university in Uttar Pradesh with the
              aim of providing Ivy League quality of education to undergraduate
              and postgraduate students making them, &apos;life and career
              ready&apos;.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
