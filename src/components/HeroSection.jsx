import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        {/* ✅ Profile Circle Only (no badge, no text) */}
        <div className="flex justify-center items-center mb-6">
          <svg width="260" height="260" viewBox="0 0 260 260">
            <defs>
              <clipPath id="circleClip">
                <circle cx="130" cy="130" r="100" />
              </clipPath>
            </defs>

            <image
              href="https://i.postimg.cc/8PsqLNFj/portfolio-pic.jpg"
              x="30"
              y="30"
              width="200"
              height="200"
              clipPath="url(#circleClip)"
              preserveAspectRatio="xMidYMid slice"
            />
          </svg>
        </div>

        {/* 🧑‍💼 Headline and Text */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Rajakumas
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I engineer robust network systems that power reliable digital experiences. Specializing in network configuration and troubleshooting, 
            I bring 3+ years of expertise in technical support, Cisco networking, and AWS cloud infrastructure.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
