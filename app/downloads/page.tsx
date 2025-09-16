'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { supabase } from '@/lib/supabase'
import type { Download } from '@/types/database'

const platformIcons = {
  windows: (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
    </svg>
  ),
  mac: (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  ),
  linux: (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.561-3.369.027-2.152.237-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 00-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 00-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 00-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 00-.205.334 1.18 1.18 0 00-.09.4v.019c.002.089.008.179.02.267-.193-.067-.438-.135-.607-.202a1.635 1.635 0 01-.018-.2v-.02a1.772 1.772 0 01.15-.768c.082-.22.232-.406.43-.533a.985.985 0 01.594-.2zm-2.962.059h.036c.142 0 .27.048.399.135.146.129.264.288.344.465.09.199.14.4.153.667v.004c.007.134.006.2-.002.266v.08c-.03.007-.056.018-.083.024-.152.055-.274.135-.393.2.012-.09.013-.18.003-.267v-.015c-.012-.133-.04-.2-.082-.333a.613.613 0 00-.166-.267.248.248 0 00-.183-.064h-.021c-.071.006-.13.04-.186.132a.552.552 0 00-.12.27.944.944 0 00-.023.33v.015c.012.135.037.2.08.334.046.134.098.2.166.268.01.009.02.018.034.024-.07.057-.117.07-.176.136a.304.304 0 01-.131.068 2.62 2.62 0 01-.275-.402 1.772 1.772 0 01-.155-.667 1.759 1.759 0 01.08-.668 1.43 1.43 0 01.283-.535c.128-.133.26-.2.418-.2zm1.37 1.706c.332 0 .733.065 1.216.399.293.2.523.269 1.052.468h.003c.255.136.405.266.478.399v-.131a.571.571 0 01.016.47c-.123.31-.516.643-1.063.842v.002c-.268.135-.501.333-.775.465-.276.135-.588.292-1.012.267a1.139 1.139 0 01-.448-.067 3.566 3.566 0 01-.322-.198c-.195-.135-.363-.332-.612-.465v-.005h-.005c-.4-.246-.616-.512-.686-.71-.07-.268-.005-.47.193-.6.224-.135.38-.271.483-.336.104-.074.143-.102.176-.131h.002v-.003c.169-.202.436-.47.839-.601.139-.036.294-.065.466-.065zm2.8 2.142c.358 1.417 1.196 3.475 1.735 4.473.286.534.855 1.659 1.102 3.024.156-.005.33.018.513.064.646-1.671-.546-3.467-1.089-3.966-.22-.2-.232-.335-.123-.335.59.534 1.365 1.572 1.646 2.757.13.535.16 1.104.021 1.67.067.028.117.071.176.098.32-.2.666-.4.952-.533.285-.133.557-.267.77-.4a2.892 2.892 0 00-.257-.87 8.513 8.513 0 00-1.614-2.62c-.778-.934-1.756-1.834-2.832-2.757zm-3.184 6.742v.006c.151.134.177.333.178.468a2.41 2.41 0 01-.677 1.604c-.267.334-.746.869-1.428 1.337a.11.11 0 01-.078.035.632.632 0 01-.326-.132 1.115 1.115 0 01-.425-.469 1.572 1.572 0 01-.123-.466v-.012c-.09.077-.19.135-.305.135a.873.873 0 01-.335-.066.8.8 0 01-.4-.334c-.108-.2-.154-.468-.087-.737v-.002a.86.86 0 01.087-.2 1.79 1.79 0 01.785-.784c.286-.136.54-.202.743-.202.204 0 .38.103.54.27v.008c.16.134.283.267.368.334.096.07.143.07.171.07h.005a.928.928 0 01.323-.07h.017c.2 0 .355.068.421.2l.004.003v.006a.338.338 0 01-.002.041 1.077 1.077 0 00-.069.333c-.007.2.013.4.06.533.068.2.168.27.168.27z" />
    </svg>
  ),
}

export default function Downloads() {
  const [downloads, setDownloads] = useState<Download[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchDownloads = async () => {
      try {
        const { data, error: fetchError } = await supabase
          .from('downloads')
          .select('*')
          .order('created_at', { ascending: false })

        if (fetchError) throw fetchError

        setDownloads(data || [])
      } catch (err) {
        console.error('Error fetching downloads:', err)
        setError('Failed to load downloads. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchDownloads()
  }, [])

  const incrementDownloadCount = async (downloadId: string) => {
    try {
      const { error: updateError } = await supabase.rpc('increment_download_count', {
        download_id: downloadId,
      })

      if (updateError) throw updateError
    } catch (err) {
      console.error('Error incrementing download count:', err)
    }
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Downloads
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Download the HologramView viewer and tools for your platform
          </p>
        </div>

        {error && (
          <div className="mt-8 text-center text-red-600">{error}</div>
        )}

        {loading ? (
          <div className="mt-16 text-center">Loading downloads...</div>
        ) : (
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
            {downloads.map((download) => (
              <motion.div
                key={download.id}
                className="flex flex-col overflow-hidden rounded-lg shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="flex-1 bg-white p-6 sm:p-8">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      {platformIcons[download.platform as keyof typeof platformIcons]}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        {download.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Version {download.version}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-base text-gray-500">{download.description}</p>
                  </div>
                </div>
                <div className="bg-gray-50 px-6 py-4 sm:px-8">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      {download.download_count.toLocaleString()} downloads
                    </div>
                    <a
                      href={download.file_url}
                      onClick={() => incrementDownloadCount(download.id)}
                      className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* System Requirements */}
        <div className="mx-auto mt-32 max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            System Requirements
          </h2>
          <dl className="mt-10 space-y-8">
            <div>
              <dt className="text-base font-semibold leading-7 text-gray-900">
                Windows
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                <ul className="list-disc pl-5">
                  <li>Windows 10/11 64-bit</li>
                  <li>8GB RAM</li>
                  <li>Modern GPU with OpenGL 4.5+ support</li>
                  <li>2GB free disk space</li>
                </ul>
              </dd>
            </div>
            <div>
              <dt className="text-base font-semibold leading-7 text-gray-900">
                macOS
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                <ul className="list-disc pl-5">
                  <li>macOS 10.15+</li>
                  <li>8GB RAM</li>
                  <li>Metal-capable GPU</li>
                  <li>2GB free disk space</li>
                </ul>
              </dd>
            </div>
            <div>
              <dt className="text-base font-semibold leading-7 text-gray-900">
                Linux
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                <ul className="list-disc pl-5">
                  <li>Ubuntu 20.04+ or compatible distribution</li>
                  <li>8GB RAM</li>
                  <li>Modern GPU with OpenGL 4.5+ support</li>
                  <li>2GB free disk space</li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}
