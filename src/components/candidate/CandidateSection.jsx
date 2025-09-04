import {technologiesData} from "../../data/technologiesData.js";
import {useForm} from "@mantine/form";
import {CustomInput} from "../form/CustomInput.jsx";
import {CustomMultiSelect} from "../form/CustomMultiSelect.jsx";
import {CustomTextarea} from "../form/CustomTextarea.jsx";
import {CustomToggle} from "../form/CustomToggle.jsx";
import { useNavigate } from 'react-router-dom';

export default function CandidateSection() {
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      'first-name': '',
      'last-name': '',
      github: '',
      email: '',
      technologies: [],
      message: '',
      agreeToPolicies: false,
    },
    // For Production
    // validate: {
    //   email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    //   'first-name': (value) => (value.trim().length > 0 ? null : 'First name is required'),
    //   agreeToPolicies: (value) => (value ? null : 'You must agree to the policies'),
    // },
  });

  const handleSubmit = (values) => {
    console.log('Form values:', values);
    navigate('/challenge');
  };

  return (
    <div className="isolate bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-40rem)] sm:w-288.75"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">Candidate Profile</h2>
        <p className="mt-2 text-lg/8 text-gray-400">Be honest — it will pay off. Listing your skills helps us avoid assigning tasks in areas you already know well.</p>
      </div>
      <form onSubmit={form.onSubmit(handleSubmit)} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <CustomInput
            label="First name"
            placeholder="How should we address you?"
            {...form.getInputProps('first-name')}
          />
          <CustomInput
            label="Last name"
            placeholder="Will be added to the name."
            {...form.getInputProps('last-name')}
          />
          <div className="sm:col-span-2">
            <CustomInput
              label="GitHub Profile"
              type="url"
              placeholder="github.com/your-username"
              {...form.getInputProps('github')}
            />
          </div>
          <div className="sm:col-span-2">
            <CustomInput
              label="Email address"
              type="email"
              placeholder="We’ll use this to contact you."
              {...form.getInputProps('email')}
            />
          </div>

          <div className="sm:col-span-2">
            <CustomMultiSelect
              label="Technologies"
              name="technologies"
              options={technologiesData}
              {...form.getInputProps('technologies')}
            />
          </div>

          <div className="sm:col-span-2">
            <CustomTextarea
              label="Share only what’s necessary"
              name="message"
              placeholder="Briefly describe your experience or focus areas."
              rows={4}
              {...form.getInputProps('message')}
            />
          </div>
          <div className="flex gap-x-4 sm:col-span-2">
            <CustomToggle
              name="agreeToPolicies"
              {...form.getInputProps('agreeToPolicies', { type: 'checkbox' })}
            >
              By continuing, you agree to our {' '}
              <a href="#" className="font-semibold whitespace-nowrap text-indigo-400 hover:text-indigo-300">
                privacy policy
              </a>
              .
            </CustomToggle>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  )
}
