# Shoaib Online Quran Academy — TODO

## Public academy experience
- [x] The public website uses **SHOAIB ONLINE QURAN ACADEMY** and the tagline **Learn Quran Online From Qualified Quran Teachers.** Old academy naming is not used in the new public UI.
- [x] The homepage includes a premium Islamic hero, academy branding, responsive navigation, Start Free Trial and Enroll Now actions, courses, academy story, teacher introduction, female teacher availability, why choose us, learning features, testimonials, pricing, FAQ, contact, and footer.
- [x] The visual system uses premium emerald green, dark Islamic green, elegant gold, white/cream surfaces, subtle geometric patterns, editorial typography, smooth scrolling, hover states, restrained motion, and responsive layouts.

## Courses, teachers, pricing
- [x] Public course content includes Noorani Qaida, Nazra Quran, Quran Translation, Hifz-ul-Quran, Islamic Studies, Tajweed-ul-Quran, and Basic Islamic Education with descriptions, learning outcomes, duration/age guidance, detail links, enrollment, and free-trial actions.
- [x] The main teacher area contains exactly one male teacher profile slot and does not invent a face, name, qualification, or experience when the supplied photo is absent.
- [x] The female teacher area remains available without individual names or personal photographs and explains that female students may request a female teacher through admission.
- [x] Pricing shows Basic $30/month, Standard $45/month, and Premium $60/month with editable-looking feature lists and no invented payment integration.

## Forms and contact
- [x] Online admission captures student name, parent/guardian, email, WhatsApp number, country, age, course, class timing, teacher preference, and additional message.
- [x] Free trial captures contact details, course, timing, and teacher preference.
- [x] Registration and contact forms have required-field validation, submit states, and success messaging.
- [x] WhatsApp actions target the supplied contact `+923176262240` and do not invent other contact details.
- [x] `/api/inquiries` accepts valid form submissions and returns a success response; the server retains the request shape for a future managed-database table.

## Routes, accessibility, and handoff
- [x] Route manifest covers Home, About Us, Our Courses, Course Details, Our Teacher, Female Teachers, Why Choose Us, Pricing Plans, Free Trial, Online Admission, Student Registration, Contact Us, FAQ, Privacy, Terms, course detail pattern, and Admin.
- [x] Public pages have readable heading hierarchy, accessible labels, focus-visible controls, responsive navigation, and mobile-friendly forms/cards.
- [x] Admin-ready dashboard presents overview stats and management areas for content, courses, teacher profile, students, admissions, trials, testimonials, pricing, messages, WhatsApp, and settings without claiming an auth/data workflow that is not wired.
- [ ] Add the user’s actual teacher portrait to the main teacher slot when the image is provided.
- [ ] Connect admin surfaces to durable database tables after the content model and roles are approved; do not delete or reset existing student data.
