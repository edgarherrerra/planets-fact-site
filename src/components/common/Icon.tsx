export interface FontIconProps {
  icon: string | undefined;
  size?: number | undefined;
}

export const Icon = ({ icon, size }: FontIconProps) => {
  return <i className={`${icon}`} style={{ fontSize: size }} />;
};
