import { DocumentChartBarIcon } from '@heroicons/react/24/outline';
import {CpuChipIcon, PuzzlePieceIcon, ScaleIcon} from "@heroicons/react/20/solid/index.js";

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
  {
    name: 'Actionable Potential Profile',
    description: 'Receive a detailed, data-driven report for each candidate, visualizing their learning velocity, code quality, and problem-solving patterns for smarter hiring decisions.',
    icon: DocumentChartBarIcon,
  },
]

export default function FeatureSection() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-400">Hire Smarter</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">
            See Beyond the Resume
          </p>
          <p className="mt-6 text-lg/8 text-gray-300">
            Our platform provides a dynamic 'Potential Profile' for every candidate. Instead of a static list of past jobs, you get a clear view of their learning velocity, problem-solving skills, and adaptability in action.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-white">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-500">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-400">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
