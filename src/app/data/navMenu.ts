export interface NavItem {
  id: string;
  label: string;
  categoryKey?: string;
  subKey?: string;
  href?: string;
  badge?: 'new' | 'deals';
}

export type NavLinkItem = NavItem;

export const NAV_ITEMS: NavItem[] = [
  {
    id: 'deals',
    label: "Today's Deals",
    categoryKey: 'fresh-vegetables',
    subKey: 'top-deals',
    badge: 'deals',
  },
  {
    id: 'fruits',
    label: 'Fruits',
    categoryKey: 'fresh-fruits',
  },
  {
    id: 'vegetables',
    label: 'Vegetables',
    categoryKey: 'fresh-vegetables',
  },
  {
    id: 'grains',
    label: 'Grains & Atta',
    categoryKey: 'atta-rice-grains',
  },
  {
    id: 'dals',
    label: 'Dals & Pulses',
    categoryKey: 'dal-pulses',
  },
  {
    id: 'dairy',
    label: 'Dairy & Eggs',
    categoryKey: 'milk-dairy',
  },
  {
    id: 'oils',
    label: 'Oils & Ghee',
    categoryKey: 'oil-ghee',
  },
  {
    id: 'spices',
    label: 'Spices',
    categoryKey: 'masala-spices',
  },
  {
    id: 'state-specials',
    label: 'State Specials',
    href: '/#state-map',
  },
  {
    id: 'seasonal',
    label: 'Seasonal',
    categoryKey: 'fresh-fruits',
  },
  {
    id: 'subscribe',
    label: 'Subscribe & Save',
    categoryKey: 'milk-dairy',
  },
  {
    id: 'bulk',
    label: 'Bulk & Business',
    href: '/#bulk-inquiry',
  },
  {
    id: 'farmer-stories',
    label: 'Farmer Stories',
    href: '/#farmer-trust',
  },
  {
    id: 'order-again',
    label: 'Order Again',
    categoryKey: 'fresh-vegetables',
  },
];
