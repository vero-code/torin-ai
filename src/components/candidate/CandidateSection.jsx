import { useNavigate } from 'react-router-dom';
import FormUI from "./FormUI.jsx";

export default function CandidateSection() {
  const navigate = useNavigate();

  const onFormSubmit = () => {
    navigate('/challenge');
  };

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
        />
      </div>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center bg-white p-5 rounded-lg shadow-md">
          <h1 className="text-5xl font-semibold tracking-tight text-balance text-black sm:text-7xl">
            Profile Settings
          </h1>
          <FormUI onFormSubmit={onFormSubmit} />
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="/" className="text-sm/6 font-semibold text-white">
              Go back <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}