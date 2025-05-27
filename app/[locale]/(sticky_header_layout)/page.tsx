import { useTranslations } from "next-intl";

export default function Home() {
  const tr = useTranslations('HomePage');
  return <h1>{tr('title')}</h1>;
}
