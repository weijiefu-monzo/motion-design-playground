// Mock data for blocks - different content levels
export const mockData = {
  min: {
    // Block content strings
    heroTitle: {
      min: "Flexx Purchase.",
      normal: "Flexx Purchase. An award-winning 0% credit card.",
      max: "Flexx Purchase. An award-winning 0% credit card with exceptional benefits and features.",
    },
    heroDescription: {
      min: "0% interest credit card.",
      normal:
        "With 0% interest you can use again and again, and credit limits up to £10,000. It's a credit card with Monzo magic.",
      max: "With 0% interest you can use again and again, and credit limits up to £10,000. It's a credit card with Monzo magic. Enjoy flexible spending, instant notifications, and complete control over your finances with our award-winning app experience.",
    },
    heroLegalCopy: {
      min: "",
      normal:
        "Representative example: 39% APR (variable). Terms and conditions apply. Full details available on request.",
      max: "Representative example: 39% APR (variable). Terms and conditions apply. Full details available on request. Flexible spending, instant notifications, and complete control over your finances with our award-winning app experience.",
    },
    cardCarouselTitle: {
      min: "Not your average card",
      normal: "Not your average credit card",
      max: "Not your average credit card - Built for modern life",
    },
    featureHighlightsTitle: {
      min: "The best of Monzo",
      normal: "The best of Monzo in a credit card",
      max: "The best of Monzo in a credit card - All your favorite features",
    },
    featureHighlightsDescription: {
      min: "",
      normal:
        "Get instant notifications, real-time balance updates and freeze and defrost your card, all from the app.",
      max: "Get instant notifications, real-time balance updates and freeze and defrost your card, all from the app. Plus spending insights, budgeting tools, and complete control over your financial life.",
    },
    progressiveContentTitle: {
      min: "Get Started",
      normal: "Get Started with Monzo",
      max: "Get Started with Monzo - Your journey to better banking",
    },
    progressiveContentDescription: {
      min: "",
      normal:
        "Join millions of people who are already banking with Monzo. It takes just a few minutes to get started.",
      max: "Join millions of people who are already banking with Monzo. It takes just a few minutes to get started. Experience banking that works the way you do, with smart features and intuitive design.",
    },
    openAccountTitle: {
      min: "Open a free account",
      normal: "Open a free Monzo account and see if you are eligible",
      max: "Open a free Monzo account today and see if you are eligible for our premium features",
    },
    openAccountDescription: {
      min: "",
      normal: "Body copy in a couple of sentences.",
      max: "Body copy in a couple of sentences. Join millions who trust Monzo for their everyday banking needs with award-winning features.",
    },
    customerNumberAndTrustpilotScoreTitle: {
      min: "13 million customers",
      normal:
        "13 million personal and business customers have changed the way they bank",
      max: "13 million personal and business customers have changed the way they bank with Monzo",
    },
    linkedArticlesTitle: {
      min: "Other products",
      normal: "Other useful products",
      max: "Other useful products to help you manage your finances",
    },
    linkedArticlesDescription: {
      min: "",
      normal:
        "See how else Monzo can help with the big life steps and safety nets.",
      max: "See how else Monzo can help with the big life steps and safety nets. From loans to savings, we've got you covered.",
    },
    faqTitle: {
      min: "FAQ",
      normal: "Questions? Answers.",
      max: "Questions? We've got answers for you.",
    },
    cardCarouselCards: [
      {
        title: "No charges for missed payments",
        description: "7 days to catch up on missed payments.",
        buttonLabel: "Check eligibility",
        imageSrc: "/slide-1.png",
        inverse: false,
      },
      {
        title: "Flex payments",
        description: "Split payments over time with no extra fees.",
        buttonLabel: "Check eligibility",
        imageSrc: "/slide-2.png",
        inverse: true,
      },
    ],
    featureHighlightsCards: [
      {
        title: "No overseas fees",
        description: "Best exchange rates, no hidden fees abroad.",
        inverse: false,
        imageSrc: "/card-1.png",
      },
      {
        title: "Cashback rewards",
        description: "Earn cashback at top brands.",
        inverse: false,
        imageSrc: "/card-2.png",
      },
      {
        title: "Flex on the fly",
        description: "Add Flex to your digital wallet instantly.",
        inverse: false,
        imageSrc: "/card-3.png",
      },
    ],
    steps: [
      {
        index: "1",
        title: "Create Account",
        description: "Sign up with email and password.",
        imageSrc: "/step-1.png",
        imageAlt: "Account creation step",
      },
      {
        index: "2",
        title: "Verify Identity",
        description: "Quick identity verification process.",
        imageSrc: "/step-2.png",
        imageAlt: "Identity verification step",
      },
    ],
    articles: [
      {
        title: "Flex Build card",
        description: "Build your credit score over time.",
        imageSrc: "/article-1.png",
        imageAlt: "Getting started guide",
      },
      {
        title: "Monzo loans",
        description: "Loans with fair terms and no hidden fees.",
        imageSrc: "/article-2.png",
        imageAlt: "Advanced features",
      },
    ],
    questions: [
      {
        question: "Credit score impact?",
        answer: "We report your usage to credit agencies.",
        expanded: false,
      },
      {
        question: "Fees for Flex Build?",
        answer: "No monthly or annual fees.",
        expanded: false,
      },
    ],
  },
  normal: {
    // Block content strings
    heroTitle: {
      min: "Flexx Purchase.",
      normal: "Flexx Purchase. An award-winning 0% credit card.",
      max: "Flexx Purchase. An award-winning 0% credit card with exceptional benefits and features.",
    },
    heroDescription: {
      min: "0% interest credit card.",
      normal:
        "With 0% interest you can use again and again, and credit limits up to £10,000. It's a credit card with Monzo magic.",
      max: "With 0% interest you can use again and again, and credit limits up to £10,000. It's a credit card with Monzo magic. Enjoy flexible spending, instant notifications, and complete control over your finances with our award-winning app experience.",
    },
    heroLegalCopy: {
      min: "",
      normal:
        "Representative example: 39% APR (variable). Terms and conditions apply. Full details available on request.",
      max: "Representative example: 39% APR (variable). Terms and conditions apply. Full details available on request. Flexible spending, instant notifications, and complete control over your finances with our award-winning app experience.",
    },
    cardCarouselTitle: {
      min: "Not your average card",
      normal: "Not your average credit card",
      max: "Not your average credit card - Built for modern life",
    },
    featureHighlightsTitle: {
      min: "The best of Monzo",
      normal: "The best of Monzo in a credit card",
      max: "The best of Monzo in a credit card - All your favorite features",
    },
    featureHighlightsDescription: {
      min: "",
      normal:
        "Get instant notifications, real-time balance updates and freeze and defrost your card, all from the app.",
      max: "Get instant notifications, real-time balance updates and freeze and defrost your card, all from the app. Plus spending insights, budgeting tools, and complete control over your financial life.",
    },
    progressiveContentTitle: {
      min: "Get Started",
      normal: "Get Started with Monzo",
      max: "Get Started with Monzo - Your journey to better banking",
    },
    progressiveContentDescription: {
      min: "",
      normal:
        "Join millions of people who are already banking with Monzo. It takes just a few minutes to get started.",
      max: "Join millions of people who are already banking with Monzo. It takes just a few minutes to get started. Experience banking that works the way you do, with smart features and intuitive design.",
    },
    openAccountTitle: {
      min: "Open a free account",
      normal: "Open a free Monzo account and see if you are eligible",
      max: "Open a free Monzo account today and see if you are eligible for our premium features",
    },
    openAccountDescription: {
      min: "",
      normal: "Body copy in a couple of sentences.",
      max: "Body copy in a couple of sentences. Join millions who trust Monzo for their everyday banking needs with award-winning features.",
    },
    customerNumberAndTrustpilotScoreTitle: {
      min: "13 million customers",
      normal:
        "13 million personal and business customers have changed the way they bank",
      max: "13 million personal and business customers have changed the way they bank with Monzo",
    },
    linkedArticlesTitle: {
      min: "Other products",
      normal: "Other useful products",
      max: "Other useful products to help you manage your finances",
    },
    linkedArticlesDescription: {
      min: "",
      normal:
        "See how else Monzo can help with the big life steps and safety nets.",
      max: "See how else Monzo can help with the big life steps and safety nets. From loans to savings, we've got you covered.",
    },
    faqTitle: {
      min: "FAQ",
      normal: "Questions? Answers.",
      max: "Questions? We've got answers for you.",
    },
    cardCarouselCards: [
      {
        title: "No extra charges for missed payments",
        description:
          "We'll give you 7 days to catch up from the date of your missed payment. It's best to get back on track as soon as you can to protect your credit score.",
        buttonLabel: "Check you're eligible",
        imageSrc: "/slide-1.png",
        inverse: false,
      },
      {
        title: "Flex now or later",
        description:
          "Use Flex at checkout like other credit cards, or Flex recent transactions for more time to pay. Split payments into up to 3 installments over 3 months with no extra fees or interest.",
        buttonLabel: "Check you're eligible",
        imageSrc: "/slide-2.png",
        inverse: true,
      },
      {
        title: "Track your spending in real-time",
        description:
          "Get instant notifications every time you spend, so you always know where your money goes. Stay in control with detailed breakdowns and insights.",
        buttonLabel: "Learn more",
        imageSrc: "/card-1.png",
        inverse: false,
      },
      {
        title: "No hidden fees abroad",
        description:
          "Use your card anywhere in the world with no extra charges. We'll always give you the best exchange rate available. Unlike other cards that hide fees in complex terms and conditions, we believe in complete transparency.",
        buttonLabel: "See benefits",
        imageSrc: "/card-2.png",
        inverse: true,
      },
      {
        title: "Build credit score",
        description:
          "Manage your credit responsibly and watch your score improve over time.",
        buttonLabel: "Get started",
        imageSrc: "/card-3.png",
        inverse: false,
      },
    ],
    featureHighlightsCards: [
      {
        title: "No fees overseas",
        description:
          "Au revoir and adios to extra fees abroad. We'll charge you Mastercard's exchange rate and nothing else.",
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
          "Add Flex to your digital wallet and use in-store, online and in-app straightaway, with no need for a physical card.",
        inverse: false,
        imageSrc: "/card-3.png",
      },
      {
        title: "Advanced security",
        description:
          "Bank-grade security with biometric authentication and real-time fraud monitoring to protect your money.",
        inverse: false,
        imageSrc: "/card-4.png",
      },
    ],
    steps: [
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
    ],
    articles: [
      {
        title: "Flex Build. The credit-builder card that keeps getting better.",
        description:
          "Can help build your credit score over time. See if you're eligible with no impact on your credit score",
        imageSrc: "/article-1.png",
        imageAlt: "Getting started guide",
      },
      {
        title: "Get a loan that treats you right",
        description:
          "Ditch hidden fees, confusing terms and waiting around. Achieve your goals and feel in control with a Monzo loan.",
        imageSrc: "/article-2.png",
        imageAlt: "Advanced features",
      },
      {
        title: "Check in on credit score",
        description:
          "From having the chance to unlock better rates to managing swings in your credit score, you can stay on top of your credit health on Monzo.",
        imageSrc: "/article-3.png",
        imageAlt: "Security practices",
      },
    ],
    questions: [
      {
        question: "How does Flex Build impact my credit score?",
        answer:
          "We report how you use Flex Build to credit reference agencies. We tell them things like what your credit limit is, what your outstanding balance is and whether you've made your monthly payment on time.",
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
          "You can apply for Flex Build directly in the Monzo app. The application process takes just a few minutes and we'll give you an instant decision.",
        expanded: false,
      },
    ],
  },
  max: {
    // Block content strings
    heroTitle: {
      min: "Flexx Purchase.",
      normal: "Flexx Purchase. An award-winning 0% credit card.",
      max: "Flexx Purchase. An award-winning 0% credit card with exceptional benefits and features.",
    },
    heroDescription: {
      min: "0% interest credit card.",
      normal:
        "With 0% interest you can use again and again, and credit limits up to £10,000. It's a credit card with Monzo magic.",
      max: "With 0% interest you can use again and again, and credit limits up to £10,000. It's a credit card with Monzo magic. Enjoy flexible spending, instant notifications, and complete control over your finances with our award-winning app experience.",
    },
    heroLegalCopy: {
      min: "",
      normal:
        "Representative example: 39% APR (variable). Terms and conditions apply. Full details available on request.",
      max: "Representative example: 39% APR (variable). Terms and conditions apply. Full details available on request. Flexible spending, instant notifications, and complete control over your finances with our award-winning app experience.",
    },
    cardCarouselTitle: {
      min: "Not your average card",
      normal: "Not your average credit card",
      max: "Not your average credit card - Built for modern life",
    },
    featureHighlightsTitle: {
      min: "The best of Monzo",
      normal: "The best of Monzo in a credit card",
      max: "The best of Monzo in a credit card - All your favorite features",
    },
    featureHighlightsDescription: {
      min: "",
      normal:
        "Get instant notifications, real-time balance updates and freeze and defrost your card, all from the app.",
      max: "Get instant notifications, real-time balance updates and freeze and defrost your card, all from the app. Plus spending insights, budgeting tools, and complete control over your financial life.",
    },
    progressiveContentTitle: {
      min: "Get Started",
      normal: "Get Started with Monzo",
      max: "Get Started with Monzo - Your journey to better banking",
    },
    progressiveContentDescription: {
      min: "",
      normal:
        "Join millions of people who are already banking with Monzo. It takes just a few minutes to get started.",
      max: "Join millions of people who are already banking with Monzo. It takes just a few minutes to get started. Experience banking that works the way you do, with smart features and intuitive design.",
    },
    openAccountTitle: {
      min: "Open a free account",
      normal: "Open a free Monzo account and see if you are eligible",
      max: "Open a free Monzo account today and see if you are eligible for our premium features",
    },
    openAccountDescription: {
      min: "",
      normal: "Body copy in a couple of sentences.",
      max: "Body copy in a couple of sentences. Join millions who trust Monzo for their everyday banking needs with award-winning features.",
    },
    customerNumberAndTrustpilotScoreTitle: {
      min: "13 million customers",
      normal:
        "13 million personal and business customers have changed the way they bank",
      max: "13 million personal and business customers have changed the way they bank with Monzo",
    },
    linkedArticlesTitle: {
      min: "Other products",
      normal: "Other useful products",
      max: "Other useful products to help you manage your finances",
    },
    linkedArticlesDescription: {
      min: "",
      normal:
        "See how else Monzo can help with the big life steps and safety nets.",
      max: "See how else Monzo can help with the big life steps and safety nets. From loans to savings, we've got you covered.",
    },
    faqTitle: {
      min: "FAQ",
      normal: "Questions? Answers.",
      max: "Questions? We've got answers for you.",
    },
    cardCarouselCards: [
      {
        title:
          "No extra charges for missed payments - flexible grace period included",
        description:
          "Get 7 days to catch up on missed payments without penalties. This grace period protects your credit score and gives breathing room. Unlike traditional cards, no immediate late fees or credit bureau reports for occasional misses.",
        buttonLabel: "Check you're eligible",
        imageSrc: "/slide-1.png",
        inverse: false,
      },
      {
        title:
          "Flex now or later - revolutionary payment flexibility you control",
        description:
          "Use Flex at checkout or apply to recent transactions for more time. Split purchases into up to 3 installments over 3 months with no fees. Pay in full or spread out - complete control over your spending.",
        buttonLabel: "Check you're eligible",
        imageSrc: "/slide-2.png",
        inverse: true,
      },
      {
        title:
          "Track your spending in real-time with advanced analytics and insights",
        description:
          "Get instant notifications for every spend with breakdowns and insights. Smart tracker auto-categorizes purchases, shows trends, and finds savings opportunities. Personalized tips and budget alerts included.",
        buttonLabel: "Learn more",
        imageSrc: "/card-1.png",
        inverse: false,
      },
      {
        title: "No hidden fees abroad - transparent international spending",
        description:
          "Spend worldwide with no hidden fees. Mastercard's competitive exchange rates with full transparency. Zero foreign transaction fees, ATM fees, or currency conversion charges. See exact home currency costs before spending.",
        buttonLabel: "See benefits",
        imageSrc: "/card-2.png",
        inverse: true,
      },
      {
        title:
          "Build and improve your credit score with responsible credit management tools",
        description:
          "Build credit responsibly with our tools and watch your score improve. Get personalized advice, spending alerts, and educational content. We report all activity to credit bureaus to help establish positive credit history and track improvements.",
        buttonLabel: "Get started",
        imageSrc: "/card-3.png",
        inverse: false,
      },
      {
        title:
          "Mobile payments made simple - contactless and digital wallet integration",
        description:
          "Pay contactlessly with your phone/smartwatch via Apple Pay, Google Pay, or Samsung Pay. NFC technology with biometric authentication for fast, secure transactions. Tokenization protects your payment info.",
        buttonLabel: "Enable mobile payments",
        imageSrc: "/card-4.png",
        inverse: true,
      },
      {
        title:
          "Personalized financial insights and budgeting tools for better money management",
        description:
          "Get AI-powered financial insights based on your spending patterns. Set savings goals, track progress, and optimize spending with our budgeting tools. Receive personalized tips, weekly reports, and alerts to help you achieve your financial goals.",
        buttonLabel: "Explore insights",
        imageSrc: "/card-5.png",
        inverse: false,
      },
    ],
    featureHighlightsCards: [
      {
        title: "No fees overseas - guaranteed best exchange rates",
        description:
          "No extra fees abroad. We charge Mastercard's exchange rate only - no foreign transaction fees, no ATM fees, no hidden charges. Travel confidently knowing you're getting the best deal on every transaction.",
        inverse: false,
        imageSrc: "/card-1.png",
      },
      {
        title: "Straightforward cashback with instant rewards",
        description:
          "Earn cashback at top brands with your Flex card and get rewards in just a few days. Competitive rates at thousands of partners with direct payment to your account. Ts&Cs apply.",
        inverse: false,
        imageSrc: "/card-2.png",
      },
      {
        title:
          "Flex on the fly - instant card activation and digital wallet integration",
        description:
          "Add Flex to your digital wallet and use immediately in-store, online, and in-app. Instant activation after approval with full support for Apple Pay, Google Pay, and Samsung Pay - no physical card needed.",
        inverse: false,
        imageSrc: "/card-3.png",
      },
      {
        title: "Advanced security features protect your money",
        description:
          "Bank-grade security with biometric authentication, real-time fraud monitoring, and instant card freezing capabilities. Our advanced AI system detects suspicious activity before it happens, keeping your money safe 24/7.",
        inverse: false,
        imageSrc: "/card-4.png",
      },
      {
        title: "Mobile payments made simple - contactless and digital",
        description:
          "Pay with your phone or smartwatch anywhere contactless payments are accepted. Advanced NFC technology ensures fast, secure transactions with biometric authentication and tokenization.",
        inverse: false,
        imageSrc: "/card-5.png",
      },
      {
        title: "Personalized financial insights and smart budgeting",
        description:
          "Get AI-powered financial insights based on your spending patterns. Our smart budgeting tools help set realistic goals, track progress, and identify savings opportunities with personalized tips.",
        inverse: false,
        imageSrc: "/card-6.png",
      },
    ],
    steps: [
      {
        index: "1",
        title: "Create Your Account - Quick and Secure Setup",
        description:
          "Sign up with email and secure password. Our 5-minute onboarding includes instant verification for most customers. Choose biometric login, 2FA, or other security options to protect your account.",
        imageSrc: "/step-1.png",
        imageAlt: "Account creation step",
      },
      {
        index: "2",
        title: "Verify Your Identity - Fast and Private Verification",
        description:
          "Complete quick identity verification to secure your account. We use industry-leading technology while protecting your privacy. Most customers verify instantly via mobile app with no sensitive documents required.",
        imageSrc: "/step-2.png",
        imageAlt: "Identity verification step",
      },
      {
        index: "3",
        title: "Start Banking - Full Access to All Features",
        description:
          "You're all set! Access instant notifications, real-time balances, and financial insights. Set up direct debits, standing orders, and recurring payments easily. Start your new banking experience with Monzo.",
        imageSrc: "/step-3.png",
        imageAlt: "Start banking step",
      },
      {
        index: "4",
        title: "Explore Advanced Features - Customize Your Banking Experience",
        description:
          "Explore automated savings, investments, loans, and credit building. Set personalized budgets, track spending by category, and get tailored financial advice. Access our full suite of banking features.",
        imageSrc: "/step-4.png",
        imageAlt: "Advanced features step",
      },
    ],
    articles: [
      {
        title:
          "Flex Build. The credit-builder card that keeps getting better - designed for responsible credit building",
        description:
          "Build your credit score over time through responsible borrowing. Check eligibility with no credit impact. Features flexible payments, educational resources, and personalized credit insights to help improve your credit history.",
        imageSrc: "/article-1.png",
        imageAlt: "Getting started guide",
      },
      {
        title:
          "Get a loan that treats you right - fair rates, transparent terms, and fast approval",
        description:
          "Get loans with competitive rates, no hidden fees, and no prepayment penalties. Apply online for instant decisions with funds transferred directly to your account. Achieve your goals with transparent, fair terms.",
        imageSrc: "/article-2.png",
        imageAlt: "Advanced features",
      },
      {
        title:
          "Check in on credit score - comprehensive credit monitoring and improvement tools",
        description:
          "Stay on top of your credit health with real-time monitoring, score updates, and improvement advice. Understand what affects your score and get actionable tips to unlock better rates and manage credit swings.",
        imageSrc: "/article-3.png",
        imageAlt: "Security practices",
      },
      {
        title: "Investment options for growing your wealth",
        description:
          "Invest confidently with our curated platform featuring low-cost index funds, ETFs, and stocks. Includes educational resources, risk assessment, and automated rebalancing. Start with just £1 and grow your wealth with expert guidance.",
        imageSrc: "/article-4.png",
        imageAlt: "Investment guide",
      },
    ],
    questions: [
      {
        question:
          "How does Flex Build impact my credit score and what information is reported?",
        answer:
          "We report how you use Flex Build to credit reference agencies. We tell them things like what your credit limit is, what your outstanding balance is and whether you've made your monthly payment on time. This responsible reporting helps build your credit history over time. We also provide detailed insights into how your actions affect your credit score, with educational content to help you understand credit scoring and make informed financial decisions.",
        expanded: false,
      },
      {
        question:
          "What are the fees for Flex Build and are there any hidden costs?",
        answer:
          "There are no fees for using Flex Build. We don't charge any monthly fees, annual fees, or setup fees. The only cost is the interest on any outstanding balance, which is clearly shown before you make a purchase. Unlike traditional credit cards, we believe in complete transparency with no hidden fees or surprise charges. Your interest rate is fixed and clearly displayed, and you can pay off your balance at any time without penalties.",
        expanded: false,
      },
      {
        question:
          "How do I apply for Flex Build and what is the approval process?",
        answer:
          "You can apply for Flex Build directly in the Monzo app. The application process takes just a few minutes and we'll give you an instant decision. Our streamlined application asks for basic information and uses advanced algorithms to assess your eligibility. Most customers receive an instant approval, with the card activated and ready to use immediately. If additional verification is needed, we'll guide you through the process step by step.",
        expanded: false,
      },
      {
        question:
          "What security features protect my Flex Build card and account?",
        answer:
          "Your Flex Build card and account are protected by bank-grade security measures. This includes biometric authentication, real-time fraud monitoring, instant card freezing capabilities, and advanced AI systems that detect suspicious activity. We use tokenization technology to protect your payment information, and all transactions are monitored 24/7. In the unlikely event of fraud, we have comprehensive insurance coverage to protect you.",
        expanded: false,
      },
      {
        question:
          "Can I use Flex Build internationally and what are the costs?",
        answer:
          "Yes, you can use Flex Build anywhere in the world. We don't charge foreign transaction fees, ATM fees, or currency conversion fees. You'll always get the Mastercard exchange rate, which is consistently one of the best available. This makes Flex Build an excellent choice for international travel and spending, with complete transparency and no hidden costs abroad.",
        expanded: false,
      },
    ],
  },
};
