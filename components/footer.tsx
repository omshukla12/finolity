import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <h3 className="mb-6 text-xl font-semibold text-white">Solutions</h3>
            <div className="grid gap-8 sm:grid-cols-2">
              <ul className="space-y-4 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Digital Strategy & Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Application Development and Management
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Cloud & Infrastructure
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Software-as-a-Service
                  </a>
                </li>
              </ul>
              <ul className="space-y-4 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Digital & Brand Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Generative AI & Business Intelligence
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Network Connectivity
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    ERP Solutions
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">Company</h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Why us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Partners & Certifications
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Reviews & Awards
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Case studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="mb-6">
              <Image
                src="https://placeholder.pics/svg/200x80/FFFFFF/FFFFFF/fcs"
                alt="Finolity Consultancy Services"
                width={200}
                height={80}
              />
            </div>
            <Button size="lg" className="w-full bg-red-600 text-white hover:bg-red-700">
              Schedule Consultation
            </Button>
          </div>
        </div>

        <div className="my-12">
          <div className="max-w-md">
            <input
              type="email"
              placeholder="Don't miss out updates"
              className="mb-4 w-full rounded bg-transparent px-4 py-3 text-white ring-1 ring-white/30 placeholder:text-gray-400 focus:outline-none focus:ring-2"
            />
            <div className="mb-4 flex items-start gap-2">
              <input type="checkbox" id="privacy" className="mt-1" />
              <label htmlFor="privacy" className="text-sm text-gray-400">
                I agree to the Privacy Policy and give my permission to process my personal data for the purposes
                specified in the Privacy Policy.
              </label>
            </div>
            <Button className="bg-red-600 text-white hover:bg-red-700">
              Send <span className="ml-2">→</span>
            </Button>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-8 border-t border-white/10 pt-8">
          <div className="flex items-center gap-8">
            <div>
              <div className="text-sm text-gray-400">REVIEWED ON</div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white">Clutch</span>
                <div className="flex text-red-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              <div className="text-sm text-gray-400">2K+ REVIEWS</div>
            </div>
            <div className="text-gray-400">
              <p>P-7 Street, Yamuna Nagar, Haryana 135001</p>
            </div>
            <div className="text-gray-400">
              <p>T: 0612-2500-971</p>
              <p>E: contact@finolity.com</p>
            </div>
          </div>

          <div className="flex gap-6 text-gray-400">
            <a href="#" className="hover:text-white">
              LinkedIn
            </a>
            <a href="#" className="hover:text-white">
              Github
            </a>
            <a href="#" className="hover:text-white">
              Twitter
            </a>
            <a href="#" className="hover:text-white">
              Facebook
            </a>
            <a href="#" className="hover:text-white">
              Brandfetch
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

