import { Card, CardContent } from "@/components/ui/card";
import { Network, Database, Globe, MapPin, Shield, Zap } from "lucide-react";
import GradientText from "../GradientTextProps/GradientTextProps";
import Image from "next/image";

export default function Solution() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="px-[2rem] md:px-[4rem] py-[2rem] md:py-[4rem] relative">
        {/* Hero Section */}
        <div className="text-center mb-16 bg-gradient-to-b from-[#975222] to-black rounded-3xl">
          <div className="p-8 md:p-12 mb-12">
            <GradientText
              colors={["#ffffff", "#ffaa40"]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class text-3xl md:text-5xl  mx-auto "
            >
              Powering Digital India with
              <br />
              unmatched Connectivity
            </GradientText>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 px-6 md:px-12">
            <Card className="min-w-[400px] max-w-[450px] max-h-[200px] min-h-[180px] rounded-[20px] opacity-100 p-[1rem]  bg-[#56595f] border-gray-700 text-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 ">
                  <Network className="w-6 h-6  mt-1 flex-shrink-0" />
                  <h3 className="text-lg font-semibold">Vast Network Reach</h3>
                </div>
                <p className="text-[20px] leading-[30px] font-normal tracking-normal font-['Plus_Jakarta_Sans']">
                With over 30,000 kilometers of fiber network, we provide
                extensive coverage across the region.
                </p>
              </CardContent>
            </Card>

            <Card className="min-w-[400px] max-w-[450px] max-h-[200px] min-h-[180px] rounded-[20px] opacity-100 p-[1rem]  bg-[#56595f] border-gray-700 text-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 ">
                  <Network className="w-6 h-6  mt-1 flex-shrink-0" />

                  <h3 className="text-lg font-semibold">
                    Strategic Data Center Presence
                  </h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Our network architecture for data centers, offering diverse
                  connectivity options.
                </p>
              </CardContent>
            </Card>

            <Card className="min-w-[400px] max-w-[450px] max-h-[200px] min-h-[180px] rounded-[20px] opacity-100 p-[1rem]  bg-[#56595f] border-gray-700 text-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 ">
                  <Network className="w-6 h-6  mt-1 flex-shrink-0" />

                  <h3 className="text-lg font-semibold">
                    Global Interconnectivity
                  </h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Benefit from seamless integration with global markets and
                  experience lightning-fast data transfer through 3 LLD
                  Gateways.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 px-6 md:px-12">
          <Card className="w-[394px] h-[179px] rounded-[20px] opacity-100 bg-[#56595f] border-gray-700 text-white">
            <CardContent className="p-6">
              <div className="flex items-start gap-3 ">
                <Network className="w-6 h-6  mt-1 flex-shrink-0" />

                <h3 className="text-lg font-semibold">
                  Extensive Network Node Footprint
                </h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Our presence in 300+ network nodes ensures optimal performance
                and reliability.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#56595f] border-gray-700 text-white md:col-span-2">
            <CardContent className="p-6">
              <div className="flex items-start gap-3 ">
                <Network className="w-6 h-6  mt-1 flex-shrink-0" />

                <h3 className="text-lg font-semibold">
                  24/7 Network Management
                </h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Our dedicated Network Operations Centers (NOCs) in Mumbai and
                Noida act as dual data centers for disaster recovery, providing
                round-the-clock monitoring and support for uninterrupted network
                operations.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Tailored Solutions Section */}
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start px-6 md:px-12">
            <div className="w-[31rem]">
              <GradientText
                colors={["#ffffff", "#ffaa40"]}
                animationSpeed={3}
                showBorder={false}
                className="custom-class text-3xl md:text-6xl font-light tracking-[1.92px] mb-16"
              >
                Tailored Solutions
                <br />
                for Your Business
              </GradientText>

              <p className="text-gray-300 leading-relaxed">
                Experience the power of Lightstorm's innovative network
                solutions, designed to optimize your network infrastructure and
                empower your business growth. Benefit from automated network
                management, reduced latency, and enhanced scalability.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="bg-[#262a31] border-gray-700 text-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 ">
                    <Globe className="w-6 h-6  mt-1 flex-shrink-0" />
                    <h3 className="text-lg font-semibold">
                      Polarin: Your Gateway to the Cloud
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Seamlessly connect your data centers and cloud platforms
                    with Polarin. Our enterprise-grade network solutions ensure
                    high reliability, resilience, and scalability.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#262a31] border-gray-700 text-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 ">
                    <Zap className="w-6 h-6  mt-1 flex-shrink-0" />
                    <h3 className="text-lg font-semibold">
                      Smartnet: Unleash seamless connectivity, scalability, and
                      performance
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Empower your business with Smartnet. Our enterprise-grade
                    network solutions connect you to data centers and cloud
                    platforms, ensuring high reliability and customization to
                    meet your specific needs.
                  </p>
                </CardContent>
              </Card>
              <Image
                src="/Flexible.png"
                alt="Solution Image"
                width={500}
                height={300}
                className="rounded-lg shadow-lg absolute bottom-0 right-0 object-cover w-[12rem] bottom-[2rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
