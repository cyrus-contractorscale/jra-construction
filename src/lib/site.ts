/**
 * Brand / contact constants for JRA Construction.
 * Values sourced from the live-site audit (report-audit/00-overview.md).
 */
export const site = {
  name:           "JRA Construction",
  directorName:   "Joe Allen",
  directorTitle:  "Director",
  directorPhoto:  "joe-allen.jpg",
  logoFile:       "jra-logo-blue.png",
  logoFileLight:  "jra-logo-white.png",
  phoneDisplay:   "(021) 276 9971",
  phoneHref:      "tel:+64212769971",
  email:          "joe@jraconstruction.co.nz",
  address:        "45 Brighton Road, Parnell, Auckland 1052",
  hours:          "7:30am - 5:30pm, Monday - Friday",
  bookingUrl:     process.env.NEXT_PUBLIC_BOOKING_URL || "/contact",
  copyrightYear:  "2026",
};
