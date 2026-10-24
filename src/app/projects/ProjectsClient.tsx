'use client';

import { Suspense, useState, type MouseEvent } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2, Share2 } from 'lucide-react';
import Appbar from '@/app/components/screens/Appbar';
import Footer from '@/app/components/Footer';
import DonationPopup from '@/app/urgent/DonationPopup';
import {
  sectorProjectLabels,
  sectorProjectsData,
  type SectorProject,
} from '@/app/data/sectorProjectsData';

function formatK(amount: number): string {
  if (amount >= 10000000) return `${(amount / 10000000).toFixed(1)}Cr`;
  if (amount >= 1000) return `${Math.round(amount / 1000)}K`;
  return `${amount}`;
}

function ProjectsContent() {
  const searchParams = useSearchParams();
  const requestedSection = (searchParams.get('section') || 'air').toLowerCase();
  const currentSection = Object.prototype.hasOwnProperty.call(
    sectorProjectLabels,
    requestedSection,
  )
    ? requestedSection
    : 'air';
  const [selectedCampaign, setSelectedCampaign] = useState<SectorProject | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const projects = sectorProjectsData[currentSection] ?? [];

  const showToast = (message: string) => {
    setToastMessage(message);
    window.setTimeout(() => setToastMessage(null), 3200);
  };

  const handleShare = async (event: MouseEvent, item: SectorProject) => {
    event.stopPropagation();
    const shareUrl = window.location.href;
    const shareData = {
      title: item.title,
      text: `Support this initiative: ${item.title}`,
      url: shareUrl,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (error) {
        if (error instanceof Error && error.name === 'AbortError') return;
      }
    }

    try {
      await navigator.clipboard.writeText(shareUrl);
      showToast('Campaign link copied to clipboard!');
    } catch {
      showToast('Unable to share this campaign from this browser.');
    }
  };

  return (
    <div className="min-h-screen bg-[#f2f1f9] pt-[72px] sm:pt-[76px] text-slate-800">
      <Appbar />
      <main className="mx-auto w-full max-w-[1440px] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-8 text-center sm:mb-10">
          <h1 className="px-2 text-center text-3xl font-bold tracking-tight text-indigo-900 sm:text-4xl">
            {sectorProjectLabels[currentSection]} Projects
          </h1>
          <div className="mx-auto mt-2 h-1 w-20 rounded-full bg-[#E87B35]" />
        </div>

        <div
          id="our-projects-grid"
          className="grid grid-cols-1 justify-items-center gap-6 scroll-mt-24 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {projects.map((item) => {
            const progressPercent = Math.min(
              100,
              Math.round((item.raisedAmount / item.goalAmount) * 100),
            );

            return (
              <div
                key={item.id}
                className="group relative h-[410px] w-full max-w-[310px] flex-shrink-0 select-none overflow-hidden rounded-2xl border border-slate-200/40 bg-slate-900 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="relative h-full w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/10" />

                  <div className="pointer-events-none absolute left-0 right-0 top-0 z-10 flex items-start justify-between">
                    {item.isVerified && (
                      <span className="rounded-br-xl bg-[#16836A] px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-white shadow">
                        VERIFIED
                      </span>
                    )}
                    {item.isUrgent && (
                      <span className="ml-auto rounded-bl-xl bg-[#DC2626] px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-white shadow">
                        URGENT
                      </span>
                    )}
                  </div>

                  <button
                    onClick={(event) => void handleShare(event, item)}
                    aria-label={`Share ${item.title}`}
                    title="Share campaign"
                    className="absolute right-3.5 top-[52px] z-10 rounded-full bg-white/75 p-2 text-slate-700 shadow-md backdrop-blur-md transition-all hover:bg-white hover:text-black"
                  >
                    <Share2 size={18} />
                  </button>

                  <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-end bg-gradient-to-t from-black/95 via-black/85 to-transparent p-5">
                    <h2 className="mb-3 line-clamp-2 text-base font-bold leading-snug text-white drop-shadow-md transition-colors group-hover:text-amber-200">
                      {item.title}
                    </h2>

                    <div className="mb-2.5">
                      <div className="mb-1.5 flex justify-between text-xs font-bold">
                        <span className="text-white">
                          ₹{formatK(item.raisedAmount)} Raised
                        </span>
                        <span className="text-slate-200">
                          Goal: ₹{formatK(item.goalAmount)}
                        </span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-gray-700/80">
                        <div
                          className="h-full rounded-full bg-[#E87B35] transition-all duration-500 ease-out"
                          style={{ width: `${progressPercent}%` }}
                        />
                      </div>
                    </div>

                    <div className="mb-3.5 flex items-center justify-between text-xs font-semibold text-slate-200">
                      <span>{item.supporters} Supporters</span>
                      <span>{item.daysLeft} days left</span>
                    </div>

                    <button
                      onClick={() => setSelectedCampaign(item)}
                      className="w-full rounded-full bg-[#E87B35] py-3 text-sm font-extrabold uppercase tracking-wider text-white shadow-md transition-all duration-200 hover:bg-[#FB923C] hover:shadow-orange-500/25 active:scale-[0.98]"
                    >
                      DONATE NOW
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <Footer hideFloatingDonate />

      {toastMessage && (
        <div
          role="status"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-white shadow-2xl"
        >
          <CheckCircle2 size={18} className="text-emerald-400" />
          <span className="text-sm font-semibold">{toastMessage}</span>
        </div>
      )}

      {selectedCampaign && (
        <DonationPopup
          isOpen
          onClose={() => setSelectedCampaign(null)}
          onDonate={() => {
            setSelectedCampaign(null);
            showToast('Donation processing is not connected yet.');
          }}
        />
      )}
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <Suspense fallback={null}>
      <ProjectsContent />
    </Suspense>
  );
}
