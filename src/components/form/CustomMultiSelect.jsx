import { useState, useRef, useEffect, useId } from 'react';
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/20/solid';

export function CustomMultiSelect({
  label,
  name,
  options = [],
  value = [],
  onChange = () => {},
  placeholder = 'Select one or more from the list',
}) {
  const id = name;
  const listboxId = useId();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onDocClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  const toggle = () => setOpen((v) => !v);
  const toggleValue = (val) => {
    if (value.includes(val)) onChange(value.filter((v) => v !== val));
    else onChange([...value, val]);
  };
  const clearOne = (val) => onChange(value.filter((v) => v !== val));

  const onKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle();
    }
    if (e.key === 'Escape') setOpen(false);
    if (e.key === 'Backspace' && value.length && !open) {
      onChange(value.slice(0, -1));
    }
  };

  const selectedOptions = options.filter((o) => value.includes(o.value));

  return (
    <div className="sm:col-span-2">
      <label htmlFor={id} className="block text-sm/6 font-semibold text-white">
        {label}
      </label>

      <div className="mt-2.5 relative" ref={ref}>
        <div
          id={id}
          tabIndex={0}
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={listboxId}
          onClick={toggle}
          onKeyDown={onKeyDown}
          className="w-full text-left relative grid shrink-0 grid-cols-1 rounded-md bg-white/5 outline outline-1 -outline-offset-1 outline-white/10 focus:outline-none focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-500 cursor-pointer"
        >
          <div className="col-start-1 row-start-1 flex min-h-10 items-center gap-2 py-2 pr-8 pl-3.5">
            {selectedOptions.length === 0 ? (
              <span className="text-base leading-6 text-gray-400">{placeholder}</span>
            ) : (
              <div className="flex flex-wrap gap-1.5">
                {selectedOptions.map((opt) => (
                  <span
                    key={opt.value}
                    className="inline-flex items-center gap-1 rounded-md bg-indigo-500/50 px-2 py-0.5 text-base leading-6 text-white"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {opt.label}
                    <button
                      type="button"
                      onClick={() => clearOne(opt.value)}
                      className="hover:text-white/80"
                      aria-label={`Remove ${opt.label}`}
                    >
                      <XMarkIcon className="size-3.5" />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          <ChevronDownIcon
            aria-hidden="true"
            className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"
          />
        </div>

        {open && (
          <ul
            id={listboxId}
            role="listbox"
            aria-multiselectable="true"
            className="absolute left-0 top-full z-50 mt-2 max-h-56 w-full overflow-auto rounded-md bg-[#0f172a] outline outline-1 -outline-offset-1 outline-white/10 shadow-lg"
          >
            {options.map((opt) => {
              const checked = value.includes(opt.value);
              return (
                <li
                  key={opt.value}
                  role="option"
                  aria-selected={checked}
                  onClick={() => toggleValue(opt.value)}
                  className={`flex cursor-pointer items-center gap-2 px-3.5 py-2 text-base leading-6 text-white hover:bg-indigo-500/20 ${
                    checked ? 'bg-white/5' : ''
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    readOnly
                    className="size-4 rounded border-gray-600 bg-transparent text-indigo-500 focus:ring-indigo-500/40"
                  />
                  <span>{opt.label}</span>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <input type="hidden" name={name} value={JSON.stringify(value)} />
    </div>
  );
}
