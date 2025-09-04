export function CustomToggle({ name, children, checked = false, ...rest }) {
  const id = name;

  return (
    <div className="flex items-start gap-x-3 sm:col-span-2">
      <div className="flex h-6 items-center">
        <div className="group relative inline-flex w-8 shrink-0 cursor-pointer rounded-full bg-white/5 p-px ring-1 ring-inset ring-white/10 transition-colors duration-200 ease-in-out has-[:checked]:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
          <span
            aria-hidden="true"
            className="size-4 translate-x-0 rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-has-[:checked]:translate-x-3.5"
          />
          <input
            id={id}
            name={name}
            type="checkbox"
            checked={checked}
            {...rest}
            className="absolute inset-0 h-full w-full cursor-pointer appearance-none rounded-md"
          />
        </div>
      </div>

      <div className="text-sm/6">
        <label htmlFor={id} className="text-gray-400">
          {children}
        </label>
      </div>
    </div>
  );
}