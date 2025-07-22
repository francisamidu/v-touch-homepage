"use client";

import type React from "react";
import { AlertTriangle, WifiOff, FileWarning } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type ErrorType = "file-upload" | "network" | "file-too-large" | "generic";

interface ActionButton {
  text: string;
  onClick: () => void;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  className?: string;
}

interface SomethingWentWrongProps {
  errorType?: ErrorType;
  title?: string;
  message?: string;
  icon?: React.ReactNode;
  primaryAction?: ActionButton;
  secondaryAction?: ActionButton;
  className?: string;
}

const errorDetailsMap: Record<
  Exclude<ErrorType, "generic">,
  {
    defaultIcon: React.ReactNode;
    defaultTitle: string;
    defaultMessage?: string;
  }
> = {
  "file-upload": {
    defaultIcon: <FileWarning className="h-8 w-8 text-red-500" />,
    defaultTitle: "File Upload Failed",
    defaultMessage: "Something went wrong while uploading your file.",
  },
  network: {
    defaultIcon: <WifiOff className="h-8 w-8 text-red-500" />,
    defaultTitle: "Network Error",
    defaultMessage: "Please check your internet connection or try again.",
  },
  "file-too-large": {
    defaultIcon: <AlertTriangle className="h-8 w-8 text-red-500" />,
    defaultTitle: "Oops! File Too Large",
    defaultMessage:
      "The file exceeds the size limit. Please select a smaller file to continue.",
  },
};

export function SomethingWentWrong({
  errorType = "generic",
  title,
  message,
  icon,
  primaryAction,
  secondaryAction,
  className,
}: SomethingWentWrongProps) {
  const details = errorType !== "generic" ? errorDetailsMap[errorType] : null;

  const displayIcon = icon || details?.defaultIcon || (
    <AlertTriangle className="h-8 w-8 text-red-500" />
  );
  const displayTitle = title || details?.defaultTitle || "Something Went Wrong";
  const displayMessage =
    message ||
    details?.defaultMessage ||
    "An unexpected error occurred. Please try again.";

  return (
    <div className={cn("flex items-center justify-center p-4", className)}>
      <Card className="w-full max-w-sm shadow-lg">
        <CardHeader className=" flex flex-col items-center text-center">
          <div className="mb-4">{displayIcon}</div>
          <CardTitle className="text-xl font-semibold w-full text-red-500">
            {displayTitle}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center text-sm text-gray-600">
          <p>{displayMessage}</p>
        </CardContent>
        <CardFooter
          className={cn(
            "flex pt-6",
            secondaryAction ? "justify-between" : "justify-center"
          )}
        >
          {secondaryAction && (
            <Button
              variant="ghost"
              onClick={secondaryAction.onClick}
              className={cn("text-gray-700", secondaryAction.className)}
            >
              {secondaryAction.text}
            </Button>
          )}
          {primaryAction && (
            <Button
              onClick={primaryAction.onClick}
              variant={primaryAction.variant || "default"}
              className={cn(
                "bg-red-100 text-red-700 hover:bg-red-200",
                !secondaryAction && "w-full",
                primaryAction.className
              )}
            >
              {primaryAction.text}
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
