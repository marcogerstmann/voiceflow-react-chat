import { Trace, TraceDeclaration } from '@voiceflow/sdk-runtime';

import { MessageType } from '@/components/SystemResponse/constants';

import { RuntimeMessage } from './messages';

export const CUSTOM_MESSAGE_TRACES: TraceDeclaration<RuntimeMessage, any>[] = [
  {
    canHandle: ({ type }) => type === 'custom_image',
    handle: ({ context }, trace: Trace.AnyTrace) => {
      context.messages.push({
        type: MessageType.CUSTOM_IMAGE,
        payload: trace.payload,
      });
      return context;
    },
  },
  {
    canHandle: ({ type }) => type === 'custom_pdf',
    handle: ({ context }, trace: Trace.AnyTrace) => {
      context.messages.push({
        type: MessageType.CUSTOM_PDF,
        payload: trace.payload,
      });
      return context;
    },
  },
];
