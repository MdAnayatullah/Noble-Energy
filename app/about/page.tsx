import AboutSection from "@/components/about/about-section";
import LeadershipSection from "@/components/home/leadership-section";
import WhyChooseUs from "@/components/home/why-choose-us";

export default function AboutPage() {
    return (
        <div className="bg-background min-h-screen">
            <AboutSection />
            <LeadershipSection />
            <WhyChooseUs />
        </div>
    );
}