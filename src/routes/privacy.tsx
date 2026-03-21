import { createFileRoute } from "@tanstack/react-router"
import { Footer } from "@/components/global/footer"
import { Header } from "@/components/global/header"

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy | StackFox" },
      { name: "description", content: "StackFox Privacy Policy — how we collect, use, and protect your data." },
    ],
  }),
})

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="border-b border-zinc-200 bg-foreground py-16 text-white sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Privacy Policy</h1>
            <p className="text-zinc-400">Last updated: March 21, 2026</p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-zinc max-w-none space-y-10 text-zinc-600">

              <div>
                <h2 className="text-2xl font-bold text-foreground">1. Introduction</h2>
                <p className="mt-4">
                  StackFox (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground">2. Information We Collect</h2>
                <p className="mt-4">We may collect the following types of information:</p>
                <ul className="mt-3 list-disc space-y-1 pl-6">
                  <li><strong>Account information:</strong> email address, username, and password when you register.</li>
                  <li><strong>Usage data:</strong> API calls, event payloads, and record data you send through the StackFox SDK.</li>
                  <li><strong>Technical data:</strong> IP addresses, browser type, and device information for security and diagnostics.</li>
                  <li><strong>Payment information:</strong> processed securely through our payment provider — we do not store card details.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground">3. How We Use Your Information</h2>
                <p className="mt-4">We use the information we collect to:</p>
                <ul className="mt-3 list-disc space-y-1 pl-6">
                  <li>Provide, operate, and maintain the StackFox platform.</li>
                  <li>Process transactions and send related billing information.</li>
                  <li>Respond to comments, questions, and support requests.</li>
                  <li>Monitor usage to detect and prevent abuse.</li>
                  <li>Send product updates and service notifications (you may opt out).</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground">4. Data Sharing</h2>
                <p className="mt-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share data with trusted service providers who assist in operating our platform, subject to confidentiality agreements. We may also disclose information if required by law or to protect the rights and safety of our users.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground">5. Data Retention</h2>
                <p className="mt-4">
                  We retain your data for as long as your account is active or as needed to provide services. You may request deletion of your account and associated data at any time by contacting us.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground">6. Security</h2>
                <p className="mt-4">
                  We implement industry-standard security measures to protect your data, including encryption in transit and at rest. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground">7. Your Rights</h2>
                <p className="mt-4">
                  Depending on your jurisdiction, you may have rights to access, correct, or delete your personal data. To exercise these rights, contact us at{" "}
                  <a href="mailto:privacy@stackfox.dev" className="text-primary hover:underline">
                    privacy@stackfox.dev
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground">8. Changes to This Policy</h2>
                <p className="mt-4">
                  We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page with an updated date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground">9. Contact Us</h2>
                <p className="mt-4">
                  If you have questions about this Privacy Policy, please contact us at{" "}
                  <a href="mailto:privacy@stackfox.dev" className="text-primary hover:underline">
                    privacy@stackfox.dev
                  </a>
                  .
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
