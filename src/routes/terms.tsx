import { createFileRoute } from "@tanstack/react-router"
import { Footer } from "@/components/global/footer"
import { Header } from "@/components/global/header"

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Terms of Service | StackFox" },
      { name: "description", content: "StackFox Terms of Service — the rules and guidelines for using our platform." },
    ],
  }),
})

function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="border-b border-zinc-200 bg-foreground py-16 text-white sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Terms of Service</h1>
            <p className="text-zinc-400">Last updated: March 21, 2026</p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-zinc max-w-none space-y-10 text-zinc-600">

              <div>
                <h2 className="text-2xl font-bold text-foreground">1. Acceptance of Terms</h2>
                <p className="mt-4">
                  By accessing or using StackFox (&quot;the Service&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the Service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground">2. Description of Service</h2>
                <p className="mt-4">
                  StackFox provides a backend infrastructure platform for Roblox game developers, including event tracking, data storage, and SDK tooling. We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground">3. Account Registration</h2>
                <p className="mt-4">
                  You must create an account to use most features of the Service. You are responsible for maintaining the confidentiality of your credentials and for all activity that occurs under your account. You must notify us immediately of any unauthorized use.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground">4. Acceptable Use</h2>
                <p className="mt-4">You agree not to use the Service to:</p>
                <ul className="mt-3 list-disc space-y-1 pl-6">
                  <li>Violate any applicable laws or regulations.</li>
                  <li>Transmit harmful, abusive, or illegal content.</li>
                  <li>Attempt to gain unauthorized access to our systems or other users' accounts.</li>
                  <li>Interfere with or disrupt the integrity or performance of the Service.</li>
                  <li>Use the Service to build a competing product or service.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground">5. Intellectual Property</h2>
                <p className="mt-4">
                  The Service, including its software, design, and content, is owned by StackFox and protected by intellectual property laws. You retain ownership of any data you submit through the Service. By using the Service, you grant StackFox a limited license to store and process your data solely to provide the Service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground">6. Fees and Payment</h2>
                <p className="mt-4">
                  Some features require a paid subscription. All fees are listed on our pricing page. Fees are non-refundable except as required by law or as explicitly stated in our refund policy. We reserve the right to change pricing with 30 days' notice.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground">7. Termination</h2>
                <p className="mt-4">
                  We reserve the right to suspend or terminate your account at our discretion if you violate these Terms. You may terminate your account at any time. Upon termination, your right to use the Service ceases immediately.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground">8. Disclaimer of Warranties</h2>
                <p className="mt-4">
                  The Service is provided &quot;as is&quot; without warranties of any kind, express or implied. We do not warrant that the Service will be uninterrupted, error-free, or free of viruses or other harmful components.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground">9. Limitation of Liability</h2>
                <p className="mt-4">
                  To the maximum extent permitted by law, StackFox shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground">10. Changes to Terms</h2>
                <p className="mt-4">
                  We may update these Terms at any time. Continued use of the Service after changes constitutes acceptance of the new Terms. We will notify you of material changes via email or a notice within the Service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground">11. Contact Us</h2>
                <p className="mt-4">
                  If you have questions about these Terms, please contact us at{" "}
                  <a href="mailto:legal@stackfox.dev" className="text-primary hover:underline">
                    legal@stackfox.dev
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
