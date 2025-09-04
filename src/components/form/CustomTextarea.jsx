export function CustomTextarea({ label, name, rows = 4, placeholder, ...rest }) {
  const id = name;

  return (
    <div className="sm:col-span-2">
      <label htmlFor={id} className="block text-sm/6 font-semibold text-white">
        {label}
      </label>
      <div className="mt-2.5">
        <textarea
          id={id}
          name={name}
          rows={rows}
          placeholder={placeholder}
          {...rest}
          className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
        />
      </div>
    </div>
  );
}