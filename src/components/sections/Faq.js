import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';

const FAQS = [
  {
    title: 'First Question',
    content: () => (
      <>
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis,
        praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias,
        excepturi sint occaecati cupiditate non provident, similique sunt in culpa,
        qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
      </>
    ),
  },
  {
    title: 'Second Question',
    content: () => (
      <>
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis,
        praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias,
        excepturi sint occaecati cupiditate non provident, similique sunt in culpa,
        qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
      </>
    ),
  },
  {
    title: 'Third Question',
    content: () => (
      <>
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis,
        praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias,
        excepturi sint occaecati cupiditate non provident, similique sunt in culpa,
        qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
      </>
    ),
  },
  {
    title: 'Fourth Question',
    content: () => (
      <>
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis,
        praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias,
        excepturi sint occaecati cupiditate non provident, similique sunt in culpa,
        qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
      </>
    ),
  },
  {
    title: 'How do I place an order?',
    content: () => (
      <>
        Call us at XXX-XXX-XXXX during normal business hours, 9AM - 9PM EST or send us
        an email at: {` `}
        <ExternalLink href="mailto:youremail@ymail.com">youremail@ymail.com</ExternalLink>.
        We will get back to you as soon as possible. Thank you for your patience.
      </>
    ),
  }
];

const Faq = () => (
  <Section id="faq">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Frequently Asked Questions</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
