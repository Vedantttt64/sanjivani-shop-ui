export type MascotPose =
  | 'wave'
  | 'point'
  | 'cheer'
  | 'think'
  | 'sad'
  | 'deliver'
  | 'basket';

export interface MascotPlacement {
  id: string;
  pose: MascotPose;
  size: number;
  anchor: string;
  desktopOnly?: boolean;
  line?: string;
}

export const MASCOT_PLACEMENTS: Record<string, MascotPlacement> = {
  hero: {
    id: 'hero',
    pose: 'point',
    size: 220,
    anchor: 'hero-bottom-right',
    line: 'Grab 25% off today',
  },
  categoryHeading: {
    id: 'categoryHeading',
    pose: 'wave',
    size: 56,
    anchor: 'category-heading',
    desktopOnly: true,
    line: 'Fresh from farms!',
  },
  chatBotAvatar: {
    id: 'chatBotAvatar',
    pose: 'wave',
    size: 40,
    anchor: 'chatbot-avatar',
  },
  chatBotGreeting: {
    id: 'chatBotGreeting',
    pose: 'wave',
    size: 48,
    anchor: 'chatbot-greeting',
    line: 'Namaste! How can I help?',
  },
  chatBotTyping: {
    id: 'chatBotTyping',
    pose: 'think',
    size: 48,
    anchor: 'chatbot-typing',
  },
  chatBotError: {
    id: 'chatBotError',
    pose: 'sad',
    size: 48,
    anchor: 'chatbot-error',
  },
  searchEmpty: {
    id: 'searchEmpty',
    pose: 'think',
    size: 96,
    anchor: 'search-empty',
    line: 'Nothing found. Try another crop.',
  },
  cartDrawerHeader: {
    id: 'cartDrawerHeader',
    pose: 'basket',
    size: 56,
    anchor: 'cart-header',
  },
  cartDrawerEmpty: {
    id: 'cartDrawerEmpty',
    pose: 'sad',
    size: 140,
    anchor: 'cart-empty',
    line: 'Your basket is hungry!',
  },
  freeDeliveryRide: {
    id: 'freeDeliveryRide',
    pose: 'deliver',
    size: 40,
    anchor: 'free-delivery-stepper',
  },
  freeDeliveryUnlocked: {
    id: 'freeDeliveryUnlocked',
    pose: 'cheer',
    size: 40,
    anchor: 'free-delivery-unlocked',
    line: 'Free delivery unlocked!',
  },
  addedPopupBasket: {
    id: 'addedPopupBasket',
    pose: 'basket',
    size: 56,
    anchor: 'added-popup-basket',
  },
  addedPopupCheer: {
    id: 'addedPopupCheer',
    pose: 'cheer',
    size: 56,
    anchor: 'added-popup-cheer',
  },
  couponApplied: {
    id: 'couponApplied',
    pose: 'cheer',
    size: 48,
    anchor: 'coupon-toast',
    line: 'Discount applied!',
  },
  orderSuccess: {
    id: 'orderSuccess',
    pose: 'cheer',
    size: 200,
    anchor: 'order-success-hero',
    line: 'Farmer harvest underway!',
  },
  orderTrackingHarvest: {
    id: 'orderTrackingHarvest',
    pose: 'wave',
    size: 48,
    anchor: 'tracking-harvest',
  },
  orderTrackingQC: {
    id: 'orderTrackingQC',
    pose: 'think',
    size: 48,
    anchor: 'tracking-qc',
  },
  orderTrackingTransit: {
    id: 'orderTrackingTransit',
    pose: 'deliver',
    size: 48,
    anchor: 'tracking-transit',
  },
  orderTrackingDelivered: {
    id: 'orderTrackingDelivered',
    pose: 'cheer',
    size: 48,
    anchor: 'tracking-delivered',
  },
  error404: {
    id: 'error404',
    pose: 'sad',
    size: 200,
    anchor: '404-hero',
    line: 'Page lost in the fields!',
  },
  outOfStock: {
    id: 'outOfStock',
    pose: 'sad',
    size: 48,
    anchor: 'out-of-stock',
    line: 'Back soon',
  },
  loadingSkeleton: {
    id: 'loadingSkeleton',
    pose: 'think',
    size: 64,
    anchor: 'loading-indicator',
  },
  communityQr: {
    id: 'communityQr',
    pose: 'wave',
    size: 140,
    anchor: 'community-qr-bottom-left',
    line: 'Join our farmer community!',
  },
  landingMap: {
    id: 'landingMap',
    pose: 'wave',
    size: 140,
    anchor: 'landing-map-hero',
    line: 'Pick your state',
  },
};
