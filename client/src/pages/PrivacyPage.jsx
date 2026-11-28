
import { Link } from 'react-router-dom'
import Card from '../components/common/Card'

const sections = [
  {
    title: '1. Information We Collect',
    content: [
      {
        heading: 'Account Information',
        text: 'When you register for Evora, you may be asked to provide information such as your name, email address, and password. Service providers may also provide a business or service name and contact person details.',
      },
      {
        heading: 'Event and Service Information',
        text: 'Event organizers may submit event descriptions, dates, venues, ticket categories, supporting documents, and other information required to manage their events. Service providers may submit service descriptions, pricing information, and related business details.',
      },
      {
        heading: 'Ticket and Attendance Information',
        text: 'When you register for an event, information related to your registration, ticket, QR code, and attendance status may be recorded.',
      },
    ],
  },
  {
    title: '2. How We Use Your Information',
    content: [
      {
        text: 'Information provided to Evora may be used to:',
      },
      {
        list: [
          'Create and manage user accounts.',
          'Provide access to platform features based on account permissions.',
          'Process event registrations and ticket requests.',
          'Allow organizers to manage events and attendees.',
          'Allow service providers to manage their services and booking requests.',
          'Support event approval and administration processes.',
          'Communicate important account, event, and platform updates.',
          'Maintain platform functionality and help prevent misuse.',
        ],
      },
    ],
  },
  {
    title: '3. Student and Attendee Information',
    content: [
      {
        text: 'Students may use their university email addresses to register for Evora. Information associated with an attendee account may be used to manage event registrations, issue tickets, and verify attendance.',
      },
      {
        text: 'Event organizers may have access to relevant attendee information needed to manage their events. Access should be limited to information necessary for event-related activities.',
      },
    ],
  },
  {
    title: '4. Event Organizer Information',
    content: [
      {
        text: 'Student accounts may be used to organize events without requiring a separate organizer account. Organizers may submit event details and supporting documents for administrative review.',
      },
      {
        text: 'Information submitted by organizers may be used to review event requests, publish approved events, manage ticket categories, and support event operations.',
      },
    ],
  },
  {
    title: '5. Service Provider Information',
    content: [
      {
        text: 'Service providers may register using an eligible email address and provide information about their business, services, and contact details.',
      },
      {
        text: 'This information may be displayed to event organizers so they can discover services and submit booking requests. Providers are responsible for ensuring that the information they submit is accurate and appropriate.',
      },
    ],
  },
  {
    title: '6. Payment Information',
    content: [
      {
        text: 'Evora is intended to support online payments for paid event tickets through an external payment service provider such as PayHere.',
      },
      {
        text: 'Payment transactions may involve information required to identify the transaction and confirm its status. Payment card or banking credentials should be handled by the relevant payment provider according to its own privacy policy and security practices.',
      },
      {
        text: 'The exact payment information received, processed, or retained by Evora will depend on the final payment integration.',
      },
    ],
  },
  {
    title: '7. QR Tickets and Attendance Records',
    content: [
      {
        text: 'Evora may generate unique QR-based tickets for event registrations. These tickets are intended to support ticket verification and event entry.',
      },
      {
        text: 'When a ticket is scanned, the platform may record its validation status and attendance information. Authorized organizers and staff members may access the information needed to verify tickets for their events.',
      },
      {
        text: 'QR tickets should not be shared publicly or with unauthorized individuals, as another person may attempt to use them.',
      },
    ],
  },
  {
    title: '8. Information Sharing',
    content: [
      {
        text: 'Evora does not intend to make private account information publicly available. However, certain information may be shared when necessary to operate the platform, including:',
      },
      {
        list: [
          'With event organizers, when needed to manage registrations and event attendance.',
          'With authorized event staff, when needed to verify tickets and manage entry.',
          'With service providers, when necessary to respond to relevant booking requests.',
          'With external payment providers, when required to process or verify payments.',
          'With platform administrators, when needed to manage and maintain the platform.',
        ],
      },
      {
        text: 'Information may also need to be disclosed where required by applicable law or a valid legal request.',
      },
    ],
  },
  {
    title: '9. Data Security and Retention',
    content: [
      {
        text: 'We intend to use appropriate technical and organizational measures to protect information handled by Evora. However, no online platform or electronic storage system can be guaranteed to be completely secure.',
      },
      {
        text: 'Personal information should only be retained for as long as necessary for the purposes for which it was collected, including account management, event administration, transaction records, and applicable legal requirements.',
      },
      {
        text: 'Specific security controls, storage arrangements, and retention periods will depend on the final platform implementation.',
      },
    ],
  },
  {
    title: '10. Your Privacy Rights',
    content: [
      {
        text: 'Users may request information about the personal data associated with their accounts and may request corrections to inaccurate information.',
      },
      {
        text: 'Users who wish to request account deletion or the removal of personal information may contact the Evora platform administration team. Some information may need to be retained where required for legitimate operational or legal purposes.',
      },
      {
        text: 'The availability and handling of these requests will be subject to the platforms implemented procedures and applicable data protection laws.',
      },
    ],
  },
  {
    title: '11. Cookies and Technical Information',
    content: [
      {
        text: 'The platform may use cookies or similar technologies if required for functions such as maintaining sessions, remembering preferences, or supporting platform security.',
      },
      {
        text: 'Technical information, such as browser details, device information, and usage data, may also be processed where necessary for platform operation and troubleshooting. The exact technologies used will depend on the final implementation.',
      },
    ],
  },
  {
    title: '12. Changes to This Privacy Policy',
    content: [
      {
        text: 'This Privacy Policy may be updated as Evora develops, introduces new features, or changes its data-handling practices.',
      },
      {
        text: 'Updated versions will be made available through the platform. Users are encouraged to review this page periodically to stay informed about how their information is handled.',
      },
    ],
  },
]

