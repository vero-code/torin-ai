'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import torinAiLogo from '../assets/torin-ai-logo.png';

export default function HeaderSection({ onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', onClick: () => onNavigate('hero') },
    { name: 'Features', onClick: () => onNavigate('features') },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
    { name: 'Sandbox', onClick: () => onNavigate('sandbox') },
  ]

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Torin AI</span>
            <img
              src={torinAiLogo}
              alt="Torin AI logo"
              className="h-8 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) =>
            item.onClick ? (
              <button
                key={item.name}
                onClick={item.onClick}
                className="text-sm font-semibold text-white hover:text-gray-300"
              >
                {item.name}
              </button>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold text-white hover:text-gray-300"
              >
                {item.name}
              </a>
            )
          )}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm/6 font-semibold text-white">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Torin AI</span>
              <img
                src={torinAiLogo}
                alt="Torin AI logo"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-200"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) =>
                  item.onClick ? (
                    <button
                      key={item.name}
                      onClick={item.onClick}
                      className="text-sm font-semibold text-white hover:text-gray-300"
                    >
                      {item.name}
                    </button>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-sm font-semibold text-white hover:text-gray-300"
                    >
                      {item.name}
                    </a>
                  )
                )}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
