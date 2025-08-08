// components/ui/toast.tsx
import * as React from "react"
import {
  Toast as RadixToast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  type ToastProps as RadixToastProps
} from "@radix-ui/react-toast"


const Toast = RadixToast

// 👇 Add these types if you are managing custom toasts
export type ToastProps = RadixToastProps & {
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

export type ToastActionElement = React.ReactElement

export {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
}
