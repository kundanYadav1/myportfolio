const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kundan Prasad Yadav",
    url: "https://kundanprasadyadav.com.np",
    image: "https://github.com/kundanYadav1.png",
    sameAs: [
      "https://www.linkedin.com/in/kundan-prasad-yadav-9a7328192/",
      "https://github.com/kundanYadav1",
    ],
    jobTitle: "MERN Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance Portfolio",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Kundan Prasad Yadav Portfolio",
    url: "https://kundanprasadyadav.com.np",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://kundanprasadyadav.com.np/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is Kundan Prasad Yadav?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kundan Prasad Yadav is a B.Tech Computer Engineering graduate from NIMS University Jaipur and a MERN Stack developer based in Kathmandu, Nepal.",
        },
      },
      {
        "@type": "Question",
        name: "What services does Kundan offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "He builds modern websites, web applications, and freelance development solutions using React, Next.js, Node.js, MongoDB, and SEO-friendly practices.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Kundan based?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kundan is based in Kathmandu, Nepal, and works with clients locally and remotely.",
        },
      },
    ],
  },
];

export default function Head() {
  return (
    <>
      <meta name="msvalidate.01" content="6B5176165543C9FDD35835E961986347" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData, null, 2) }}
      />
    </>
  );
}
