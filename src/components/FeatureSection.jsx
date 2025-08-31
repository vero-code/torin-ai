import { PuzzlePieceIcon, CpuChipIcon, ScaleIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Dynamic Skill Challenges',
    description:
      'Candidates prove their potential by solving real-world problems in unfamiliar technologies, demonstrating their ability to learn and adapt on the fly.',
    icon: PuzzlePieceIcon,
  },
  {
    name: 'AI-Powered Insight',
    description: 'Our platform analyzes the candidate\'s interaction with the integrated AI, giving you a unique window into their thought process and problem-solving strategy.',
    icon: CpuChipIcon,
  },
  {
    name: 'Unbiased by Design',
    description: 'By removing resumes from the equation, we reduce conscious and unconscious bias, ensuring that every talented individual gets a fair chance to shine.',
    icon: ScaleIcon,
  },
]

export default function FeatureSection() {
  return (
    <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-400">Hire Smarter</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                See Beyond the Resume
              </p>
              <p className="mt-6 text-lg/8 text-gray-300">
                Our platform provides a dynamic 'Potential Profile' for every candidate. Instead of a static list of past jobs, you get a clear view of their learning velocity, problem-solving skills, and adaptability in action.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-400 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-400" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
            width={2432}
            height={1442}
            className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-228 md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}
