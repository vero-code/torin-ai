// src/components/employer/ContactCandidateModal.jsx
import React, { useEffect, useState } from 'react';

export default function ContactCandidateModal({ isOpen, onClose, candidate }) {
  const [hasUnlocked, setHasUnlocked] = useState(false);

  const handleUnlockContact = () => {
    console.log(`Unblocking candidate contacts ${candidate.id}`);
    setHasUnlocked(true);
  };

  const handleSendInvitation = () => {
    console.log(`Sending an invitation to a candidate ${candidate.name} (${candidate.email})`);
    alert(`Invitation sent ${candidate.name}!`);
    onClose();
  };

  const handleClose = () => {
    setHasUnlocked(false);
    onClose();
  };

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e) => e.key === 'Escape' && handleClose();
    document.addEventListener('keydown', onKey);

    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
      setHasUnlocked(false);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-[1px] transition-opacity"
        aria-hidden="true"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div
          className="relative w-full max-w-lg overflow-hidden rounded-lg bg-white text-left shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 6h.01M12 20h9a2 2 0 002-2V6a2 2 0 00-2-2H3a2 2 0 00-2 2v12a2 2 0 002 2h9z" />
                </svg>
              </div>

              <div className="mt-3 sm:mt-0 sm:ml-4">
                <h3 id="modal-title" className="text-lg font-medium text-gray-900">
                  Contact the Candidate #{candidate.id}
                </h3>

                <div className="mt-2">
                  {!hasUnlocked ? (
                    <p className="text-sm text-gray-600">
                      To access the candidate&apos;s full contact details (name, email, GitHub) and send an invitation, please unlock the profile.
                    </p>
                  ) : (
                    <div className="space-y-1">
                      <p className="text-sm text-gray-700 font-semibold">Contact details:</p>
                      <p className="text-base font-medium text-gray-900">Name: {candidate.name}</p>
                      <p className="text-base font-medium text-gray-900">Email: {candidate.email}</p>
                      <p className="text-base font-medium text-gray-900">
                        GitHub:{' '}
                        <a href={candidate.github} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 underline">
                          {candidate.github}
                        </a>
                      </p>
                      <p className="text-sm text-gray-500 mt-3">Now you can send an official invitation.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse">
            {!hasUnlocked ? (
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={handleUnlockContact}
              >
                Unblock contacts
              </button>
            ) : (
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={handleSendInvitation}
              >
                Send invitation
              </button>
            )}
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
              onClick={handleClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
