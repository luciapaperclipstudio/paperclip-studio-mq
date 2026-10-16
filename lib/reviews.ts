// Client reviews and the Google rating, shared by the homepage, city pages and
// the Meta landing page so they never drift apart. Update the rating here when
// new Google reviews come in.

// Verbatim excerpts from the Google Business Profile reviews. Some describe
// marketing work rather than websites, so the section is headed "about working
// with us". Check the profile now and then: reviews get edited and the count
// below needs to match.
export const GOOGLE_RATING = { score: '5.0', count: 6 }

// `source` drives the attribution label, kept separate from the star display:
// Emma's is a client testimonial, not a Google review, so it is never labelled
// as one even though her card carries the same five stars.
export const REVIEWS = [
  {
    quote:
      'Lucia understood my vision from day one — translating my brand into a site that’s as elegant and considered as the trips themselves.',
    name: 'Emma',
    source: 'Eventure Escapes',
  },
  {
    // Google review, October 2026. The full text is quoted on the Khanya
    // case study (app/work/the-khanya-collective/page.tsx).
    quote:
      'What stood out most was Lucia’s willingness to genuinely understand the vision behind The Khanya Collective rather than simply build a website from a brief… I would highly recommend Lucia and Paperclip Studio to anyone looking for a creative partner.',
    name: 'Ash Moodley',
    source: 'The Khanya Collective · Google review',
  },
  {
    quote:
      'I have been working with Lucia for over 2 years now and I can confidently say she is the best I have dealt with in 20 years of business.',
    name: 'Daniel',
    source: 'Up-cycled',
  },
  {
    // Edited by George on Google in October 2026; this is the current text,
    // trimmed where Google truncates it for signed-out visitors. "[for]" fills
    // a word missing in the original.
    quote:
      'Paperclip Studio built the website [for] us. They finished it in record time: we went from first chat to a live site in 5 days. The site is beautifully designed and looks exactly like our brand. Communication was easy the whole way through…',
    name: 'George Kappatos',
    source: 'Google review',
  },
  {
    quote:
      'It finally feels like everything is working together instead of being all over the place… Overall just really solid, reliable service.',
    name: 'Eileen van der Schyff',
    source: 'Google review',
  },
]

// The grids show two rows of two. The first four are all about website work;
// the rest stay here so they can be swapped in.
export const FEATURED_REVIEWS = REVIEWS.slice(0, 4)
