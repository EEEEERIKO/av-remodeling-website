"use client";

import { useEffect, useMemo, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const PAGE_SIZE = 10;

type ContactRecord = {
  id?: string | number;
  full_name?: string;
  phone?: string;
  email?: string;
  address?: string;
  areas?: string | string[];
  timeline?: string;
  property_type?: string;
  budget?: string;
  description?: string;
  referral?: string;
  created_at?: string;
};

function Info({
  label,
  value,
}: {
  label: string;
  value?: string;
}) {
  return (
    <div>
      <p className="text-xs uppercase text-gray-500">
        {label}
      </p>

      <p className="font-medium">
        {value || "—"}
      </p>
    </div>
  );
}

export default function DataPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [contacts, setContacts] = useState<ContactRecord[]>([]);
  const [selectedContact, setSelectedContact] = useState<ContactRecord | null>(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasMore, setHasMore] = useState(false);
  const [total, setTotal] = useState(0);

  const canLoadMore = hasMore && !loading;

  const loadContacts = async (nextPage = 1) => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        `/api/contact?page=${nextPage}&limit=${PAGE_SIZE}`,
        {
            credentials: "include",
        }
    );
      const payload = await res.json();

      if (!res.ok || !payload?.success) {
        throw new Error(payload?.message || "Unable to load contacts.");
      }

      setContacts((current) => (nextPage === 1 ? payload.data || [] : [...current, ...(payload.data || [])]));
      setHasMore(Boolean(payload.hasMore));
      setTotal(Number(payload.total || 0));
      setPage(nextPage);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to load contacts.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {

  const checkSession = async () => {

    try {

      const res = await fetch("/api/auth/me", {
            credentials: "include",
        });


      if(res.ok){

        setIsAuthenticated(true);

      }

    } catch(error){

      console.error(error);

    }

  };


  checkSession();

}, []);

useEffect(() => {
  if (isAuthenticated) {
    void loadContacts(1);
  }
}, [isAuthenticated]);

