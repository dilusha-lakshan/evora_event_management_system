
import { Link } from 'react-router-dom'

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: [
      'By accessing or using Evora, you agree to comply with these Terms and Conditions. If you do not agree with any part of these terms, you should not use the platform.',
      'These terms apply to all users, including students, event organizers, service providers and administrators.',
    ],
  },
  {
    title: '2. Account Registration and Responsibilities',
    content: [
      'Users must provide accurate, complete and up-to-date information when creating an account.',
      'Students must register using their official university student email address. Service providers may register using a valid personal or business email address.',
      'Users are responsible for maintaining the confidentiality of their account credentials and for activities carried out through their accounts.',
      'Users must not create accounts using false identities or impersonate other individuals or organizations.',
    ],
  },
  {
    title: '3. Student and Attendee Responsibilities',
    content: [
      'Students may browse available events, register for events and obtain tickets through Evora.',
      'Attendees must provide valid registration information and follow the rules and instructions established by event organizers.',
      'Attendees must present a valid ticket or QR code when required for event entry.',
      'Sharing, duplicating, selling or misusing another person’s ticket is prohibited.',
    ],
  },
  {
    title: '4. Event Organizer Responsibilities',
    content: [
      'Event organizers are responsible for providing accurate event descriptions, dates, venues, schedules, ticket categories and pricing information.',
      'Organizers must submit the required supporting documents when requesting approval for an event.',
      'Events must receive administrative approval before becoming publicly available on the platform.',
      'Organizers are responsible for managing their events, ticket categories, attendee information and authorized event staff.',
      'Organizers must ensure that ticket limits and event information are accurate and that changes are communicated appropriately.',
    ],
  },
  {
    title: '5. Service Provider Responsibilities',
    content: [
      'Service providers may create profiles and list services offered through the platform.',
      'Providers are responsible for the accuracy of their service descriptions, pricing, availability and contact information.',
      'Service providers must respond honestly to booking requests and fulfill accepted bookings according to the agreed arrangements.',
      'Evora does not guarantee the quality or successful delivery of services provided by independent service providers.',
    ],
  },
  {
    title: '6. Event Approval and Cancellation',
    content: [
      'All submitted events are subject to administrative review before public listing.',
      'Evora reserves the right to reject events that violate platform policies or contain misleading or inappropriate information.',
      'Organizers are responsible for updating attendees about event cancellations, postponements or significant changes.',
      'Evora may remove or restrict access to events that violate these terms.',
    ],
  },
  {
    title: '7. Tickets and QR Code Validation',
    content: [
      'Tickets are issued for specific events and may be subject to category-based quantity limits.',
      'Each ticket is associated with a unique QR code intended for authorized entry validation.',
      'A ticket may only be used once. After successful validation, it will be marked as used.',
      'Tickets may become invalid after the associated event ends or if they are cancelled or refunded.',
      'Users must not attempt to duplicate, alter, forge or misuse tickets or QR codes.',
    ],
  },
  {
    title: '8. Payments and Refunds',
    content: [
      'Paid tickets may be purchased through supported payment methods integrated into Evora.',
      'Payment processing is handled through third-party payment providers. Their terms and policies may also apply.',
      'A ticket should only be considered confirmed after successful payment verification.',
      'Refund eligibility and procedures may depend on the event organizer’s refund policy and applicable payment provider rules.',
      'Evora does not guarantee refunds for cancelled events or disputes between attendees and organizers unless explicitly stated in an applicable policy.',
    ],
  },
  {
    title: '9. Prohibited Activities',
    content: [
      'Users must not use Evora for unlawful activities, fraud, harassment, impersonation or distribution of misleading information.',
      'Users must not attempt to gain unauthorized access to accounts, administrative features or platform systems.',
      'Users must not interfere with platform operations, manipulate ticket validation or exploit technical vulnerabilities.',
      'Automated abuse, spam and unauthorized collection of user information are prohibited.',
    ],
  },
  {
    title: '10. Account Suspension and Termination',
    content: [
      'Evora may suspend or restrict accounts that violate these terms or pose a risk to other users or the platform.',
      'Users may request account closure through the appropriate platform process.',
      'Suspension or termination may affect access to events, tickets, bookings and other platform features.',
    ],
  },
  {
    title: '11. Platform Availability and Liability',
    content: [
      'Evora aims to provide a reliable platform but does not guarantee uninterrupted or error-free availability.',
      'Evora is not responsible for the independent actions, services or conduct of event organizers, attendees or service providers.',
      'Users are responsible for their decisions and interactions made through the platform, subject to applicable law.',
    ],
  },
  {
    title: '12. Changes to These Terms',
    content: [
      'Evora may update these Terms and Conditions when necessary.',
      'Updated terms will be published on the platform. Continued use of Evora after changes take effect indicates acceptance of the revised terms, where permitted by applicable law.',
    ],
  },
]

function TermsPage() {
  return (
    <div className="min-h-dvh bg-background text-main-text">

      {/* Header */}
      <header className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link
            to="/"
            className="text-2xl font-bold tracking-widest text-primary no-underline"
          >
            EVORA
          </Link>

          <Link
            to="/register"
            className="text-sm text-secondary-text transition-colors hover:text-primary"
          >
            Back to Registration
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-6 py-10">

        <div className="mb-10 border-b border-border pb-6">
          <p className="mb-2 text-xs font-bold tracking-[0.2em] text-primary">
            PLATFORM POLICIES
          </p>

          <h1 className="text-3xl font-bold sm:text-4xl">
            TERMS AND CONDITIONS
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-secondary-text">
            Please read these terms carefully before using the Evora
            university event management platform.
          </p>

          <p className="mt-4 text-xs text-secondary-text">
            Last updated: November 2026
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-8">
          <p className="text-sm leading-7 text-secondary-text">
            These Terms and Conditions govern your access to and use of
            Evora, a university event management platform that connects
            students, event organizers and service providers. By creating
            an account or using the platform, you agree to these terms.
          </p>
        </section>

        {/* Table of Contents */}
        <nav className="mb-10 border border-border bg-surface p-5">
          <h2 className="mb-4 text-sm font-bold text-primary">
            CONTENTS
          </h2>

          <div className="grid gap-2 sm:grid-cols-2">
            {sections.map((section, index) => (
              <a
                key={section.title}
                href={`#section-${index + 1}`}
                className="text-xs text-secondary-text transition-colors hover:text-primary"
              >
                {section.title}
              </a>
            ))}
          </div>
        </nav>

        {/* Terms Sections */}
        <div className="space-y-9">
          {sections.map((section, index) => (
            <section
              key={section.title}
              id={`section-${index + 1}`}
              className="scroll-mt-8"
            >
              <h2 className="mb-3 text-base font-bold text-primary">
                {section.title}
              </h2>

              <div className="space-y-3">
                {section.content.map((paragraph, paragraphIndex) => (
                  <p
                    key={paragraphIndex}
                    className="text-sm leading-7 text-secondary-text"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 border-t border-border pt-6">
          <p className="text-xs leading-6 text-secondary-text">
            If you have questions about these Terms and Conditions,
            please contact the Evora platform administration team.
          </p>

          <Link
            to="/register"
            className="mt-5 inline-block text-sm font-bold text-primary transition-colors hover:text-primary-hover"
          >
            ← Back to Registration
          </Link>
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-border py-5">
        <p className="text-center text-xs text-secondary-text">
          EVORA // UNIVERSITY EVENT PLATFORM
        </p>
      </footer>

    </div>
  )
}

export default TermsPage
