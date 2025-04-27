"use client"
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

type StoreNavigationProps = {
  currentStore: 'id' | 'sinchon' | 'wow'
}

export default function StoreNavigation({ currentStore }: StoreNavigationProps) {
  const stores = [
    { id: 'id', name: 'Acscent ID', path: '/acscent id' },
    { id: 'sinchon', name: 'Acscent Sinchon', path: '/acscent sinchon' },
    { id: 'wow', name: 'Acscent Wow', path: '/acscent wow' }
  ]

  return (
    <div className="max-w-4xl mx-auto mb-12">
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 bg-white/5 rounded-lg p-2">
        {stores.map((store) => (
          <Link 
            key={store.id}
            href={store.path}
            className="relative"
          >
            <div 
              className={`px-4 py-2 sm:px-6 sm:py-3 rounded-md transition-colors ${
                currentStore === store.id 
                  ? 'text-white font-medium' 
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              {store.name}
              {currentStore === store.id && (
                <motion.div
                  layoutId="storePill"
                  className="absolute inset-0 bg-white/10 rounded-md -z-10"
                  transition={{ duration: 0.3 }}
                />
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
} 