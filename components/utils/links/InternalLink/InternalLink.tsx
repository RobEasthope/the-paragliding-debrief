import Link from 'next/link';
import {
  InternalLinkProp,
  InternalLinkWithTitleProp,
} from 'settings/types/links';

export type InternalLinkProps = {
  link: InternalLinkWithTitleProp | InternalLinkProp;
  className?: string;
  children: unknown;
  onClick?: VoidFunction;
};

export const InternalLink = ({
  link,
  onClick,
  children,
  className,
}: InternalLinkProps) => (
  <Link
    href={
      link?.to?.slug?.current === 'root' ? '/' : `/${link?.to?.slug?.current}`
    }
  >
    <a
      className={className}
      onClick={onClick}
      onKeyDown={onClick}
      role="link"
      tabIndex={0}
    >
      {children}
    </a>
  </Link>
);
