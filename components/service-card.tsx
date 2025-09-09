import { cn } from "@/utils/lib";
import { CometCard } from "@/components/ui/comet-card";

export default function ServiceCard({
    icon,
    title,
    subtitle,
    className,
    iconStyle,
}: {
    icon: string;
    title: string;
    subtitle: string;
    className?: string;
    iconStyle?: string;
}) {
    return (
        <CometCard className={className}>
            <button
                type="button"
                className="my-10 flex w-80 cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 saturate-0 md:my-20 md:p-4 hover:saturate-100 transition-all duration-300"
                aria-label={`View ${title}`}
                style={{
                    transformStyle: "preserve-3d",
                    transform: "none",
                    opacity: 1,
                }}
            >
                <div className="mx-2 flex-1">
                    <div className="relative mt-2 aspect-[3/4] w-full">
                        <img
                            loading="lazy"
                            className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-75 hover:contrast-100 transition-all duration-300"
                            alt={title}
                            src={icon}
                            style={{
                                boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                                opacity: 1,
                            }}
                        />
                    </div>
                </div>
                <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-white">
                    <div className="text-xs">{title}</div>
                    <div className="text-xs text-gray-300 opacity-50">{subtitle}</div>
                </div>
            </button>
        </CometCard>
    );
}
