import RequestForm from "@/components/common/RequestForm";
import { Button } from "@/components/ui/button";

const GoogleWorkspace = () => {
  return (
    <section className="relative bg-[url('/img/gw.jpg')] bg-no-repeat bg-cover bg-blend-saturation">
      <div className="absolute inset-0 bg-slate-950 text-white py-8 opacity-75"></div>
      <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
        <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
          <p className="ml-2 text-white uppercase tracking-loose">
            Transform your workplace
          </p>
          <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed text-white mb-2">
            Google WorkSpace
          </p>
          <p className="text-sm md:text-base text-gray-50 mb-4">
            A cloud based platform thats comes with easy to use, familiar and
            secure tools for your organization.
          </p>
          <div className="">
            <RequestForm/>
          </div>
        </div>
        <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
          <div className="container mx-auto w-full h-full">
            <div className="relative wrap overflow-hidden p-3 h-full">
              <div className="border-2-2 border-white absolute h-full border"></div>
              <div className="border-2-2 border-white absolute h-full border"></div>
              <div className="mb-8 ml-8 text-white">
                <div className=" px-1 py-4 ">
                  <p className="mb-3 text-base text-red-300">Schools</p>
                  <h4 className="mb-3 font-bold text-lg md:text-2xl">
                    Google Workspace for Education
                  </h4>
                  <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                    Google Workspace for Education is a cloud based platform
                    thats comes with easy to use, familiar and secure tools
                    which are necessary for a school. The platform makes it easy
                    for everyone at a school to communicate, collaborate,
                    Organise information and administer resources.Our Google
                    Workspace for Education deployment offerings include:-
                  </p>
                  <ul className="list-disc mt-3">
                    <li>
                      Setting up accounts (domain linked Google Accounts) for
                      everyone in the school as per Staff and Learner list.
                    </li>
                    <li>
                      School Domain registration (if the school does not have
                      one already).
                    </li>
                    <li>
                      Training of IT Champions, Educators and learners on how to
                      use online tools.
                    </li>
                    <li>
                      A School Website for the school to interact with the
                      external stakeholders (if a school does not have one, or
                      needs an improvement on the existing one).
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mb-8 ml-8 text-white">
                <div className=" px-1 py-4 ">
                  <p className="mb-3 text-base text-red-300">Nonprofit</p>
                  <h4 className="mb-3 font-bold text-lg md:text-2xl">
                    Google Workspace for Nonprofits
                  </h4>
                  <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                    Google Workspace for Nonprofits is a robust set of tools
                    designed to enhance the productivity and efficiency of
                    nonprofit organizations across various scales. Serving as a
                    comprehensive collaboration platform, it integrates
                    essential tools like Gmail, Google Calendar, and document
                    collaboration. Moreover, it provides capabilities for
                    website creation and management, secure file storage, and
                    seamless file sharing, offering a holistic solution for
                    nonprofit entities.Our Google Workspace for Nonprofits
                    deployment offerings include:-
                  </p>
                  <ul className="list-disc mt-3">
                    <li>
                      Setting up accounts (domain linked Google Accounts) for
                      everyone at the organization.
                    </li>
                    <li>
                      Email migrations for legacy servers to be Google Hosted .
                    </li>
                    <li>
                      Provisioning of shared drives and communication channels.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mb-8 ml-8 text-white">
                <div className=" px-1 py-4 ">
                  <p className="mb-3 text-base text-red-300">
                    Small & Medium Enterprises
                  </p>
                  <h4 className="mb-3 font-bold text-lg md:text-2xl">
                    Google Workspace for SME&apos;s
                  </h4>
                  <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                    Formerly recognized as G Suite, Google Workspace presents a
                    sophisticated suite of office and collaboration applications
                    tailored for business, educational, and institutional use.
                    Serving as a subscription-based advancement beyond the free
                    Google apps accessible to all Google account users, it
                    stands out as the premier cloud-based office suite. Opting
                    for Google Workspace becomes the evident choice for those
                    ready to transition their entire business operations online
                    and forego traditional desktop-based applications.Our Google
                    Workspace for SMEs deployment offerings include:-
                  </p>
                  <ul className="list-disc mt-3">
                    <li>
                      Setting up accounts (domain linked Google Accounts) for
                      everyone at the organization.
                    </li>
                    <li>
                      Email migrations for legacy servers to be Google Hosted .
                    </li>
                    <li>
                      Provisioning of shared drives and communication channels.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleWorkspace;
