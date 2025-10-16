"use client";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
const assetMap = [
  { "id": "hero-img", "url": "https://images.pexels.com/photos/34301930/pexels-photo-34301930.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "High-End Gaming PC Interior with Colorful RGB Lights" },
  { "id": "feature-img", "url": "https://images.pexels.com/photos/19867468/pexels-photo-19867468.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Wooden letter tiles spelling SaaS on rustic wood. Ideal for cloud computing and business concepts." },
  { "id": "pricing-img", "url": "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Top view of a diverse team collaborating in an office setting with laptops and tablets, promoting cooperation." },
  { "id": "contact-img", "url": "https://images.pexels.com/photos/2265488/pexels-photo-2265488.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A woman working at a desk using a laptop and smartphone, exemplifying remote work." }
];
export default function Home() {
  const navbarItems = [
    {name: "Home", id: "#"},
    {name: "About", id: "about"},
    {name: "Contact", id: "contact"},
    {name: "Pricing", id: "pricing"},
    {name: "Features", id: "features"},
  ];
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple navItems={navbarItems} />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Empower Your Business"
            description="Transform your workflow with cutting-edge SaaS solutions."
            imageSrc={assetMap.find(a => a.id === 'hero-img')?.url}
            buttons={[
              {text: "Get Started", href: "https://example.com"},
              {text: "Learn More", href: "about"},
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout
            bulletPoints={[
              {title: "Innovation", description: "We push boundaries."},
              {title: "Reliability", description: "Solutions you can trust."},
            ]}
            imageSrc={assetMap.find(a => a.id === 'feature-img')?.url}
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardThree
            features={[
              {id: "01", title: "Advanced Analytics", description: "Get detailed insights into your business performance.", imageSrc: assetMap.find(a => a.id === 'feature-img')?.url},
              {id: "02", title: "Customization", description: "Tailor the platform to your needs.", imageSrc: assetMap.find(a => a.id === 'feature-img')?.url},
            ]}
          />
        </div>
      </div>
      <div id="pricing" data-section="pricing" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <PricingCardOne
            title="Choose Your Plan"
            description="Select the perfect plan for your business."
            plans={[
              {id: "basic", price: "$29/mo", subtitle: "Great for small teams", features: ["10 projects", "24/7 Support"]},
              {id: "pro", price: "$49/mo", subtitle: "Ideal for growing businesses", features: ["Unlimited projects", "Personalized support"]},
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter
            tag="Stay Connected"
            title="Subscribe to Our Newsletter"
            description="Get the latest updates right to your inbox."
            onSubmit={(email) => console.log(email)}
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              { title: "Product", items: [{label: "Features", href: "features"}, {label: "Pricing", href: "pricing"}] },
              { title: "Company", items: [{label: "About", href: "about"}, {label: "Contact", href: "contact"}] },
            ]}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}