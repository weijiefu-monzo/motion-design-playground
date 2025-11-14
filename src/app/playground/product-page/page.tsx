"use client";
import { FeatureHighlights } from "@/blocks/FeatureHighlights";
import { Hero } from "@/blocks/Hero";
import { HowItWorks } from "@/blocks/HowItWorks";
import { GettingStarted } from "@/blocks/GettingStarted";
import { DownloadApp } from "@/blocks/DownloadApp";
import { Testimonials } from "@/blocks/Testimonials";
import { LinkedArticles } from "@/blocks/LinkedArticles";
import { FAQ } from "@/blocks/FAQ";
import { Header } from "@/blocks/Header";
import { ThemeToggle } from "@/components/ThemeToggle";
import { TestSpringConfig } from "@/components/TestSpringConfig";
import {
  ClickableCard,
  ClickableCardDemo,
  Accordion,
  AccordionDemo,
} from "@/components";
import { SpringConfigProvider } from "@/contexts/SpringConfigContext";
import { Leva } from "leva";
import { RemountIndicator } from "@/components/RemountIndicator";
import { RemountWrapper } from "@/components/RemountWrapper";
export default function ProductPage() {
  return (
    <SpringConfigProvider>
      <div style={{ position: "fixed", top: 0, right: 0, zIndex: 2000 }}>
        <Leva
          theme={{
            colors: {
              accent1: "#3B82F6", // Blue 500 - matches default highlight
              accent2: "#60A5FA", // Blue 400 - lighter shade for hover
              accent3: "#2563EB", // Blue 600 - darker shade
            },
          }}
        />
      </div>
      <div style={{ height: "100vh", overflowY: "scroll" }}>
        <RemountWrapper>
          <Header
            inverse={false}
            currentTab="Personal"
            onTabChange={(tab) => console.log(`Tab changed to: ${tab}`)}
            onSignUp={() => console.log("Sign up clicked")}
            onLogIn={() => console.log("Log in clicked")}
            onMenuToggle={() => console.log("Menu toggled")}
            data-qa="header"
          />
          <Hero
            title="Flexx Purchase.
An award-winning 0% credit card."
            chipLabel="Credit card"
            description="With 0% interest you can use again and again, and credit limits up to £10,000. It's a credit card with Monzo magic."
          />
          <HowItWorks
            title="Not your average credit card"
            cards={HowItWorksCards}
            data-qa="how-it-works-desktop"
          />
          <FeatureHighlights
            title="The best of Monzo in a credit card"
            description="Get instant notifications, real-time balance updates and freeze and defrost your card, all from the app. No hidden fees or confusing terms, just a flexible, transparent payment plan for every purchase. "
            buttonLabel="Open a free Monzo account"
            cards={FeatureHighlightsCards}
            data-qa="feature-highlights-desktop"
          />
          <GettingStarted
            image={true}
            title="Get Started with Monzo"
            description="Join millions of people who are already banking with Monzo. It takes just a few minutes to get started."
            buttonLabel="Open Account"
            steps={steps}
            data-qa="getting-started-default"
          />
          <FeatureHighlights
            title="Capitalise on your credit"
            description="Find out how credit has you covered for the big stuff. "
            buttonLabel="Open a free Monzo account"
            cards={FeatureHighlightsCards2}
            data-qa="feature-highlights-desktop"
          />
          <DownloadApp
            title="Open a free Monzo account and see if you are eligible"
            description="Body copy in a couple of sentences."
            buttonLabel="Open a free Monzo account"
            customerCount="13 million customers"
            appStoreRating="4.9"
            googlePlayRating="4.9"
            data-qa="download-app"
          />
          <Testimonials
            title="13 million personal and business customers have changed the way they bank"
            buttonLabel="Open a free Monzo account"
            trustScore="4.8"
            reviewCount="57k"
            data-qa="testimonials"
          />

          <LinkedArticles
            title="Other useful products"
            description="See how else Monzo can help with the big life steps and safety nets."
            buttonLabel="Open a free Monzo account"
            showDescription={true}
            showPageControl={true}
            cards={articles}
            onButtonClick={() => console.log("View all articles clicked")}
            onCardClick={(index) => console.log(`Card ${index} clicked`)}
            data-qa="linked-articles"
          />

          <FAQ
            title="Questions?Answers."
            questions={questions}
            onToggle={(index, expanded) =>
              console.log(`FAQ ${index} ${expanded ? "expanded" : "collapsed"}`)
            }
            data-qa="faq"
          />
          <ThemeToggle />
        </RemountWrapper>
      </div>
    </SpringConfigProvider>
  );
}
const HowItWorksCards = [
  {
    title: "No extra charges for missed payments",
    description:
      "We’ll give you 7 days to catch up from the date of your missed payment. It’s best to get back on track as soon as you can to protect your credit score.",
    buttonLabel: "Check you’re eligible",
    imageSrc: "/slide-1.png",
    inverse: false,
  },
  {
    title: "Flex now or later",
    description:
      "Use Flex at the checkout like other credit cards, or Flex transactions from the last two weeks for a bit more time to pay.",
    buttonLabel: "Check you’re eligible",
    imageSrc: "/slide-2.png",
    inverse: true,
  },
  {
    title: "Pay extra or early without fees",
    description:
      "Edit your monthly payment plans and pay extra or early to save some interest, with no fees.",
    buttonLabel: "Check you’re aligible",
    imageSrc: "/slide-1.png",
    inverse: false,
  },
  {
    title: "Pay in 3, interest free",
    description:
      "Pay in full on your next payment or in up to 3 months for bigger purchases, all at 0% interest.",
    buttonLabel: "Check you’re eligible",
    imageSrc: "/slide-2.png",
    inverse: true,
  },
];

