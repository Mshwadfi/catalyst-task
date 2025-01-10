import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-neutral-100 border-t">
          <div className="max-w-[2520px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-y-6 md:gap-x-8">
              <div>
                <h3 className="font-semibold mb-4">Support</h3>
                <ul className="space-y-2 text-sm">
                  <li>Help Center</li>
                  <li>AirCover</li>
                  <li>Safety information</li>
                  <li>Supporting people with disabilities</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Community</h3>
                <ul className="space-y-2 text-sm">
                  <li>Airbnb.org: disaster relief housing</li>
                  <li>Combating discrimination</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Hosting</h3>
                <ul className="space-y-2 text-sm">
                  <li>Airbnb your home</li>
                  <li>AirCover for Hosts</li>
                  <li>Hosting resources</li>
                  <li>Community forum</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Airbnb</h3>
                <ul className="space-y-2 text-sm">
                  <li>Newsroom</li>
                  <li>New features</li>
                  <li>Careers</li>
                  <li>Investors</li>
                </ul>
              </div>
            </div>
            <div className="border-t mt-8 pt-8 text-sm text-neutral-600">
              © 2024 Airbnb Clone. No rights reserved - this is a demo!
            </div>
          </div>
        </footer>
      );
}

export default Footer