function PrivacyPage() {
  return (
    <div className="min-h-dvh bg-background px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
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
        </header>

        {/* Page Heading */}
        <div className="mb-8 border-b border-border pb-6">
          <p className="mb-2 text-xs uppercase tracking-[0.25em] text-primary">
            EVORA // LEGAL
          </p>

          <h1 className="text-2xl font-bold tracking-wide sm:text-3xl">
            PRIVACY POLICY
          </h1>

          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-secondary-text">
            This Privacy Policy explains how Evora may collect, use, and
            handle information when you use our university event platform.
          </p>

          <p className="mt-3 text-xs text-secondary-text">
            Last updated: November 2026
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-6 p-5 sm:p-6">
          <h2 className="mb-3 text-lg font-bold text-primary">
            INTRODUCTION
          </h2>

          <p className="text-sm leading-7 text-secondary-text">
            Evora is a university event management platform designed to
            connect students, event organizers, and service providers.
            We recognize that personal information must be handled
            responsibly. This policy describes the intended information
            handling practices of the platform.
          </p>
        </Card>

        {/* Table of Contents */}
        <Card className="mb-6 p-5 sm:p-6">
          <h2 className="mb-4 text-lg font-bold">
            TABLE OF CONTENTS
          </h2>

          <nav>
            <ol className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {sections.map((section, index) => (
                <li key={section.title}>
                  <a
                    href={`#section-${index + 1}`}
                    className="text-sm text-secondary-text transition-colors hover:text-primary"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </Card>

        {/* Policy Sections */}
        <div className="space-y-4">
          {sections.map((section, index) => (
            <Card
              key={section.title}
              className="scroll-mt-6 p-5 sm:p-6"
            >
              <section id={`section-${index + 1}`}>
                <h2 className="mb-4 text-base font-bold text-primary sm:text-lg">
                  {section.title}
                </h2>

                <div className="space-y-4">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      {item.heading && (
                        <h3 className="mb-2 text-sm font-bold text-main-text">
                          {item.heading}
                        </h3>
                      )}

                      {item.text && (
                        <p className="text-sm leading-7 text-secondary-text">
                          {item.text}
                        </p>
                      )}

                      {item.list && (
                        <ul className="ml-5 list-disc space-y-2 text-sm leading-7 text-secondary-text">
                          {item.list.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-8 border-t border-border pt-6 text-center">
          <div className="mb-4 flex flex-wrap justify-center gap-6 text-sm">
            <Link
              to="/terms"
              className="text-secondary-text transition-colors hover:text-primary"
            >
              Terms and Conditions
            </Link>

            <Link
              to="/register"
              className="text-secondary-text transition-colors hover:text-primary"
            >
              Registration
            </Link>

            <Link
              to="/login"
              className="text-secondary-text transition-colors hover:text-primary"
            >
              Sign In
            </Link>
          </div>

          <p className="text-xs tracking-wider text-secondary-text">
            EVORA // UNIVERSITY EVENT PLATFORM
          </p>
        </footer>
      </div>
    </div>
  )
}

export default PrivacyPage
