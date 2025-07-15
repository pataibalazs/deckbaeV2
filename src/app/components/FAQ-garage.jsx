import Link from "next/link";

const faqs = [
  {
    question: "Mennyi idő a garázs telepítése?",
    answer: "A legtöbb garázs 4-8 hét alatt teljes egészében telepíthető.",
  },
  {
    question: "Milyen engedélyek szükségesek a garázshoz?",
    answer:
      "A Deckbae garázsai mobil épületként telepíthetők (pl.: mobilgarázs), ezért nem engedélykötelesek a legtöbb esetben. Érdemes azonban a helyi szabályozásokról előzetesen tájékozódni. Vannak esetek mikor engedély is szükséges.",
  },
  {
    question: "Mit tartalmaznak az árak?",
    answer:
      "Az árak tartalmazzák a garázs anyagköltségét, gyártását, szállítását, valamint a helyszíni szerelést, továbbá 27% áfát is.",
  },
];

export default function FAQGarage() {
  return (
    <ul className=" max-w-70 xs:max-w-96 sm:max-w-lg  md:max-w-xl lg:max-w-3xl mx-auto space-y-5 w-full my-10">
      <div className="mx-auto max-w-2xl text-center mb-10">
        <p className="mt-2 text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl sm:text-balance">
          Gyakori kérdések
        </p>
        <p className="mt-6 text-lg/8 text-gray-600">
          Van olyan kérdésed, amely nem szerepel a listában? Írj nekünk a{" "}
          <Link
            href="/contact"
            className="text-red-600 font-medium hover:underline"
          >
            Kontakt
          </Link>{" "}
          oldalon.
        </p>
      </div>
      {faqs.map((faq, index) => (
        <li key={index} className="shadow-md">
          <details className="group w-full rounded-md">
            <summary className="flex items-start gap-3 px-4 sm:px-6 py-3 sm:py-4 font-medium marker:content-none cursor-pointer w-full bg-red-500 rounded-md group-open:rounded-b-none">
              <svg
                className="w-5 h-5 transition-transform duration-200 group-open:rotate-90 flex-shrink-0 mt-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  stroke="#ffffff"
                  strokeWidth="1"
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                ></path>
              </svg>
              <span className="text-lg font-medium text-white">
                {faq.question}
              </span>
            </summary>
            <article className="px-4 pb-4 pt-2 bg-red-500 rounded-b-md">
              <p className="text-white">
                {typeof faq.answer === "string" ? faq.answer : faq.answer}
              </p>
            </article>
          </details>
        </li>
      ))}
    </ul>
  );
}
