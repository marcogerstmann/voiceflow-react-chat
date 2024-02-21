export enum MessageType {
  TEXT = 'text',
  IMAGE = 'image',
  CARD = 'card',
  CAROUSEL = 'carousel',
  END = 'END',

  // Custom message types
  CUSTOM_IMAGE = 'custom_image',
  CUSTOM_PDF = 'custom_pdf',
}

export const DEFAULT_MESSAGE_DELAY = 1000;
