import { Card, CardContent } from "@/components/ui/card";
import { Network, Database, Globe, MapPin, Shield, Zap } from "lucide-react";
import GradientText from "../GradientTextProps/GradientTextProps";
import Image from "next/image";
import PatternIcon from "../PatternIcon";
import PatternIcon2 from "../PatternIcon2";

export default function Solution() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="px-4 sm:px-6 md:px-[4rem] py-8 md:py-[4rem] relative">
        {/* Hero Section */}
        <div className="text-center mb-8 md:mb-16 bg-gradient-to-b from-[#975222] to-black rounded-3xl">
          <div className="p-4 sm:p-8 md:p-12 mb-8 md:mb-12">
            <GradientText
              colors={["#ffffff", "#ffaa40"]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class text-3xl sm:text-4xl md:text-6xl mx-auto font-semibold tracking-[1.92px] text-center px-4 md:px-0 mb-4 md:mb-8"
            >
              Powering Digital India with
              <br className="hidden sm:block" />
              unmatched Connectivity
            </GradientText>
          </div>
          <div className="flex flex-col flex-wrap md:flex-row justify-center gap-4 lg:flex-nowrap lg:flex-row gap-4 md:gap-6 mb-8 md:mb-16 px-4 sm:px-6 md:px-12 text-left justify-between">
            <Card className="w-full lg:min-w-[300px] xl:min-w-[400px] rounded-[20px] opacity-100 p-4 bg-[#56595f] border-gray-700 text-white">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-start gap-3">
                  <Network className="w-6 h-6 mt-1 flex-shrink-0" />
                  <h3 className="text-base md:text-lg font-semibold">Vast Network Reach</h3>
                </div>
                <p className="text-base md:text-[20px] leading-relaxed md:leading-[30px] font-normal tracking-normal font-['Plus_Jakarta_Sans']">
                  With over 30,000 kilometers of fiber network, we provide extensive coverage across the region.
                </p>
              </CardContent>
            </Card>

            <Card className="w-full lg:min-w-[300px] xl:min-w-[400px] rounded-[20px] opacity-100 p-4 bg-[#56595f] border-gray-700 text-white">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-start gap-3">
                  <Network className="w-6 h-6 mt-1 flex-shrink-0" />
                  <h3 className="text-base md:text-lg font-semibold">Strategic Data Center Presence</h3>
                </div>
                <p className="text-base md:text-[20px] leading-relaxed md:leading-[30px] font-normal tracking-normal font-['Plus_Jakarta_Sans']">
                  Our network architecture for data centers, offering diverse connectivity options.
                </p>
              </CardContent>
            </Card>

            <Card className="w-full lg:min-w-[300px] xl:min-w-[400px] rounded-[20px] opacity-100 p-4 bg-[#56595f] border-gray-700 text-white">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-start gap-3">
                  <Network className="w-6 h-6 mt-1 flex-shrink-0" />
                  <h3 className="text-base md:text-lg font-semibold">Global Interconnectivity</h3>
                </div>
                <p className="text-base md:text-[20px] leading-relaxed md:leading-[30px] font-normal tracking-normal font-['Plus_Jakarta_Sans']">
                  Benefit from seamless integration with global markets and experience lightning-fast data transfer through 3 LLD Gateways.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-16 px-4 sm:px-6 md:px-12 justify-between content-evenly">
          <Card className="w-full lg:min-w-[300px] xl:min-w-[400px] rounded-[20px] opacity-100 p-4 border-gray-700 text-white bg-[#56595f]">
            <CardContent className="p-4 md:p-6">
              <div className="flex items-start gap-3">
                <Network className="w-6 h-6 mt-1 flex-shrink-0" />
                <h3 className="text-base md:text-lg font-semibold">Extensive Network Node Footprint</h3>
              </div>
              <p className="text-base md:text-[20px] leading-relaxed md:leading-[30px] font-normal tracking-normal font-['Plus_Jakarta_Sans']">
                Our presence in 300+ network nodes ensures optimal performance and reliability.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#56595f] border-gray-700 text-white lg:col-span-2">
            <CardContent className="p-4 md:p-6">
              <div className="flex items-start gap-3">
                <Network className="w-6 h-6 mt-1 flex-shrink-0" />
                <h3 className="text-base md:text-lg font-semibold">24/7 Network Management</h3>
              </div>
              <p className="text-base md:text-[20px] leading-relaxed md:leading-[30px] font-normal tracking-normal font-['Plus_Jakarta_Sans']">
                Our dedicated Network Operations Centers (NOCs) in Mumbai and Noida act as dual data centers for disaster recovery, providing round-the-clock monitoring and support for uninterrupted network operations.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Tailored Solutions Section */}
        <div className="mt-16 md:mt-[15rem] w-full md:w-[90%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start px-4 sm:px-6 md:px-12">
            <div className="w-full lg:w-[31rem]">
              <GradientText
                colors={["#ffffff", "#ffaa40"]}
                animationSpeed={3}
                showBorder={false}
                className="custom-class text-2xl sm:text-3xl md:text-6xl font-light tracking-[1.92px] mb-8 md:mb-16"
              >
                Tailored Solutions
                <br />
                for Your Business
              </GradientText>

              <p className="font-extralight text-base sm:text-lg md:text-[20px] leading-relaxed tracking-[3%] font-['Plus_Jakarta_Sans'] text-gray-300">
                Experience the power of Lightstorm's innovative network solutions, designed to optimize your network infrastructure and empower your business growth. Benefit from automated network management, reduced latency, and enhanced scalability.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6 relative">
              <Card className="bg-[#262a31] rounded-[20px] border-[#262a31] text-white">
                <CardContent className="p-4 md:py-4 md:px-6">
                  <div className="flex items-start gap-3">
                    <PatternIcon2 className="w-6 h-6 md:w-8 md:h-8" />
                    <h3 className="text-lg md:text-[22px] font-semibold tracking-[0.66px] font-['Plus_Jakarta_Sans'] mb-2 md:mb-[10px]">
                      Polarin: Your Gateway to the Cloud
                    </h3>
                  </div>
                  <p className="text-sm md:text-[16px] leading-relaxed md:leading-[20.16px] font-extralight tracking-[0.48px] font-['Plus_Jakarta_Sans'] mb-2 md:mb-[10px] text-gray-300">
                    Seamlessly connect your data centers and cloud platforms with Polarin's high-performance, on-demand connectivity.
                    <br />
                    <br />
                    Benefit from low latency, reliability, and scalability.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#262a31] rounded-[20px] border-[#262a31] text-white mb-0 pb-0">
                <CardContent className="p-4 md:p-[1rem] md:px-6">
                  <div className="flex items-start gap-3">
                    <PatternIcon className="w-6 h-6 md:w-8 md:h-8" />
                    <h3 className="text-lg md:text-[22px] font-semibold tracking-[0.66px] font-['Plus_Jakarta_Sans'] mb-2 md:mb-[10px]">
                      Smartnet: Unleash seamless connectivity, scalability, and performance
                    </h3>
                  </div>
                  <p className="text-sm md:text-[16px] leading-relaxed md:leading-[20.16px] font-extralight tracking-[0.48px] font-['Plus_Jakarta_Sans'] mb-0 text-gray-300">
                    Experience seamless connectivity, scalability, and performance with Smartnet. Our enterprise-grade network solutions connect you to data centers worldwide, ensuring low latency, high reliability, and customization to meet your specific needs.
                  </p>
                </CardContent>
              </Card>
            </div>
            <Image
                src="/Flexible.png"
                alt="Solution Image"
                width={500}
                height={300}
                className="hidden md:block rounded-lg shadow-lg absolute bottom-0 right-0 object-cover w-[15rem] bottom-[2rem]"
              />
          </div>
        </div>
      </div>
    </div>
  );
}
