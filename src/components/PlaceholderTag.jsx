import { useI18n } from '../i18n/index.jsx';

/** Visible marker for content that still needs real data. */
export default function PlaceholderTag({ children }) {
  const { t } = useI18n();
  return <span className="ph-tag" title="Replace with real data before publishing">{children ?? t('common.placeholder')}</span>;
}
