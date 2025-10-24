import React from "react";
import { Accordion } from "./index";
import { H2, H3, H4, H5 } from "../Typography";

export default function AccordionDemo() {
  const handleToggle = (expanded: boolean, accordionName: string) => {
    console.log(`${accordionName} ${expanded ? "expanded" : "collapsed"}`);
  };

  return (
    <div
      style={{
        padding: "var(--spacing-large)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--spacing-large)",
        marginBottom: "var(--spacing-large)",
      }}
    >
      {/* Default Accordions */}
      <section>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--spacing-medium)",
            alignItems: "center",
          }}
        >
          <Accordion
            title="How does Flex Build impact my credit score?"
            details="We report how you use Flex Build to credit reference agencies. We tell them things like what your credit limit is, what your outstanding balance is and whether you've made your monthly payment on time. Staying within your credit limit and making your monthly payments on time will show other lenders that you can manage credit responsibly. Your credit record has lots of factors that make up your credit score. How Flex impacts your credit score will depend on your other factors, including whether you've used credit before."
            onToggle={(expanded) => handleToggle(expanded, "Credit Score")}
            data-qa="accordion-credit-score"
          />
          <Accordion
            title="What are the fees for Flex Build?"
            details="There are no fees for using Flex Build. We don't charge any monthly fees, annual fees, or setup fees. The only cost is the interest on any outstanding balance, which is clearly shown before you make a purchase."
            onToggle={(expanded) => handleToggle(expanded, "Fees")}
            data-qa="accordion-fees"
          />
          <Accordion
            title="How do I apply for Flex Build?"
            details="You can apply for Flex Build directly in the Monzo app. The application process takes just a few minutes and we'll give you an instant decision. You'll need to be 18 or over, have a UK address, and meet our eligibility criteria."
            onToggle={(expanded) => handleToggle(expanded, "Application")}
            data-qa="accordion-application"
          />
        </div>
      </section>
    </div>
  );
}
