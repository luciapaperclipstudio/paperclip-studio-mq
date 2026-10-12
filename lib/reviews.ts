// Client reviews and the Google rating, shared by the homepage, city pages and
// the Meta landing page so they never drift apart. Update the rating here when
// new Google reviews come in.

// Verbatim excerpts from the Google Business Profile reviews. These describe
// marketing work rather than websites, so the section is headed "about working
// with us" and never implies the web build itself has been reviewed.
export const GOOGLE_RATING = { score: '5.0', count: 3 }

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
    quote:
      'I have been working with Lucia for over 2 years now and I can confidently say she is the best I have dealt with in 20 years of business.',
    name: 'Daniel',
    source: 'Up-cycled',
  },
  {
    quote:
      'They came in with a clear plan on what to film, how to structure the content, and how to stay consistent without it feeling forced… The difference has been huge. Our reach increased by 217%.',
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