const handleLogin = async (event: React.FormEvent) => {
  event.preventDefault();

  setError("");
  setIsLoggingIn(true);

  try {
    const res = await fetch("/api/login", {
        method: "POST",
        credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const json = await res.json();

    if (!res.ok || !json.success) {
      setError(json.message || "Login failed.");
      return;
    }

    setIsAuthenticated(true);

  } catch {
    setError("Unable to login.");
  } finally {
    setIsLoggingIn(false);
  }
};


const handleLogout = async () => {
  await fetch("/api/logout", {
  method: "POST",
  credentials: "include",
});

  setIsAuthenticated(false);
  setContacts([]);
};


const summary = useMemo(() => {
    const loadedCount = contacts.length;
    return `${loadedCount} of ${total} contacts loaded`;
  }, [contacts.length, total]);

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-surface px-6 py-16 text-on-surface">
        <div className="mx-auto flex max-w-md flex-col rounded-3xl border border-outline-variant/40 bg-surface-container-low p-8 shadow-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-secondary">Protected area</p>
          <h1 className="mb-6 font-headline text-3xl font-bold text-primary">Client data access</h1>
          <p className="mb-8 text-sm leading-relaxed text-on-surface-variant">
            Sign in with the admin credentials to review the latest client requests.
          </p>
          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="mb-2 block text-sm font-semibold text-on-surface">Username</label>
              <input
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                className="w-full rounded-2xl border border-outline-variant/50 bg-surface px-4 py-3 outline-none ring-0"
                placeholder="Write your username"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-on-surface">Password</label>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full rounded-2xl border border-outline-variant/50 bg-surface px-4 py-3 outline-none ring-0"
                placeholder="Write your password"
              />
            </div>
            {error ? <p className="text-sm text-destructive">{error}</p> : null}
            <button
  type="submit"
  disabled={isLoggingIn}
  className="flex w-full items-center justify-center gap-3 rounded-2xl bg-primary px-4 py-3 font-semibold text-surface-container-lowest transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
>
  {isLoggingIn ? (
    <>
      <svg
        className="h-5 w-5 animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />

        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.37 0 0 5.37 0 12h4z"
        />
      </svg>

      Signing in...
    </>
  ) : (
    "Sign in"
  )}
</button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-surface px-6 py-16 text-on-surface">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <div className="rounded-3xl border border-outline-variant/40 bg-surface-container-low p-8 shadow-xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.35em] text-secondary">Protected dashboard</p>
              <h1 className="font-headline text-3xl font-bold text-primary">Client requests</h1>
              <p className="mt-2 text-sm text-on-surface-variant">Showing the latest contacts in pages of 10.</p>
            </div>
<div className="flex items-center gap-4">
  <div className="text-sm text-on-surface-variant">
    {summary}
  </div>

  <button
    onClick={handleLogout}
    className="rounded-2xl bg-red-600 px-4 py-2 text-sm font-semibold text-white"
  >
    Logout
  </button>
</div>          </div>
        </div>

        {error ? <div className="rounded-2xl border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive">{error}</div> : null}

        <div className="overflow-hidden rounded-3xl border border-outline-variant/40 bg-surface-container-low shadow-xl">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-surface-container-high text-left text-xs uppercase tracking-[0.24em] text-secondary">
                <tr>
                <th className="px-4 py-3">Client</th>
                <th className="px-4 py-3">Contact</th>
                <th className="px-4 py-3">Project</th>
                <th className="px-4 py-3">Budget</th>
                <th className="px-4 py-3">Timeline</th>
                <th className="px-4 py-3">Action</th>
                </tr>
                </thead>
              <tbody>
                {contacts.length === 0 && !loading ? (
                  <tr>
                    <td colSpan={6} className="px-4 py-10 text-center text-on-surface-variant">
                      No contacts found.
                    </td>
                  </tr>
                ) : (
                  contacts.map((contact, index) => (
                        <tr
                        key={contact.id ?? `${contact.email}-${index}`}
                        className="border-t border-outline-variant/20"
                        >

                        <td className="px-4 py-3">
                        <div className="font-semibold text-on-surface">
                            {contact.full_name || "—"}
                        </div>

                        <div className="text-xs text-on-surface-variant">
                            {contact.address || "No address"}
                        </div>
                        </td>


                        <td className="px-4 py-3">
                        <div>
                            {contact.phone || "—"}
                        </div>

                        <div className="text-xs text-on-surface-variant">
                            {contact.email || "—"}
                        </div>
                        </td>


                        <td className="px-4 py-3">

                        <div>
                        {contact.property_type || "—"}
                        </div>

                        <div className="text-xs text-on-surface-variant">
                        {
                        Array.isArray(contact.areas)
                        ? contact.areas.join(", ")
                        : contact.areas || "—"
                        }
                        </div>

                        </td>


                        <td className="px-4 py-3">
                        {contact.budget || "—"}
                        </td>


                        <td className="px-4 py-3">
                        {contact.timeline || "—"}
                        </td>


                        <td className="px-4 py-3">

                        <button
                        onClick={() => setSelectedContact(contact)}
                        className="rounded-xl bg-primary px-3 py-2 text-xs font-semibold text-white"
                        >
                        View
                        </button>

                        </td>


                        </tr>
                    ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-on-surface-variant">{loading ? "Loading contacts..." : null}</div>
          <button
            disabled={!canLoadMore || loading}
            onClick={() => void loadContacts(page + 1)}
            className="rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-surface-container-lowest transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Loading..." : hasMore ? "Load more" : "No more contacts"}
          </button>
        </div>
      </div>
            {selectedContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

          <div className="w-full max-w-xl rounded-3xl bg-surface-container-low p-8 shadow-xl px-4">

            <div className="mb-6 flex justify-between">

              <h2 className="font-headline text-2xl font-bold text-primary">
  Contact details
</h2>

              <button
  onClick={() => setSelectedContact(null)}
  className="rounded-xl px-3 py-2 text-on-surface-variant transition hover:bg-surface-container-high"
>
  ✕
</button>

            </div>


            <div className="space-y-4">

              <Info
                label="Name"
                value={selectedContact.full_name}
              />

              <Info
                label="Phone"
                value={selectedContact.phone}
              />

              <Info
                label="Email"
                value={selectedContact.email}
              />

              <Info
                label="Address"
                value={selectedContact.address}
              />

              <Info
                label="Areas"
                value={
                  Array.isArray(selectedContact.areas)
                    ? selectedContact.areas.join(", ")
                    : selectedContact.areas
                }
              />

              <Info
                label="Property type"
                value={selectedContact.property_type}
              />

              <Info
                label="Budget"
                value={selectedContact.budget}
              />

              <Info
                label="Timeline"
                value={selectedContact.timeline}
              />

              <Info
                label="Referral"
                value={selectedContact.referral}
              />


              <div>
                <p className="text-xs uppercase text-gray-500">
                  Description
                </p>

                <p>
                  {selectedContact.description || "—"}
                </p>
              </div>


              <Info
                label="Created"
                value={
                  selectedContact.created_at
                    ? new Date(
                        selectedContact.created_at
                      ).toLocaleString()
                    : undefined
                }
              />

            </div>

          </div>

        </div>
      )}
    </main>
  );
}
