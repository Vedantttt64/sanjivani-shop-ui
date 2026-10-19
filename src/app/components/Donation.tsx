'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Share2 } from 'lucide-react';
import DonationPopup from '@/app/urgent/DonationPopup';
import { campaigns as sharedCampaigns } from '@/app/data/campaigns';

// Derive card data from the shared campaigns source for consistency
const campaigns = sharedCampaigns.map((c) => ({
  id: c.id,
  title: c.title,
  image: c.image,
  raised: c.raisedAmount,
  goal: c.goalAmount,
  daysLeft: c.daysLeft,
  donors: c.supporters,
  isUrgent: c.urgency === 'Urgent',
  isVerified: c.verified,
}));

export default function DonationPage() {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showDonationPopup, setShowDonationPopup] = useState(false);
  const [activeCampaign, setActiveCampaign] = useState<any>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const firstChild = container.firstElementChild as HTMLElement;
      if (firstChild) {
        const cardWidth = firstChild.getBoundingClientRect().width;
        const style = window.getComputedStyle(container);
        const gap = parseFloat(style.columnGap || style.gap || '0') || 24;
        const scrollAmount = cardWidth + gap;
        container.scrollBy({
          left: direction === 'left' ? -scrollAmount : scrollAmount,
          behavior: 'smooth',
        });
      }
    }
  };

  const handleDonateClick = (campaign: any) => {
    setActiveCampaign(campaign);
    setShowDonationPopup(true);
  };

  const handleDonate = (amount: number, isMonthly: boolean) => {
    console.log('Donation amount:', amount, 'Monthly:', isMonthly);
    setShowDonationPopup(false);
  };

  useEffect(() => {
    document.documentElement.style.height = 'auto';
    document.body.style.height = 'auto';
  }, []);

  return (
    <div className="flex flex-col bg-[#f2f1f9] pt-0 pb-6 md:pt-0 md:pb-6">
      <div className="w-full">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-indigo-800 mb-8 px-4 md:px-10">
          Our Projects
        </h2>

        <div className="relative">
          <button
            onClick={() => scroll('left')}
            aria-label="Scroll campaigns left"
            title="Scroll campaigns left"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 hover:bg-gray-100"
          >
            <ChevronLeft size={24} className="text-black" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 px-4 scroll-smooth overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-pl-4 scroll-pr-4"
          >
            {campaigns.map((item) => {
              // NGO_APP style campaign card for all campaigns
              const progressPercent = Math.round((item.raised / item.goal) * 100);
              return (
                <div
                  key={item.id}
                  className="relative h-[400px] w-[calc(100vw-32px)] sm:w-[300px] flex-shrink-0 overflow-hidden rounded-2xl shadow-lg cursor-pointer group snap-center"
                  onClick={() => router.push(`/donation/${item.id}`)}
                >
                  {/* Image */}
                  <div className="relative w-full h-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                    {/* Badges */}
                    <div className="absolute top-0 left-0 right-0 flex justify-between items-start z-10">
                      {item.isVerified && (
                        <span className="bg-[#16836A] text-white font-extrabold text-[11px] px-4 py-2 rounded-br-xl shadow uppercase tracking-wider">
                          VERIFIED
                        </span>
                      )}
                      {item.isUrgent && (
                        <span className="bg-[#DC2626] text-white font-extrabold text-[11px] px-4 py-2 rounded-bl-xl shadow uppercase tracking-wider">
                          URGENT
                        </span>
                      )}
                    </div>

                    {/* Share button — stops propagation so card click doesn't also trigger */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (navigator.share) {
                          navigator.share({
                            title: item.title,
                            text: `Help support ${item.title}`,
                            url: window.location.href,
                          });
                        } else {
                          navigator.clipboard.writeText(window.location.href);
                          alert('Link copied to clipboard!');
                        }
                      }}
                      aria-label="Share campaign"
                      title="Share campaign"
                      className="absolute right-4 top-[62px] z-10 rounded-full bg-white/70 backdrop-blur-sm shadow-sm p-2 transition hover:bg-white/90"
                    >
                      <Share2 size={18} className="text-slate-700" />
                    </button>

                    {/* Content overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 to-transparent">
                      <h3 className="text-base font-bold text-white mb-3 leading-tight line-clamp-2">{item.title}</h3>

                      {/* Progress */}
                      <div className="mb-3">
                        <div className="flex justify-between text-xs mb-1">
                          <span className="font-semibold text-white">₹{(item.raised / 1000).toFixed(0)}K Raised</span>
                          <span className="font-semibold text-white">Goal: ₹{(item.goal / 1000).toFixed(0)}K</span>
                        </div>
                        <progress
                          className="h-2 w-full overflow-hidden rounded-full [&::-webkit-progress-bar]:bg-gray-700 [&::-webkit-progress-value]:bg-[#E87B35] [&::-moz-progress-bar]:bg-[#E87B35]"
                          value={progressPercent}
                          max={100}
                        />
                      </div>

                      <div className="flex items-center justify-between text-xs text-gray-300 mb-3 font-semibold">
                        <span>{item.donors} Supporters</span>
                        <span>{item.daysLeft} days left</span>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          router.push(`/donation/${item.id}`);
                        }}
                        className="w-full bg-[#FEF08A] hover:bg-[#FDE047] active:bg-[#FACC15] text-slate-900 font-extrabold py-3 rounded-full transition-all shadow-md hover:shadow-lg"
                      >
                        DONATE NOW
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={() => scroll('right')}
            aria-label="Scroll campaigns right"
            title="Scroll campaigns right"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 hover:bg-gray-100"
          >
            <ChevronRight size={24} className="text-black" />
          </button>
        </div>
      </div>

      {/* Donation Popup */}
      <DonationPopup
        isOpen={showDonationPopup}
        onClose={() => setShowDonationPopup(false)}
        onDonate={handleDonate}
      />
    </div>
  );
}
