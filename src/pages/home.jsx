import { MoveRight, Play } from "lucide-react";
import goals from "../assets/goals.jpg";
import environment from "../assets/environment.jpg";
import hero from "../assets/hero.jpg";

export const HomePage = () => {
  return (
    <>
      <section>
        <div className="py-28 container mx-auto">
          <div className="grid grid-rows-1 md:grid-cols-2">
            <div className="grid gap-6">
              <h1 className="text-6xl font-extrabold text-zinc-950">
                Preparing India to move with Times
              </h1>
              <p className="text-lg leading-7 max-w-lg">
                Extending the core journalistic principles of Trust, Knowledge
                and Public Service, Bennett, Coleman and Co. Ltd. (BCCL)
                established over 178 years ago, has continually undertaken
                initiatives for the betterment of Indian society.
              </p>
              <div className="flex gap-4 my-2">
                <a className="bg-green-300 rounded-full flex justify-center items-center max-w-fit py-4 px-6">
                  <span className="flex gap-3">
                    Enroll Today <MoveRight className="w-6 h-6 text-zinc-600" />
                  </span>
                </a>
                <a className="bg-sky-300 rounded-full flex justify-center items-center max-w-fit py-4 px-6">
                  <span className="flex gap-3">
                    <Play className="w-6 h-6 text-sky-900" /> Watch Video
                  </span>
                </a>
              </div>
              <h6 className="mb-6">
                <span className="text-lg leading-7 block">
                  Admissions are Open for MBA 2024-25
                </span>
                <span className="w-64 h-1 absolute bg-green-300 rounded-2xl"></span>
              </h6>
            </div>
            <div>
              <img
                src={hero}
                className="aspect-auto w-full rounded-3xl self-center"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="h-28 bg-gradient-to-b from-[#f4f0fc] to-green-200"></div>

      <section className="bg-green-200 py-28">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl font-bold text-zinc-950 text-center">
              Providing the best possible start to your education
            </h2>
            <p className="text-lg text-center pt-6 px-3">
              The university features six schools with 30+ programs and 70+
              leading specialisations in Engineering, Management, Media, Law and
              Liberal Arts, and has positioned itself as one the top
              universities in India.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-6 pt-12">
            <div className="text-center">
              <h4 className="text-5xl font-bold text-zinc-950">80+</h4>
              <p className="pt-4">High-End Teaching and Research Labs</p>
            </div>
            <div className="text-center">
              <h4 className="text-5xl font-bold text-zinc-950">1500+</h4>
              <p className="pt-4">No. of Research Publications</p>
            </div>
            <div className="text-center">
              <h4 className="text-5xl font-bold text-zinc-950">₹15cr+</h4>
              <p className="pt-4">High-End Teaching and Research Labs</p>
            </div>
            <div className="text-center">
              <h4 className="text-5xl font-bold text-zinc-950">88+</h4>
              <p className="pt-4">patents filed and 14 granted</p>
            </div>
          </div>

          <div className="grid grid-rows-1 md:grid-cols-2 gap-x-12 pt-20">
            <img
              src={goals}
              className="aspect-auto w-full rounded-3xl ml-auto"
            />
            <div className="grid gap-6">
              <div className="my-auto">
                <h1 className="text-4xl font-bold text-zinc-950 max-w-lg">
                  Our goal is to ensure your success in life
                </h1>
                <p className="text-lg leading-7	mt-5">
                  The Times Group established Bennett University in 2016 with a
                  vision to provide quality education and drive the growth of
                  the Indian Higher Education ecosystem, with 180 + years of
                  legacy and leadership skills to make students professionally
                  proficient.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-rows-1 md:grid-cols-2 gap-x-12 pt-20">
            <div className="grid gap-6">
              <div className="my-auto">
                <h1 className="text-4xl font-bold text-zinc-950 max-w-lg">
                  We provide an environment that enables you to thrive
                </h1>
                <p className="text-lg leading-7	mt-5">
                  The best private university in Greater Noida, is committed to
                  provide global exposure with top-of-the-line faculty members,
                  infrastructure, trailblazing research, vibrant campus life
                  consisting of a magnificently constructed sports complex and
                  myriad activities and amenities to indulge in.
                </p>
              </div>
            </div>

            <img
              src={environment}
              className="aspect-auto w-full rounded-3xl mr-auto"
            />
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="container mx-auto">
          <div className="grid grid-rows-1 md:grid-cols-2 gap-6">
            {/* 1 */}
            <div className="grid gap-6">
              <div className="bg-teal-200 p-12 rounded-3xl text-center justify-center flex flex-col">
                <h6 className="text-6xl font-bold">₹20.7 Crore LPA</h6>
                <p className="text-lg leading-7	mt-3">Highest Package</p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-fuchsia-200 p-12 rounded-3xl text-center justify-center flex flex-col">
                  <h6 className="text-6xl font-bold">320+</h6>
                  <p className="text-lg leading-7	mt-3">
                    Companies for placements
                  </p>
                </div>
                <div className="bg-teal-200 p-12 rounded-3xl text-center justify-center flex flex-col">
                  <h6 className="text-6xl font-bold">₹1.2 Cr</h6>
                  <p className="text-lg leading-7	">Highest Package</p>
                </div>
              </div>
            </div>

            {/* 2 */}
            <div className="bg-green-200 p-12 rounded-3xl text-center justify-center flex flex-col">
              <h6 className="text-5xl font-bold">
                Most Popular BA Journalism and Mass Communication
              </h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
