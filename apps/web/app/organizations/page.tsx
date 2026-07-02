"use client";

import { FormEvent, useEffect, useState } from "react";

interface Organization {
  id: string;
  name: string;
  slug: string;
  industry: string | null;
  country: string | null;
  timezone: string | null;
  logo_url: string | null;
}

export default function OrganizationsPage() {
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [industry, setIndustry] = useState("");
  const [country, setCountry] = useState("");
  const [timezone, setTimezone] = useState("");
  const [message, setMessage] = useState("");

  const loadOrganizations = async () => {
    const response = await fetch("http://localhost:8000/organizations");
    const data = await response.json();
    setOrganizations(data);
  };

  useEffect(() => {
    loadOrganizations();
  }, []);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const response = await fetch("http://localhost:8000/organizations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, slug, industry, country, timezone }),
    });
    if (response.ok) {
      setMessage("Organization created");
      setName("");
      setSlug("");
      setIndustry("");
      setCountry("");
      setTimezone("");
      await loadOrganizations();
    } else {
      const data = await response.json();
      setMessage(data.detail || "Unable to create organization");
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <div className="mx-auto max-w-4xl space-y-8">
        <header>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Organizations</p>
          <h1 className="mt-2 text-3xl font-semibold">Create and list organizations</h1>
        </header>

        <form onSubmit={handleSubmit} className="space-y-4 rounded-lg border border-slate-800 bg-slate-900 p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm">Name</span>
              <input required value={name} onChange={(event) => setName(event.target.value)} className="w-full rounded border border-slate-700 bg-slate-950 px-3 py-2" />
            </label>
            <label className="space-y-2">
              <span className="text-sm">Slug</span>
              <input required value={slug} onChange={(event) => setSlug(event.target.value)} className="w-full rounded border border-slate-700 bg-slate-950 px-3 py-2" />
            </label>
            <label className="space-y-2">
              <span className="text-sm">Industry</span>
              <input value={industry} onChange={(event) => setIndustry(event.target.value)} className="w-full rounded border border-slate-700 bg-slate-950 px-3 py-2" />
            </label>
            <label className="space-y-2">
              <span className="text-sm">Country</span>
              <input value={country} onChange={(event) => setCountry(event.target.value)} className="w-full rounded border border-slate-700 bg-slate-950 px-3 py-2" />
            </label>
            <label className="space-y-2 md:col-span-2">
              <span className="text-sm">Timezone</span>
              <input value={timezone} onChange={(event) => setTimezone(event.target.value)} className="w-full rounded border border-slate-700 bg-slate-950 px-3 py-2" />
            </label>
          </div>
          <button type="submit" className="rounded bg-cyan-600 px-4 py-2 font-medium text-white">Create Organization</button>
          {message ? <p className="text-sm text-cyan-400">{message}</p> : null}
        </form>

        <section className="rounded-lg border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-semibold">Organizations</h2>
          <ul className="mt-4 space-y-3">
            {organizations.map((organization) => (
              <li key={organization.id} className="rounded border border-slate-800 p-3">
                <p className="font-medium">{organization.name}</p>
                <p className="text-sm text-slate-400">/{organization.slug}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
