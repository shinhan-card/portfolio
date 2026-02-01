import { CarouselImage } from "@/components/ui/ImageCarousel";

// Visual content (images, diagrams) for projects
export const projectVisuals: Record<string, {
  carousel?: CarouselImage[];
  externalLink?: string;
  iframe?: {
    url: string;
    title: string;
    height?: string;
  };
  iframes?: {
    url: string;
    title: string;
    height?: string;
  }[];
}> = {
  "open-banking-account-payment": {
    iframes: [
      {
        url: "https://www.shinhancard.com/pconts/pLay/pLay02.html",
        title: "오픈뱅킹 이용하기 (계좌 등록) - 신한카드 공식 가이드",
        height: "650px",
      },
      {
        url: "https://www.shinhancard.com/pconts/pLay/pLay09.html",
        title: "계좌로 송금하기 - 신한카드 공식 가이드",
        height: "700px",
      },
    ],
    externalLink: "https://www.shinhancard.com/pconts/pLay/pLay02.html",
  },
  "account-payment-launch": {
    iframe: {
      url: "https://www.shinhancard.com/pconts/pLay/pLay03.html",
      title: "계좌로 결제하기 - 신한카드 공식 가이드",
      height: "700px",
    },
    externalLink: "https://www.shinhancard.com/pconts/pLay/pLay03.html",
  },
};