const FeatureHighlightsCards = [
  {
    title: "No fees overseas",
    description:
      "Au revoir and adios to extra fees abroad. We’ll charge you Mastercard’s exchange rate and nothing else. ",
    inverse: false,
    imageSrc: "/card-1.png",
  },
  {
    title: "Straightforward cashback",
    description:
      "Earn cashback when you use your Flex card at top brands, and get your money in just a few days. Ts&Cs apply.",
    inverse: false,
    imageSrc: "/card-2.png",
  },
  {
    title: "Flex on the fly",
    description:
      "Add Flex to your digital wallet and use in-store, online and in-app straightaway, with no need for a physical card. ",
    inverse: false,
    imageSrc: "/card-3.png",
  },
  {
    title: "Total transparency",
    description:
      "It’s easy to see which purchases you’re still paying for, which you’ve paid off and which have been refunded.",
    inverse: false,
    imageSrc: "/card-4.png",
  },
];

const FeatureHighlightsCards2 = [
  {
    title: "Protect your purchases",
    description:
      "Section 75 protection means you could get your money back if you buy something between £100 and £30,000, and it’s faulty or doesn’t turn up. ",
    inverse: false,
    imageSrc: "/card-5.png",
  },
  {
    title: "Build a healthy credit score",
    description:
      "Using credit responsibly and paying back on time can help improve your credit score, as we report your repayment history to credit reference agencies.",
    inverse: false,
    imageSrc: "/card-6.png",
  },
  {
    title: "Wiggle room when you need it",
    description:
      "A credit card gives you a buffer in emergencies (like when the boiler goes on the blink) and a bit more time to budget for bigger buys, interest free.",
    inverse: false,
    imageSrc: "/card-7.png",
  },
];

const steps = [
  {
    index: "1",
    title: "Create Your Account",
    description:
      "Sign up with your email and create a secure password to get started with Monzo.",
    imageSrc: "/step-1.png",
    imageAlt: "Account creation step",
  },
  {
    index: "2",
    title: "Verify Your Identity",
    description:
      "Complete our quick identity verification process to keep your account secure.",
    imageSrc: "/step-2.png",
    imageAlt: "Identity verification step",
  },
  {
    index: "3",
    title: "Start Banking",
    description:
      "You're all set! Start using your Monzo account to manage your money.",
    imageSrc: "/step-3.png",
    imageAlt: "Start banking step",
  },
];

const articles = [
  {
    title: "Flex Build. The credit-builder card that keeps getting better.",
    description:
      "Can help build your credit score over time. See if you're eligible with no impact on your credit score",
    imageSrc: "/article-1.png",
    imageAlt: "Getting started guide",
    onClick: () => console.log("Getting started clicked"),
  },
  {
    title: "Get a loan that treats you right",
    description:
      "Ditch hidden fees, confusing terms and waiting around. Achieve your goals and feel in control with a Monzo loan.",
    imageSrc: "/article-2.png",
    imageAlt: "Advanced features",
    onClick: () => console.log("Advanced features clicked"),
  },
  {
    title: "Check in on credit score",
    description:
      "From having the chance to unlock better rates to managing swings in your credit score, you can stay on top of your credit health on Monzo.",
    imageSrc: "/article-3.png",
    imageAlt: "Security practices",
    onClick: () => console.log("Security clicked"),
  },
  {
    title: "Monzo Contents Insurance",
    description:
      "Fully flexible protection for your things, whether you're a renter or a homeowner.",
    imageSrc: "/article-4.png",
    imageAlt: "API documentation",
    onClick: () => console.log("API docs clicked"),
  },
  {
    title: "Community Support",
    description:
      "Join our community forum to get help and share your experiences.",
    imageSrc: "/card-5.png",
    imageAlt: "Community support",
    onClick: () => console.log("Community clicked"),
  },
];

const questions = [
  {
    question: "How does Flex Build impact my credit score?",
    answer:
      "We report how you use Flex Build to credit reference agencies. We tell them things like what your credit limit is, what your outstanding balance is and whether you've made your monthly payment on time. Staying within your credit limit and making your monthly payments on time will show other lenders that you can manage credit responsibly. Your credit record has lots of factors that make up your credit score. How Flex impacts your credit score will depend on your other factors, including whether you've used credit before.",
    expanded: false,
  },
  {
    question: "What are the fees for Flex Build?",
    answer:
      "There are no fees for using Flex Build. We don't charge any monthly fees, annual fees, or setup fees. The only cost is the interest on any outstanding balance, which is clearly shown before you make a purchase.",
    expanded: false,
  },
  {
    question: "How do I apply for Flex Build?",
    answer:
      "You can apply for Flex Build directly in the Monzo app. The application process takes just a few minutes and we'll give you an instant decision. You'll need to be 18 or over, have a UK address, and meet our eligibility criteria.",
    expanded: false,
  },
  {
    question: "What is the minimum age requirement?",
    answer: "You must be 18 or over to apply for Flex Build.",
    expanded: false,
  },
  {
    question: "Can I use Flex Build abroad?",
    answer:
      "Yes, you can use Flex Build abroad just like any other credit card. However, you may be charged foreign transaction fees for purchases made outside the UK. Check your terms and conditions for specific details about international usage.",
    expanded: false,
  },
];
