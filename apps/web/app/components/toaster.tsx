'use client';

import { ToastProvider } from '@radix-ui/react-toast';
import * as ToastPrimitives from '@radix-ui/react-toast';
import * as React from 'react';
import { cva } from 'class-variance-authority';
import { AlertCircle, AlertTriangle, CheckCircle, Info, X } from 'react-feather';
import { AnimatePresence, motion } from 'framer-motion';
import { useToast } from './use-toast';

export const toastVariants = cva(
  [
    'p-2',
    'drop-shadow-sm',
    'flex',
    'gap-2',
    'rounded-xl',
    'ring-1',
    'text-white',
    'items-center',
    'w-full',
    'justify-between',
  ],
  {
    variants: {
      intent: {
        success: ['ring-emerald-400', 'bg-emerald-600'],
        error: ['ring-red-200', 'bg-red-600'],
        warning: ['ring-orange-200', 'bg-orange-600'],
        info: ['ring-blue-200', 'bg-blue-500'],
      },
    },
    defaultVariants: {
      intent: 'info',
    },
  }
);

const anim_variants = {
  start: {
    opacity: 0,
    skewY: 0,
    y: 10,
    x: '0%',
  },
  enter: {
    opacity: 1,
    skewY: 0,
    y: 0,
    x: '0%',
  },
  leave: {
    opacity: 0,
    skewY: 5,
    y: 0,
    x: '100%',
  },
};

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider duration={3000}>
      <AnimatePresence>
        {toasts.map(({ intent, id, icon, title, description, action, actionAlt, ...props }) => {
          if (!props.open) return null;

          const Icon =
            icon ??
            (intent === 'success'
              ? CheckCircle
              : intent === 'error'
              ? AlertCircle
              : intent === 'warning'
              ? AlertTriangle
              : Info);

          return (
            <ToastPrimitives.Root key={id} {...props} asChild>
              <motion.li
                initial="start"
                animate="enter"
                exit="leave"
                variants={anim_variants}
                className={toastVariants({ intent })}
                transition={{
                  duration: 0.5,
                }}
              >
                <Icon className="text-inherit" height="20" width="20" strokeWidth="1.5px" />
                <div className="flex flex-grow flex-col justify-center gap-1">
                  <ToastPrimitives.Title className="text-sm font-medium">
                    {title}
                  </ToastPrimitives.Title>
                  {description && (
                    <ToastPrimitives.Description className="text-xs">
                      {description}
                    </ToastPrimitives.Description>
                  )}
                </div>
                {action && (
                  <ToastPrimitives.Action asChild altText={actionAlt ?? 'action'}>
                    {action}
                  </ToastPrimitives.Action>
                )}
                <ToastPrimitives.Close>
                  <X className="text-inherit" height="20" width="20" />
                </ToastPrimitives.Close>
              </motion.li>
            </ToastPrimitives.Root>
          );
        })}
      </AnimatePresence>
      <ToastPrimitives.Viewport className="fixed bottom-0 right-0 z-[2147483647] m-0 flex min-w-[18rem] max-w-[100vw] list-none flex-col gap-3 p-6 outline-none" />
    </ToastProvider>
  );
}
