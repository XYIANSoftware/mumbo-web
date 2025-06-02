import { Metadata } from 'next';

interface PageMetaConfig {
  title: string;
  description?: string;
  keywords?: string[];
  image?: string;
}

export const usePageMeta = ({
  title,
  description = 'Experience the fusion of EDM and playful vibes with DJ Mumbo',
  keywords = ['DJ Mumbo', 'EDM', 'Electronic Dance Music', 'DJ Events'],
  image = '/images/og-image.jpg',
}: PageMetaConfig): Metadata => {
  const fullTitle = `${title} | DJ Mumbo`;
  
  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    openGraph: {
      title: fullTitle,
      description,
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
  };
}; 