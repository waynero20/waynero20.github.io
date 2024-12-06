import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "lucide-react";
import React from "react";
import AnimatedDiv from "./animated/animated-div";

interface CommonCardProps {
	logoUrl: string;
	altText: string;
	title: string;
	subtitle?: string;
	href?: string;
	badges?: readonly string[];
	period: string;
	description?: string;
}

export const CommonCard = ({
	logoUrl,
	altText,
	title,
	subtitle,
	href,
	badges,
	period,
	description,
}: CommonCardProps) => {
	const [isExpanded, setIsExpanded] = React.useState(false);

	const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
		e.preventDefault();
		if (description) {
			setIsExpanded(!isExpanded);
		} else {
			if (href) {
				window.open(href, "_blank");
			}
		}
	};

	const handleTitleClick = (e: React.MouseEvent<HTMLHeadingElement>) => {
		e.preventDefault();
		if (href) {
			window.open(href, "_blank");
		}
	};

	return (
		<Card
			className="flex p-4 bg-white shadow-sm rounded-lg hover:shadow-lg transition-shadow cursor-pointer"
			onClick={handleCardClick}
		>
			<div className="flex-none w-16 h-16">
				<Avatar className="w-full h-full rounded-full overflow-hidden">
					<AvatarImage
						src={logoUrl}
						alt={altText}
						className="object-contain"
					/>
					<AvatarFallback>{altText[0]}</AvatarFallback>
				</Avatar>
			</div>

			<div className="flex-grow ml-4">
				<div className="flex justify-between items-center">
					<AnimatedDiv animationType="Bubble" onClick={() => handleTitleClick} className="cursor-pointer">
						<h3 className="font-semibold text-lg text-gray-800">{title}</h3>
					</AnimatedDiv>
					<div className="text-xs text-gray-500">{period}</div>
				</div>

				{subtitle && <div className="text-sm text-gray-600">{subtitle}</div>}

				<div className="mt-2">
					{badges && badges.length > 0 && (
						<div className="flex gap-2">
							{badges.map((badge, index) => (
								<Badge key={index} variant="secondary" className="text-xs">
									{badge}
								</Badge>
							))}
						</div>
					)}
				</div>

				<div className="flex justify-between items-center mt-2">
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{
							opacity: isExpanded ? 1 : 0,
							height: isExpanded ? "auto" : 0,
						}}
						transition={{
							duration: 0.7,
							ease: [0.16, 1, 0.3, 1],
						}}
					>
						{description}
					</motion.div>

					{description &&
						<div
							className={cn(
								"transition-transform duration-300",
								isExpanded ? "rotate-180" : "rotate-0"
							)}
						>
							<ChevronDownIcon className="w-4 h-4 text-gray-500" />
						</div>}
				</div>
			</div>
		</Card>
	);
};
